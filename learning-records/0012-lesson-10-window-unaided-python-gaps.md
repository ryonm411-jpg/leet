# Lesson 10: the window was written unaided, but three Python basics are missing concepts

Quietest Shift was an unseen problem, done on a timer with six hidden tests and no solution opened. The logic was right on the first attempt: a running window, `<` so the earliest tie wins, and a start index of `i - k + 1`. The only failure was a missing `=`. So the sliding window that needed the solution in Lesson 9 now works unaided. It took 29.5 of 30 minutes, though, and speed is now the gap for the OA.

The warm-up showed that three Python slips are really gaps in knowledge, not typos:
- the user believes `range(list)` loops over the list
- they think a function with no `return` is a SyntaxError
- they think a shadowed `max` gives NameError

This may reflect habits from another language. Teach these as rules with a reason, and check them again on new code. Simply flagging them as typos isn't enough.

**Implications:** Lesson 12 is a mixed set of four timed problems on known patterns, with 20-minute timers and the Python basics warm-up repeated on new code. It also introduces the term "running value" and a LeetCode practice queue (`reference/practice-queue.html`). The LeetCode results asked for in Lesson 10 weren't reported.

**Evidence:** Lesson 10 results pasted on 2026-11-05, with no solutions opened.
