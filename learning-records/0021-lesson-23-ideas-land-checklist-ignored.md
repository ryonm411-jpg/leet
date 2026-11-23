# Lesson 23: binary search lands unaided, but ticked checklist boxes stop catching slips

Lesson 23 was done on 2026-11-22, the day it was written, and no hints were opened. All four problems passed: Binary Search (run 6), Search Insert Position (run 3), a cold Valid Parentheses (run 5, the timer ran out) and Sqrt(x) (run 2). Typed recall cards went 11 of 14.

- **The ideas are arriving faster than before.** The user worked out Sqrt's `return hi` (floor) alone on an unseen variant, and Search Insert's `return lo` after one failed run. Pattern quizzes were 2 of 2. Complexity analysis is now resolved, with three new items right across 11-20 and 11-22.
- **The checklist has become automatic ticking.** Every first run failed, on slips the checklist names: `high` vs `hi` (spelling), `dict` as a name, and `dict[s]` for `dict[c]`. The ticked boxes didn't change behaviour. Lesson 22's find-the-bug warm-ups on the user's own code did help, with 2 of 2 right.
- **Recurring code slips:** a name meant for one item holding another (`s` vs `c`, twice now), `return` with stack leftovers (twice), `s.len()` (third time), and `d[k]` used as a membership test.
- **Binary search detail:** in the first attempt `mid` was computed outside the loop, so it went stale, and `lo+high//2` has the wrong precedence. The user missed that `while lo < hi` skips a one-item list.

**Implications:** next lesson, replace "tick that you checked" with "find the bug": open with 3 or 4 of the user's own first attempts (from Lessons 22 and 23) to fix without running. Make the checklist active, for example by having the user type the names they assigned and the final return value they traced. Cold retries due about 11-25: Minimum Size Subarray, Product of Array Except Self, Squares (11-26). Binary search's next step is LeetCode 74 or 875.

**Evidence:** Lesson 23 results panel, pasted 2026-11-22.
