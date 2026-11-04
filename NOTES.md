# Notes

## Preferences
- Beginner framing: define new terms and keep each lesson small.
- Lessons use Python.

## To find out
- Daily study time.
- How the earlier LeetCode attempts went, and which problems were tried.
- Target companies, if any.

## Working notes
- The user asked for weaknesses to be tracked and targeted. Keep `WEAKNESSES.md` current, and give every new lesson `data-skill` quizzes, a `skill` on its exercise, `data-solution` on solution reveals, and the `assets/progress.js` results panel.
- Path follows the Tech Interview Handbook plan, starting with arrays and hash tables.
- Lesson 0001 was completed, but its results were lost to a page refresh on or before 2026-10-31, so there is no evidence from it. `assets/progress.js` now saves results in localStorage.
- Lesson 0002 (Ransom Note) opens with a `first_positions` warm-up. Results now include the user's first and final code, so read them to find the exact syntax to drill.
- Lesson 0002 was completed on 2026-10-31. Whether Ransom Note was submitted on LeetCode wasn't reported.
- Lesson 0003 (Valid Anagram) was completed on 2026-10-31, the same day as Lesson 2, not on 11-01 as suggested. It held back the counting syntax until after the exercise, and that worked.
- Lesson 0004 (First Unique Character) targets dict space analysis, tracing and Python recall. It is meant for 2026-11-01 or later. No LeetCode submissions have been reported yet, for any problem.
- Lesson 0004 was completed by 2026-11-02, with one first-run pass and one indent slip. No solutions were opened.
- Lesson 0005 (Cold Rewrites) targets loop scope and dict space, and holds the blank-editor Two Sum and Ransom Note rewrites. It is meant for 2026-11-03 or later, so that it counts as a separate day.
- Lesson 0005 results arrived on 2026-11-02, with no solutions opened. They didn't include the user's other languages or a LeetCode submission.
- The user asked on 2026-11-02 to move on from the hash map questions. Don't repeat those problems. Keep due weak spots to short warm-ups on new examples, and check the resolved seen-map and frequency-count skills with an unseen problem later.
- Lesson 0006 (Two Pointers, Valid Palindrome) starts the new pattern and is meant for 2026-11-03 or later. LeetCode blocks automated fetching, so its problem statement was written from memory, not checked against the page.
- Lesson 0006 results arrived on 2026-11-02, the same date as Lessons 4 and 5, with no solutions opened. The user works faster than the suggested spacing, so same-date passes get no second-day credit. Minutes, LeetCode submissions and other languages are still unreported.
- Lesson 0007 (Two Sum II, Contains Duplicate, pattern choice) has no warm-up on most tracked skills because they aren't due until 2026-11-05. Its LeetCode statements were written from memory, because LeetCode blocks automated fetching.
- Lesson 0007 results arrived on 2026-11-02. Code took 6 and 5 runs although the related quizzes were right, so weigh code evidence above quiz evidence, and don't resolve a skill from code that needed many runs without noting it.
- Lesson 0008 (First Repeat, Closest Sum, hand tracing) is meant for 2026-11-03 or later. It doesn't start a new pattern, because the run counts show consolidation is needed, but all its problems are new, in line with the request to move on. Go to a new pattern once runs drop to about two.
- Lesson 8 results arrived on 2026-11-03 with 1 run on each problem, so Lesson 9 starts sliding window (fixed-size window, then running minimum for Best Time to Buy and Sell Stock). Closest Sum's style differed from earlier code, and the user was asked whether it was written unaided. Its evidence is provisional until they answer.
- The user pastes only the results panel and skips the extra questions. Keep extra asks to one or two short ones, placed inside the results section.
- Quiz and page rules, learned from Lesson 4: keep target code off the page until after the exercise, including in earlier quizzes. Don't let correct options share wording that gives them away. Each exercise on a page needs its own `skill`, because `assets/progress.js` merges results by skill.
- The exercise editor has no auto-indent, so treat indent typos as low-value evidence.
- `assets/python-exercise.js` needs internet access because it loads Pyodide from a CDN.
