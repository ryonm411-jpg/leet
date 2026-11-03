// Multiple choice quizzes. Markup:
// <div class="quiz">
//   <p class="q">Question</p>
//   <div class="options">
//     <button data-correct data-why="Shown when correct">A</button>
//     <button data-why="Shown when this answer is chosen">B</button>
//   </div>
// </div>
document.querySelectorAll(".quiz").forEach((quiz) => {
  const list = quiz.querySelector(".options");
  const options = [...list.children];

  // Shuffle so answer position gives no clue, including on review.
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  options.forEach((option) => list.append(option));

  const feedback = document.createElement("p");
  feedback.className = "feedback";
  feedback.setAttribute("aria-live", "polite");
  quiz.append(feedback);

  let answered = false;
  options.forEach((option) => {
    option.type = "button";
    option.addEventListener("click", () => {
      // Only the first attempt counts as evidence for the results summary.
      if (!answered) {
        answered = true;
        document.dispatchEvent(new CustomEvent("lesson:quiz", {
          detail: { quiz, correct: "correct" in option.dataset, answer: option.textContent },
        }));
      }
      options.forEach((other) => other.classList.remove("wrong"));
      if ("correct" in option.dataset) {
        option.classList.add("correct");
        options.forEach((other) => { other.disabled = true; });
        feedback.textContent = "Correct. " + option.dataset.why;
      } else {
        option.classList.add("wrong");
        feedback.textContent = "Not quite. " + option.dataset.why + " Try again.";
      }
    });
  });
});
