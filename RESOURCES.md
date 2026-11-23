# Coding Interview Resources

## Knowledge

- [Guide: Coding interview prep, Tech Interview Handbook](https://www.techinterviewhandbook.org/coding-interview-prep/)
  The overall process, time estimates (about 30 hours minimum, about 100 hours well prepared) and evaluation criteria. Use for: planning. Some links on the site are affiliate links, so treat its paid-course suggestions with care.
- [Plan: 3-month study plan, Tech Interview Handbook](https://www.techinterviewhandbook.org/coding-interview-study-plan/)
  Topics in priority order, followed by 75 practice questions. Use for: deciding what comes next.
- [Tool: Grind 75](https://www.techinterviewhandbook.org/grind75/)
  A customisable question list from the author of Blind 75. Use for: choosing practice problems to fit the available time.
- [Article: Coding interview techniques, Tech Interview Handbook](https://www.techinterviewhandbook.org/coding-interview-techniques/)
  How to get unstuck and how to answer "can we do better?". Use for: problem-solving process.
- [Cheatsheet: Hash table, Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/hash-table/)
  Complexity, interview relevance and essential questions. Use for: hash map lessons. The site's algorithm cheatsheets cover the other topics too.
- [Cheatsheet: Stack, Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/stack/)
  Essential questions (Valid Parentheses, Implement Queue using Stacks), a practice list including Daily Temperatures, and corner cases (empty stack, one item, two items). Read on 2026-11-17. Use for: stack lessons.
- [Tutorial: Using Lists as Stacks, Python docs](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks)
  The official tutorial: `append()` pushes and `pop()` with no index takes the top. Read on 2026-11-17. Use for: stack syntax.
- [Cheatsheet: Array, Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/array/)
  Array techniques, including two pointers and sliding window, with practice questions. Use for: two pointers lessons.
- [Reference: String methods, Python docs](https://docs.python.org/3/library/stdtypes.html#string-methods)
  Official behaviour of `isalnum`, `lower` and the other string methods. Use for: any string syntax claim.
- [Reference: Time complexity of built-in types, Python docs](https://docs.python.org/3/builtins/time-complexity.html)
  The official costs of list, dict and set operations. Use for: any Python complexity claim.
- [Problems: LeetCode](https://leetcode.com/problems/two-sum/)
  The primary practice platform and source of problem statements. Use for: real submissions.
- [Video: Two Sum, NeetCode](https://www.youtube.com/watch?v=KLlXCFG5TnA)
  Brute force and one-pass walkthrough in Python. Use for: seeing the Two Sum reasoning explained another way.

- [Guide: Amazon Leadership Principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles)
  Amazon's official list of principles, which the Work Style Assessment is tied to, according to the OA invitation email. Use for: Work Style prep.
- [Docs: Python testing in VS Code](https://code.visualstudio.com/docs/python/testing)
  Microsoft's official guide to the Testing panel, Debug Test and unittest settings. Use for: the repository question drill.
- [Docs: Python debugging in VS Code](https://code.visualstudio.com/docs/python/debugging)
  Microsoft's official guide to breakpoints and inspecting variables. Use for: the repository question drill.
- [Docs: unittest, Python docs](https://docs.python.org/3/library/unittest.html)
  The official reference for the test framework used in the practice repos. Use for: reading and writing tests.
- [List: NeetCode 150](https://neetcode.io/practice)
  A problem list grouped by pattern. Use for: the problem queue after the OA, as the council recommended. Attempt each problem before watching its video. Not fetched this session.
- [Tutorial: More Control Flow Tools, Python docs](https://docs.python.org/3/tutorial/controlflow.html)
  The official tutorial sections on `if`/`elif`, `range` and defining functions, including "falling off the end of a function also returns None". Use for: the Python rules the user has missed.
- [Guide: Online assessment prep for SDE roles, Amazon](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa)
  Amazon's official intern OA page: coding about 70 minutes, Workstyles about 15 minutes, a required feedback survey, the rule that public docs are allowed and browser use is logged, and the practice test link. Use for: OA rules. Read on 2026-11-08.
- [Video: Amazon OA prep playlist (YouTube)](https://www.youtube.com/watch?v=_SDAj45PW8s&list=PL9JNmYfQa0bjNaqTlDQwECjsu78k2FwKC)
  Amazon's own videos. The transcripts were read for "What is Amazon Assessing" (five grading criteria) and "How to break down the coding problem" (the review suggestions problem, read paragraph by paragraph). The other videos haven't been checked. Use for: OA approach, and Lesson 15.
- [Video: SDE Interview Coding Example, Amazon (YouTube)](https://www.youtube.com/watch?v=yKz2kPip4sg)
  An Amazon engineer solves a robot time-series problem in LiveCode (no running code, about 25 minutes): clarifying questions on input and use cases, a working solution first, readability, tracing a non-happy case, and complexity. Its transcript is a .docx linked from the [software development topics page](https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics). Use for: Lesson 17 and the live interview format.
- [Talk: Andy Jassy on the Leadership Principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles)
  The user pasted transcripts of Jassy explaining each principle, including two-way doors, owners vs renters, and "follow the anecdotes". The original page wasn't confirmed, so the link goes to the official principles page. Use for: Work Style and behavioural prep (Lesson 16, `reference/leadership-principles.html`).

- [Python docs: bisect](https://docs.python.org/3/library/bisect.html)
  Official docs for binary search on sorted lists. `bisect_left` will "Locate the insertion point for x in a to maintain sorted order". The Tech Interview Handbook has no binary search page (404 on 2026-11-22). Its [array page](https://www.techinterviewhandbook.org/algorithms/array/) covers it in one line ("Is the array sorted or partially sorted? If it is, some form of binary search should be possible"). Use for: Lesson 23 and `reference/binary-search-cheatsheet.html`.

- [System Design Primer (donnemartin, GitHub)](https://github.com/donnemartin/system-design-primer)
  The most widely used free system design guide. Its four steps: use cases, constraints and assumptions, then high-level design, then core components, then scale. Its [Pastebin / Bit.ly solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md) works through scope, numbers (10M writes and 100M reads a month), a 7-character Base 62 code, a cache and read replicas. Use for: Lesson 25 and `reference/system-design-cheatsheet.html`.
- [Tech Interview Handbook: system design](https://www.techinterviewhandbook.org/system-design/) and [behavioural interviews](https://www.techinterviewhandbook.org/behavioral-interview/)
  The design page says "Interns aren't typically given system design questions". The behavioural page names the "Big Three": tell me about yourself, your favourite project, and a conflict you resolved. Use for: weighting topics (`reference/interview-topics.html`).
- [Amazon: software development interview topics](https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics) (redirects to atoz.amazon)
  Lists programming language, data structures, algorithms, coding, object-oriented design, databases, distributed computing, operating systems, internet topics, and ML and AI. Use for: the topic map.

## Wisdom (Communities)

- [Exponent Practice (peer mock interviews, formerly Pramp)](https://www.tryexponent.com/blog/introducing-exponent-practice)
  Live practice with other candidates, including students preparing for a first internship. Use for: mock interviews once about 60% through the plan. Sources conflict on the free-tier limits, so check them before relying on it.
- [r/cscareerquestions](https://www.reddit.com/r/cscareerquestions/)
  Large CS careers forum. Use for: questions about internship and new-grad hiring. Not verified this session because Reddit blocked automated access, so check its rules and quality first.

## Gaps

- Amazon's current OA format is documented only in the user's invitation email. It lists one coding problem, a multi-file repository question and a Work Style Assessment. Third-party guides found on 2026-11-05 describe an older format with two problems and are unverified.
