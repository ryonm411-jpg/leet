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
- 2026-11-05: Amazon SDE Intern OA invitation arrived, with 7 days to complete it. The exact deadline, the allowed languages and daily hours are still unconfirmed, The mission update was confirmed (see learning record 0011). The council verdict (`council-report-2026-11-05.html`) drives OA week: test conditions, no new topics, a repo drill, Work Style time, then the NeetCode 150 list after the OA.
- Lesson 9 results arrived on 2026-11-05 with both solutions opened. The "did you write it unaided" question went unanswered again, so stop asking it and rely on `solution opened` and code style.
- Lesson 10 (timed, hidden tests) and Lesson 11 (repo in VS Code) were written on 2026-11-05 and are meant for 11-06 and 11-07. `assets/python-exercise.js` now supports `hidden: true` cases, and `assets/timer.js` adds a timer that can't be paused and records time used in the results.
- Lesson 11's project is `practice-repos/0011-warehouse`. Check the user's work with `git diff practice-repos/` and `py -m unittest` run in that folder. On this machine `python` is the Microsoft Store stub, so use `py`. The VS Code Python extension wasn't installed on 2026-11-05.
- Lesson 11's reference fix: `>=` in `Inventory.has`, and in `line_total`, `total * (100 - BULK_PERCENT_OFF) // 100` when `qty >= BULK_QTY`.
- The recruiter email the user pasted lists the demo and prep links as labels only, with no URLs. The exact language list is in the separate invitation email from noreply@mail.amazon.jobs. The demo offers several languages ("choose the link that aligns with the framework and language you're most comfortable with"), so Python is assumed until the demo shows otherwise.
- Lesson 10 results arrived on 2026-11-05. Lesson 12 (mixed practice set) was written the same day, on request ("more practice problems"). Lesson 11 (repo) hasn't been done yet. Keep it before the OA, because it's the only practice for the repository question.
- The LeetCode lines asked for in the results keep going unreported. Don't depend on them. The in-page hidden tests are the evidence.
- Lesson 12 results arrived on 2026-11-07, with all three hints opened and Exact Gap skipped. The same three Python misconceptions were missed again, and `elsif` hints at Ruby habits, so Lesson 13 uses `assets/python-playground.js` (`mountPlayground(el, { code })`, a run-it-and-see box) instead of quiz feedback alone. Lesson 13 is meant for 11-08, after Lesson 11 (repo) on 11-07. The reference `reference/python-rules.html` collects every Python rule the user has missed.
- Lesson 13 results arrived on 2026-11-07, the same day it was written. It was the first fully hint-free set, at 11 and 10 minutes. Lesson 11 (repo) is still not done, so recommend it before any new problem set. The user does lessons faster than the suggested spacing, so plan for that.
- 2026-11-08: the user asked for "just a new leetcode lesson" instead of continuing Lesson 11 (the repo drill), after the tests failed to import because they were run from `tests/`. Lesson 14 has three real LeetCode Easies (724, 392, 169), with a trace-the-example habit and a warm-up on reusing names, None and range. Mention Lesson 11 once at most. Don't push it.
- Lesson 14 results arrived on 2026-11-08: 3 of 3 unaided, but quizzes went 2 of 9. Code evidence is ahead of the quiz evidence. Next is probably an OA-format rehearsal, with a forced read-through step.
- 2026-11-08: the user pasted Amazon's OA prep course page. Amazon's intern page says coding takes about 70 minutes, then Workstyles about 15 minutes, then a required survey, and the course says 2 coding problems. That conflicts with the recruiter email (1 coding problem, a repository task and Work Style). Told the user their invitation email decides. Lesson 15 is a 70-minute rehearsal with 2 problems, Problem A being Amazon's own review-suggestions demo problem, taken from its video transcript. I can't watch videos. Only two transcripts (.docx on cdn.cms.amazon.jobs) were readable.
- 2026-11-08: mission refocused on interview LeetCode and the Leadership Principles / Work Style (see learning record 0016). Lessons 16 (principles) and 17 (Amazon's robot interview problem, 25 min, aim for 1 run) were written. `assets/worksheet.js` saves STAR stories locally and copies them as text. Ask the user to paste their stories for feedback.
