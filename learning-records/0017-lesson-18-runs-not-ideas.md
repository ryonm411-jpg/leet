# Lesson 18: the first Medium lands, runs are still the cost

Lesson 18 results arrived on 2026-11-09, the day it was written. Maximum Subarray, the first Medium, passed on run 2 with no hint. Its only failure was an IndentationError, and the logic was right first time. Squares of a Sorted Array (unseen, no hint) ended with a correct back-filling two-pointer solution, but took 5 runs and used up the 20-minute timer. Isomorphic Strings needed the hint after a first attempt keyed the dict by position. Top K Frequent was skipped.

- **Runs are the cost, not ideas or typing.** All three first runs failed on indentation (an empty `if` body twice, a stray indent once). Squares' intermediate runs returned wrong values that one traced example would have exposed. Times of 19, 20+ and 19 minutes came from runs.
- **Quiz misses no longer have correct code behind them.** In Lessons 13 and 14, pattern quizzes were wrong but the code was right. This time Isomorphic's code also went wrong, and Maximum Subarray's code followed the quiz feedback that described the approach.
- **Two Python concepts moved.** Print vs return was right for the first time, on a new variant, and so was `range` with a start. Rebinding a parameter was missed for the third time: the user expects a loop to keep seeing the original list after the name is reassigned.
- **Key choice slipped.** Keying by index instead of by the character being asked about reopens `dict-key-direction`.

**Implications:** with the OA due around 2026-11-12, the next set should force a written trace before the first Run (for example, require a filled-in trace table before the Run button counts), and include a rebinding demo the user steps through. Its problems should first ask "what is the key?" for any dict.

**Evidence:** Lesson 18 results panel, pasted 2026-11-09.
