// The Run gate: an exercise's Run button only works once its code has at least
// 3 trace comment lines and the read-through box is ticked. The box unticks after each run.
// Expects #ex-N, #read-N (checkbox) and #gate-msg-N in the page. Use: [1, 2, 3].forEach(mountRunGate)
function mountRunGate(n) {
  const ex = document.getElementById("ex-" + n);
  const box = document.getElementById("read-" + n);
  const msg = document.getElementById("gate-msg-" + n);
  ex.addEventListener("click", (event) => {
    if (!event.target.closest(".controls button")) return;
    const code = ex.querySelector("textarea").value;
    const traceLines = code.split("\n").filter((line) =>
      /^\s*#/.test(line) && !/Trace the example/.test(line) && line.replace(/[#\s]/g, "").length > 2).length;
    if (traceLines < 3) {
      event.stopImmediatePropagation();
      msg.textContent = "Not yet: write at least 3 # lines tracing the example (" + traceLines + " so far).";
      return;
    }
    if (!box.checked) {
      event.stopImmediatePropagation();
      msg.textContent = "Not yet: read your code top to bottom, then tick the box.";
      return;
    }
    msg.textContent = "";
    box.checked = false;
  }, true);
}
