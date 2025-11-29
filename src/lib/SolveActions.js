import { supabase } from "@/lib/supabaseClient";

export async function markSolved(problem_id, user) {
  console.log("got user", user);

  if (!user) return;

  const { error } = await supabase
    .from("problems_solved")
    .insert([
      {
        user_id: user.id,
        problem_id,
      },
    ]);

  if (error) console.log(error);
}

export async function unmarkSolved(problem_id, user) {
  if (!user) return;

  const { error } = await supabase
    .from("problems_solved")
    .delete()
    .eq("user_id", user.id)
    .eq("problem_id", problem_id);

  if (error) console.log(error);
}
