import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import Surface from "@/components/ui/Surface";
import { H2, P, Muted } from "@/components/ui/Typography";
import { markSolved, unmarkSolved } from "@/lib/SolveActions";
import { CheckCircle2, Circle, ArrowLeft } from "lucide-react";

export default function ProblemDetail() {
  const { problemId } = useParams();
  const { session } = useAuth();
  const user = session?.user;

  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const [notes, setNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesMessage, setNotesMessage] = useState("");

  useEffect(() => {
    const loadProblem = async () => {
      setLoading(true);
      try {
        // Load problem details
        const { data: problemRow, error: problemError } = await supabase
          .from("problems")
          .select("*")
          .eq("id", problemId)
          .single();

        if (problemError) {
          setError(problemError);
          return;
        }

        setProblem(problemRow);

        // Load solved state for this user/problem
        if (user) {
          const { data: solvedRow, error: solvedError } = await supabase
            .from("problems_solved")
            .select("problem_id")
            .eq("user_id", user.id)
            .eq("problem_id", problemRow.id)
            .maybeSingle();

          if (!solvedError && solvedRow) {
            setIsSolved(true);
          } else {
            setIsSolved(false);
          }

          // Load existing per-problem notes for this user
          const { data: progressRow, error: progressError } = await supabase
            .from("user_problem_progress")
            .select("notes")
            .eq("user_id", user.id)
            .eq("problem_id", problemRow.id)
            .maybeSingle();

          if (!progressError && progressRow && progressRow.notes) {
            setNotes(progressRow.notes);
          } else {
            setNotes("");
          }
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (problemId) {
      loadProblem();
    }
  }, [problemId, user]);

  const handleToggleSolved = async () => {
    if (!user || !problem) return;

    if (isSolved) {
      await unmarkSolved(problem.id, user);
      setIsSolved(false);
    } else {
      await markSolved(problem.id, user);
      setIsSolved(true);
    }
  };

  const handleSaveNotes = async () => {
    if (!user || !problem) return;

    setSavingNotes(true);
    setNotesMessage("");

    try {
      const { error: upsertError } = await supabase
        .from("user_problem_progress")
        .upsert(
          {
            user_id: user.id,
            problem_id: problem.id,
            notes: notes || null,
          },
          { onConflict: "user_id,problem_id" }
        );

      if (upsertError) {
        console.error("Error saving notes", upsertError);
        setNotesMessage("Could not save notes. Please try again.");
      } else {
        setNotesMessage("Notes saved.");
      }
    } catch (err) {
      console.error("Unexpected error saving notes", err);
      setNotesMessage("Could not save notes. Please try again.");
    } finally {
      setSavingNotes(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-white">Loading problem...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-400">
        Error loading problem. Check console for details.
      </div>
    );
  }

  if (!problem) {
    return <div className="p-6 text-white">Problem not found.</div>;
  }

  const difficulty = problem.difficulty || "Unknown";
  const tags = Array.isArray(problem.tags) ? problem.tags : [];

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link
        to={problem.pattern_id ? `/patterns/${problem.pattern_id}` : "/patterns"}
        className="inline-flex items-center text-sm text-slate-300 hover:text-white mb-2"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to pattern
      </Link>

      <Surface className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <H2 className="text-slate-100">{problem.title}</H2>

            {/* Meta: difficulty, source */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span
                className={
                  "px-2 py-1 rounded-md text-xs font-medium " +
                  (difficulty === "Easy"
                    ? "bg-green-100 text-green-700"
                    : difficulty === "Medium"
                    ? "bg-amber-100 text-amber-700"
                    : difficulty === "Hard"
                    ? "bg-red-100 text-red-700"
                    : "bg-slate-200 text-slate-700")
                }
              >
                {difficulty}
              </span>

              {problem.source && (
                <span className="text-xs text-slate-300">
                  Source: <span className="font-medium">{problem.source}</span>
                </span>
              )}

              {problem.link && (
                <a
                  href={problem.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-indigo-300 hover:text-indigo-200 underline"
                >
                  Open problem
                </a>
              )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-slate-200 text-slate-600 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Solved toggle */}
          <button
            type="button"
            onClick={handleToggleSolved}
            className={
              "inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition " +
              (isSolved
                ? "bg-emerald-500/10 border-emerald-500 text-emerald-300 hover:bg-emerald-500/20"
                : "bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700")
            }
          >
            {isSolved ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <Circle className="w-4 h-4" />
            )}
            {isSolved ? "Marked as solved" : "Mark as solved"}
          </button>
        </div>

        {/* Summary / explanation */}
        {problem.summary && (
          <div className="mt-2">
            <P>{problem.summary}</P>
          </div>
        )}

        {!problem.summary && (
          <Muted>No summary has been added for this problem yet.</Muted>
        )}

        {/* Per-problem notes */}
        <div className="pt-4 mt-4 border-t border-slate-700/60 space-y-2">
          <label className="text-sm font-medium text-slate-200">
            What I learned / mistakes
          </label>
          <textarea
            className="w-full min-h-[120px] rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 resize-vertical"
            placeholder="Write down key takeaways, mistakes, and things to revisit..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
            <button
              type="button"
              onClick={handleSaveNotes}
              disabled={savingNotes}
              className="px-3 py-1.5 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed text-xs"
            >
              {savingNotes ? "Saving..." : "Save notes"}
            </button>
            {notesMessage && <span>{notesMessage}</span>}
          </div>
        </div>
      </Surface>

      {/* Future: we can add notes / explanation sections here */}
    </div>
  );
}
