insert into public.patterns (id, slug, name, category, description, order_index)
values
  (gen_random_uuid(), 'two-pointers', 'Two Pointers', 'Pointers', 'Pointer-based linear-time techniques for arrays and strings.', 15),
  (gen_random_uuid(), 'binary-search-answer', 'Binary Search on Answer', 'Binary Search', 'Binary search on the solution space, often used with greedy or feasibility checks.', 16),
  (gen_random_uuid(), 'dsu', 'Union-Find (DSU)', 'Graph', 'Disjoint-set union structure used for connectivity, cycles, and kruskal-like logic.', 17);
