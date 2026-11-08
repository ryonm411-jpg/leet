// Small "run it and see" Python box: edit a snippet, press Run, see what it prints
// or the error it raises. All playgrounds on a page share one Python worker.
// mountPlayground(element, { code: "print(1)" })
// Needs internet access, because Pyodide loads from a CDN.
const PLAYGROUND_PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";

const PLAYGROUND_HARNESS = String.raw`
import io, contextlib, traceback

def run_snippet(code):
    out = io.StringIO()
    error = ""
    try:
        with contextlib.redirect_stdout(out):
            exec(code, {"__name__": "__main__"})
    except Exception:
        error = traceback.format_exc(limit=0).strip().split("\n")[-1]
    return out.getvalue() + error
`;

const PLAYGROUND_WORKER = `
  importScripts(${JSON.stringify(PLAYGROUND_PYODIDE + "pyodide.js")});
  const ready = loadPyodide({ indexURL: ${JSON.stringify(PLAYGROUND_PYODIDE)} }).then((py) => {
    py.runPython(${JSON.stringify(PLAYGROUND_HARNESS)});
    postMessage({ type: "ready" });
    return py;
  }).catch((error) => postMessage({ type: "load-error", message: String(error) }));
  onmessage = async (event) => {
    const py = await ready;
    const run = py.globals.get("run_snippet");
    const output = run(event.data.code);
    run.destroy();
    postMessage({ type: "result", id: event.data.id, output });
  };
`;

const playgroundShared = { worker: null, ready: null, pending: {}, nextId: 0 };

function playgroundWorker() {
  if (playgroundShared.ready) return playgroundShared.ready;
  playgroundShared.ready = new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([PLAYGROUND_WORKER], { type: "text/javascript" }));
    const worker = new Worker(url);
    URL.revokeObjectURL(url);
    const fail = () => { playgroundShared.ready = null; worker.terminate(); reject(); };
    const timer = setTimeout(fail, 60000);
    worker.onerror = fail;
    worker.onmessage = ({ data }) => {
      if (data.type === "ready") { clearTimeout(timer); playgroundShared.worker = worker; resolve(worker); }
      else if (data.type === "load-error") { clearTimeout(timer); fail(); }
      else if (data.type === "result") {
        const done = playgroundShared.pending[data.id];
        delete playgroundShared.pending[data.id];
        if (done) done(data.output);
      }
    };
  });
  return playgroundShared.ready;
}

function mountPlayground(root, { code }) {
  root.classList.add("exercise", "playground");
  root.innerHTML = `
    <textarea spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Python snippet"></textarea>
    <div class="controls"><button type="button">Run it</button></div>
    <pre class="output" aria-live="polite" hidden></pre>`;
  const editor = root.querySelector("textarea");
  const button = root.querySelector("button");
  const output = root.querySelector(".output");
  editor.value = code;
  editor.rows = code.split("\n").length + 1;

  editor.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      editor.setRangeText("    ", editor.selectionStart, editor.selectionEnd, "end");
    }
  });

  button.addEventListener("click", async () => {
    button.disabled = true;
    output.hidden = false;
    output.textContent = "Loading Python. The first run takes a few seconds...";
    try {
      const worker = await playgroundWorker();
      const id = playgroundShared.nextId++;
      const result = await new Promise((resolve) => {
        const timer = setTimeout(() => {
          worker.terminate();
          playgroundShared.ready = null;
          delete playgroundShared.pending[id];
          resolve("Stopped after 5 seconds. Is there a loop that never ends?");
        }, 5000);
        playgroundShared.pending[id] = (text) => { clearTimeout(timer); resolve(text); };
        worker.postMessage({ id, code: editor.value });
      });
      output.textContent = result.trim() === "" ? "(printed nothing)" : result;
    } catch {
      output.textContent = "Python couldn't load. Check your internet connection.";
    }
    button.disabled = false;
  });
}
