-- Seed BFS / DFS Problems
-- Pattern ID: cf1d1ff3-1b42-4db0-8138-d29667bcaac7

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values
-- 1. Number of Islands
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Number of Islands', 'leetcode', '200',
 'https://leetcode.com/problems/number-of-islands/',
 'medium', true, now(),
 'Count connected components of 1s in a grid using BFS/DFS.',
 '{grid, graph, dfs, bfs}'),

-- 2. Rotting Oranges
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Rotting Oranges', 'leetcode', '994',
 'https://leetcode.com/problems/rotting-oranges/',
 'medium', true, now(),
 'Multi-source BFS to track time to rot all oranges.',
 '{grid, bfs, multi-source}'),

-- 3. Flood Fill
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Flood Fill', 'leetcode', '733',
 'https://leetcode.com/problems/flood-fill/',
 'easy', true, now(),
 'Classic DFS/BFS flood fill on 2D grid to recolor connected region.',
 '{grid, dfs, bfs, floodfill}'),

-- 4. Walls and Gates
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Walls and Gates', 'leetcode', '286',
 'https://leetcode.com/problems/walls-and-gates/',
 'medium', true, now(),
 'Multi-source BFS propagating distance to nearest gate.',
 '{grid, bfs, multi-source}'),

-- 5. Island Perimeter
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Island Perimeter', 'leetcode', '463',
 'https://leetcode.com/problems/island-perimeter/',
 'easy', true, now(),
 'DFS on a single island, counting exposed edges.',
 '{grid, dfs, perimeter}'),

-- 6. Clone Graph
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Clone Graph', 'leetcode', '133',
 'https://leetcode.com/problems/clone-graph/',
 'medium', true, now(),
 'DFS/BFS cloning with hash map to avoid revisiting nodes.',
 '{graph, bfs, dfs, cloning}'),

-- 7. Course Schedule (Cycle Detection in Directed Graph)
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Course Schedule', 'leetcode', '207',
 'https://leetcode.com/problems/course-schedule/',
 'medium', true, now(),
 'Detect cycle in directed graph using DFS.',
 '{graph, dfs, cycle-detection}'),

-- 8. Is Graph Bipartite?
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Is Graph Bipartite?', 'leetcode', '785',
 'https://leetcode.com/problems/is-graph-bipartite/',
 'medium', true, now(),
 'Use BFS/DFS to 2-color the graph and detect conflicts.',
 '{graph, bfs, dfs, bipartite}'),

-- 9. Pacific Atlantic Water Flow
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Pacific Atlantic Water Flow', 'leetcode', '417',
 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
 'medium', true, now(),
 'DFS/BFS from ocean edges to mark reachable cells.',
 '{grid, graph, dfs, bfs, reverse-search}'),

-- 10. Word Ladder (Hard BFS)
(gen_random_uuid(), 'cf1d1ff3-1b42-4db0-8138-d29667bcaac7',
 'Word Ladder', 'leetcode', '127',
 'https://leetcode.com/problems/word-ladder/',
 'hard', true, now(),
 'Shortest transformation using BFS on implicit graph (word patterns).',
 '{graph, bfs, shortest-path, implicit-graph}');
