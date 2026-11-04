// Step-through algorithm trace.
// mountTrace(element, { cells: [...], steps: [{ active, state, note }] })
// active is one index, or a list of indexes to highlight a window.
function mountTrace(root, { cells, steps }) {
  root.classList.add("trace");
  root.innerHTML = `
    <div class="cells"></div>
    <p class="state"></p>
    <p class="note" aria-live="polite"></p>
    <div class="controls">
      <button type="button" data-back>Back</button>
      <button type="button" data-next>Next</button>
      <span class="small" data-position></span>
    </div>`;

  const cellRow = root.querySelector(".cells");
  const cellEls = cells.map((value) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = value;
    cellRow.append(cell);
    return cell;
  });
  const back = root.querySelector("[data-back]");
  const next = root.querySelector("[data-next]");
  let index = 0;

  function render() {
    const step = steps[index];
    const active = [].concat(step.active);
    cellEls.forEach((cell, i) => cell.classList.toggle("active", active.includes(i)));
    root.querySelector(".state").textContent = step.state;
    root.querySelector(".note").textContent = step.note;
    root.querySelector("[data-position]").textContent = `Step ${index + 1} of ${steps.length}`;
    back.disabled = index === 0;
    next.disabled = index === steps.length - 1;
  }

  back.addEventListener("click", () => { index--; render(); });
  next.addEventListener("click", () => { index++; render(); });
  render();
}
