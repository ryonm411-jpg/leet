# Lesson 5: cold rewrites pass, so the course moves on to two pointers

Both rewrites passed from a blank editor with no solution opened, so hash map basics are solid enough to leave. The user asked to move on from these questions, and Lesson 6 starts two pointers on Valid Palindrome. Old weak spots now appear only as short warm-ups on new examples.

Teaching `for` as repeated assignment worked. `trace-loop-variables` went from `NameError` in three lessons to four correct out of four, including the empty-list case. The first quiz came before the explanation, so it's real evidence, but one day isn't retention yet.

Passing isn't the same as clean. Two Sum's first run left out `seen[n] = i`, the line that makes the pattern work, so nothing was ever stored. Ransom Note's first run read `seen[n]` on a possibly missing key, and also misspelled the parameter. The tests caught all three and the user fixed them unaided. Under the tracker's rule, `implement-seen-map` and `implement-frequency-count` are resolved, but a later unseen problem should check them again. `spend-check` is now tracked on its own.

Dict space is still shaky at first contact. A numeric key with a stated range (scores 0 to 100) drew O(n), then the later capped cases were right. Those came after feedback in the same sitting, so they may be fluency.

Lesson 5 was meant for a separate day but its results arrived on 2026-11-02, the same date as Lesson 4's. Skills whose only recent evidence is Lessons 4 and 5 therefore don't get a second-day credit. The results didn't include the requested languages or a LeetCode submission, so both are still unknown.

**Evidence:** Lesson 5 results pasted on 2026-11-02, with no solutions opened.
