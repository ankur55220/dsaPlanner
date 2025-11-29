-- Seed Tries / Automata Problems
-- Pattern ID: da208c27-687b-4b17-a25f-786dc250046b

insert into public.problems (
  id, pattern_id, title, source, external_id, link,
  difficulty, is_active, created_at, summary, tags
) values

-- 1. Implement Trie (Prefix Tree)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Implement Trie (Prefix Tree)', 'leetcode', '208',
 'https://leetcode.com/problems/implement-trie-prefix-tree/',
 'medium', true, now(),
 'Core implementation of insert, search, startsWith.',
 '{trie, implementation, prefix-tree}'),

-- 2. Add and Search Word – Data Structure Design (wildcard search)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Add and Search Word (Wildcard Trie)', 'leetcode', '211',
 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
 'medium', true, now(),
 'DFS on trie supporting “.” wildcard.',
 '{trie, dfs, wildcard, search}'),

-- 3. Word Search II (trie + DFS on grid)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Word Search II', 'leetcode', '212',
 'https://leetcode.com/problems/word-search-ii/',
 'hard', true, now(),
 'Build trie of words and DFS board with pruning.',
 '{trie, dfs, grid, hard, word-search}'),

-- 4. Replace Words (dictionary trie)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Replace Words', 'leetcode', '648',
 'https://leetcode.com/problems/replace-words/',
 'medium', true, now(),
 'Replace long words with shortest root in trie.',
 '{trie, strings, dictionary}'),

-- 5. Maximum XOR of Two Numbers in an Array (bitwise trie)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Maximum XOR of Two Numbers in an Array', 'leetcode', '421',
 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/',
 'medium', true, now(),
 'Bitwise trie for max XOR pair.',
 '{trie, bitwise, xor, optimization}'),

-- 6. Word Break (DP + trie optional)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Word Break', 'leetcode', '139',
 'https://leetcode.com/problems/word-break/',
 'medium', true, now(),
 'Classic DP solvable faster with trie.',
 '{dp, trie, strings}'),

-- 7. Word Break II (DFS + trie)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Word Break II', 'leetcode', '140',
 'https://leetcode.com/problems/word-break-ii/',
 'hard', true, now(),
 'Use trie + memoized DFS to generate all decompositions.',
 '{trie, dfs, strings, hard}'),

-- 8. Implement Magic Dictionary (search with one modification)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Implement Magic Dictionary', 'leetcode', '676',
 'https://leetcode.com/problems/implement-magic-dictionary/',
 'medium', true, now(),
 'Search allowing exactly one char modification using trie.',
 '{trie, backtracking, search}'),

-- 9. Design Search Autocomplete System (trie + ranking)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Design Search Autocomplete System', 'leetcode', '642',
 'https://leetcode.com/problems/design-search-autocomplete-system/',
 'hard', true, now(),
 'Trie storing frequencies + lexicographic order.',
 '{trie, design, autocomplete, hard}'),

-- 10. Palindrome Pairs (trie + reverse matching)
(gen_random_uuid(), 'da208c27-687b-4b17-a25f-786dc250046b',
 'Palindrome Pairs', 'leetcode', '336',
 'https://leetcode.com/problems/palindrome-pairs/',
 'hard', true, now(),
 'Use two tries to match reversed prefixes for palindrome combinations.',
 '{trie, palindrome, matching, hard}');
