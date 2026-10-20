/* Runs Python in a background thread so a never-ending loop can be stopped. */
importScripts("pyodide/pyodide.js", "py-engine.js");

var ready = self.pyEngineInit(new URL("pyodide/", self.location.href).href, function (v) {
  self.postMessage({ type: "progress", value: v });
});

ready.then(
  function () { self.postMessage({ type: "ready" }); },
  function (e) { self.postMessage({ type: "fail", error: String(e && e.message || e) }); }
);

self.onmessage = function (ev) {
  var data = ev.data;
  ready.then(function (py) {
    var result;
    try {
      result = self.pyEngineCall(py, data.msg);
    } catch (e) {
      result = { fatal: String(e && e.message || e) };
    }
    self.postMessage({ type: "result", id: data.id, result: result });
  });
};
