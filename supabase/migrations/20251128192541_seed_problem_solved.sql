create table public.problems_solved (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null references auth.users(id) on delete cascade,
  problem_id uuid not null references public.problems(id) on delete cascade,

  solved_at timestamptz default now(),
  notes text,

  unique (user_id, problem_id)
);
