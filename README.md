# leet

A teaching workspace for LeetCode-style coding interviews in Python. The goal is SWE internship or new-grad interviews by about the end of January 2027. See [MISSION.md](MISSION.md).

## Progress snapshot (2026-11-24)

**Lessons done:** 1-18 (18 twice), 21-24. **Not done or not reported yet:** 19, 20, 25 (system design). **Next:** Lesson 26 (loop bounds, smallest-input predictions, cold Squares, "first True" binary search), then Lesson 25 if not done. First Bad Version cold is due about 11-26.

**Patterns learned:** seen map, frequency count, two pointers, fixed and variable sliding window, running value, prefix/suffix products, stack (including a monotonic stack), binary search (exact match; boundary search in progress). Next new patterns: linked lists, trees. Started system design (Lesson 25).

**Current focus:** off-by-one bounds (now adding `- 1` by reflex), and tracing fresh code as typed rather than as planned.

**Strengths**
- Usually picks the right approach, and solves Easies and some Mediums (Maximum Subarray, Squares of a Sorted Array, Isomorphic Strings) to a clean final solution.
- Fixed this week: reassigning a parameter, O(1) space for dicts with capped keys, and choosing a dict's key.

**Main weaknesses** (full detail and review dates in [WEAKNESSES.md](WEAKNESSES.md))
1. **Runs, not ideas.** 5-9 runs per problem, mostly from Python slips that reading the code would catch. That's the gap for a no-run interview.
2. **Java/JavaScript habits:** `push`, `.contains`, `.len()`, `i++`, `else if`, and `range(list)` (3 times).
3. **Index vs value:** names that hold a position where the item was meant, or the reverse, and `.items()` unpacked the wrong way round.
4. **Empty-list access:** believes `[][-1]` gives `[]`, so `stack[-1]` goes unguarded.
5. **Built-in names as variables:** `sum` and `dict` still appear.
6. **Tracing:** traces follow the plan, not the code. The trace-comment gate was filled with filler, so it's replaced by a first-run checklist (`assets/preflight.js`).

## Where things are
- `lessons/`: one HTML lesson each. Results panels are pasted back into chat.
- `reference/`: cheat sheets, the glossary, Python rules (with a Java/JS-to-Python table), and the practice queue.
- `learning-records/`: what each lesson's results showed, and what changed because of them.
- `WEAKNESSES.md`: the evidence-based weakness tracker, with spaced review dates.
- `NOTES.md`: teaching preferences and working notes.
- `assets/`: shared components (quiz, Python exercise runner, timer, trace, preflight checklist).
