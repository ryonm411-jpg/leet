# Lesson 9: the new pattern needed the solutions, and the Amazon OA changes the next week

Sliding window was the first new pattern since the run counts dropped. Both exercises passed only after the solutions were opened, so neither counts as unaided. The first attempts show the idea wasn't there yet. Best Window Sum looped `range(nums)` and never built the first k-sum. Best Trade compared neighbouring days instead of carrying the cheapest day so far. Old slips came back under the load of new material: `range(nums)`, a missing `return`, and a variable named `max` that hid the built-in. The capped-key O(1) case was missed on its review date, so `complexity-analysis` is open again. The quizzes on the window idea itself were all right, which matches the Lesson 7 finding: quiz evidence runs ahead of code evidence.

On 2026-11-05 the user received an Amazon SDE Intern OA invitation, with 7 days to complete it. The format is one coding problem, a multi-file repository question in a VS Code-style editor, and a Work Style Assessment. A five-advisor council reviewed the prep plan. It kept the tutor workspace, rejected switching to NeetCode videos this week, and pushed for:
- practice under test conditions: hidden tests, a timer, LeetCode submissions
- no new topics before the OA
- a repository drill
- real time for the Work Style Assessment

After the OA, the NeetCode 150 list becomes the problem queue.

**Implications:** Lesson 10 (timed, hidden tests, a sliding window revisit) and Lesson 11 (a multi-file repo in VS Code) follow that plan. Lesson 10 re-tests the window unaided on a new problem. Don't add new patterns until after the OA. The mission's near-term deadline hasn't been changed yet, because the user hasn't confirmed it.

**Evidence:** Lesson 9 results pasted on 2026-11-05, with both solutions opened. The council report is in `council-report-2026-11-05.html`.
