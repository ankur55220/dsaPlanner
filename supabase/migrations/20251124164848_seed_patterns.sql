-- Seed DSA Patterns

-- eardvM1Fc7OBfQmt
insert into public.patterns 
  (slug, name, category, description, order_index, status, solved_count, total_problems)
values
  ('bfs-dfs', 'BFS / DFS', 'Graph', 'Fundamental graph traversal used everywhere.', 1, 'not-started', 0, 10),
  ('dijkstra-01bfs', 'Dijkstra / 0–1 BFS', 'Graph', 'Shortest path algorithms for weighted graphs.', 2, 'not-started', 0, 10),
  ('toposort-dagdp', 'Topological Sort + DAG DP', 'Graph / DP', 'DP over DAGs & ordering-based problems.', 3, 'not-started', 0, 10),
  ('subsequence-dp', 'Subsequence DP', 'DP', 'LCS, LIS, LPS, edit distance, matching.', 4, 'not-started', 0, 10),
  ('knapsack-state-dp', 'Knapsack / State DP', 'DP', 'Subset sums, knapsack families, partitions.', 5, 'not-started', 0, 10),
  ('grid-dp', 'Grid DP', 'DP', 'Paths, obstacle grids, min-cost paths.', 6, 'not-started', 0, 10),
  ('sliding-window', 'Sliding Window', 'Array / String', 'Variable/fixed windows on sequences.', 7, 'not-started', 0, 10),
  ('string-matching', 'String Matching', 'String', 'KMP, Z, hashing, search.', 8, 'not-started', 0, 10),
  ('greedy', 'Greedy Algorithms', 'General', 'Local choice→global optimum patterns.', 9, 'not-started', 0, 10),
  ('monotonic', 'Monotonic Stack / Queue', 'Array / Stack', 'Histogram, ranges, next greater problems.', 10, 'not-started', 0, 10),
  ('trees', 'Trees + Tree DP', 'Tree', 'Subtree DP, rerooting, LCA.', 11, 'not-started', 0, 10),
  ('backtracking', 'Backtracking / Permutations', 'Recursion', 'Generate subsets, combos, perms.', 12, 'not-started', 0, 10),
  ('tries', 'Tries / Automata', 'String', 'Prefix trees, AC automata.', 13, 'not-started', 0, 10),
  ('bitmask-dp', 'Bitmask DP', 'DP', 'DP over subsets, combinatorics.', 14, 'not-started', 0, 10);
