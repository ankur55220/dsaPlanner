-- Seed Tree / Tree DP Problems
-- Pattern ID: c4fb8f79-7b0a-4f17-9ba1-a326363f2599

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Binary Tree Level Order Traversal (BFS fundamentals)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Binary Tree Level Order Traversal', 'leetcode', '102',
 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
 'medium', true, now(),
 'Breadth-first traversal of levels — the core tree BFS.',
 '{tree, bfs, traversal}'),

-- 2. Binary Tree Maximum Path Sum (hard DFS)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Binary Tree Maximum Path Sum', 'leetcode', '124',
 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
 'hard', true, now(),
 'Top hard DFS problem: max gain from each child and update global max.',
 '{tree, dp, dfs, hard}'),

-- 3. Diameter of Binary Tree (height-based DP)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Diameter of Binary Tree', 'leetcode', '543',
 'https://leetcode.com/problems/diameter-of-binary-tree/',
 'easy', true, now(),
 'Height DP: longest path = left_height + right_height.',
 '{tree, dp, diameter}'),

-- 4. Lowest Common Ancestor of a Binary Tree (DFS parent tracking)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Lowest Common Ancestor of a Binary Tree', 'leetcode', '236',
 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
 'medium', true, now(),
 'Use DFS to detect if left/right subtree contains targets.',
 '{tree, dfs, lca}'),

-- 5. Validate Binary Search Tree (inorder logic)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Validate Binary Search Tree', 'leetcode', '98',
 'https://leetcode.com/problems/validate-binary-search-tree/',
 'medium', true, now(),
 'Inorder traversal or min/max bounds recursion.',
 '{tree, bst, validation}'),

-- 6. Path Sum III (prefix-sum DP on trees)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Path Sum III', 'leetcode', '437',
 'https://leetcode.com/problems/path-sum-iii/',
 'medium', true, now(),
 'Prefix-sum hash map applied to tree paths.',
 '{tree, dp, prefix-sum, dfs}'),

-- 7. Sum of Distances in Tree (rerooting DP)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Sum of Distances in Tree', 'leetcode', '834',
 'https://leetcode.com/problems/sum-of-distances-in-tree/',
 'hard', true, now(),
 'Compute DP for subtree counts → reroot to compute answers globally.',
 '{tree, rerooting-dp, hard}'),

-- 8. House Robber III (tree DP)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'House Robber III', 'leetcode', '337',
 'https://leetcode.com/problems/house-robber-iii/',
 'medium', true, now(),
 'DP states: rob or skip current node.',
 '{tree, dp, dfs}'),

-- 9. Binary Tree Right Side View (visibility BFS/DFS)
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Binary Tree Right Side View', 'leetcode', '199',
 'https://leetcode.com/problems/binary-tree-right-side-view/',
 'medium', true, now(),
 'Return last element of each level or DFS with depth tracking.',
 '{tree, bfs, dfs}'),

-- 10. Construct Binary Tree from Preorder and Inorder
(gen_random_uuid(), 'c4fb8f79-7b0a-4f17-9ba1-a326363f2599',
 'Construct Binary Tree from Preorder and Inorder Traversal', 'leetcode', '105',
 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
 'medium', true, now(),
 'Master-level reconstruction of tree from traversal arrays.',
 '{tree, construction, dfs}');
