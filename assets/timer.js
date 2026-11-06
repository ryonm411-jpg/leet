// Countdown timer for timed practice. It can't be paused, like the online assessment.
// mountTimer(element, { label: "problem", minutes: 30 })
// Sends "lesson:timer" events, which assets/progress.js adds to the results.
function mountTimer(root, { label, minutes }) {
  root.classList.add("timer");
  root.innerHTML = `
    <span class="clock" aria-live="off">${String(minutes).padStart(2, "0")}:00</span>
    <button type="button" data-action="start">Start ${minutes}-minute timer</button>
    <button type="button" data-action="stop" hidden>I'm done</button>
    <span class="small" aria-live="polite"></span>`;
  const clock = root.querySelector(".clock");
  const start = root.querySelector('[data-action="start"]');
  const stop = root.querySelector('[data-action="stop"]');
  const message = root.querySelector(".small");
  const limit = minutes * 60;
  let startedAt = null;
  let tick = null;

  function elapsed() {
    return Math.min(limit, Math.floor((Date.now() - startedAt) / 1000));
  }

  function show(secondsLeft) {
    clock.textContent = `${String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:${String(secondsLeft % 60).padStart(2, "0")}`;
    root.classList.toggle("low", secondsLeft <= 300);
  }

  function end(expired) {
    clearInterval(tick);
    stop.hidden = true;
    const seconds = elapsed();
    message.textContent = expired
      ? "Time's up. In the real test your code is submitted as it is, so stop here."
      : `Stopped with ${Math.floor((limit - seconds) / 60)} minutes left.`;
    document.dispatchEvent(new CustomEvent("lesson:timer", { detail: { label, seconds, limit: minutes, expired } }));
  }

  start.addEventListener("click", () => {
    startedAt = Date.now();
    start.hidden = true;
    stop.hidden = false;
    message.textContent = "Running. It can't be paused.";
    tick = setInterval(() => {
      const left = limit - elapsed();
      show(left);
      if (left <= 0) end(true);
    }, 1000);
  });
  stop.addEventListener("click", () => end(false));
}
