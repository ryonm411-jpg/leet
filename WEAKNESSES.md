# Weakness Tracker

Read this before choosing or designing any lesson. Update it whenever there is new evidence.

## How it works
- **Evidence only.** Add a weakness only after something observed: pasted lesson results, code, LeetCode attempts, or the user saying they struggled. Never guess.
- **Name the specific skill.** "Stores before checking, so an element pairs with itself" is useful. "Bad at hash maps" is not.
- **Find the cause.** Record whether it is a missing concept, a failure to recognise the pattern, a coding slip, or running out of time.
- **Practise it next.** Start each lesson with a short retrieval task on whichever open weakness is due, using a new problem where possible so answers can't be memorised.
- **Space the reviews.** Next review is 1 day after a miss, then 3, 7 and 14 days after each success. A miss restarts the schedule.
- **Require proof to close.** Status moves from `open` to `improving` after one unaided success, and to `resolved` after two unaided successes on different days, at least one on a new problem. Opening the solution doesn't count as unaided, and neither does a pass when the target code or answer was visible on the page.
- **Keep the history.** Move resolved items to the section below. If one returns, reopen it and note that it came back.

## Open and improving

| Skill | Status | Cause | Evidence | Last seen | Next review |
|---|---|---|---|---|---|
| `complexity-analysis`: seeing that a capped set of possible keys means O(1) space | improving | Missing concept | Lesson 2: chose O(m) space for a dict of lowercase letters. Lesson 3: missed again, chose O(n) space, even after Lesson 2's feedback. Lesson 4: right on letters, with that answer in a table just above, then chose O(n) for digits. Lesson 5: chose O(n) for exam scores 0 to 100, then got sentence first letters and 2026 dates right after feedback. Lesson 6: ages 0 to 120 right before any feedback in that lesson, and `s[::-1]` as O(n) space. Same date as the Lesson 5 miss, so it doesn't show retention yet. Lesson 7: status codes 100 to 599 right. Same date, so still no retention evidence | 2026-11-02 | 2026-11-05 |
| `space-distinct-keys`: sizing a dict by what its key is, not by the input length or the word "letters" | improving | Missing concept. Overcorrects: the feedback alone flipped the answer without fixing the reasoning | Lesson 3: chose "O(1), only 26 letters" for counting whole words, straight after answering O(n) for letters. Lesson 4: chose "O(n), because the string has n characters" for digits, then got usernames and Two Sum right. Lesson 5: phone numbers and product IDs right with no reasons in the options, mixed with capped cases. Still partly weak evidence, because O(n) is the user's default. Lesson 6: email addresses right. Same date as Lesson 5, so no second-day credit | 2026-11-02 | 2026-11-05 |
| `trace-loop-variables`: knowing a loop variable survives its loop, and tracing what it holds | improving | Missing concept about Python, now taught as repeated assignment. Block-scoped background still unconfirmed | Lesson 2: used `m` inside the `n` loop. Lessons 3 and 4: chose `NameError`. Lesson 5: all three quizzes right first try, the first before the explanation, including the empty-list case, and wrote `last_item` on run 1 | 2026-11-02 | 2026-11-05 |
| `anagram-length-check`: hand-tracing which direction leftovers slip through (count `s`, spend `t`) | improving | Tracing not yet careful; code itself was right after the quiz's feedback | Lesson 3: chose `s="a", t="ab"` instead of `s="ab", t="a"`, then wrote the length check correctly. Lesson 4: correct first try on a new example | 2026-11-02 | 2026-11-05 |
| `python-builtins-recall`: typing basic Python correctly first time (`len(s)`, `enumerate(...)`, `in`) | improving | Syntax recall, and not reading code before running it | Lesson 3: `s.len()`, `for i, w i words`, `for i, w in words` without `enumerate`. All self-corrected. Lesson 4: `len`, `enumerate` and `in` right first time. Lesson 5: `enumerate` and `in` right again, on the same date as Lesson 4, so no second-day credit. Typed `ransome_note`, a NameError that reading before running would have caught. Lesson 7: wrote `else if`, a SyntaxError, which also hints at a C-family or JavaScript background. Lesson 8 (11-03, new day): both problems passed on run 1 with no syntax slips | 2026-11-03 | 2026-11-06 |
| `style-names`: naming a dict for its contents, and using `enumerate` only when the index is used | improving | Habit. Didn't cause failures | Lessons 2 and 3: named the variable `dict`, with unused `i` from `enumerate`. Lesson 4: named it `seen`, with `enumerate` only where needed. Lesson 5: `enumerate` used correctly, but a count dict was named `seen`, where `counts` would say more | 2026-11-02 | 2026-11-05 |
| `spend-check`: guarding the decrement so a missing letter fails instead of crashing | improving | Used `d[key]` on a key that may be missing. May be a slip, as `.get` was right on the counting line | Lesson 5: wrote `if seen[n] == 0`, got a KeyError, and fixed it with `seen.get(n, 0)` unaided. Lesson 6: quiz right on `counts["z"] == 0` raising a KeyError. Same date as the miss, and not yet shown in code. Lesson 7: wrote `if seen[n] == 1` in Contains Duplicate and got a KeyError again, on a new problem. Lesson 8 (11-03, new day): quiz right (`x in seen`), and First Repeat read a possibly missing key safely with `seen.get(n, 0)`, passing on run 1 | 2026-11-03 | 2026-11-06 |
| `implement-seen-map`: writing the pattern from memory | improving | Came back after being resolved on 2026-11-02. Python access slips, not the idea | Earlier: passed Lessons 3 and 5, with the store line missing on Lesson 5's first run. Lesson 7: chose the pattern unprompted on unseen Contains Duplicate, with the store line right, but took 5 runs because of `seen[n]` and never used `x in seen`. Lesson 8 (11-03): unseen First Repeat passed on run 1, no solution opened. Still asked presence through a value (`seen.get(n, 0) == 1`), but the `in` table came after that exercise. One success since reopening | 2026-11-03 | 2026-11-06 |
| `dict-get-syntax`: using `d.get(k, 0)` and `d[k]` correctly | improving | Came back after being resolved on 2026-11-02. `get` treated as something you can assign to | Earlier: counting line right in Lessons 3 and 5. Lesson 7: the error "function call is an illegal expression for augmented assignment" implies something like `seen.get(n, 0) += 1`, inferred because that run's code wasn't recorded. Lesson 8 (11-03): `get` used correctly as a read, run 1. Not yet re-tested on the counting line `d[k] = d.get(k, 0) + 1` | 2026-11-03 | 2026-11-06 |
| `two-pointers-move-direction`: writing which pointer moves in code | improving | Knows the rule but reverses it when typing, and didn't trace by hand | Lesson 7: quiz right, but the first code moved `left` on a too-big sum and `right` on a too-small one. Wrong results persisted across several runs of the 6 taken. Also returned 0-based indices at first, despite the stated twist. Lesson 8 (11-03): Closest Sum passed on run 1 with moves right, and the bug-reading quiz right. Provisional: the code's style (long explanatory comments, `min_diff`, while the two required starter comments were left as `move ...`) differs from earlier code, so the user was asked whether it was written unaided | 2026-11-03 | 2026-11-06 |
| `pattern-recognition`: choosing a pattern from a problem statement | improving | Failure to recognise, probably recency from the pattern just practised | Lesson 7: chose two pointers for unsorted Two Sum needing original indices. The other two right. Lesson 8 (11-03): 3 of 3 right first try, including unsorted pair-sum with positions straight after two pointers lessons | 2026-11-03 | 2026-11-06 |
| `trace-before-run`: checking code by hand before running it | improving | Habit: uses test runs to debug, which an interview doesn't allow | Lesson 5: `ransome_note`. Lesson 6: missing `not` on both checks. Lesson 7: 6 and 5 runs. Lesson 8 (11-03): 1 and 1 runs, down from 6 and 5. Whether the user actually traced by hand wasn't reported, and Closest Sum is provisional (see `two-pointers-move-direction`) | 2026-11-03 | 2026-11-06 |
| `implement-valid-palindrome`: writing the skip conditions correctly | improving | Coding slip, plus not reading code before running it | Lesson 6: both skip checks written without `not`, so it skipped the characters that count. Passed on run 2, on a new problem, with no solution opened. No LeetCode submission reported | 2026-11-02 | 2026-11-05 |

## Resolved

| Skill | Resolved | Evidence |
|---|---|---|
| `implement-frequency-count` | 2026-11-02 | Lesson 3 (new problem, 10-31) and Lesson 5 (blank editor, 11-02), no solution opened. Counting logic was right. Lesson 5's failures are tracked under `spend-check` and `python-builtins-recall`. Check again on an unseen problem |
| `dict-key-direction` | 2026-11-02 | Correct with no code on the page in Lesson 3 (10-31) and Lesson 5 (11-02) |
| `count-vs-membership` | 2026-11-02 | Lesson 3 quiz right on a new problem (10-31). Lesson 5 code spent counts correctly, passing `"aa"` from `"ab"` (11-02) |

## Skill IDs used in lesson results
- `complexity-estimation`: estimating how much work an approach does as input grows
- `complexity-analysis`: stating the time and space cost of a solution. Lesson 5 uses it for the capped-key O(1) cases
- `seen-map-idea`: recognising that a hash map can answer "have I seen this?"
- `check-before-store`: ordering steps so an element can't pair with itself
- `implement-seen-map`: writing the pattern from memory
- `count-vs-membership`: seeing when "how many" matters, not just "is it present"
- `dict-get-syntax`: using `dict.get(key, default)` and knowing when `d[key]` raises a KeyError
- `spend-check`: guarding the decrement so both missing and used-up letters fail
- `implement-frequency-count`: writing a frequency count from memory
- `dict-key-direction`: choosing what is the key and what is the value (seen in code, no quiz)
- `anagram-length-check`: seeing that leftover letters need a length check
- `trace-loop-variables`: tracing code by hand and knowing what a loop variable holds
- `space-distinct-keys`: sizing a dict by how many distinct keys it can hold. Lesson 5 uses it for the unlimited-key O(n) cases
- `python-builtins-recall`: typing `len`, `enumerate` and similar basics correctly on the first run
- `style-names`: naming variables for their contents (seen in code, no quiz)
- `two-pointers-trace`: tracing where two pointers end up
- `implement-two-pointers`: writing the walk-in-from-both-ends loop
- `implement-valid-palindrome`: two pointers with skipped characters
- `two-pointers-bounds`: keeping an inner skipping loop inside the string
- `two-pointers-move-rule`: choosing which pointer to move from a sum
- `implement-two-sum-sorted`: writing two pointers on sorted input
- `pattern-recognition`: choosing a pattern from a problem statement
- `implement-two-pointers-move`: writing move direction correctly in code, in Lesson 8's Closest Sum
- `sliding-window-idea`: seeing that a moving window can be updated by adding one item and removing one
- `window-leaving-index`: knowing which index leaves a size-k window when it slides
- `implement-fixed-window`: writing a fixed-size sliding window, in Lesson 9's Best Window Sum
- `implement-running-min`: carrying the best value so far in one pass, in Lesson 9's Best Trade
