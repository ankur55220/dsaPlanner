import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";

import { PageSection } from "../components/layout/PageSection";
import { PageHeader } from "../components/layout/Pageheader";
import Surface from "../components/ui/Surface";
import { H2, P, Muted } from "../components/ui/Typography";

function getWeekInfo(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return { week: weekNo, year: d.getUTCFullYear() };
}

export default function Dashboard() {
  const { session } = useAuth();
  const user = session?.user;

  const navigate = useNavigate();

  const today = useMemo(() => new Date(), []);
  const todayDateStr = today.toISOString().slice(0, 10);
  const { week: currentWeek, year: currentYear } = useMemo(
    () => getWeekInfo(today),
    [today]
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [todayLog, setTodayLog] = useState(null);
  const [weeklyPlan, setWeeklyPlan] = useState(null);
  const [solvedCount, setSolvedCount] = useState(null);
  const [journey, setJourney] = useState({
    totalDays: null,
    streakDays: null,
    totalMinutes: null,
  });
  const [patternProgress, setPatternProgress] = useState(null);

  useEffect(() => {
    if (!user) return;

    async function loadDashboard() {
      setLoading(true);
      setError("");

      try {
        // Today’s log
        const { data: logRow, error: logError } = await supabase
          .from("daily_logs")
          .select("pattern_id, time_spent_minutes, confidence")
          .eq("user_id", user.id)
          .eq("log_date", todayDateStr)
          .maybeSingle();

        if (logError && logError.code !== "PGRST116") {
          console.error("Error loading daily log for dashboard", logError);
        } else {
          setTodayLog(logRow || null);
        }

        // This week’s plan
        const { data: planRow, error: planError } = await supabase
          .from("weekly_plans")
          .select("pattern_id, status, notes")
          .eq("user_id", user.id)
          .eq("week_number", currentWeek)
          .eq("year", currentYear)
          .maybeSingle();

        if (planError && planError.code !== "PGRST116") {
          console.error("Error loading weekly plan for dashboard", planError);
        } else {
          setWeeklyPlan(planRow || null);
        }

        // Solved problems count
        const { count, error: solvedError } = await supabase
          .from("problems_solved")
          .select("id", { count: "exact", head: true })
          .eq("user_id", user.id);

        if (solvedError) {
          console.error("Error loading solved problems count", solvedError);
        } else {
          setSolvedCount(typeof count === "number" ? count : 0);
        }

        // Journey metrics from all daily logs
        const { data: allLogs, error: logsError } = await supabase
          .from("daily_logs")
          .select("log_date, time_spent_minutes")
          .eq("user_id", user.id)
          .order("log_date", { ascending: true });

        if (logsError) {
          console.error("Error loading journey logs", logsError);
        } else if (allLogs && allLogs.length > 0) {
          const uniqueDays = new Set(allLogs.map((l) => l.log_date));
          const totalDays = uniqueDays.size;

          const totalMinutes = allLogs.reduce(
            (sum, l) => sum + (l.time_spent_minutes || 0),
            0
          );

          // Current streak: consecutive days up to today with any log
          let streak = 0;
          const daySet = uniqueDays;
          const d = new Date(todayDateStr);
          // Work on a copy so we don't mutate today
          let cursor = new Date(d.getTime());
          while (true) {
            const key = cursor.toISOString().slice(0, 10);
            if (!daySet.has(key)) break;
            streak += 1;
            cursor.setDate(cursor.getDate() - 1);
          }

          setJourney({
            totalDays,
            streakDays: streak,
            totalMinutes,
          });
        } else {
          setJourney({ totalDays: 0, streakDays: 0, totalMinutes: 0 });
        }

        // Pattern progress overview
        const { data: solvedRows, error: solvedListError } = await supabase
          .from("problems_solved")
          .select("problem_id")
          .eq("user_id", user.id);

        if (solvedListError) {
          console.error("Error loading solved problems list", solvedListError);
          setPatternProgress([]);
        } else if (solvedRows && solvedRows.length > 0) {
          const problemIds = solvedRows.map((r) => r.problem_id);

          const { data: problemRows, error: problemsError } = await supabase
            .from("problems")
            .select("id, pattern_id")
            .in("id", problemIds);

          if (problemsError) {
            console.error("Error loading problems for pattern progress", problemsError);
            setPatternProgress([]);
          } else if (problemRows && problemRows.length > 0) {
            const countsByPattern = new Map();
            for (const p of problemRows) {
              if (!p.pattern_id) continue;
              const prev = countsByPattern.get(p.pattern_id) || 0;
              countsByPattern.set(p.pattern_id, prev + 1);
            }

            const patternIds = Array.from(countsByPattern.keys());

            if (patternIds.length === 0) {
              setPatternProgress([]);
            } else {
              const { data: patternRows, error: patternsError } = await supabase
                .from("patterns")
                .select("id, name, total_problems")
                .in("id", patternIds);

              if (patternsError) {
                console.error("Error loading patterns for progress", patternsError);
                setPatternProgress([]);
              } else {
                const byId = new Map((patternRows || []).map((p) => [p.id, p]));
                const progressList = patternIds
                  .map((id) => {
                    const meta = byId.get(id);
                    if (!meta) return null;
                    const solved = countsByPattern.get(id) || 0;
                    const total = meta.total_problems || 0;
                    const percent = total > 0 ? Math.round((solved / total) * 100) : 0;
                    return {
                      id,
                      name: meta.name,
                      solved,
                      total,
                      percent,
                    };
                  })
                  .filter(Boolean)
                  .sort((a, b) => b.solved - a.solved)
                  .slice(0, 4);

                setPatternProgress(progressList);
              }
            }
          } else {
            setPatternProgress([]);
          }
        } else {
          setPatternProgress([]);
        }
      } catch (e) {
        console.error("Error loading dashboard", e);
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, [user, todayDateStr, currentWeek, currentYear]);

  if (!user) {
    return (
      <PageSection>
        <PageHeader title="Dashboard" />
        <P>Please sign in to view your dashboard.</P>
      </PageSection>
    );
  }

  const displayName =
    session?.user?.user_metadata?.full_name || session?.user?.email || "there";

  return (
    <PageSection>
      <PageHeader
        title="Dashboard"
        description={`Welcome back, ${displayName}. Here’s a quick snapshot of your progress.`}
      />

      {loading ? (
        <P>Loading dashboard…</P>
      ) : (
        <div className="space-y-6">
          {error && <p className="text-sm text-red-400">{error}</p>}

          {/* Today’s log summary */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Surface
              className="cursor-pointer hover:border-indigo-500/40 transition-colors"
              onClick={() => navigate("/daily-log")}
            >
              <H2 className="text-lg text-slate-100 mb-1">Today&apos;s practice</H2>
              <Muted>{todayDateStr}</Muted>

              {todayLog ? (
                <div className="mt-3 text-sm text-slate-200 space-y-1">
                  {todayLog.time_spent_minutes != null && (
                    <p>Time spent: {todayLog.time_spent_minutes} min</p>
                  )}
                  {todayLog.confidence && (
                    <p>Confidence: {todayLog.confidence}</p>
                  )}
                  {!todayLog.time_spent_minutes && !todayLog.confidence && (
                    <p className="text-slate-400">
                      You have a log for today, but no details filled yet.
                    </p>
                  )}
                </div>
              ) : (
                <P className="mt-3 text-sm text-slate-400">
                  You haven&apos;t logged today yet. Head to the Daily Log page to
                  capture what you practice.
                </P>
              )}
            </Surface>
          </Motion.div>

          {/* Weekly plan summary */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
          >
            <Surface
              className="cursor-pointer hover:border-indigo-500/40 transition-colors"
              onClick={() => navigate("/weekly-plan")}
            >
              <H2 className="text-lg text-slate-100 mb-1">This week&apos;s plan</H2>
              <Muted>{`Week ${currentWeek}, ${currentYear}`}</Muted>

              {weeklyPlan ? (
                <div className="mt-3 text-sm text-slate-200 space-y-1">
                  <p>Status: {weeklyPlan.status?.replace("_", " ")}</p>
                  {weeklyPlan.notes && (
                    <p className="text-slate-300 line-clamp-2">
                      {weeklyPlan.notes}
                    </p>
                  )}
                </div>
              ) : (
                <P className="mt-3 text-sm text-slate-400">
                  You haven&apos;t created a plan for this week yet. Visit the
                  Weekly Plan page to choose a focus pattern and checklist.
                </P>
              )}
            </Surface>
          </Motion.div>

          {/* Journey summary */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            <Surface>
              <H2 className="text-lg text-slate-100 mb-1">Your journey</H2>
              {journey.totalDays == null ? (
                <P className="text-sm text-slate-400 mt-2">
                  Loading journey metrics…
                </P>
              ) : journey.totalDays === 0 ? (
                <P className="text-sm text-slate-400 mt-2">
                  Once you start logging practice, you&apos;ll see streaks and
                  totals here.
                </P>
              ) : (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <Muted className="mb-1 block">Current streak</Muted>
                    <p className="text-slate-200 text-lg font-semibold">
                      {journey.streakDays} day{journey.streakDays === 1 ? "" : "s"}
                    </p>
                  </div>
                  <div>
                    <Muted className="mb-1 block">Days logged</Muted>
                    <p className="text-slate-200 text-lg font-semibold">
                      {journey.totalDays}
                    </p>
                  </div>
                  <div>
                    <Muted className="mb-1 block">Total minutes</Muted>
                    <p className="text-slate-200 text-lg font-semibold">
                      {journey.totalMinutes}
                    </p>
                  </div>
                </div>
              )}
            </Surface>
          </Motion.div>

          {/* Solved problems summary */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.15 }}
          >
            <Surface>
              <H2 className="text-lg text-slate-100 mb-1">Solved problems</H2>
              {solvedCount == null ? (
                <P className="text-sm text-slate-400 mt-2">
                  Loading solved problems…
                </P>
              ) : solvedCount === 0 ? (
                <P className="text-sm text-slate-400 mt-2">
                  You haven&apos;t marked any problems as solved yet. Open a
                  pattern, start solving, and mark problems as solved.
                </P>
              ) : (
                <P className="text-sm text-slate-200 mt-2">
                  You have solved <span className="font-semibold">{solvedCount}</span>{" "}
                  problems so far.
                </P>
              )}
            </Surface>
          </Motion.div>

          {/* Pattern progress */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            <Surface>
              <H2 className="text-lg text-slate-100 mb-1">Pattern progress</H2>
              {patternProgress === null ? (
                <P className="text-sm text-slate-400 mt-2">
                  Loading pattern progress…
                </P>
              ) : patternProgress.length === 0 ? (
                <P className="text-sm text-slate-400 mt-2">
                  Once you solve problems, you&apos;ll see per-pattern progress
                  here.
                </P>
              ) : (
                <div className="mt-3 space-y-2">
                  {patternProgress.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => navigate(`/patterns/${p.id}`)}
                      className="w-full text-left px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/70 hover:border-indigo-500/60 transition-colors flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="text-sm text-slate-100 font-medium">
                          {p.name}
                        </p>
                        <Muted className="text-xs">
                          {p.solved} / {p.total || "?"} solved
                        </Muted>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-400 rounded-full"
                            style={{ width: `${p.percent}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-300">
                          {p.percent}%
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </Surface>
          </Motion.div>
        </div>
      )}
    </PageSection>
  );
}
