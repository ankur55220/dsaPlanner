import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Surface from "@/components/ui/Surface";
import Section from "@/components/ui/section";

export default function AddProblem() {
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    pattern_id: "",
    title: "",
    difficulty: "",
    source: "",
    external_id: "",
    link: "",
  });

  useEffect(() => {
    const fetchPatterns = async () => {
      const { data, error } = await supabase
        .from("patterns")
        .select("*");

      if (error) {
        console.error("Error loading patterns:", error);
        setPatterns([]);
        return;
      }

      setPatterns(data || []);
    };
    fetchPatterns();
  }, []);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (!form.pattern_id || !form.title || !form.difficulty || !form.source) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("problems")
      .insert([
        {
          pattern_id: form.pattern_id,
          title: form.title,
          difficulty: form.difficulty,
          source: form.source,
          external_id: form.external_id || null,
          link: form.link || null,
        },
      ]);

    setLoading(false);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Problem added successfully!");
      setForm({
        pattern_id: "",
        title: "",
        difficulty: "",
        source: "",
        external_id: "",
        link: "",
      });
    }
  };

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <Section title="Add New Problem">
        <Surface className="p-6 space-y-4">

          {/* Pattern selector */}
          <div>
            <label className="block text-slate-300 mb-1">Pattern *</label>
            <select
              value={form.pattern_id}
              onChange={(e) => handleChange("pattern_id", e.target.value)}
              className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-2"
            >
              <option value="">Select Pattern</option>
              {patterns.map((p) => (
                <option value={p.id} key={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-slate-300 mb-1">Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-2"
              placeholder="e.g. Number of Islands"
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-slate-300 mb-1">Difficulty *</label>
            <select
              value={form.difficulty}
              onChange={(e) => handleChange("difficulty", e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2"
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Source */}
          <div>
            <label className="block text-slate-300 mb-1">Source *</label>
            <select
              value={form.source}
              onChange={(e) => handleChange("source", e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2"
            >
              <option value="">Select Source</option>
              <option value="lc">LeetCode</option>
              <option value="cf">Codeforces</option>
              <option value="gfg">GeeksForGeeks</option>
            </select>
          </div>

          {/* External ID */}
          <div>
            <label className="block text-slate-300 mb-1">External ID</label>
            <input
              type="text"
              value={form.external_id}
              onChange={(e) => handleChange("external_id", e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2"
              placeholder="e.g. LC: 200"
            />
          </div>

          {/* Link */}
          <div>
            <label className="block text-slate-300 mb-1">External Link</label>
            <input
              type="text"
              value={form.link}
              onChange={(e) => handleChange("link", e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2"
              placeholder="e.g. https://leetcode.com/problems/number-of-islands/"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-white font-medium w-full mt-4 disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Add Problem"}
          </button>

        </Surface>
      </Section>
    </div>
  );
}
