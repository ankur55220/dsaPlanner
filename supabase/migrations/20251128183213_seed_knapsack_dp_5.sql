-- Seed Knapsack / State DP Problems
-- Pattern ID: 371cecb1-2ff6-45da-8145-375d2ec42676

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Partition Equal Subset Sum (subset-sum DP)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Partition Equal Subset Sum', 'leetcode', '416',
 'https://leetcode.com/problems/partition-equal-subset-sum/',
 'medium', true, now(),
 'Classic subset-sum DP: decide if array can be partitioned into equal halves.',
 '{dp, knapsack, subset-sum, boolean-dp}'),

-- 2. Coin Change (unbounded knapsack: min coins)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Coin Change', 'leetcode', '322',
 'https://leetcode.com/problems/coin-change/',
 'medium', true, now(),
 'Unbounded knapsack minimizing number of coins to make amount.',
 '{dp, knapsack, unbounded, min-cost}'),

-- 3. Coin Change 2 (unbounded knapsack: count ways)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Coin Change II', 'leetcode', '518',
 'https://leetcode.com/problems/coin-change-ii/',
 'medium', true, now(),
 'Count number of ways to make amount using unlimited coins.',
 '{dp, knapsack, unbounded, counting}'),

-- 4. Target Sum (0/1 knapsack transformation)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Target Sum', 'leetcode', '494',
 'https://leetcode.com/problems/target-sum/',
 'medium', true, now(),
 'Convert +/- assignment into subset difference knapsack DP.',
 '{dp, knapsack, subset-sum, transform}'),

-- 5. Last Stone Weight II (subset sum balance)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Last Stone Weight II', 'leetcode', '1049',
 'https://leetcode.com/problems/last-stone-weight-ii/',
 'medium', true, now(),
 'Minimize difference by splitting stones into two groups.',
 '{dp, knapsack, subset-sum, optimization}'),

-- 6. Ones and Zeroes (2D knapsack)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Ones and Zeroes', 'leetcode', '474',
 'https://leetcode.com/problems/ones-and-zeroes/',
 'medium', true, now(),
 'Two-dimensional knapsack (zeros, ones) maximizing subset.',
 '{dp, knapsack, 2d, bounded}'),

-- 7. Minimum Cost For Tickets (state DP)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Minimum Cost for Tickets', 'leetcode', '983',
 'https://leetcode.com/problems/minimum-cost-for-tickets/',
 'medium', true, now(),
 'DP over days using state options: 1-day, 7-day, 30-day passes.',
 '{dp, state-dp, interval-choice}'),

-- 8. Combination Sum IV (DP on target)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'Combination Sum IV', 'leetcode', '377',
 'https://leetcode.com/problems/combination-sum-iv/',
 'medium', true, now(),
 'Order matters: number of sequences that sum to target.',
 '{dp, knapsack, unbounded, permutation-dp}'),

-- 9. House Robber (state DP with constraints)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'House Robber', 'leetcode', '198',
 'https://leetcode.com/problems/house-robber/',
 'medium', true, now(),
 'DP on linear street: rob house or skip house with no adjacency.',
 '{dp, state-dp, adjacency-constraint}'),

-- 10. House Robber II (circular constraint)
(gen_random_uuid(), '371cecb1-2ff6-45da-8145-375d2ec42676',
 'House Robber II', 'leetcode', '213',
 'https://leetcode.com/problems/house-robber-ii/',
 'medium', true, now(),
 'DP in circular layout: split into two linear cases.',
 '{dp, state-dp, circular-constraint}');
