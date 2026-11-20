# Lesson 18 retry: the traces follow the plan, not the code

The user redid Lesson 18 and pasted the results on 2026-11-19. The completion date is unknown, but it was after Lessons 21 and 22 were written on 11-17. Isomorphic Strings passed on run 1 with no hint, 10 days after the hint was seen. Maximum Subarray passed on run 3, Squares on run 4 (timer ran out), and Top K on run 5 with the hint opened (timer ran out). The warm-up Python quizzes were skipped, and the pattern and complexity quizzes were all right, but they were repeats.

- **Traces were written, but they were traces of the plan.** Squares' comments said `arr = [100]`, but the code as typed raises NameError (`numleft` vs `numLeft`) and then IndexError (`arr = []`) before that line could run. So the habit has started, but the trace doesn't follow the code line by line, and that's why it doesn't cut the number of runs.
- **Index vs value is the thread connecting several slips.** `seen[indx]` on 11-09, `for n in range(...)` then `sum = n`, and `for v, key in freq.items()` all store or name the wrong one of position and item.
- **Other-language habits keep appearing.** `i++` joins `else if` and `elsif`. Python syntax under pressure is still borrowed from C-family languages and Ruby.
- **A wrong first plan came back.** Squares' first attempt repeated the 11-09 swap-in-place idea, so the correct back-fill approach wasn't retained after 10 days, even though it was reached twice.
- **Repeating a problem after its hint does help retention.** Isomorphic went from needing the hint to passing on run 1.

**Implications:** Lesson 22 now opens with the user's own Squares code ("what happens first?") and a quiz on index vs value. The trace instruction changes from "trace the example" to "one `#` line per executed line of code". Revisit Squares cold in about a week to check the back-fill plan. Weigh repeated-quiz answers as weak evidence.

**Evidence:** Lesson 18 results panel (retry), pasted 2026-11-19.
