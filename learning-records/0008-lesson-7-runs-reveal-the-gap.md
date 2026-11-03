# Lesson 7: quizzes pass but code doesn't, so the next lesson trains checking by hand

The quizzes went well while the code took 6 and 5 runs. The clearest case: the user answered the move rule correctly in a quiz, then wrote both moves backwards in code. Quiz success isn't predicting code success, so future lessons should weigh code evidence more heavily. The user seems to be debugging by running tests instead of reading the code, which an interview doesn't allow. Lesson 8 makes hand tracing the explicit habit and sets a target of two runs.

Two earlier resolutions were premature. Contains Duplicate failed first on `if seen[n] == 1`, the same `KeyError` as Lesson 5 and straight after a correct quiz on it. The later error text ("function call is an illegal expression for augmented assignment") means something like `seen.get(n, 0) += 1` was tried, though that code wasn't recorded. So `dict-get-syntax` and `implement-seen-map` are reopened. The store step itself, missed in Lesson 5, was right on the first attempt.

The user never reached for `x in seen` in Contains Duplicate, and asked a presence question through a value. Lesson 8 teaches the three dict access forms by question asked, after a cold attempt so that attempt counts as evidence.

`else if` adds to `s.len()` and the `NameError` answers as a hint of a C-family or JavaScript background. It's still unconfirmed.

Pattern choice missed on unsorted Two Sum, picking the pattern just practised. That's probably recency, so Lesson 8 asks about pattern choice before any code.

**Evidence:** Lesson 7 results pasted on 2026-11-02, with no solutions opened. Minutes, LeetCode submissions and other languages were again not reported.
