-- Extend problems table with summary + tags

alter table public.problems
add column if not exists summary text,
add column if not exists tags text[] default '{}'::text[];
