-- Seed Sliding Window Problems
-- Pattern ID: d60eb5ab-7d0d-43fa-89b9-68b66d77a8bb

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Maximum Average Subarray I (fixed window)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Maximum Average Subarray I', 'leetcode', '643',
 'https://leetcode.com/problems/maximum-average-subarray-i/',
 'easy', true, now(),
 'Classic fixed-size sliding window for sum/avg.',
 '{sliding-window, fixed, sum}'),

-- 2. Longest Substring Without Repeating Characters (variable window)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Longest Substring Without Repeating Characters', 'leetcode', '3',
 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
 'medium', true, now(),
 'Grow/shrink window to enforce uniqueness.',
 '{sliding-window, hashmap, variable-window}'),

-- 3. Minimum Size Subarray Sum (shrink-to-fit window)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Minimum Size Subarray Sum', 'leetcode', '209',
 'https://leetcode.com/problems/minimum-size-subarray-sum/',
 'medium', true, now(),
 'Shrink window until sum < target to find minimal window length.',
 '{sliding-window, variable-window, sum}'),

-- 4. Longest Repeating Character Replacement (conditional window)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Longest Repeating Character Replacement', 'leetcode', '424',
 'https://leetcode.com/problems/longest-repeating-character-replacement/',
 'medium', true, now(),
 'Maintain frequency + track most-frequent character.',
 '{sliding-window, frequency, greedy}'),

-- 5. Max Consecutive Ones III (allowing modifications)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Max Consecutive Ones III', 'leetcode', '1004',
 'https://leetcode.com/problems/max-consecutive-ones-iii/',
 'medium', true, now(),
 'Window allowing k zero flips.',
 '{sliding-window, variable-window, two-pointers}'),

-- 6. Permutation in String (frequency match window)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Permutation in String', 'leetcode', '567',
 'https://leetcode.com/problems/permutation-in-string/',
 'medium', true, now(),
 'Window size = len(s1); match frequency maps.',
 '{sliding-window, frequency, fixed-window}'),

-- 7. Find All Anagrams in a String
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Find All Anagrams in a String', 'leetcode', '438',
 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
 'medium', true, now(),
 'Window technique to match character frequency maps.',
 '{sliding-window, anagram, frequency}'),

-- 8. Subarrays With K Different Integers (hard)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Subarrays with K Different Integers', 'leetcode', '992',
 'https://leetcode.com/problems/subarrays-with-k-different-integers/',
 'hard', true, now(),
 'AtMost(K) - AtMost(K-1) trick.',
 '{sliding-window, two-pointers, hard}'),

-- 9. Longest Subarray of 1s After Deleting One Element
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Longest Subarray of 1s After Deleting One Element', 'leetcode', '1493',
 'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
 'medium', true, now(),
 'Window that allows one deletion.',
 '{sliding-window, variable-window, greedy}'),

-- 10. Minimum Window Substring (ultimate sliding window)
(gen_random_uuid(), 'd60eb5ab-7d0d-43fa-89b9-68b66d77a8bb',
 'Minimum Window Substring', 'leetcode', '76',
 'https://leetcode.com/problems/minimum-window-substring/',
 'hard', true, now(),
 'Maintain required vs found counts; shrink window optimally.',
 '{sliding-window, hard, frequency, optimal}');
