-- Seed Two Pointers Problems
-- Pattern ID: 6a4a848e-5a54-4868-a427-9932b801597e

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Two Sum II (sorted array)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Two Sum II - Input Array Is Sorted', 'leetcode', '167',
 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
 'easy', true, now(),
 'Classic left/right pointer search for target sum.',
 '{two-pointers, sorted, array}'),

-- 2. 3Sum (two-pointers inside loop)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 '3Sum', 'leetcode', '15',
 'https://leetcode.com/problems/3sum/',
 'medium', true, now(),
 'Sort + fix one index + two-pointer sweep.',
 '{two-pointers, sorting, array}'),

-- 3. Container With Most Water (max area via two movement rules)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Container With Most Water', 'leetcode', '11',
 'https://leetcode.com/problems/container-with-most-water/',
 'medium', true, now(),
 'Move pointer at smaller height to improve bounding.',
 '{two-pointers, greedy, geometry}'),

-- 4. Remove Duplicates from Sorted Array
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Remove Duplicates from Sorted Array', 'leetcode', '26',
 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
 'easy', true, now(),
 'Slow-fast pointer to rewrite array in-place.',
 '{two-pointers, array, in-place}'),

-- 5. Move Zeroes (stable two-pointer shifting)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Move Zeroes', 'leetcode', '283',
 'https://leetcode.com/problems/move-zeroes/',
 'easy', true, now(),
 'Fast pointer copies non-zero items; slow pointer places position.',
 '{two-pointers, in-place, array}'),

-- 6. Find the Duplicate Number (Floyd’s cycle detection)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Find the Duplicate Number', 'leetcode', '287',
 'https://leetcode.com/problems/find-the-duplicate-number/',
 'medium', true, now(),
 'Linked-list cycle detection (two pointers) applied to array.',
 '{two-pointers, cycle-detection, linked-list}'),

-- 7. Palindrome Linked List (reverse second half)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Palindrome Linked List', 'leetcode', '234',
 'https://leetcode.com/problems/palindrome-linked-list/',
 'easy', true, now(),
 'Use slow/fast pointer to split list, reverse, compare.',
 '{linked-list, two-pointers, palindrome}'),

-- 8. Minimum Window Subsequence (two directional pointers)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Minimum Window Subsequence', 'leetcode', '727',
 'https://leetcode.com/problems/minimum-window-subsequence/',
 'hard', true, now(),
 'Two-pointer sweep to match subsequence windows.',
 '{two-pointers, strings, subsequence}'),

-- 9. Reverse String II (in-place pointer manipulation)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Reverse String II', 'leetcode', '541',
 'https://leetcode.com/problems/reverse-string-ii/',
 'easy', true, now(),
 'Pointer flipping in chunks.',
 '{two-pointers, strings, in-place}'),

-- 10. Sort Colors (Dutch national flag)
(gen_random_uuid(), '6a4a848e-5a54-4868-a427-9932b801597e',
 'Sort Colors', 'leetcode', '75',
 'https://leetcode.com/problems/sort-colors/',
 'medium', true, now(),
 'Three-pointer (low, mid, high) variant of two-pointer partitioning.',
 '{two-pointers, partitioning, array}');
