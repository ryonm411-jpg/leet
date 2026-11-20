// Pre-run checklist. Blocks an exercise's FIRST Run until every box is ticked, then steps aside:
// the first run is the "interview answer", and later runs are free.
// Replaces run-gate.js's trace-comment count, which got filled with junk comments to unlock Run (Lesson 21).
// mountPreflight(n, items) needs #ex-N and an empty #preflight-N in the page. items are HTML strings.
function mountPreflight(n, items) {
  const ex = document.getElementById("ex-" + n);
  const box = document.getElementById("preflight-" + n);
  box.classList.add("gate");
  box.innerHTML =
    '<p class="small"><strong>Before your first Run</strong>, read your code once for each line below. Your first run is your interview answer.</p>' +
    items.map((item) => `<label style="display:block"><input type="checkbox"> ${item}</label>`).join("") +
    '<p class="gate-msg" aria-live="polite"></p>';
  const msg = box.querySelector(".gate-msg");
  let firstRunDone = false;
  ex.addEventListener("click", (event) => {
    if (firstRunDone || !event.target.closest(".controls button")) return;
    const left = [...box.querySelectorAll("input")].filter((check) => !check.checked).length;
    if (left) {
      event.stopImmediatePropagation();
      msg.textContent = "Not yet: " + left + (left === 1 ? " check" : " checks") + " left.";
      return;
    }
    msg.textContent = "First run used. Later runs are free.";
    firstRunDone = true;
  }, true);
}
