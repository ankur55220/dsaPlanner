import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import PatternHeader from "@/components/pattern/PatternHeader";
import ProblemList from "@/components/pattern/ProblemList";
import FilterBar from "@/components/pattern/FilterBar";
import { useAuth } from "@/context/AuthContext";
import { markSolved, unmarkSolved } from "@/lib/SolveActions";

export default function PatternDetail() {
  const { slug } = useParams();
  const [pattern, setPattern] = useState(null);
  const { session } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [problems, setproblems] = useState([]);
  const [filters, setFilters] = useState({
    difficulty: null,
    source: null,
    search: "",
  });

  const [solved, setSolved] = useState(new Set());
  const user = session?.user; // or your session hook

  const filteredProblems = problems.filter((p) => {
    if (filters.difficulty && p.difficulty !== filters.difficulty) return false;
    if (filters.source && p.source !== filters.source) return false;

    if (
      filters.search &&
      !p.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;

    return true;
  });

  useEffect(() => {
    const loadPattern = async () => {
      console.log("loadPattern: start");
      setLoading(true);

      try {
        const { data: patternRows, error } = await supabase
          .from("patterns")
          .select("*")
          .eq("slug", slug);

        if (error) {
          console.error("❌ Error loading pattern:", error);
          setError(error);
          return; // stop here if pattern failed
        }

        const patternData = Array.isArray(patternRows)
          ? patternRows[0]
          : patternRows;

        if (!patternData) {
          setPattern(null);
          return;
        }

        setPattern(patternData);

        const { data: problemData, error: problemsError } = await supabase
          .from("problems")
          .select("*")
          .eq("pattern_id", patternData.id);

        if (problemsError) {
          console.error("❌ Error loading problems:", problemsError);
          // optional: setError(problemsError);
        } else {
          const safeProblems = problemData || [];
          setproblems(safeProblems);

          if (user && safeProblems.length > 0) {
            const problemIds = safeProblems.map((p) => p.id);

            const { data: solvedRows, error: solvedError } = await supabase
              .from("problems_solved")
              .select("problem_id")
              .eq("user_id", user.id)
              .in("problem_id", problemIds);

            if (solvedError) {
              console.error("❌ Error loading solved problems:", solvedError);
            } else if (Array.isArray(solvedRows)) {
              setSolved(new Set(solvedRows.map((r) => r.problem_id)));
            }
          }
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPattern();
  }, [slug, user]);

  if (loading) return <div className="p-6 text-white">Loading pattern...</div>;
  if (error)
    return (
      <div
        onClick={() => {
          console.log(error);
        }}
        className="p-6 text-red-400"
      >
        Error loading pattern
      </div>
    );
  if (!pattern) return <div className="p-6 text-white">Pattern not found</div>;

  const handleSolve = async (id) => {

    console.log("clicked",id)
  await markSolved(id,user);
  setSolved(new Set([...solved, id])); // UI updates instantly
};

const handleUnsolve = async (id) => {
  await unmarkSolved(id,user
    
  );
  const cloned = new Set(solved);
  cloned.delete(id);
  setSolved(cloned);
};


  return (
    <div className="p-6 space-y-6 text-white">
      <PatternHeader pattern={pattern} />
      <FilterBar filters={filters} onChange={setFilters} />

      <ProblemList problems={filteredProblems} solved={solved} handleSolve={handleSolve} handleUnsolve={handleUnsolve} />
    </div>
  );
}
