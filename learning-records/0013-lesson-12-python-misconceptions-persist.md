# Lesson 12: the ideas land, Python habits from another language don't

All three attempted problems passed in the end: Rising Streak, Top Seller and Budget Pairs. But every hint was opened, so none of them counts as unaided. Most failed runs came from Python mechanics, not the algorithm:
- an unclosed `(` and `[`
- `elsif`
- a variable named `max`
- the built-in `id` returned by accident
- a streak that was never counted after the loop

The three warm-up misconceptions were missed for the second time, on new code: `range(3)` is a TypeError, a function's last expression is returned, and a shadowed `sum` still works. Together with `elsif`, this looks like a Ruby mental model of Python. That's a hypothesis, not confirmed. Quiz feedback alone hasn't shifted it in two attempts.

Top Seller showed a new gap: the user updated the winner during the counting pass, so the tie rule broke. Counting first and then choosing is the fix.

**Implications:** Lesson 13 changes approach. Each misconception is predicted and then run in a live Python box (`assets/python-playground.js`), with a printable rules card (`reference/python-rules.html`) and a four-point read-before-run checklist. Its three unseen problems target the open gaps: running value (Biggest Drop), the tie rule after counting (Busiest Hour), and a seen map with positions (Repeat Within k). Lesson 11 (repo) is still undone, so it's scheduled first, on 11-07, with Lesson 13 on 11-08 for spacing.

**Evidence:** Lesson 12 results pasted on 2026-11-07. Exact Gap wasn't attempted. Timers: 17 min 10 s, and 4 min 48 s (probably stopped early).
