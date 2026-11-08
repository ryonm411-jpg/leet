# Lesson 13: the first fully unaided set, and well under time

All three unseen problems passed with no hint opened, which is a first for a timed set. Biggest Drop passed on run 1 in about 11 minutes, and Busiest Hour took about 10. The running-value idea that needed help in Lessons 9 and 12 now works unaided, and the new tie rule (smallest hour) was applied correctly by counting first and then choosing.

What's left is mechanical:
- **Reversed comparisons.** Repeat Within k had `seen[i] - indx >= k` instead of `indx - seen[i] <= k`. Tracing the one visible example by hand would have caught it, the same reversal habit seen in Lesson 7.
- **One name, one value.** Busiest Hour overwrote its own parameter (`hours = []`) and then looped over it. The user also chose NameError for a shadowed `max` for the second time. Both come from the same missing rule: assigning to a name replaces what it meant.
- **Returning `None`.** The user now knows the last line isn't returned, but thinks printing the result shows nothing, not `None`.
- **Pattern labels.** Two pointers was chosen in the quiz for two problems worded "positions i < j", while the code used the right pattern each time. The quiz miss is about labels, not about solving.

**Implications:** the coding side is close to OA-ready for Easy problems. The highest-value next step is Lesson 11, the repository drill. It's still undone (no diff in `practice-repos/`), and it's the only practice for the OA's second section. Future warm-ups should make the user trace the visible example by hand, writing down values, before the first Run.

**Evidence:** Lesson 13 results pasted on 2026-11-07, the same day as Lesson 12's, against the suggested 11-08. No solutions opened.
