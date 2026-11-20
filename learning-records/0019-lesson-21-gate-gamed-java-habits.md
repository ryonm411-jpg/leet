# Lesson 21: stacks land, the Run gate gets gamed, and Java/JS names leak in

Lesson 21 results were pasted on 2026-11-20. All three stack problems passed. Remove Adjacent Duplicates, an unseen problem, was unaided but took 7 runs. Valid Parentheses took 6 runs with the hint, and Daily Temperatures 9 runs with the hint. Two of the three timers ran out.

- **The trace gate stopped working.** Trace comments were filler (`#trace`, `idk`, `fff`, `afajf`) typed to unlock Run. A gate that counts comments measures typing, not tracing. It's retired in favour of a checklist that blocks only the first run (`assets/preflight.js`). It lists the user's own most expensive slips, and frames the first run as the interview answer.
- **Most runs were spent on Python API names from Java and JavaScript:** `push`, `.contains`, `.len()`, plus `i++` from the Lesson 18 retry. The user never answered the question about other languages, but the evidence now points strongly at Java or JavaScript. `range(list)` came back a third time.
- **The empty-stack misconception is concept, not slip.** The quiz chose `[]` for `[][-1]`, and both first attempts read `stack[-1]` unguarded.
- **Real gains:** rebinding a parameter was right for the first time after three misses, on a new variant. Capped-key O(1) space was right on a new item. Dict key direction was right in both quiz and code. The final stack code was idiomatic.

**Implications:** the bottleneck is Python fluency under pressure, not choosing a pattern. Next lessons should drill writing Python from memory (short, many reps, no runs) alongside problems, and keep the first-run framing. Next stack check: a cold Valid Parentheses in a few days, as part of a mixed set.

**Evidence:** Lesson 21 results panel, pasted 2026-11-20.
