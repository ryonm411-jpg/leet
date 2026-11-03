// In-browser Python exercise. Runs code in a worker so a slow or endless loop
// cannot freeze the page.
// mountExercise(element, { skill, starter, fn, sortResult, cases: [{ label, args, expected, maxMs }], onPass })
const PYODIDE_BASE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
const LOAD_TIMEOUT_MS = 60000;
const RUN_TIMEOUT_MS = 10000;

const PY_HARNESS = String.raw`
import json, time, traceback

def run_exercise(code, job_json):
    job = json.loads(job_json)
    namespace = {}
    try:
        exec(code, namespace)
    except Exception:
        return json.dumps({"error": traceback.format_exc(limit=0)})
    fn = namespace.get(job["fn"])
    if not callable(fn):
        return json.dumps({"error": "Define a function named " + job["fn"] + "."})
    results = []
    for case in job["cases"]:
        args = json.loads(json.dumps(case["args"]))
        entry = {"label": case["label"], "expected": case["expected"]}
        start = time.perf_counter()
        try:
            got = fn(*args)
            entry["ms"] = (time.perf_counter() - start) * 1000
            if job.get("sortResult") and isinstance(got, (list, tuple)):
                got = sorted(got)
            elif isinstance(got, tuple):
                got = list(got)
            entry["got"] = repr(got)
            entry["passed"] = got == case["expected"]
            max_ms = case.get("maxMs")
            entry["slow"] = bool(max_ms and entry["ms"] > max_ms)
        except Exception:
            entry["passed"] = False
            entry["got"] = traceback.format_exc(limit=0).strip()
        results.append(entry)
    return json.dumps({"results": results})
`;

const WORKER_SOURCE = `
  importScripts(${JSON.stringify(PYODIDE_BASE + "pyodide.js")});
  const ready = loadPyodide({ indexURL: ${JSON.stringify(PYODIDE_BASE)} }).then((py) => {
    py.runPython(${JSON.stringify(PY_HARNESS)});
    postMessage({ type: "ready" });
    return py;
  }).catch((error) => postMessage({ type: "load-error", message: String(error) }));
  onmessage = async (event) => {
    const py = await ready;
    const run = py.globals.get("run_exercise");
    const output = run(event.data.code, JSON.stringify(event.data.job));
    run.destroy();
    postMessage({ type: "result", output: JSON.parse(output) });
  };
`;

function mountExercise(root, config) {
  root.classList.add("exercise");
  root.innerHTML = `
    <textarea spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Python code"></textarea>
    <p class="small">Tab indents. Press Esc, then Tab, to leave the editor.</p>
    <div class="controls"><button type="button">Run tests</button></div>
    <p class="status" aria-live="polite"></p>
    <ul></ul>`;

  const editor = root.querySelector("textarea");
  const run = root.querySelector("button");
  const status = root.querySelector(".status");
  const list = root.querySelector("ul");
  let worker = null;
  let workerReady = false;
  let timer = null;
  let escaped = false;
  editor.value = config.starter;

  editor.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { escaped = true; return; }
    if (event.key === "Tab" && !escaped) {
      event.preventDefault();
      editor.setRangeText("    ", editor.selectionStart, editor.selectionEnd, "end");
    }
    escaped = false;
  });

  function stopWorker() {
    if (worker) worker.terminate();
    worker = null;
    workerReady = false;
  }

  function finish(message) {
    clearTimeout(timer);
    status.textContent = message;
    run.disabled = false;
  }

  function report(passed, problems) {
    document.dispatchEvent(new CustomEvent("lesson:exercise", {
      detail: { skill: config.skill, passed, problems, code: editor.value },
    }));
  }

  function send() {
    status.textContent = "Running your code...";
    timer = setTimeout(() => {
      stopWorker();
      finish("Stopped after 10 seconds. Look for a loop that never ends.");
      report(false, ["timed out after 10 seconds"]);
    }, RUN_TIMEOUT_MS);
    worker.postMessage({
      code: editor.value,
      job: { fn: config.fn, sortResult: config.sortResult, cases: config.cases },
    });
  }

  function showResults(output) {
    list.replaceChildren();
    if (output.error) {
      finish(output.error.trim());
      report(false, [output.error.trim().split("\n").pop()]);
      return;
    }
    let passed = 0;
    const problems = [];
    output.results.forEach((result) => {
      const ok = result.passed && !result.slow;
      if (ok) passed++;
      const item = document.createElement("li");
      item.className = ok ? "pass" : "fail";
      if (ok) {
        item.textContent = `Pass: ${result.label}`;
      } else if (result.passed) {
        item.textContent = `Too slow: ${result.label}. Correct answer, but it took ${Math.round(result.ms)} ms. Can you avoid checking every pair?`;
      } else {
        item.textContent = `Fail: ${result.label}. Expected ${JSON.stringify(result.expected)}, got ${result.got}`;
      }
      if (!ok) problems.push(item.textContent);
      list.append(item);
    });
    const allPassed = passed === output.results.length;
    finish(allPassed ? "All tests pass." : `${passed} of ${output.results.length} tests pass.`);
    report(allPassed, problems);
    if (allPassed && config.onPass) config.onPass();
  }

  run.addEventListener("click", () => {
    run.disabled = true;
    list.replaceChildren();
    if (workerReady) { send(); return; }
    status.textContent = "Loading Python. This takes a few seconds the first time...";
    const url = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: "text/javascript" }));
    worker = new Worker(url);
    URL.revokeObjectURL(url);
    const loadFailed = () => {
      stopWorker();
      finish("Python could not load. Check your internet connection, or paste your code into LeetCode to test it.");
    };
    worker.onerror = loadFailed;
    timer = setTimeout(loadFailed, LOAD_TIMEOUT_MS);
    worker.onmessage = ({ data }) => {
      if (data.type === "ready") { clearTimeout(timer); workerReady = true; send(); }
      else if (data.type === "load-error") { loadFailed(); }
      else if (data.type === "result") { clearTimeout(timer); showResults(data.output); }
    };
  });
}
