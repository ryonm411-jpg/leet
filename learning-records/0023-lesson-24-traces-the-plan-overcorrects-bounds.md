# Lesson 24: cold retries land, but fresh code is traced as intended and `-1` is now added by reflex

Lesson 24 results were pasted on 2026-11-23. Both cold retries passed with no hint: Minimum Size Subarray on run 4 (20:44 of 25) and Product Except Self on run 2 (13:25 of 25). Both had needed the hint in Lesson 22. First Bad Version, the new problem, needed the hint and ran out of time.

- **Ideas are being retained.** Running-sum window and two-pass running products both came back unaided after 1 to 3 days. Every remaining failure was a boundary.
- **Off-by-one flipped direction.** Lesson 22 went one past the end (`<= len`, `nums[len(nums)]`). Lesson 24 went one short (`range(len(nums)-1)`, `left < len(nums)-1`, sentinel `len(nums)`). That's an overcorrection from the "last index is len - 1" feedback. The missing piece is knowing when `-1` belongs: only when naming the last index, never inside `range(len(...))`.
- **Prediction gate result: 1 of 3.** The new `predict.js` did its job. It showed that the user predicts the *plan's* answer for fresh code (`(24, 12, 8, 6)` vs the real `[24, 12, 8, 1]`), while reading other code, including their own old attempts, accurately (3 of 3 warm-ups). It also showed one more intent-over-text miss (`dict[s]` read as `dict[c]`).
- **Boundary binary search is a separate skill.** "First True" mixed `lo < hi` with `hi = mid - 1`. The exact-match template from Lesson 23 doesn't transfer by itself.
- **Precedence gap:** `lo+hi//2` was predicted to be 4.

**Implications:** next coding work should drill boundaries directly. Before writing, make the user say each bound: for every `range` and `while`, what is the first value and what is the last value. Keep predict-then-run, which gives tight feedback on tracing as typed, and add a step that has them trace their own fresh code on the smallest edge input (one or two items), where off-by-ones show up. Repeat First Bad Version cold in about 3 days.

**Evidence:** Lesson 24 results panel, pasted 2026-11-23.
