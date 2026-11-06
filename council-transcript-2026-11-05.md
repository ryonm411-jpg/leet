# Council transcript, 2026-11-05

Original question: is this a good plan to learn LeetCode and prepare for the Amazon OA, or should I focus more on NeetCode or something else?

Anonymisation key: A = Executor, B = Outsider, C = Contrarian, D = Expansionist, E = First Principles.

# Question to the council

Is the proposed 7-day plan a good way to prepare for an Amazon SDE Intern Online Assessment (OA) and for LeetCode-style interviews in general? Or should the user switch to NeetCode (the NeetCode 150 roadmap plus its videos), or to something else? The plan is built around a personal AI-tutor "lesson" workspace.

## The user

- A beginner at interview problem solving, with basic Python. Has tried a few LeetCode problems.
- Has done 8-9 custom AI-built lessons in about a week: hash maps, two pointers, and the start of sliding window. Each lesson is an interactive HTML page with in-browser Python exercises and quizzes.
- Weak spots so far:
  - space complexity
  - Python syntax slips, such as `s.len()`, `else if` and misusing `dict.get`
  - relying on running code over and over, though it has recently dropped to one run per problem
- Moves fast. Has not submitted anything on LeetCode.

## The OA, according to the invite email

- One coding problem in a single file, in a full-screen IDE, with no outside resources allowed.
- A multi-file "code repository question" in a VS Code-style IDE with IntelliSense, Run and Debug.
- A Work Style Assessment tied to Amazon's Leadership Principles.
- About 2.5 hours in total. The timer can't be paused.
- 7 days to finish, counted from an invitation that arrived around 2026-11-05. The exact time isn't confirmed.
- Third-party guides describe an older format: 2 problems in about 70 minutes, at Medium level.

## Longer goal

Pass live coding interviews by the end of January 2027.

## The proposed plan

| Day | What happens |
|---|---|
| 1 | Logistics, Amazon's demo, finish the sliding-window lesson |
| 2 | One timed, unseen problem: write a brute force first, trace by hand before running |
| 3 | A lesson on working in an unfamiliar multi-file Python codebase: read, debug, fix and extend it using tests and the debugger |
| 4 | Mixed pattern recognition on unseen problems, plus sorting and greedy |
| 5 | Full timed mock, then read the Leadership Principles |
| 6 | Take the OA |
| 7 | Buffer |

The alternative being considered is switching to NeetCode 150 and its videos, or to something else.

# Anonymized responses

**Response A:**
Keep the plan. Switching to NeetCode now is the wrong call. NeetCode 150 is a 3-month roadmap and the user has 7 days, so they'd spend them watching videos instead of practising the actual test. The plan has three execution gaps:

1. **Day 1 is too small, and the clock may already be running.** Open the invite email in the next hour and confirm the real deadline. Do Amazon's demo today. It's the only practice that matches the real IDE, timer and repo-question format.
2. **The user has never submitted on LeetCode.** The lessons have a friendly in-browser runner, but the OA has hidden test cases. From Day 2, every practice problem should be submitted on LeetCode under a 35-40 minute timer. Use NeetCode's list as the source of problems, but skip the videos until after a failed attempt. Aim for 2-3 unseen problems a day.
3. **Day 3 needs a concrete task.** Clone any small Python repo with tests and run pytest. Break a function on purpose, then fix it with the VS Code debugger and breakpoints.

Keep the Day 5 mock. Prepare the Leadership Principles in 45 minutes: one example for each of 5-6 principles. After the OA, NeetCode 150 becomes the backbone through January, and the AI lessons drill the tracked weak spots.

**Response B:**
NeetCode doesn't matter yet. That's a decision for after the OA.

1. **There's no practice in the test format.** Everything so far happened inside the custom pages. Do at least two sessions on plain LeetCode or HackerRank, with a blank editor, a timer and no hints.
2. **"Runs code too often" is flagged as a flaw, but the OA rewards it.** The repo question gives you Run and a debugger. Don't train yourself out of using tools you're explicitly given.
3. **Day 4 introduces new topics too late.** Sorting and greedy two days before the test is new learning. Do timed unseen Easy problems in topics already covered instead.
4. **The Work Style Assessment is squeezed into the end of Day 5.** It can screen you out no matter how well you code, so give it a real block of time.
5. **Facts are missing:** the exact deadline, daily hours, and whether the test must be done in one sitting.
6. **Aim for partial credit.** A brute force that passes some test cases, plus a finished repo task. Write that goal down so you don't freeze.

**Response C:**
The fatal flaw is that the plan treats the OA as a learning milestone. A beginner who has solved about 8 Easy problems in an AI sandbox won't reliably solve an unseen Amazon Medium in 5 days, and neither the plan nor NeetCode changes that. So the real goal is to get as much partial credit as possible and avoid self-inflicted losses.

1. **No practice in the real environment.** The user has never hit hidden test cases, parsed input themselves, or worked under a clock that won't pause. Day 1 should include 2-3 timed LeetCode submissions.
2. **On Day 3 the tutor would invent its own repo task.** That trains for the AI's guess at the format, not Amazon's. Amazon's demo is the only reliable signal, so do it on Day 1 and copy its format.
3. **The deadline is fuzzy.** Taking the test on Day 6 leaves almost no margin. Confirm the cutoff today.
4. **The Work Style Assessment is an afterthought,** even though it may screen people out and is the cheapest part to prepare.
5. **The pace is a warning sign.** Doing several lessons a day while still debugging by re-running looks like consuming lessons, not retaining them.

On NeetCode: switching now is wrong for the OA but right for January. After the OA, move to NeetCode 150 on real LeetCode and keep the tutor for post-mortems.

**Response D:**
The biggest opportunity is one that nobody is pricing in.

1. **The repo question is a hidden edge.** All OA prep material, NeetCode included, trains for the old format, so most candidates will treat this question as an afterthought. Spend more on Day 3: two or three repo drills, not one. In a VS Code-style IDE, the habit of running code to debug is an advantage, so teach the debugger deliberately.
2. **The Work Style Assessment is free points.** Write 6-8 STAR stories now. They can be reused in the Amazon behavioural loop, in other companies' interviews and in the January mocks.
3. **The tutor workspace is worth more than NeetCode,** because it tracks personal weak spots. After the OA, use the NeetCode list as the queue of problems and the lessons as the engine for spaced repetition and mocks.
4. **Plan for the upside.** If the OA goes well, the interview loop could come within 2-4 weeks. Start a light talk-aloud and mock-interview track on Day 7.

Verdict: keep the plan, weight it more towards repo drills and the Leadership Principles, and use NeetCode 150 as a list of problems.

**Response E:**
The question assumes the decision is about tools. It isn't. There are two problems running on different clocks.

**Problem 1, the OA in 7 days.** One week can't turn a beginner into someone who reliably solves Mediums. What it can change is how much of their skill survives test conditions. The OA rules out three crutches: repeated runs, easy syntax lookups and familiar lesson-shaped problems. So the goal this week is performing under OA conditions, not learning new topics. The repo task is closer to normal software work, and few candidates will have prepared for it, so give it more than one day. The Work Style Assessment is scored and cheap to prepare.

- Cut passive activities, such as watching the overview video.
- Do every practice problem in a plain editor with a timer, with no AI and no in-browser checker.
- Move the OA to Day 5, and check the exact deadline today.

**Problem 2, interviews in 3 months.** A list of problems covering the patterns is the right tool, and NeetCode 150 is a fine one. But the user has submitted nothing on LeetCode. Lessons and videos both teach recognising a solution, while interviews test producing one cold, out loud. Progress should be measured in unseen problems solved without help, timed and spoken aloud.

Verdict: keep the plan, but rebuild it around test conditions and the repo task. After the OA, use NeetCode 150 as the problem list, not the videos.

# Peer reviews and chairman verdict

Votes for strongest: E (First Principles) 4, A (Executor) 1. Biggest blind spot: D (Expansionist), 5 of 5.

Everyone missed:
- which language the repo question uses
- a time budget for the 2.5 hours
- a drill for writing Python syntax from memory
- an external benchmark, because the tutor is grading itself
- proctoring and integrity
- that the Work Style Assessment is forced-choice, not STAR stories

See council-report-2026-11-05.html for the full verdict, the revised plan and the review summaries.
