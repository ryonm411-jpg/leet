// Fill-in worksheet that saves as you type (localStorage) and copies as plain text,
// so the learner can paste it to their teacher agent for feedback.
// mountWorksheet(element, { key: "story-bank", title: "Story bank", fields: [{ label, hint, rows }] })
function mountWorksheet(root, { key, title, fields }) {
  const storageKey = "worksheet:" + key;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { saved = {}; }

  root.classList.add("worksheet");
  fields.forEach((field, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<span class="ws-label"></span><span class="small ws-hint"></span>`;
    label.querySelector(".ws-label").textContent = field.label;
    label.querySelector(".ws-hint").textContent = field.hint || "";
    const box = document.createElement("textarea");
    box.rows = field.rows || 3;
    box.value = saved[index] || "";
    box.addEventListener("input", () => {
      saved[index] = box.value;
      try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch { /* copy before leaving */ }
    });
    label.append(box);
    root.append(label);
  });

  const controls = document.createElement("div");
  controls.className = "controls";
  controls.innerHTML = `<button type="button">Copy as text</button> <span class="small" aria-live="polite"></span>`;
  const note = controls.querySelector("span");
  controls.querySelector("button").addEventListener("click", async () => {
    const text = [title].concat(fields.map((f, i) => `${f.label}:\n${(saved[i] || "").trim() || "(blank)"}`)).join("\n\n");
    try { await navigator.clipboard.writeText(text); note.textContent = "Copied."; }
    catch { note.textContent = "Couldn't copy. Select the text and copy it by hand."; }
  });
  root.append(controls);
}
