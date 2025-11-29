-- Seed Binary Search on Answer Problems
-- Pattern ID: 7660cdef-01a8-4886-b52b-4da69a743d05

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Koko Eating Bananas (classic feasibility check)
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Koko Eating Bananas', 'leetcode', '875',
 'https://leetcode.com/problems/koko-eating-bananas/',
 'medium', true, now(),
 'Binary search the eating speed; check if speed is enough.',
 '{binary-search, bs-answer, greedy, feasibility}'),

-- 2. Median of Two Sorted Arrays (binary partition)
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Median of Two Sorted Arrays', 'leetcode', '4',
 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
 'hard', true, now(),
 'Binary search on partition index of smaller array.',
 '{binary-search, partition, arrays}'),

-- 3. Minimum Time to Complete Trips
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Minimum Time to Complete Trips', 'leetcode', '2187',
 'https://leetcode.com/problems/minimum-time-to-complete-trips/',
 'medium', true, now(),
 'Binary search on time, check if buses can finish target trips.',
 '{binary-search, bs-answer, math}'),

-- 4. Capacity To Ship Packages Within D Days
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Capacity To Ship Packages Within D Days', 'leetcode', '1011',
 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/',
 'medium', true, now(),
 'Search minimum capacity such that simulation fits days.',
 '{binary-search, bs-answer, greedy, shipping}'),

-- 5. Split Array Largest Sum
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Split Array Largest Sum', 'leetcode', '410',
 'https://leetcode.com/problems/split-array-largest-sum/',
 'hard', true, now(),
 'Binary search on max subarray sum; feasibility via greedy splitting.',
 '{binary-search, dp, greedy, partition}'),

-- 6. Aggressive Cows (classic from GFG/CP)
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Aggressive Cows', 'gfg', 'aggressive-cows',
 'https://www.geeksforgeeks.org/problems/aggressive-cows/1',
 'medium', true, now(),
 'Binary search on distance; check cow placement feasibility.',
 '{binary-search, bs-answer, greedy, sorting}'),

-- 7. Minimum Speed to Arrive on Time
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Minimum Speed to Arrive on Time', 'leetcode', '1870',
 'https://leetcode.com/problems/minimum-speed-to-arrive-on-time/',
 'medium', true, now(),
 'Binary search on speed; piecewise travel rounding rule.',
 '{binary-search, bs-answer, math, greedy}'),

-- 8. Find K-th Smallest Pair Distance
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Find K-th Smallest Pair Distance', 'leetcode', '719',
 'https://leetcode.com/problems/find-k-th-smallest-pair-distance/',
 'hard', true, now(),
 'Binary search on distance; count pairs with <= mid.',
 '{binary-search, bs-answer, two-pointers}'),

-- 9. Minimizing Maximum Workload (fair distribution)
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Minimum Limit of Balls in a Bag', 'leetcode', '1760',
 'https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/',
 'medium', true, now(),
 'Binary search on max bag size; feasibility with distribution cost.',
 '{binary-search, bs-answer, greedy}'),

-- 10. Allocate Minimum Number of Pages (classic DP/BS hybrid)
(gen_random_uuid(), '7660cdef-01a8-4886-b52b-4da69a743d05',
 'Allocate Minimum Number of Pages', 'gfg', 'allocate-pages',
 'https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1',
 'medium', true, now(),
 'Binary search on answer; split pages for students.',
 '{binary-search, greedy, bs-answer}');
