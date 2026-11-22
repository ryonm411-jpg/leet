// Typed recall cards: type the Python from memory, no options to pick from.
// Spaces are ignored when checking, so "stack.append( x )" matches "stack.append(x)".
// Markup:
// <div class="recall" data-skill="python-builtins-recall"
//      data-prompt="Java: stack.push(x)" data-answers="stack.append(x)"
//      data-why="Shown after checking"></div>
// data-answers takes several accepted answers separated by " || ".
// The first Check counts as the result (sent as a lesson:quiz event, as quiz.js does).
function mountRecall(card) {
  const answers = card.dataset.answers.split(" || ");
  const squash = (s) => s.replace(/\s+/g, "").replace(/;$/, "");
  card.innerHTML = `
    <p class="q">${card.dataset.prompt}</p>
    <div class="recall-row">
      <input type="text" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Your Python">
      <button type="button">Check</button>
    </div>
    <p class="feedback" aria-live="polite"></p>`;
  const input = card.querySelector("input");
  const feedback = card.querySelector(".feedback");
  let answered = false;

  function check() {
    const typed = input.value.trim();
    if (!typed) return;
    const correct = answers.some((a) => squash(a) === squash(typed));
    if (!answered) {
      answered = true;
      document.dispatchEvent(new CustomEvent("lesson:quiz", {
        detail: { quiz: card, correct, answer: typed },
      }));
    }
    card.classList.toggle("right", correct);
    card.classList.toggle("missed", !correct);
    feedback.textContent = correct
      ? "Correct. " + (card.dataset.why || "")
      : `Not quite. Python: ${answers[0]}. ${card.dataset.why || ""} Type it once more to fix it in memory.`;
  }
  card.querySelector("button").addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
}
document.querySelectorAll(".recall").forEach(mountRecall);
