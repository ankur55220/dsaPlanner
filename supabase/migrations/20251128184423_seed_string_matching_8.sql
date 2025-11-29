-- Seed String Matching Problems
-- Pattern ID: eeafa7f8-7cfc-4246-8f98-46bb5c91a89d

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Implement strStr() — KMP
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Implement strStr() (KMP)', 'leetcode', '28',
 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
 'easy', true, now(),
 'Classic implementation of substring search using prefix-function.',
 '{string, kmp, prefix-function}'),

-- 2. Find All Occurrences of a Pattern (Z-array)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Z-Function Basic Pattern Search', 'custom', 'Z1',
 'https://cp-algorithms.com/string/z-function.html',
 'medium', true, now(),
 'Use Z-function on pattern + # + text to detect occurrences.',
 '{string, z-function, pattern-matching}'),

-- 3. Repeated Substring Pattern (border / prefix-function property)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Repeated Substring Pattern', 'leetcode', '459',
 'https://leetcode.com/problems/repeated-substring-pattern/',
 'easy', true, now(),
 'Use prefix-function to check string periodicity.',
 '{kmp, border, periodicity}'),

-- 4. Shortest Palindrome (KMP on reversed string)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Shortest Palindrome', 'leetcode', '214',
 'https://leetcode.com/problems/shortest-palindrome/',
 'hard', true, now(),
 'Compute LPS on s + # + reverse(s) to find longest prefix-palindrome.',
 '{kmp, palindrome, prefix-function}'),

-- 5. Longest Happy Prefix (LPS property)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Longest Happy Prefix', 'leetcode', '1392',
 'https://leetcode.com/problems/longest-happy-prefix/',
 'medium', true, now(),
 'Find longest prefix which is also a suffix using prefix-function.',
 '{kmp, prefix-function, string}'),

-- 6. Valid Palindrome III (rolling hash DP)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Valid Palindrome III', 'leetcode', '1216',
 'https://leetcode.com/problems/valid-palindrome-iii/',
 'hard', true, now(),
 'Uses rolling-hash or DP to check k-palindromic substrings.',
 '{rolling-hash, dp, advanced}'),

-- 7. Longest Duplicate Substring (binary search + rolling hash)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Longest Duplicate Substring', 'leetcode', '1044',
 'https://leetcode.com/problems/longest-duplicate-substring/',
 'hard', true, now(),
 'Binary search on length + Rabin–Karp to detect collisions.',
 '{rolling-hash, rabin-karp, binary-search, hard}'),

-- 8. Rabin–Karp Basic Implementation
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Rabin–Karp String Search', 'custom', 'RK1',
 'https://cp-algorithms.com/string/rabin-karp.html',
 'medium', true, now(),
 'Hash-based substring search with rolling hashes.',
 '{string, rolling-hash, rabin-karp}'),

-- 9. Count Number of Distinct Substrings (hash set)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Count Distinct Substrings', 'codeforces', 'CF-DISTINCT',
 'https://cp-algorithms.com/string/string-hashing.html',
 'medium', true, now(),
 'Use rolling hash to count all unique substrings.',
 '{rolling-hash, distinct-substrings, hashing}'),

-- 10. Find the Longest Prefix Also Appearing in Middle (border trick)
(gen_random_uuid(), 'eeafa7f8-7cfc-4246-8f98-46bb5c91a89d',
 'Longest Border Appearing in Middle', 'custom', 'BORDER1',
 'https://cp-algorithms.com/string/prefix-function.html',
 'hard', true, now(),
 'Use prefix-function array to detect occurrences of longest borders.',
 '{kmp, borders, prefix-function, hard}');
