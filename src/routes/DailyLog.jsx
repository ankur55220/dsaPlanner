import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";

import { PageSection } from "../components/layout/PageSection";
import { PageHeader } from "../components/layout/Pageheader";
import Surface from "../components/ui/Surface";
import { H2, P, Muted } from "../components/ui/Typography";

const CONFIDENCE_OPTIONS = ["Low", "Medium", "High"]; // maps to text column

export default function DailyLog() {
  const { session } = useAuth();
  const user = session?.user;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [patterns, setPatterns] = useState([]);
  const [recentLogs, setRecentLogs] = useState([]);

  const [form, setForm] = useState({
    pattern_id: "",
    time_spent_minutes: "",
    confidence: "",
    mistakes: "",
    notes: "",
  });

  const [todayLogId, setTodayLogId] = useState(null);

  const today = new Date();
  const todayDateStr = today.toISOString().slice(0, 10); // YYYY-MM-DD

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

        // Load today's log (if any)
        const { data: todayRows, error: todayError } = await supabase
          .from("daily_logs")
          .select("id, pattern_id, time_spent_minutes, confidence, mistakes, notes")
          .eq("user_id", user.id)
          .eq("log_date", todayDateStr)
          .maybeSingle();

        if (todayError && todayError.code !== "PGRST116") {
          // PGRST116 = no rows found for maybeSingle
          console.error("Error loading today's log", todayError);
          setError("Failed to load today's log.");
        }

        if (todayRows) {
          setTodayLogId(todayRows.id);
          setForm({
            pattern_id: todayRows.pattern_id || "",
            time_spent_minutes: todayRows.time_spent_minutes?.toString() || "",
            confidence: todayRows.confidence || "",
            mistakes: todayRows.mistakes || "",
            notes: todayRows.notes || "",
          });
        }

        // Load recent logs list (last 7 days)
        const { data: recentRows, error: recentError } = await supabase
          .from("daily_logs")
          .select("id, log_date, time_spent_minutes, confidence, notes, pattern_id")
          .eq("user_id", user.id)
          .order("log_date", { ascending: false })
          .limit(7);

        if (recentError) {
          console.error("Error loading recent logs", recentError);
        } else {
          setRecentLogs(recentRows || []);
        }
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [user, todayDateStr]);

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
      const payload = {
        user_id: user.id,
        log_date: todayDateStr,
        pattern_id: form.pattern_id || null,
        time_spent_minutes: form.time_spent_minutes
          ? Number(form.time_spent_minutes)
          : null,
        confidence: form.confidence || null,
        mistakes: form.mistakes || null,
        notes: form.notes || null,
      };

      if (todayLogId) {
        const { error: updateError } = await supabase
          .from("daily_logs")
          .update(payload)
          .eq("id", todayLogId);

        if (updateError) {
          console.error("Error updating daily log", updateError);
          setError("Failed to save today's log.");
          return;
        }
      } else {
        const { data: insertedRows, error: insertError } = await supabase
          .from("daily_logs")
          .insert([payload])
          .select("id")
          .single();

        if (insertError) {
          console.error("Error inserting daily log", insertError);
          setError("Failed to save today's log.");
          return;
        }

        if (insertedRows?.id) {
          setTodayLogId(insertedRows.id);
        }
      }

      setSuccess("Saved today's log.");

      // Optimistically prepend/update today in recent logs list
      const updatedRecent = [...recentLogs];
      const idx = updatedRecent.findIndex((r) => r.log_date === todayDateStr);
      const base = {
        id: todayLogId || updatedRecent[0]?.id || "temp",
        log_date: todayDateStr,
        pattern_id: payload.pattern_id,
        time_spent_minutes: payload.time_spent_minutes,
        confidence: payload.confidence,
        notes: payload.notes,
      };

      if (idx >= 0) {
        updatedRecent[idx] = base;
      } else {
        updatedRecent.unshift(base);
      }

      setRecentLogs(updatedRecent.slice(0, 7));
    } finally {
      setSaving(false);
    }
  };

  const patternNameById = (id) =>
    patterns.find((p) => p.id === id)?.name || "Unknown";

  if (!user) {
    return (
      <PageSection>
        <PageHeader title="Daily Log" />
        <P>Please sign in to manage your daily log.</P>
      </PageSection>
    );
  }

  return (
    <PageSection>
      <PageHeader
        title="Daily Log"
        description="Capture what you practiced today so you can track consistency and improvement over time."
      />

      {loading ? (
        <P>Loading daily log…</P>
      ) : (
        <div className="space-y-8">
          {/* Today form */}
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Surface>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <H2 className="text-xl text-slate-100">Today&apos;s log</H2>
                  <Muted>{todayDateStr}</Muted>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSave}>
                {/* Pattern */}
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Focus pattern (optional)
                  </label>
                  <select
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={form.pattern_id}
                    onChange={(e) => handleChange("pattern_id", e.target.value)}
                  >
                    <option value="">No specific pattern</option>
                    {patterns.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time spent */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">
                      Time spent (minutes)
                    </label>
                    <input
                      type="number"
                      min="0"
                      className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={form.time_spent_minutes}
                      onChange={(e) => handleChange("time_spent_minutes", e.target.value)}
                      placeholder="e.g. 60"
                    />
                  </div>

                  {/* Confidence */}
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">
                      Confidence
                    </label>
                    <select
                      className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={form.confidence}
                      onChange={(e) => handleChange("confidence", e.target.value)}
                    >
                      <option value="">Select…</option>
                      {CONFIDENCE_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mistakes */}
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Mistakes or confusions
                  </label>
                  <textarea
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]"
                    value={form.mistakes}
                    onChange={(e) => handleChange("mistakes", e.target.value)}
                    placeholder="Where did you get stuck? What patterns felt weak?"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Notes
                  </label>
                  <textarea
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]"
                    value={form.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    placeholder="Any other thoughts, insights, or next steps."
                  />
                </div>

                {/* Messages */}
                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}
                {success && (
                  <p className="text-sm text-emerald-400">{success}</p>
                )}

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-medium"
                >
                  {saving ? "Saving…" : "Save today's log"}
                </button>
              </form>
            </Surface>
          </Motion.div>

          {/* Recent logs */}
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <Surface>
              <div className="flex items-center justify-between mb-4">
                <H2 className="text-lg text-slate-100">Recent logs</H2>
              </div>

              {recentLogs.length === 0 ? (
                <Muted>No logs yet. Once you save today, your history will appear here.</Muted>
              ) : (
                <div className="space-y-3">
                  {recentLogs.map((log) => (
                    <div
                      key={log.id}
                      className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-slate-700/60 last:border-b-0 pb-2"
                    >
                      <div>
                        <p className="text-sm text-slate-200">
                          {log.log_date}
                        </p>
                        <Muted>
                          {log.pattern_id
                            ? patternNameById(log.pattern_id)
                            : "No specific pattern"}
                        </Muted>
                      </div>

                      <div className="text-sm text-slate-300 flex flex-col items-start md:items-end gap-1">
                        {log.time_spent_minutes != null && (
                          <span>{log.time_spent_minutes} min</span>
                        )}
                        {log.confidence && (
                          <span className="text-slate-400">
                            Confidence: {log.confidence}
                          </span>
                        )}
                        {log.notes && (
                          <span className="text-slate-500 line-clamp-1">
                            {log.notes}
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
