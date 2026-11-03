# Lesson 2: the syntax gap is now specific, and recall lags recognition

Record 0002 didn't know which constructs caused trouble. The code now shows them: swapped key and value, `d[k] += 1` on a missing key, and a stale loop variable. The user picks the right `get` usage in a quiz yet doesn't produce it when typing, even just after reading it. So lessons should make the user write these constructs without showing them on the page first, and put code-revealing quizzes after the exercise.

The user debugs well from test output: both exercises passed within 3 runs and no solution was opened. Tests catch these slips, but an interview won't, so hand tracing before running is the next habit to build.

Minor habits seen, none causing failures: naming a variable `dict` (hides the built-in), `enumerate` when the index is unused, and leaving `pass` in place. Mention these only in passing.

**Evidence:** Lesson 2 results pasted on 2026-10-31, including first and final code.
