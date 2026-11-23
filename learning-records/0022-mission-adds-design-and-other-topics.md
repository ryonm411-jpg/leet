# Mission adds system design and other interview topics

On 2026-11-23 the user asked to "begin to include some system design and other topics that are likely to show up/i need to be prepared for in interviews". System design had been out of scope since the mission was first written.

- **Sources disagree with the user's instinct, a little.** The Tech Interview Handbook says "Interns aren't typically given system design questions", and that design rounds are mostly for experienced candidates. Amazon's topic page lists object-oriented design, databases, distributed computing, OS and internet topics, and mentions "system design white boarding". So intro design is worth some time, but behavioural, project talk, and CS basics as follow-ups are more likely for an intern or new grad.
- **Decision:** add a third track weighted by likelihood (`reference/interview-topics.html`). Coding stays the main track. Senior-level distributed design stays out of scope.
- **Bridge from strengths:** the first design lesson (25) ends in a Python class whose core is two dicts, the seen map, so design builds on hash-map skill that's already strong, and the class also starts object-oriented design (Python `self` and `__init__` for a Java-habit learner).
- **Also changed:** Lesson 24 replaces the tick-box checklist with `assets/predict.js`. The user types what their code will return for example 1 before the first run, and the page grades that prediction against the real output. That tests the trace itself (see learning record 0021).

**Next topic lessons, in order of likelihood:** the behavioural Big Three plus a project deep-dive, then "what happens when you open a URL", then databases (SQL vs key-value, indexes), then a second design question.

**Evidence:** the user's /teach request on 2026-11-23, and the sources fetched that day.
