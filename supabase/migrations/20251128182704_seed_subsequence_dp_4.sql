-- Seed Subsequence DP Problems
-- Pattern ID: 96219da1-ede6-414b-ac1b-417c263f5feb

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Longest Common Subsequence (LCS)
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Longest Common Subsequence', 'leetcode', '1143',
 'https://leetcode.com/problems/longest-common-subsequence/',
 'medium', true, now(),
 'Classic 2D DP comparing prefixes of two strings.',
 '{dp, subsequence, lcs, 2d}'),

-- 2. Edit Distance (Minimum operations to convert)
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Edit Distance', 'leetcode', '72',
 'https://leetcode.com/problems/edit-distance/',
 'hard', true, now(),
 'Compute minimum operations: insert, delete, replace using 2D DP.',
 '{dp, subsequence, edit-distance, levenshtein}'),

-- 3. Longest Increasing Subsequence (Binary Search + DP)
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Longest Increasing Subsequence', 'leetcode', '300',
 'https://leetcode.com/problems/longest-increasing-subsequence/',
 'medium', true, now(),
 'DP with patience sorting technique (O(n log n)).',
 '{dp, subsequence, lis, binary-search}'),

-- 4. Number of Longest Increasing Subsequences
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Number of Longest Increasing Subsequences', 'leetcode', '673',
 'https://leetcode.com/problems/number-of-longest-increasing-subsequences/',
 'medium', true, now(),
 'DP to track both lengths and counts of LIS.',
 '{dp, subsequence, lis, counting}'),

-- 5. Palindromic Subsequences (Count)
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Count Different Palindromic Subsequences', 'leetcode', '730',
 'https://leetcode.com/problems/count-different-palindromic-subsequences/',
 'hard', true, now(),
 'DP on substring ranges to count distinct palindromic subsequences.',
 '{dp, subsequence, palindrome, range-dp}'),

-- 6. Longest Palindromic Subsequence
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Longest Palindromic Subsequence', 'leetcode', '516',
 'https://leetcode.com/problems/longest-palindromic-subsequence/',
 'medium', true, now(),
 'DP on substrings comparing symmetric characters.',
 '{dp, subsequence, palindrome, 2d}'),

-- 7. Valid Subsequences (Matching pattern)
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Number of Matching Subsequences', 'leetcode', '792',
 'https://leetcode.com/problems/number-of-matching-subsequences/',
 'medium', true, now(),
 'Efficient matching of many subsequences via indexed buckets.',
 '{dp, subsequence, string-match, bucket}'),

-- 8. Minimum ASCII Delete Sum for Two Strings
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Minimum ASCII Delete Sum for Two Strings', 'leetcode', '712',
 'https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/',
 'medium', true, now(),
 'DP variant of LCS maximizing kept characters / minimizing deletion cost.',
 '{dp, subsequence, lcs-variant}'),

-- 9. K Increasing Subsequence
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'K Increasing Subsequence', 'leetcode', '2420',
 'https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/',
 'medium', true, now(),
 'Convert sequence to multiple LIS problems grouped by index mod k.',
 '{dp, subsequence, lis, transform}'),

-- 10. Interleaving String (DP on 2D grid)
(gen_random_uuid(), '96219da1-ede6-414b-ac1b-417c263f5feb',
 'Interleaving String', 'leetcode', '97',
 'https://leetcode.com/problems/interleaving-string/',
 'hard', true, now(),
 '2D DP verifying interleaving of two strings into a target.',
 '{dp, subsequence, interleave, 2d}');
