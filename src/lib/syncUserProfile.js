import { supabase } from "../lib/supabaseClient";

export async function syncUserProfile(session) {
  if (!session) return;

  const user = session.user;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  // If profile doesn't exist -> create it
  if (!profile) {
    await supabase.from("profiles").insert({
      id: user.id,
      email: user.email,
      display_name: user.user_metadata.full_name,
      avatar_url: user.user_metadata.avatar_url,
      preferences: {},
    });
  }
}
