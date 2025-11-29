-- Seed Bitmask DP Problems
-- Pattern ID: 6202d835-d76b-4e77-8872-6507710b2288

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Count Subsets with a Given Sum (basic bitmask enumeration)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Count Subsets with Given Sum (Bitmask Enumeration)', 'custom', 'BM1',
 'https://cp-algorithms.com/algebra/all-submasks.html',
 'medium', true, now(),
 'Enumerate subsets via mask or dp over subsets.',
 '{bitmask, dp, subsets}'),

-- 2. Partition to K Equal Sum Subsets (mask + memo DP)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Partition to K Equal Sum Subsets', 'leetcode', '698',
 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/',
 'hard', true, now(),
 'Use dp[mask] to mark if a subset is valid toward forming groups.',
 '{bitmask, dp, subsets, hard}'),

-- 3. Minimum Number of Work Sessions (mask-based scheduling)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Minimum Number of Work Sessions', 'leetcode', '1986',
 'https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/',
 'medium', true, now(),
 'DP over subsets to partition tasks into time-limited groups.',
 '{bitmask, dp, scheduling}'),

-- 4. Matchsticks to Square (subset mask + pruning)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Matchsticks to Square', 'leetcode', '473',
 'https://leetcode.com/problems/matchsticks-to-square/',
 'medium', true, now(),
 'Use bitmask + memo + pruning to assign sticks to 4 sides.',
 '{bitmask, dp, backtracking}'),

-- 5. Maximum Compatibility Sum (assignment DP)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Maximum Compatibility Sum', 'leetcode', '1947',
 'https://leetcode.com/problems/maximum-compatibility-score-sum/',
 'medium', true, now(),
 'dp[mask]: best score for assigning students to mentors.',
 '{bitmask, dp, assignment}'),

-- 6. Shortest Hamiltonian Path / TSP (core bitmask DP)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Traveling Salesman (TSP) DP', 'custom', 'TSP1',
 'https://cp-algorithms.com/dynamic_programming/traveling_salesman.html',
 'hard', true, now(),
 'Classic dp[mask][i] to compute shortest Hamiltonian cycle.',
 '{bitmask, dp, tsp, hard}'),

-- 7. Minimum Cost to Connect Two Groups of Points (LC 1595)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Minimum Cost to Connect Two Groups of Points', 'leetcode', '1595',
 'https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/',
 'hard', true, now(),
 'State compression DP to match rows to columns.',
 '{bitmask, dp, assignment, hard}'),

-- 8. Number of Ways to Wear Different Hats (LC 1434)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Number of Ways to Wear Different Hats', 'leetcode', '1434',
 'https://leetcode.com/problems/number-of-ways-to-wear-different-hats/',
 'hard', true, now(),
 'dp[mask] assigning hats to people; inverse mapping.',
 '{bitmask, dp, combinatorics, hard}'),

-- 9. Maximum Score Words Formed by Letters (subset scoring)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'Maximum Score Words Formed by Letters', 'leetcode', '1255',
 'https://leetcode.com/problems/maximum-score-words-formed-by-letters/',
 'hard', true, now(),
 'Bitmask over subsets of words, check feasibility.',
 '{bitmask, dp, subsets, word-construct}'),

-- 10. XOR Sum of All Pairs (bitmask + contribution)
(gen_random_uuid(), '6202d835-d76b-4e77-8872-6507710b2288',
 'XOR Sum of All Pairings', 'custom', 'XOR1',
 'https://cp-algorithms.com/algebra/all-submasks.html',
 'medium', true, now(),
 'Use mask tricks to compute XOR contributions of all subsets.',
 '{bitmask, xor, dp}');
