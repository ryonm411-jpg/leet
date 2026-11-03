# Lesson 4: first-run pass, but two concept gaps remain and the page leaked

The exercise passed on run 1 and the warm-up's only error was a mistyped indent, so `len`, `enumerate` and `in` all came out right. The editor has no auto-indent, so that error says little about Python knowledge.

The loop variable answer was `NameError` again, after feedback in two lessons. Repeating the feedback isn't working. The belief matches block-scoped languages such as Java, C++ and JavaScript with `let`, and `s.len()` also hinted at another language, but this is unconfirmed. Lesson 5 teaches `for` as repeated assignment, has the user rely on it in code, and asks about their background.

Dict space isn't fixed. The correct `first_unique` answer sat just below a table stating it, and the next capped case (digits) was missed with O(n). The later O(n) answers are weak evidence, because O(n) looks like the user's default and every correct option in that group began "the key is". Lesson 5's options carry no reasons and mix both sides.

The page also leaked the counting code: the Lesson 4 tracing quiz showed `counts[c] = counts.get(c, 0) + 1` above the exercise, so this pass doesn't prove recall. `implement-frequency-count` and `dict-get-syntax` stay `improving` instead of resolving, even though the tracker's day and problem rule would otherwise be met. From now on, a pass counts as unaided only if the target code isn't visible on the page.

`result = -1` followed by `return result` appeared in both functions. It's harmless and not tracked as a weakness.

**Evidence:** Lesson 4 results pasted on 2026-11-02, with no solutions opened.
