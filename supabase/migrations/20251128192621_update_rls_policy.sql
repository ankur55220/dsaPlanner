alter table public.problems_solved enable row level security;

-- SELECT
create policy "Users can view their solved problems"
on public.problems_solved
for select
to authenticated
using (user_id = auth.uid());

-- INSERT
create policy "Users can insert their solved problems"
on public.problems_solved
for insert
to authenticated
with check (user_id = auth.uid());

-- DELETE
create policy "Users can delete their solved problems"
on public.problems_solved
for delete
to authenticated
using (user_id = auth.uid());
