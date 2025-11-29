-- Seed Monotonic Stack / Queue Problems
-- Pattern ID: 8d590d69-c644-4713-92b7-94cd88f537a2

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Next Greater Element I (intro to monotonic stack)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Next Greater Element I', 'leetcode', '496',
 'https://leetcode.com/problems/next-greater-element-i/',
 'easy', true, now(),
 'Classic introduction to monotonic decreasing stack to find next greater.',
 '{monotonic-stack, nge, array}'),

-- 2. Next Greater Element II (circular stack)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Next Greater Element II', 'leetcode', '503',
 'https://leetcode.com/problems/next-greater-element-ii/',
 'medium', true, now(),
 'Circular version requiring doubling traversal logic.',
 '{monotonic-stack, circular, nge}'),

-- 3. Daily Temperatures
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Daily Temperatures', 'leetcode', '739',
 'https://leetcode.com/problems/daily-temperatures/',
 'medium', true, now(),
 'Monotonic stack to find next warmer temperature.',
 '{monotonic-stack, next-greater, array}'),

-- 4. Largest Rectangle in Histogram (core hard problem)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Largest Rectangle in Histogram', 'leetcode', '84',
 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
 'hard', true, now(),
 'Stack to compute max rectangle expanding from each bar.',
 '{monotonic-stack, histogram, hard}'),

-- 5. Maximal Rectangle (grid + histogram hack)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Maximal Rectangle', 'leetcode', '85',
 'https://leetcode.com/problems/maximal-rectangle/',
 'hard', true, now(),
 'Convert rows into histogram → apply LC84.',
 '{monotonic-stack, grid, histogram, hard}'),

-- 6. Trapping Rain Water (stack variant)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Trapping Rain Water', 'leetcode', '42',
 'https://leetcode.com/problems/trapping-rain-water/',
 'hard', true, now(),
 'Stack approach to compute trapped water volumes.',
 '{monotonic-stack, rainwater, two-pointers}'),

-- 7. Sliding Window Maximum (monotonic deque)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Sliding Window Maximum', 'leetcode', '239',
 'https://leetcode.com/problems/sliding-window-maximum/',
 'hard', true, now(),
 'Monotonic queue: maintain decreasing deque in O(n).',
 '{monotonic-queue, sliding-window, deque}'),

-- 8. Maximum Subarray Min-Product (monotonic stack for spans)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Maximum Subarray Min-Product', 'leetcode', '1856',
 'https://leetcode.com/problems/maximum-subarray-min-product/',
 'hard', true, now(),
 'Stack to find next smaller on both sides + prefix sums.',
 '{monotonic-stack, range-min, hard}'),

-- 9. Sum of Subarray Minimums (classic monotonic DP)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Sum of Subarray Minimums', 'leetcode', '907',
 'https://leetcode.com/problems/sum-of-subarray-minimums/',
 'medium', true, now(),
 'Use monotonic stack to compute contribution of each element.',
 '{monotonic-stack, contribution, dp}'),

-- 10. Minimum Add to Make Parentheses Valid (stack / counter)
(gen_random_uuid(), '8d590d69-c644-4713-92b7-94cd88f537a2',
 'Minimum Add to Make Parentheses Valid', 'leetcode', '921',
 'https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/',
 'easy', true, now(),
 'Uses stack or counter to maintain valid parentheses.',
 '{stack, parentheses, easy}');
