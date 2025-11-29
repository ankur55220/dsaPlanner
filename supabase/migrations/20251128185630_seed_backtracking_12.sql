-- Seed Backtracking / Permutations Problems
-- Pattern ID: 1744e500-36cc-469e-a20c-5eb3b33b7331

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Subsets (core backtracking tree)
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Subsets', 'leetcode', '78',
 'https://leetcode.com/problems/subsets/',
 'medium', true, now(),
 'Fundamental backtracking to generate all subsets.',
 '{backtracking, subsets, dfs}'),

-- 2. Subsets II (handle duplicates)
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Subsets II', 'leetcode', '90',
 'https://leetcode.com/problems/subsets-ii/',
 'medium', true, now(),
 'Add duplicate avoidance logic using sorted array + skip conditions.',
 '{backtracking, subsets, duplicates}'),

-- 3. Permutations
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Permutations', 'leetcode', '46',
 'https://leetcode.com/problems/permutations/',
 'medium', true, now(),
 'Generate all permutations using visited set or swapping.',
 '{backtracking, permutations}'),

-- 4. Permutations II (unique permutations with duplicates)
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Permutations II', 'leetcode', '47',
 'https://leetcode.com/problems/permutations-ii/',
 'medium', true, now(),
 'Use sorting + skip-duplicate rule in recursion.',
 '{backtracking, permutations, duplicates}'),

-- 5. Combination Sum
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Combination Sum', 'leetcode', '39',
 'https://leetcode.com/problems/combination-sum/',
 'medium', true, now(),
 'Unlimited picks allowed → recursion with index stays same.',
 '{backtracking, combinations}'),

-- 6. Combination Sum II
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Combination Sum II', 'leetcode', '40',
 'https://leetcode.com/problems/combination-sum-ii/',
 'medium', true, now(),
 'Pick/skip with duplicate handling.',
 '{backtracking, combinations, duplicates}'),

-- 7. Letter Combinations of a Phone Number
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Letter Combinations of a Phone Number', 'leetcode', '17',
 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
 'medium', true, now(),
 'DFS building combinations with digit-to-letter mapping.',
 '{backtracking, strings, recursion}'),

-- 8. Palindrome Partitioning
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Palindrome Partitioning', 'leetcode', '131',
 'https://leetcode.com/problems/palindrome-partitioning/',
 'medium', true, now(),
 'DFS + backtracking with palindrome checks to partition string.',
 '{backtracking, palindrome, dfs}'),

-- 9. N-Queens (classic constraint backtracking)
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'N-Queens', 'leetcode', '51',
 'https://leetcode.com/problems/n-queens/',
 'hard', true, now(),
 'Backtracking with column/diag constraints.',
 '{backtracking, n-queens, constraints}'),

-- 10. Restore IP Addresses
(gen_random_uuid(), '1744e500-36cc-469e-a20c-5eb3b33b7331',
 'Restore IP Addresses', 'leetcode', '93',
 'https://leetcode.com/problems/restore-ip-addresses/',
 'medium', true, now(),
 'DFS generating valid 4-part partition satisfying numeric constraints.',
 '{backtracking, strings, partitioning}');
