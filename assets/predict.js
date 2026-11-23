// Predict-then-run gate. Replaces the tick-box checklist (preflight.js), which got ticked
// without the checks being done (Lesson 23).
// Before the FIRST run, the learner types what their code will return for the first example.
// After that run, it shows the prediction next to what the code really gave, and records
// whether they matched (a lesson:quiz event, so progress.js lists it under data-skill).
// mountPredict(n, { skill, example, expected })
//   needs #ex-N and an empty #predict-N; skill is the exercise's skill;
//   example is the label of its first visible case; expected is that case's expected value.
function mountPredict(n, { skill, example, expected, quizSkill = "trace-before-run" }) {
  const ex = document.getElementById("ex-" + n);
  const box = document.getElementById("predict-" + n);
  box.classList.add("gate", "predict");
  box.dataset.skill = quizSkill;
  box.innerHTML = `
    <p class="small"><strong>Before your first Run:</strong> trace your code as typed, line by line, on <code></code>. What will <em>your code</em> return? If it will crash, type the error name, such as NameError.</p>
    <div class="recall-row"><input type="text" spellcheck="false" autocomplete="off" aria-label="Your prediction"></div>
    <p class="gate-msg" aria-live="polite"></p>`;
  box.querySelector("code").textContent = example;
  const input = box.querySelector("input");
  const msg = box.querySelector(".gate-msg");
  const squash = (s) => String(s).replace(/\s+/g, "").replace(/['"]/g, "").toLowerCase();
  let prediction = null;
  let done = false;

  ex.addEventListener("click", (event) => {
    if (prediction !== null || !event.target.closest(".controls button")) return;
    if (!input.value.trim()) {
      event.stopImmediatePropagation();
      msg.textContent = "Type your prediction first. It's your interview answer.";
      return;
    }
    prediction = input.value.trim();
    input.disabled = true;
    msg.textContent = "Locked in. Running...";
  }, true);

  document.addEventListener("lesson:exercise", ({ detail }) => {
    if (done || prediction === null || detail.skill !== skill) return;
    done = true;
    const failLine = detail.problems.find((p) => p.startsWith("Fail: " + example + "."));
    const errorLine = detail.problems.length && !detail.problems.some((p) => /^(Fail|Hidden|Too slow)/.test(p)) ? detail.problems[0] : null;
    let actual;
    if (errorLine) actual = errorLine;
    else if (failLine) actual = failLine.slice(failLine.lastIndexOf(", got ") + 6);
    else actual = JSON.stringify(expected);
    const errorName = (actual.match(/^(\w+Error)/) || [])[1];
    const correct = squash(prediction) === squash(actual) || (errorName && squash(prediction) === squash(errorName));
    msg.textContent = (correct ? "Your trace matched. " : "Your trace didn't match. ") +
      `You predicted ${prediction}. Your code gave ${actual}.` +
      (correct ? "" : " Find the line where your trace and the code split before running again.");
    document.dispatchEvent(new CustomEvent("lesson:quiz", {
      detail: { quiz: box, correct, answer: `predicted ${prediction}, code gave ${actual}` },
    }));
  });
}
