import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

import { PageHeader } from "../components/layout/Pageheader";
import { PageSection } from "../components/layout/PageSection";
import { Grid } from "../components/layout/Grid";
import { PatternCard } from "../components/Cards/PatternCard";

export default function Patterns() {
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch patterns from Supabase
  useEffect(() => {
    async function loadPatterns() {
      setLoading(true);

      const { data, error } = await supabase
        .from("patterns")
        .select("id, title, description, status, solved_count, total_problems");

      if (!error) {
        setPatterns(data);
      }

      setLoading(false);
    }

    loadPatterns();
  }, []);

  if (loading) {
    return (
      <PageSection>
        <PageHeader title="Patterns" />
        <p className="text-text-muted">Loading…</p>
      </PageSection>
    );
  }

  return (
    <PageSection>
      <PageHeader
        title="Patterns"
        description="Master the 14 core DSA patterns with curated problems and structured intuition training."
      />

      <Grid cols={3}>
        {patterns.map((pattern) => (
          <PatternCard
            key={pattern.id}
            id={pattern.id}
            title={pattern.title}
            description={pattern.description}
            status={pattern.status}
            solvedCount={pattern.solved_count || 0}
            totalProblems={pattern.total_problems || 10}
          />
        ))}
      </Grid>
    </PageSection>
  );
}
