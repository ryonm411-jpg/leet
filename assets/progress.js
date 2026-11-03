// Builds a results summary the learner can paste to their teacher agent.
// Results are saved in localStorage, so they survive a refresh.
// Quizzes need data-skill. Solution <details> need data-solution.
// mountResults(element, { lesson: "Lesson 1: Two Sum" })
function mountResults(root, { lesson }) {
  const storageKey = "lesson-results:" + lesson;
  const quizzes = [...document.querySelectorAll(".quiz[data-skill]")];
  let quizResults = {}; // quiz position in the page -> { correct, answer }
  let exercises = {}; // skill -> { runs, passed, problems, firstCode, lastCode }
  let solutionsOpened = []; // data-solution values, "" when the attribute has no value

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey)) || {};
    quizResults = saved.quizResults || {};
    exercises = saved.exercises || {};
    solutionsOpened = saved.solutionsOpened || [];
  } catch {
    // Unreadable or unavailable storage: start with empty results.
  }

  root.classList.add("results");
  root.innerHTML = `
    <pre tabindex="0"><code></code></pre>
    <div class="controls">
      <button type="button" data-action="copy">Copy results</button>
      <button type="button" data-action="clear">Clear results</button>
    </div>
    <p class="small" aria-live="polite"></p>`;
  const output = root.querySelector("code");
  const copy = root.querySelector('[data-action="copy"]');
  const clear = root.querySelector('[data-action="clear"]');
  const message = root.querySelector(".small");

  function render() {
    const lines = [lesson + " results"];
    quizzes.forEach((quiz, index) => {
      const result = quizResults[index];
      const outcome = !result ? "not answered"
        : result.correct ? "correct first try"
        : `missed first try, chose "${result.answer}"`;
      lines.push(`${quiz.dataset.skill}: ${outcome}`);
    });
    const skills = Object.keys(exercises);
    if (skills.length === 0) lines.push("exercise: not run");
    skills.forEach((skill) => {
      const exercise = exercises[skill];
      lines.push(`${skill}: ${exercise.passed ? "passed" : "not passed"} after ${exercise.runs} run(s)`);
      exercise.problems.forEach((problem) => lines.push(`  problem seen: ${problem}`));
      lines.push("  first attempt:", exercise.firstCode);
      if (exercise.lastCode !== exercise.firstCode) lines.push("  final attempt:", exercise.lastCode);
    });
    const named = solutionsOpened.filter(Boolean);
    lines.push(`solution opened: ${solutionsOpened.length === 0 ? "no" : named.length ? "yes (" + named.join(", ") + ")" : "yes"}`);
    output.textContent = lines.join("\n");
  }

  function update() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ quizResults, exercises, solutionsOpened }));
    } catch {
      message.textContent = "Your browser blocked saving, so copy your results before refreshing.";
    }
    render();
  }

  document.addEventListener("lesson:quiz", ({ detail }) => {
    const index = quizzes.indexOf(detail.quiz);
    // Keep the earliest answer, even if the quiz is answered again after a refresh.
    if (index === -1 || quizResults[index]) return;
    quizResults[index] = { correct: detail.correct, answer: detail.answer };
    update();
  });
  document.addEventListener("lesson:exercise", ({ detail }) => {
    if (!exercises[detail.skill]) {
      exercises[detail.skill] = { runs: 0, passed: false, problems: [], firstCode: detail.code };
    }
    const exercise = exercises[detail.skill];
    exercise.lastCode = detail.code;
    exercise.runs++;
    exercise.passed = exercise.passed || detail.passed;
    detail.problems.forEach((problem) => {
      if (!exercise.problems.includes(problem)) exercise.problems.push(problem);
    });
    update();
  });
  // Toggle events don't bubble, so listen during capture.
  document.addEventListener("toggle", ({ target }) => {
    if (target.matches("details[data-solution]") && target.open) {
      if (solutionsOpened.includes(target.dataset.solution)) return;
      solutionsOpened.push(target.dataset.solution);
      update();
    }
  }, true);

  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(output.textContent);
      message.textContent = "Copied. Paste it into the chat.";
    } catch {
      const selection = getSelection();
      selection.selectAllChildren(output);
      message.textContent = "Press Ctrl+C to copy the selected text, then paste it into the chat.";
    }
  });
  clear.addEventListener("click", () => {
    if (!confirm("Clear your saved results for this lesson?")) return;
    quizResults = {};
    exercises = {};
    solutionsOpened = [];
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // Nothing was saved if storage is unavailable.
    }
    message.textContent = "Results cleared.";
    render();
  });
  render();
}
