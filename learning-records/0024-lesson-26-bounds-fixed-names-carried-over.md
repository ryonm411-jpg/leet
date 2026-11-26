# Lesson 26: bounds are fixed, names carry over from the last problem, and binary search templates still get mixed

Lesson 26 results were pasted on 2026-11-25. All four problems passed with no solution opened. Monotonic Array and the cold Squares both passed on run 1, well under time. Next Letter took 9 runs and ran out of time. Search Range took 5 runs, in 16:51 of 25.

- **The bounds drill worked.** 7 of 7 bound quizzes were right, and every `range`/`while`/last-index bound in four problems was right on the first attempt. There was no one-past or one-short slip. `end-index-bounds` and `index-vs-value` move to improving.
- **Two-pointer moves are retained.** Cold Squares passed on run 1 in 7:42, after the wrong plan came back on the Lesson 18 retry. `two-pointers-move-direction` is resolved.
- **Precedence fixed.** The typed `mid = (lo + hi) // 2` card was right.
- **The new slip is leftover names.** Both first runs that failed were NameErrors on names from another problem: `nums` in a function whose parameter is `letters`, and `left`/`right` where `lo`/`hi` were assigned. Predictions now trace the logic as typed (Next Letter predicted `"c"`, which the `>=` logic really gives), but they don't check that each name exists.
- **Binary search: one clean boundary template, and one mixed.** Search Range's final, which records `answer = mid` and keeps searching with `lo <= hi` and `mid ± 1`, is correct and unaided. Next Letter mixed `lo <= hi` with `hi = mid`, which loops forever, and then patched it with a `lo == hi` return. The Search Range template would have solved Next Letter directly.

**Implications:** teach the "record answer and keep going" template as the only boundary template, and use it for cold First Bad Version and Next Letter. Add a prediction-step prompt: "circle every name. Was it assigned in *this* function?" Mixed pattern sets are next, to test `pattern-recognition` without a topic cue. Lesson 25 (design) is still unreported.

**Evidence:** Lesson 26 results panel, pasted 2026-11-25.
