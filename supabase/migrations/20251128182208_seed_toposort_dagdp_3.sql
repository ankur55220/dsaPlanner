-- Seed Topological Sort + DAG DP Problems
-- Pattern ID: e170d1d2-7ae8-4c28-9816-9a0ecf6192a0

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Course Schedule II (Classic topological sort)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Course Schedule II', 'leetcode', '210',
 'https://leetcode.com/problems/course-schedule-ii/',
 'medium', true, now(),
 'Return one valid topological ordering of courses using Kahn’s BFS.',
 '{graph, topo-sort, bfs, dag}'),

-- 2. Course Schedule III (Prerequisite feasibility)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Parallel Courses', 'leetcode', '1136',
 'https://leetcode.com/problems/parallel-courses/',
 'medium', true, now(),
 'Compute minimum semesters to finish all courses using topological layers.',
 '{graph, topo-sort, layering, dag}'),

-- 3. Minimum Height Trees (Topological leaf removal)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Minimum Height Trees', 'leetcode', '310',
 'https://leetcode.com/problems/minimum-height-trees/',
 'medium', true, now(),
 'Topological trimming of leaves until centers remain.',
 '{graph, topo-sort, bfs, tree-center}'),

-- 4. Longest Increasing Path in a Matrix (Convert to DAG + DP)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Longest Increasing Path in a Matrix', 'leetcode', '329',
 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
 'hard', true, now(),
 'Treat matrix as DAG (edges from lower to higher) then compute longest path.',
 '{grid, dag, dfs, dp, topo-sort}'),

-- 5. Alien Dictionary (Topological ordering from ordering constraints)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Alien Dictionary', 'leetcode', '269',
 'https://leetcode.com/problems/alien-dictionary/',
 'hard', true, now(),
 'Construct graph of letter precedence and topologically sort.',
 '{graph, topo-sort, ordering, dag}'),

-- 6. Sort Items by Groups Respecting Dependencies (Mixed topo)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Sort Items by Groups', 'leetcode', '1203',
 'https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/',
 'hard', true, now(),
 'Two-level topological sort: group DAG + item DAG.',
 '{dag, topo-sort, hierarchy, advanced}'),

-- 7. Number of Ways to Finish Tasks (DP on DAG)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Number of Ways to Complete Tasks', 'leetcode', '1915',
 'https://leetcode.com/problems/number-of-ways-to-reach-a-number/',
 'medium', true, now(),
 'Count paths in a DAG using DP from sources.',
 '{dag, dp, path-count}'),

-- 8. Sequence Reconstruction (Topo uniqueness check)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Sequence Reconstruction', 'leetcode', '444',
 'https://leetcode.com/problems/sequence-reconstruction/',
 'medium', true, now(),
 'Check if a sequence has unique topological ordering.',
 '{dag, topo-sort, uniqueness}'),

-- 9. Build a Matrix With Conditions (Topo on rows + cols)
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'Build a Matrix With Conditions', 'leetcode', '2392',
 'https://leetcode.com/problems/build-a-matrix-with-conditions/',
 'medium', true, now(),
 'Two topological sorts: row ordering + column ordering.',
 '{dag, topo-sort, grid-construction}'),

-- 10. All Ancestors of a Node in Directed Acyclic Graph
(gen_random_uuid(), 'e170d1d2-7ae8-4c28-9816-9a0ecf6192a0',
 'All Ancestors in DAG', 'leetcode', '2192',
 'https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/',
 'medium', true, now(),
 'Topologically process and accumulate reachable ancestors.',
 '{dag, topo-sort, dp, reachability}');
