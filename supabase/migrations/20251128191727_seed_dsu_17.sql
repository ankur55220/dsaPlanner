-- Seed Union-Find (DSU) Problems
-- Pattern ID: 663f267a-0a78-45e6-8340-177f1741b650

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Number of Provinces (Connected Components)
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Number of Provinces', 'leetcode', '547',
 'https://leetcode.com/problems/number-of-provinces/',
 'medium', true, now(),
 'Classic DSU: count connected components in a graph.',
 '{dsu, union-find, connected-components}'),

-- 2. Redundant Connection (Cycle detection)
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Redundant Connection', 'leetcode', '684',
 'https://leetcode.com/problems/redundant-connection/',
 'medium', true, now(),
 'Detect first edge that forms a cycle using DSU.',
 '{dsu, cycles, graph}'),

-- 3. Accounts Merge
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Accounts Merge', 'leetcode', '721',
 'https://leetcode.com/problems/accounts-merge/',
 'medium', true, now(),
 'Union emails belonging to same user → cluster them.',
 '{dsu, hashing, graph}'),

-- 4. Most Stones Removed with Same Row or Column
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Most Stones Removed with Same Row or Column', 'leetcode', '947',
 'https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/',
 'medium', true, now(),
 'Union stones that share row/column; answer = N - #components.',
 '{dsu, graph, geometry}'),

-- 5. Longest Consecutive Sequence (DSU variant)
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Longest Consecutive Sequence (DSU Approach)', 'leetcode', '128',
 'https://leetcode.com/problems/longest-consecutive-sequence/',
 'hard', true, now(),
 'Alternative DSU solution: union num with num±1.',
 '{dsu, hashing, arrays}'),

-- 6. Smallest String With Swaps
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Smallest String With Swaps', 'leetcode', '1202',
 'https://leetcode.com/problems/smallest-string-with-swaps/',
 'medium', true, now(),
 'Union swap indices → sort characters inside each component.',
 '{dsu, strings, sorting}'),

-- 7. Graph Valid Tree
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Graph Valid Tree', 'leetcode', '261',
 'https://leetcode.com/problems/graph-valid-tree/',
 'medium', true, now(),
 'A tree has N nodes, N-1 edges, and is fully connected. Use DSU.',
 '{dsu, graph, tree-check}'),

-- 8. Minimum Cost to Connect All Points (Kruskal)
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Minimum Cost to Connect All Points', 'leetcode', '1584',
 'https://leetcode.com/problems/minimum-cost-to-connect-all-points/',
 'medium', true, now(),
 'Classic Kruskal MST with Manhattan distances.',
 '{dsu, mst, kruskal}'),

-- 9. Evaluate Division (Union-Find with weights)
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Evaluate Division (Weighted DSU)', 'leetcode', '399',
 'https://leetcode.com/problems/evaluate-division/',
 'medium', true, now(),
 'Use weighted union-find to store multiplicative relationships.',
 '{dsu, weighted-dsu, graph}'),

-- 10. Satisfiability of Equality Equations
(gen_random_uuid(), '663f267a-0a78-45e6-8340-177f1741b650',
 'Satisfiability of Equality Equations', 'leetcode', '990',
 'https://leetcode.com/problems/satisfiability-of-equality-equations/',
 'medium', true, now(),
 'Union equal variables; check inequality violations.',
 '{dsu, constraints, graph}');
