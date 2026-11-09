# Lesson 14: the code is ahead of the quizzes, and the read-through isn't happening

All three real LeetCode Easies passed with no hint opened:
- Majority Element: run 1, in 4 minutes
- Pivot Index: run 4, in 19 min 59 s
- Is Subsequence: run 5, in 17 minutes

The running value is now resolved. Pivot Index's first plan was wrong (a reversed loop with a value-to-index map), and rebuilding it used up the whole timer. So when the idea isn't clear straight away, planning time is the cost.

Quizzes went 2 of 9, while the code was right. The pattern quizzes went 1 of 4, even though each problem was then coded with the right pattern. Either the quizzes are being answered fast or by guessing, or the pattern names don't map to the user's own understanding. Treat code as the main evidence. If quiz accuracy matters, ask the user to explain an answer in words.

Three Python rules are still not secure:
- **`range(a, b)`** stops before b. The user chose `[1, 2, 3]` for `range(1, 3)`, which fits Ruby's inclusive `1..3`.
- **Printing is not returning.** A function that prints and has no return gives `None`. This is the third variant missed.
- **Rebinding a parameter.** `nums = []` throws the input away. The shadowed `min` call, though, was right for the first time.

The read-before-run checklist was on the page, yet a missing `:` (its item 2) still cost a run.

**Implications:** the OA is about 11-11. The final pre-OA practice should rehearse the actual format, with the read-through made a required step: write it down before Run. For the three Python rules, a learner-generated explanation ("say why in one sentence") may work better than more multiple choice.

**Evidence:** Lesson 14 results pasted on 2026-11-08, with no solutions opened. LeetCode acceptance wasn't reported.
