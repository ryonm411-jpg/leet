# Lesson 8: one run each, so the next lesson starts a new pattern

Run counts dropped from 6 and 5 to 1 and 1, on a new day (2026-11-03) and on two unseen problems, with no solutions opened. All five quizzes were right first try, including unsorted pair-sum with positions, the case missed through recency in Lesson 7. That meets the Lesson 7 rule of moving to a new pattern once runs drop to about two, so Lesson 9 starts sliding window.

First Repeat was clean. It still asked a presence question through a value, `seen.get(n, 0) == 1`, rather than `n in seen`. That's not a bug, and the table teaching `in` came after the exercise, so it isn't counted as a miss. Check for `in` in the next seen-map code.

Closest Sum passed on run 1 with the moves right. Its style is unlike the user's earlier code: long explanatory comments, `min_diff` and `best_sum` bookkeeping, and an early return on an exact match, while the two comments the page asked for were left unfilled as `move ...`. That could mean help from an AI tool or another source. It could also just be how the user writes when not rushed. Not assumed either way, the user was asked, and the move-direction evidence is marked provisional until they answer.

The three extra items the page asked for were not reported again: the LeetCode result, other languages, and whether they actually traced by hand. Over several lessons the user has pasted only the results panel, so ask for at most one or two extras, and make them short.

**Evidence:** Lesson 8 results pasted on 2026-11-03, with no solutions opened.
