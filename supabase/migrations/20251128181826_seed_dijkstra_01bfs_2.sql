-- Seed Dijkstra / 0–1 BFS problems
-- Pattern ID: 2572ace0-3fb0-4440-82de-5cf4ab1aa1b3

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values
-- 1. Path With Minimum Effort (classic Dijkstra on grid)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Path With Minimum Effort', 'leetcode', '1631',
 'https://leetcode.com/problems/path-with-minimum-effort/',
 'medium', true, now(),
 'Minimize maximum absolute difference across hops using Dijkstra on grid.',
 '{grid, dijkstra, priority-queue}'),

-- 2. Network Delay Time (single-source shortest path)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Network Delay Time', 'leetcode', '743',
 'https://leetcode.com/problems/network-delay-time/',
 'medium', true, now(),
 'Compute shortest arrival times in directed weighted graph via Dijkstra.',
 '{graph, dijkstra, ss-shortest-path}'),

-- 3. Cheapest Flights Within K Stops (Dijkstra variant)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Cheapest Flights Within K Stops', 'leetcode', '787',
 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
 'medium', true, now(),
 'Modified Dijkstra/DP on stops constraint to find cheapest flight path.',
 '{graph, dijkstra, constrained-shortest-path}'),

-- 4. Minimum Cost to Connect Sticks (priority queue greedy)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Min Cost to Connect All Points (Prim’s MST)', 'leetcode', '1584',
 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
 'medium', true, now(),
 'Prim’s algorithm using PQ for MST with Manhattan distances.',
 '{graph, mst, prim, priority-queue}'),

-- 5. Reveal Cards In Increasing Order (0–1 BFS technique)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Shortest Path in Binary Matrix', 'leetcode', '1091',
 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
 'medium', true, now(),
 'Grid shortest path with BFS but can be adapted to weighted variants.',
 '{grid, bfs, shortest-path}'),

-- 6. Minimum Cost to Make at Least One Valid Path (0–1 BFS)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Minimum Cost to Make at Least One Valid Path', 'leetcode', '1368',
 'https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/',
 'hard', true, now(),
 '0–1 BFS with deque on grid with direction-based costs.',
 '{grid, zero-one-bfs, deque, shortest-path}'),

-- 7. Dijkstra on Reversed Graph (Reverse specification)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Minimum Time to Reach Destination Without Drowning', 'leetcode', '2039',
 'https://leetcode.com/problems/the-time-when-the-network-becomes-idle/',
 'medium', true, now(),
 'Reverse graph Dijkstra for earliest reach times.',
 '{graph, dijkstra, reverse-graph}'),

-- 8. Swim in Rising Water (Binary search + Dijkstra)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Swim in Rising Water', 'leetcode', '778',
 'https://leetcode.com/problems/swim-in-rising-water/',
 'hard', true, now(),
 'Minimize max elevation via Dijkstra or binary search + BFS.',
 '{graph, grid, dijkstra, binary-search}'),

-- 9. Kth Smallest Prime Fraction (PQ-based selection)
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Kth Smallest Prime Fraction', 'leetcode', '786',
 'https://leetcode.com/problems/k-th-smallest-prime-fraction/',
 'medium', true, now(),
 'Use min-heap to simulate k-th extraction in sorted fraction space.',
 '{priority-queue, heap, graph-modeling}'),

-- 10. Minimum Cost to Reach City With Discounts
(gen_random_uuid(), '2572ace0-3fb0-4440-82de-5cf4ab1aa1b3',
 'Minimum Cost to Reach Destination in Time', 'leetcode', '1928',
 'https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/',
 'medium', true, now(),
 'Stateful Dijkstra with (node, time) states and constraints.',
 '{graph, dijkstra, state-space}');
