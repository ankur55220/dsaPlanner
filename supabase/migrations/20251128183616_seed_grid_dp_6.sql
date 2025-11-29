-- Seed Grid DP Problems
-- Pattern ID: 8bf32a77-1329-4fea-9bcc-f27703edccac

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Unique Paths (classic combinatorial DP)
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Unique Paths', 'leetcode', '62',
 'https://leetcode.com/problems/unique-paths/',
 'medium', true, now(),
 'Count ways to reach bottom-right using down/right moves.',
 '{dp, grid, combinatorics, 2d}'),

-- 2. Unique Paths II (with obstacles)
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Unique Paths II', 'leetcode', '63',
 'https://leetcode.com/problems/unique-paths-ii/',
 'medium', true, now(),
 'DP for counting paths while avoiding obstacles.',
 '{dp, grid, obstacles, 2d}'),

-- 3. Minimum Path Sum
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Minimum Path Sum', 'leetcode', '64',
 'https://leetcode.com/problems/minimum-path-sum/',
 'medium', true, now(),
 'DP accumulating minimal value along grid path.',
 '{dp, grid, min-path, 2d}'),

-- 4. Dungeon Game (reverse DP)
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Dungeon Game', 'leetcode', '174',
 'https://leetcode.com/problems/dungeon-game/',
 'hard', true, now(),
 'DP from bottom-right to compute required HP for survival.',
 '{dp, grid, reverse-dp, hard}'),

-- 5. Triangle (top-down / bottom-up DP)
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Triangle', 'leetcode', '120',
 'https://leetcode.com/problems/triangle/',
 'medium', true, now(),
 'Min path sum in triangular grid using DP.',
 '{dp, grid, triangle, bottom-up}'),

-- 6. Minimum Falling Path Sum
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Minimum Falling Path Sum', 'leetcode', '931',
 'https://leetcode.com/problems/minimum-falling-path-sum/',
 'medium', true, now(),
 'DP considering three downward diagonal transitions.',
 '{dp, grid, falling-path}'),

-- 7. Out of Boundary Paths (count ways with boundaries)
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Out of Boundary Paths', 'leetcode', '576',
 'https://leetcode.com/problems/out-of-boundary-paths/',
 'medium', true, now(),
 'DP to count number of ways ball exits grid within max moves.',
 '{dp, grid, bounded, counting}'),

-- 8. Cherry Pickup II (double-agent DP)
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Cherry Pickup II', 'leetcode', '1463',
 'https://leetcode.com/problems/cherry-pickup-ii/',
 'hard', true, now(),
 '3D DP for two agents collecting maximum cherries.',
 '{dp, grid, multi-agent, 3d}'),

-- 9. Maximal Square (DP on binary matrix)
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Maximal Square', 'leetcode', '221',
 'https://leetcode.com/problems/maximal-square/',
 'medium', true, now(),
 'DP storing largest square ending at each cell.',
 '{dp, grid, square, 2d}'),

-- 10. Minimum Path Sum in Grid With Weighted Cells
(gen_random_uuid(), '8bf32a77-1329-4fea-9bcc-f27703edccac',
 'Path With Maximum Gold', 'leetcode', '1219',
 'https://leetcode.com/problems/path-with-maximum-gold/',
 'medium', true, now(),
 'DFS/DP hybrid exploring max gold path with constraints.',
 '{dp, dfs, grid, backtracking}');
