# Lesson 22: runs drop sharply, Easies are solid, and off-by-one at the end is the new main slip

Lesson 22 results were pasted on 2026-11-22. The lesson was done after 11-20, when its pre-run checklist was added. Runs were 1, 2, 3 and 4, down from 7, 6 and 9 in Lesson 21. Both Easies passed unaided with time to spare: Longest Palindrome on run 1 in 9.5 minutes, and Move Zeroes on run 2 in 10 minutes. Both Mediums needed the hint.

- **The pre-run checklist worked better than the comment gate.** Trace comments held real values (`# (1, 1, 2, 6)`), with no filler, and both trace-your-own-code quizzes were right. Keep `assets/preflight.js` and keep tuning its items to the latest slips.
- **Off-by-one at the end is now the commonest slip:** `right <= len(nums)`, `nums[len(nums)]`, and 3 for the top of `range(3)`. With Lesson 14 (`range(1, 3)` taken as including 3) and the Lesson 18 retry, this looks like a belief that the end is included, not only a typing slip. It's tracked as `end-index-bounds`.
- **Java and JS names are gone. Python shapes aren't yet.** No `push`, `.contains` or `++` appeared, but `range(1, nums)` came back a fourth time, and the slice was written `nums(k: n+1)`.
- **Mediums fail on the idea, not the Python.** Product's first plan (prefix and suffix lists) was the right shape. Minimum Size Subarray recomputed `sum(slice)` each step, which was too slow, and the running-sum update came from the hint. Both are new tracked skills.
- **Pattern labels still lag the code:** Move Zeroes was labelled sliding window but coded as two pointers.

**Implications:** Easies are close to interview-ready on time and runs. Next steps: (1) drill the end bound (`len - 1`, range stops before), which binary search's `hi = len(nums) - 1` exercises well; (2) re-do Minimum Size Subarray and Product cold in a few days (about 11-25); (3) keep the checklist. Lesson 23, written before these results came in, gained slice and last-index recall cards and a bounds item in its checklist.

**Evidence:** Lesson 22 results panel, pasted 2026-11-22.
