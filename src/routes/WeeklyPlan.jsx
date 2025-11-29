import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";

import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";

import { PageSection } from "../components/layout/PageSection";
import { PageHeader } from "../components/layout/Pageheader";
import Surface from "../components/ui/Surface";
import { H2, P, Muted } from "../components/ui/Typography";

const STATUS_OPTIONS = [
  { value: "not_started", label: "Not started" },
  { value: "in_progress", label: "In progress" },
  { value: "done", label: "Done" },
];

function getWeekInfo(date = new Date()) {
  // Simple ISO week number calculation
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return { week: weekNo, year: d.getUTCFullYear() };
}

export default function WeeklyPlan() {
  const { session } = useAuth();
  const user = session?.user;

  const { week: currentWeek, year: currentYear } = useMemo(
    () => getWeekInfo(new Date()),
    []
  );

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [patterns, setPatterns] = useState([]);
  const [recentPlans, setRecentPlans] = useState([]);

  const [form, setForm] = useState({
    pattern_id: "",
    status: "not_started",
    checklistText: "",
    notes: "",
  });

  const [currentPlanId, setCurrentPlanId] = useState(null);

  useEffect(() => {
    if (!user) return;

    async function loadData() {
      setLoading(true);
      setError("");

      try {
        // Load patterns for dropdown
        const { data: patternRows, error: patternError } = await supabase
          .from("patterns")
          .select("id, name")
          .order("name", { ascending: true });

        if (patternError) {
          console.error("Error loading patterns", patternError);
        } else {
          setPatterns(patternRows || []);
        }

        // Load current week's plan
        const { data: planRow, error: planError } = await supabase
          .from("weekly_plans")
          .select("id, pattern_id, status, checklist, notes")
          .eq("user_id", user.id)
          .eq("week_number", currentWeek)
          .eq("year", currentYear)
          .maybeSingle();

        if (planError && planError.code !== "PGRST116") {
          console.error("Error loading weekly plan", planError);
          setError("Failed to load this week's plan.");
        }

        if (planRow) {
          setCurrentPlanId(planRow.id);
          const checklistArray = Array.isArray(planRow.checklist)
            ? planRow.checklist
            : [];
          setForm({
            pattern_id: planRow.pattern_id || "",
            status: planRow.status || "not_started",
            checklistText: checklistArray.join("\n"),
            notes: planRow.notes || "",
          });
        }

        // Load recent plans (including current) - last 6 weeks
        const { data: recentRows, error: recentError } = await supabase
          .from("weekly_plans")
          .select("id, week_number, year, status, pattern_id")
          .eq("user_id", user.id)
          .order("year", { ascending: false })
          .order("week_number", { ascending: false })
          .limit(6);

        if (recentError) {
          console.error("Error loading recent plans", recentError);
        } else {
          setRecentPlans(recentRows || []);
        }
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [user, currentWeek, currentYear]);

  const handleChange = (field, value) => {
    setError("");
    setSuccess("");
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const checklistArray = form.checklistText
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      const payload = {
        user_id: user.id,
        week_number: currentWeek,
        year: currentYear,
        pattern_id: form.pattern_id || null,
        status: form.status,
        checklist: checklistArray,
        notes: form.notes || null,
      };

      if (currentPlanId) {
        const { error: updateError } = await supabase
          .from("weekly_plans")
          .update(payload)
          .eq("id", currentPlanId);

        if (updateError) {
          console.error("Error updating weekly plan", updateError);
          setError("Failed to save this week's plan.");
          return;
        }
      } else {
        const { data: insertedRow, error: insertError } = await supabase
          .from("weekly_plans")
          .insert([payload])
          .select("id")
          .single();

        if (insertError) {
          console.error("Error inserting weekly plan", insertError);
          setError("Failed to save this week's plan.");
          return;
        }

        if (insertedRow?.id) {
          setCurrentPlanId(insertedRow.id);
        }
      }

      setSuccess("Saved this week's plan.");

      // Update recent plans list optimistically
      const updatedRecent = [...recentPlans];
      const idx = updatedRecent.findIndex(
        (r) => r.week_number === currentWeek && r.year === currentYear
      );
      const base = {
        id: currentPlanId || updatedRecent[0]?.id || "temp",
        week_number: currentWeek,
        year: currentYear,
        status: payload.status,
        pattern_id: payload.pattern_id,
      };

      if (idx >= 0) {
        updatedRecent[idx] = base;
      } else {
        updatedRecent.unshift(base);
      }

      setRecentPlans(updatedRecent.slice(0, 6));
    } finally {
      setSaving(false);
    }
  };

  const patternNameById = (id) =>
    patterns.find((p) => p.id === id)?.name || "Unknown";

  const formatWeekLabel = (week, year) => `Week ${week}, ${year}`;

  if (!user) {
    return (
      <PageSection>
        <PageHeader title="Weekly Plan" />
        <P>Please sign in to manage your weekly plan.</P>
      </PageSection>
    );
  }

  return (
    <PageSection>
      <PageHeader
        title="Weekly Plan"
        description="Decide which pattern to focus on this week and keep a lightweight checklist of what you want to accomplish."
      />

      {loading ? (
        <P>Loading weekly plan…</P>
      ) : (
        <div className="space-y-8">
          {/* Current week form */}
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Surface>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <H2 className="text-xl text-slate-100">This week</H2>
                  <Muted>{formatWeekLabel(currentWeek, currentYear)}</Muted>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSave}>
                {/* Pattern */}
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Focus pattern
                  </label>
                  <select
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={form.pattern_id}
                    onChange={(e) => handleChange("pattern_id", e.target.value)}
                  >
                    <option value="">Choose a pattern…</option>
                    {patterns.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status & notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">
                      Status
                    </label>
                    <select
                      className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={form.status}
                      onChange={(e) => handleChange("status", e.target.value)}
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">
                      Notes
                    </label>
                    <textarea
                      className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]"
                      value={form.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      placeholder="Any overarching goal or theme for this week."
                    />
                  </div>
                </div>

                {/* Checklist */}
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Checklist (one item per line)
                  </label>
                  <textarea
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]"
                    value={form.checklistText}
                    onChange={(e) => handleChange("checklistText", e.target.value)}
                    placeholder={
                      "e.g.\n• Watch pattern overview\n• Solve 5 easy problems\n• Review notes from last week"
                    }
                  />
                </div>

                {/* Messages */}
                {error && <p className="text-sm text-red-400">{error}</p>}
                {success && (
                  <p className="text-sm text-emerald-400">{success}</p>
                )}

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-medium"
                >
                  {saving ? "Saving…" : "Save this week's plan"}
                </button>
              </form>
            </Surface>
          </Motion.div>

          {/* Recent weeks */}
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <Surface>
              <div className="flex items-center justify-between mb-4">
                <H2 className="text-lg text-slate-100">Recent weeks</H2>
              </div>

              {recentPlans.length === 0 ? (
                <Muted>
                  Once you save a weekly plan, your recent weeks will appear here.
                </Muted>
              ) : (
                <div className="space-y-3">
                  {recentPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-slate-700/60 last:border-b-0 pb-2"
                    >
                      <div>
                        <p className="text-sm text-slate-200">
                          {formatWeekLabel(plan.week_number, plan.year)}
                        </p>
                        <Muted>
                          {plan.pattern_id
                            ? patternNameById(plan.pattern_id)
                            : "No pattern set"}
                        </Muted>
                      </div>

                      <div className="text-sm text-slate-300 flex flex-col items-start md:items-end gap-1">
                        {plan.status && (
                          <span className="text-slate-400">
                            Status: {plan.status.replace("_", " ")}
                          </span>
                        )}
                      </div>
                    </div>
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
