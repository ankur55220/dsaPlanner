-- Seed Greedy Algorithms Problems
-- Pattern ID: 36f97d8a-d3b9-45a7-a79b-85c40416a957

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Jump Game (classic greedy reachability)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Jump Game', 'leetcode', '55',
 'https://leetcode.com/problems/jump-game/',
 'medium', true, now(),
 'Greedy reachability: maintain farthest reachable index.',
 '{greedy, array, reachability}'),

-- 2. Jump Game II (min jumps)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Jump Game II', 'leetcode', '45',
 'https://leetcode.com/problems/jump-game-ii/',
 'medium', true, now(),
 'Greedy layered BFS window technique.',
 '{greedy, bfs-window, minimal-jumps}'),

-- 3. Gas Station (circular greedy)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Gas Station', 'leetcode', '134',
 'https://leetcode.com/problems/gas-station/',
 'medium', true, now(),
 'Greedy: if total gas < cost, no solution; restart at fail index.',
 '{greedy, cycle, array}'),

-- 4. Partition Labels (interval merge logic)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Partition Labels', 'leetcode', '763',
 'https://leetcode.com/problems/partition-labels/',
 'medium', true, now(),
 'Greedy intervals based on last occurrence positions.',
 '{greedy, intervals, partitioning}'),

-- 5. Non-overlapping Intervals (interval scheduling)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Non-overlapping Intervals', 'leetcode', '435',
 'https://leetcode.com/problems/non-overlapping-intervals/',
 'medium', true, now(),
 'Sort by finish time → select non-overlapping subset.',
 '{greedy, scheduling, intervals}'),

-- 6. Course Schedule III (priority queue + greedy)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Course Schedule III', 'leetcode', '630',
 'https://leetcode.com/problems/course-schedule-iii/',
 'hard', true, now(),
 'Greedy with max-heap for longest course replacement.',
 '{greedy, heap, scheduling, hard}'),

-- 7. Lemonade Change (basic greedy simulation)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Lemonade Change', 'leetcode', '860',
 'https://leetcode.com/problems/lemonade-change/',
 'easy', true, now(),
 'Greedy order of giving change optimally.',
 '{greedy, simulation, counting}'),

-- 8. Maximum Units on a Truck (sort + greedy picking)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Maximum Units on a Truck', 'leetcode', '1710',
 'https://leetcode.com/problems/maximum-units-on-a-truck/',
 'easy', true, now(),
 'Sort by units-per-box descending, pick greedily.',
 '{greedy, sorting}'),

-- 9. Reorganize String (heap + greedy placement)
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Reorganize String', 'leetcode', '767',
 'https://leetcode.com/problems/reorganize-string/',
 'medium', true, now(),
 'Greedy pick 2 most frequent chars to avoid adjacency.',
 '{greedy, heap, string}'),

-- 10. Minimum Number of Arrows to Burst Balloons
(gen_random_uuid(), '36f97d8a-d3b9-45a7-a79b-85c40416a957',
 'Minimum Number of Arrows to Burst Balloons', 'leetcode', '452',
 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/',
 'medium', true, now(),
 'Sort intervals by end → shoot arrows greedily.',
 '{greedy, intervals, scheduling}');
