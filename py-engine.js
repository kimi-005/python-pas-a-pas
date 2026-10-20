/* Python engine shared by the worker and the main-thread fallback.
   It loads Pyodide and installs a small Python harness that runs code,
   evaluates the last expression like a console, and checks exercises. */
(function (g) {
  var HARNESS = String.raw`
import sys, io, ast, json, math, time, tokenize, builtins, contextlib

class _OutputLimit(Exception):
    pass

class _TimeLimit(Exception):
    pass

class _Out(io.StringIO):
    def write(self, s):
        if self.tell() + len(s) > 20000:
            raise _OutputLimit()
        return io.StringIO.write(self, s)

def _no_input(*args, **kwargs):
    raise RuntimeError("__INPUT__")

_guard = {"on": False, "deadline": 0.0, "n": 0}

def _tracer(frame, event, arg):
    _guard["n"] += 1
    if _guard["n"] % 500 == 0 and time.time() > _guard["deadline"]:
        raise _TimeLimit()
    return _tracer

@contextlib.contextmanager
def _guarded(seconds):
    if _guard["on"]:
        _guard["deadline"] = time.time() + seconds
        sys.settrace(_tracer)
    try:
        yield
    finally:
        if _guard["on"]:
            sys.settrace(None)

def _err(e):
    name = type(e).__name__
    msg = str(e)
    line = None
    if isinstance(e, SyntaxError):
        msg = e.msg
        if e.filename == "<code>":
            line = e.lineno
    else:
        tb = e.__traceback__
        while tb is not None:
            if tb.tb_frame.f_code.co_filename == "<code>":
                line = tb.tb_lineno
            tb = tb.tb_next
    if isinstance(e, _TimeLimit):
        name, msg = "TimeLimit", ""
    elif isinstance(e, _OutputLimit):
        name, msg = "OutputLimit", ""
    elif isinstance(e, RuntimeError) and msg == "__INPUT__":
        name, msg = "InputDisabled", ""
    elif isinstance(e, RecursionError):
        name = "RecursionError"
    return {"type": name, "msg": msg, "line": line}

# ---------- a small matplotlib.pyplot: records drawings, the page draws them ----------
import types, re

_PLOT = {"figs": [], "cur": None}
_MAXPTS = 6000

class _Fig:
    def __init__(self):
        self.series = []
        self.title = ""
        self.xlabel = ""
        self.ylabel = ""
        self.grid = False
        self.legend = False
        self.xlim = None
        self.ylim = None
        self.hlines = []
        self.vlines = []
        self.texts = []
        self.equal = False
    def empty(self):
        return not (self.series or self.hlines or self.vlines or self.texts)
    def to_dict(self):
        def cut(v):
            return v[:_MAXPTS]
        return {
            "series": [dict(s, x=cut(s["x"]), y=cut(s["y"])) for s in self.series],
            "title": self.title, "xlabel": self.xlabel, "ylabel": self.ylabel,
            "grid": self.grid, "legend": self.legend, "xlim": self.xlim, "ylim": self.ylim,
            "hlines": self.hlines, "vlines": self.vlines, "texts": self.texts, "equal": self.equal,
        }

def _plt_reset():
    _PLOT["figs"] = []
    _PLOT["cur"] = _Fig()

def _cur():
    if _PLOT["cur"] is None:
        _PLOT["cur"] = _Fig()
    return _PLOT["cur"]

def _all_figs():
    figs = list(_PLOT["figs"])
    if _PLOT["cur"] is not None and not _PLOT["cur"].empty():
        figs.append(_PLOT["cur"])
    return figs

def _num(v, what):
    if isinstance(v, bool) or isinstance(v, (int, float)):
        f = float(v)
        return f if math.isfinite(f) else None
    raise TypeError(what + " must contain numbers, not " + type(v).__name__)

def _seq(v, what, allow_str=False):
    if isinstance(v, (int, float)) and not isinstance(v, bool):
        v = [v]
    if isinstance(v, str) or not hasattr(v, "__iter__"):
        raise TypeError(what + " must be a list of numbers, not " + type(v).__name__)
    out = []
    for item in v:
        if allow_str and isinstance(item, str):
            out.append(item)
        else:
            out.append(_num(item, what))
    return out

_FMT_COLORS = "bgrcmykw"
_FMT_MARKERS = ".o+x*sv^d"

def _fmt(s):
    orig, color, marker, ls = s, None, None, None
    for tok in ("--", "-.", "-", ":"):
        if tok in s:
            ls = tok
            s = s.replace(tok, "", 1)
            break
    for ch in s:
        if ch in _FMT_COLORS and color is None:
            color = ch
        elif ch in _FMT_MARKERS and marker is None:
            marker = ch
        else:
            raise ValueError("format string " + repr(orig) + " not understood")
    if ls is None:
        ls = "" if marker else "-"
    return color, marker, ls

def _style_kw(kw, color, marker, ls):
    color = kw.get("color", kw.get("c", color))
    marker = kw.get("marker", marker)
    ls = kw.get("linestyle", kw.get("ls", ls))
    if ls in ("None", "none", " "):
        ls = ""
    return color, marker, ls

def _p_plot(*args, **kw):
    args = list(args)
    if not args:
        return []
    while args:
        if len(args) >= 2 and not isinstance(args[1], str):
            x, y, args = args[0], args[1], args[2:]
        else:
            x, y, args = None, args[0], args[1:]
        fmt = ""
        if args and isinstance(args[0], str):
            fmt, args = args[0], args[1:]
        ys = _seq(y, "y")
        xs = list(range(len(ys))) if x is None else _seq(x, "x")
        if len(xs) != len(ys):
            raise ValueError("x and y must have same first dimension, but have shapes (%d,) and (%d,)" % (len(xs), len(ys)))
        color, marker, ls = _style_kw(kw, *_fmt(fmt))
        _cur().series.append({"kind": "line", "x": xs, "y": ys, "color": color, "marker": marker,
                              "ls": ls, "label": str(kw["label"]) if "label" in kw else None,
                              "lw": kw.get("linewidth", kw.get("lw"))})
    return []

def _p_scatter(x, y, s=None, c=None, marker="o", label=None, color=None, **kw):
    xs, ys = _seq(x, "x"), _seq(y, "y")
    if len(xs) != len(ys):
        raise ValueError("x and y must be the same size")
    col = color if color is not None else (c if isinstance(c, str) else None)
    _cur().series.append({"kind": "scatter", "x": xs, "y": ys, "color": col, "marker": marker or "o",
                          "ls": "", "label": None if label is None else str(label), "lw": None})
    return None

def _p_bar(x, height, width=0.8, color=None, label=None, **kw):
    xs = _seq(x, "x", allow_str=True)
    hs = _seq(height, "height")
    if len(hs) == 1 and len(xs) > 1:
        hs = hs * len(xs)
    if len(xs) != len(hs):
        raise ValueError("shape mismatch: x has %d values but height has %d" % (len(xs), len(hs)))
    _cur().series.append({"kind": "bar", "x": xs, "y": hs, "color": kw.get("c", color), "marker": None,
                          "ls": "", "label": None if label is None else str(label), "width": float(width), "lw": None})
    return None

def _p_hist(x, bins=10, range=None, color=None, label=None, **kw):
    data = [v for v in _seq(x, "x") if v is not None]
    if not data:
        return ([], [], None)
    lo, hi = (min(data), max(data)) if range is None else (float(range[0]), float(range[1]))
    if hi == lo:
        hi = lo + 1
    if isinstance(bins, (list, tuple)):
        edges = [float(b) for b in bins]
    else:
        n = int(bins)
        edges = [lo + (hi - lo) * i / n for i in builtins.range(n + 1)]
    counts = [0] * (len(edges) - 1)
    for v in data:
        for i in builtins.range(len(edges) - 1):
            last = i == len(edges) - 2
            if edges[i] <= v < edges[i + 1] or (last and v == edges[-1]):
                counts[i] += 1
                break
    centers = [(edges[i] + edges[i + 1]) / 2 for i in builtins.range(len(counts))]
    width = (edges[1] - edges[0]) if len(edges) > 1 else 1
    _cur().series.append({"kind": "bar", "x": centers, "y": [float(c) for c in counts], "color": color,
                          "marker": None, "ls": "", "label": None if label is None else str(label),
                          "width": float(width), "lw": None, "hist": True})
    return (counts, edges, None)

def _p_axhline(y=0, color=None, linestyle="-", ls=None, **kw):
    _cur().hlines.append({"y": _num(y, "y"), "color": color, "ls": ls or linestyle,
                          "label": str(kw["label"]) if "label" in kw else None})

def _p_axvline(x=0, color=None, linestyle="-", ls=None, **kw):
    _cur().vlines.append({"x": _num(x, "x"), "color": color, "ls": ls or linestyle,
                          "label": str(kw["label"]) if "label" in kw else None})

def _lim(which, args):
    f = _cur()
    if not args:
        return getattr(f, which)
    if len(args) == 1 and isinstance(args[0], (list, tuple)):
        args = args[0]
    lim = [None if a is None else _num(a, which) for a in args[:2]]
    setattr(f, which, lim)
    return tuple(lim)

def _p_xlim(*args, **kw):
    if "left" in kw or "right" in kw or "xmin" in kw or "xmax" in kw:
        args = (kw.get("left", kw.get("xmin")), kw.get("right", kw.get("xmax")))
    return _lim("xlim", args)

def _p_ylim(*args, **kw):
    if "bottom" in kw or "top" in kw or "ymin" in kw or "ymax" in kw:
        args = (kw.get("bottom", kw.get("ymin")), kw.get("top", kw.get("ymax")))
    return _lim("ylim", args)

def _p_axis(v=None, **kw):
    f = _cur()
    if isinstance(v, (list, tuple)) and len(v) == 4:
        f.xlim = [_num(v[0], "xmin"), _num(v[1], "xmax")]
        f.ylim = [_num(v[2], "ymin"), _num(v[3], "ymax")]
    elif v in ("equal", "scaled", "square"):
        f.equal = True

def _p_text(x, y, s, **kw):
    _cur().texts.append({"x": _num(x, "x"), "y": _num(y, "y"), "s": str(s)})

def _p_title(s, *a, **kw): _cur().title = str(s)
def _p_xlabel(s, *a, **kw): _cur().xlabel = str(s)
def _p_ylabel(s, *a, **kw): _cur().ylabel = str(s)
def _p_grid(b=True, *a, **kw): _cur().grid = bool(b) if b is not None else True
def _p_legend(*a, **kw): _cur().legend = True

def _p_show(*a, **kw):
    f = _cur()
    if not f.empty():
        _PLOT["figs"].append(f)
    _PLOT["cur"] = _Fig()

def _p_figure(*a, **kw):
    _p_show()

def _p_clf(*a, **kw):
    _PLOT["cur"] = _Fig()

def _p_nothing(*a, **kw):
    return None

_pyplot = types.ModuleType("matplotlib.pyplot")
_pyplot.__doc__ = "Simplified matplotlib.pyplot for Python pas a pas"
_PLT_NAMES = {
    "plot": _p_plot, "scatter": _p_scatter, "bar": _p_bar, "hist": _p_hist,
    "axhline": _p_axhline, "axvline": _p_axvline, "xlim": _p_xlim, "ylim": _p_ylim, "axis": _p_axis,
    "text": _p_text, "title": _p_title, "xlabel": _p_xlabel, "ylabel": _p_ylabel, "grid": _p_grid,
    "legend": _p_legend, "show": _p_show, "figure": _p_figure, "clf": _p_clf, "close": _p_clf,
    "savefig": _p_nothing, "xticks": _p_nothing, "yticks": _p_nothing, "tight_layout": _p_nothing,
}
for _k, _v in _PLT_NAMES.items():
    setattr(_pyplot, _k, _v)
_pyplot.__all__ = list(_PLT_NAMES)
_mpl = types.ModuleType("matplotlib")
_mpl.__path__ = []
_mpl.pyplot = _pyplot
sys.modules["matplotlib"] = _mpl
sys.modules["matplotlib.pyplot"] = _pyplot

# helpers used by exercise tests to inspect what was drawn
def _all_series():
    return [s for f in _all_figs() for s in f.series]
def _series(i=0):
    s = _all_series()
    return s[i] if -len(s) <= i < len(s) else None
def _nseries():
    return len(_all_series())
def _points(i=0):
    s = _series(i)
    return None if s is None else list(zip(s["x"], s["y"]))
def _xs(i=0):
    s = _series(i)
    return None if s is None else list(s["x"])
def _ys(i=0):
    s = _series(i)
    return None if s is None else list(s["y"])
def _kind(i=0):
    s = _series(i)
    return None if s is None else s["kind"]
def _dots(i=0):
    s = _series(i)
    return s is not None and bool(s["marker"]) and not s["ls"]
_HELPERS = {"_points": _points, "_xs": _xs, "_ys": _ys, "_kind": _kind, "_dots": _dots, "_nseries": _nseries}

def _ns():
    _plt_reset()
    ns = {"__name__": "__main__", "__builtins__": builtins, "input": _no_input}
    ns.update(_HELPERS)
    return ns

def _console(src, ns, out):
    tree = ast.parse(src, "<code>", "exec")
    last = None
    if tree.body and isinstance(tree.body[-1], ast.Expr):
        last = tree.body.pop()
    exec(compile(tree, "<code>", "exec"), ns)
    if last is not None:
        val = eval(compile(ast.Expression(last.value), "<code>", "eval"), ns)
        if val is not None:
            out.write(repr(val) + "\n")

def _run(code, setup=""):
    ns = _ns()
    out = _Out()
    error = None
    with contextlib.redirect_stdout(out), contextlib.redirect_stderr(out):
        try:
            with _guarded(4.0):
                if setup:
                    exec(compile(setup, "<setup>", "exec"), ns)
                _console(code, ns, out)
        except BaseException as e:
            error = _err(e)
    plots = [f.to_dict() for f in _all_figs()][:6]
    _plt_reset()
    return {"out": out.getvalue(), "error": error, "plots": plots}

# ---------- step by step: record every line of the student's code with its variables ----------
import reprlib

class _StepLimit(BaseException):
    pass

_SHORT = reprlib.Repr()
_SHORT.maxlist = 12
_SHORT.maxtuple = 12
_SHORT.maxset = 8
_SHORT.maxdict = 6
_SHORT.maxstring = 38
_SHORT.maxother = 60
_SHORT.maxlevel = 3

def _short(v):
    try:
        if isinstance(v, (int, float, bool)) or v is None:
            r = repr(v)
        else:
            r = _SHORT.repr(v)
    except Exception:
        r = "?"
    if len(r) > 40:
        r = r[:39] + "…"
    return r

def _visible(d):
    shown = []
    for k, v in list(d.items()):
        if not isinstance(k, str) or not k.isidentifier() or k.startswith("_") or k == "input":
            continue
        if isinstance(v, (types.ModuleType, type)) or callable(v):
            continue
        shown.append([k, _short(v), type(v).__name__])
    return shown

def _trace(code, setup="", max_steps=400):
    ns = _ns()
    out = _Out()
    steps = []
    state = {"truncated": False}
    guard_on = _guard["on"]
    deadline = time.time() + 4.0

    raw = [0]

    def local(frame, event, arg):
        if event == "line":
            raw[0] += 1
            if len(steps) >= max_steps or raw[0] > 200000:
                state["truncated"] = True
                raise _StepLimit()
            if guard_on and raw[0] % 200 == 0 and time.time() > deadline:
                raise _TimeLimit()
            line = frame.f_lineno
            if not line or line < 1:
                return local
            co = frame.f_code
            fn = None if co.co_name == "<module>" else co.co_name
            scope = frame.f_globals if fn is None else frame.f_locals
            step = {"line": line, "fn": fn, "vars": _visible(scope), "out": out.tell()}
            # an inlined comprehension repeats the same line with nothing new to show: keep one
            if steps and steps[-1] == step:
                return local
            steps.append(step)
        return local

    def entry(frame, event, arg):
        co = frame.f_code
        if co.co_filename != "<code>":
            return None
        # generator expressions, lambdas, old-style comprehensions: run them without stepping inside
        if co.co_name.startswith("<") and co.co_name != "<module>":
            return None
        return local

    error = None
    with contextlib.redirect_stdout(out), contextlib.redirect_stderr(out):
        try:
            if setup:
                exec(compile(setup, "<setup>", "exec"), ns)
            sys.settrace(entry)
            try:
                _console(code, ns, out)
            finally:
                sys.settrace(None)
        except _StepLimit:
            pass
        except BaseException as e:
            error = _err(e)
    steps.append({"line": None, "fn": None, "vars": _visible(ns), "out": out.tell(), "final": True})
    _plt_reset()
    return {"steps": steps, "out": out.getvalue(), "error": error, "truncated": state["truncated"]}

def _same(a, b):
    if isinstance(a, bool) or isinstance(b, bool):
        return type(a) is type(b) and a == b
    if isinstance(a, (int, float)) and isinstance(b, (int, float)):
        try:
            return math.isclose(a, b, rel_tol=1e-9, abs_tol=1e-12)
        except Exception:
            return False
    if isinstance(a, (list, tuple)) and isinstance(b, (list, tuple)):
        return type(a) is type(b) and len(a) == len(b) and all(_same(x, y) for x, y in zip(a, b))
    return type(a) is type(b) and a == b

def _lines(s):
    return [l.rstrip() for l in s.strip().split("\n")] if s.strip() else []

def _tokens(src):
    found = set()
    try:
        for t in tokenize.generate_tokens(io.StringIO(src).readline):
            if t.type in (tokenize.NAME, tokenize.OP):
                found.add(t.string)
    except Exception:
        pass
    return found

def _check(code, tests, require, forbid):
    toks = _tokens(code)
    result = {
        "missing": [r for r in require if r not in toks],
        "forbidden": [f for f in forbid if f in toks],
        "syntax": None,
        "tests": [],
    }
    try:
        compile(code, "<code>", "exec")
    except SyntaxError as e:
        result["syntax"] = _err(e)
        return result
    try:
        with _guarded(4.0):
            for t in tests:
                ns = _ns()
                out = _Out()
                row = {"ok": False, "got": None, "out": "", "error": None}
                with contextlib.redirect_stdout(out), contextlib.redirect_stderr(out):
                    try:
                        if t.get("setup"):
                            exec(compile(t["setup"], "<setup>", "exec"), ns)
                        exec(compile(code, "<code>", "exec"), ns)
                        if t.get("call"):
                            got = eval(compile(t["call"], "<test>", "eval"), ns)
                            row["got"] = repr(got)
                            expected = eval(t["expect"], {})
                            row["ok"] = _same(got, expected)
                        else:
                            row["ok"] = _lines(out.getvalue()) == _lines(t.get("stdout", ""))
                    except (_TimeLimit, _OutputLimit):
                        raise
                    except BaseException as e:
                        row["error"] = _err(e)
                        row["ok"] = False
                row["out"] = out.getvalue()
                result["tests"].append(row)
    except (_TimeLimit, _OutputLimit) as e:
        result["tests"].append({"ok": False, "got": None, "out": "", "error": _err(e)})
    return result

def _expect(code, tests):
    """Run the author's solution on each test and report what it returns or prints."""
    res = {"syntax": None, "results": []}
    try:
        compile(code, "<code>", "exec")
    except SyntaxError as e:
        res["syntax"] = _err(e)
        return res
    try:
        with _guarded(6.0):
            for t in tests:
                ns = _ns()
                out = _Out()
                row = {"value": None, "stdout": "", "error": None}
                with contextlib.redirect_stdout(out), contextlib.redirect_stderr(out):
                    try:
                        if t.get("setup"):
                            exec(compile(t["setup"], "<setup>", "exec"), ns)
                        exec(compile(code, "<code>", "exec"), ns)
                        if t.get("call"):
                            v = eval(compile(t["call"], "<test>", "eval"), ns)
                            r = repr(v)
                            try:
                                back = eval(r, {})
                                ok = _same(back, v)
                            except Exception:
                                ok = False
                            if ok:
                                row["value"] = r
                            else:
                                row["error"] = {"type": "NotComparable", "msg": r[:80], "line": None}
                    except (_TimeLimit, _OutputLimit):
                        raise
                    except BaseException as e:
                        row["error"] = _err(e)
                row["stdout"] = out.getvalue()
                _plt_reset()
                res["results"].append(row)
    except (_TimeLimit, _OutputLimit) as e:
        res["results"].append({"value": None, "stdout": "", "error": _err(e)})
    return res

def _api(msg_json):
    msg = json.loads(msg_json)
    _guard["on"] = bool(msg.get("guard"))
    _guard["n"] = 0
    if msg["kind"] == "run":
        res = _run(msg["code"], msg.get("setup", ""))
    elif msg["kind"] == "expect":
        res = _expect(msg["code"], msg.get("tests", []))
    elif msg["kind"] == "check":
        res = _check(msg["code"], msg.get("tests", []), msg.get("require", []), msg.get("forbid", []))
    elif msg["kind"] == "trace":
        try:
            n = int(msg.get("maxSteps", 400))
        except Exception:
            n = 400
        res = _trace(msg["code"], msg.get("setup", ""), max(1, min(n, 5000)))
    else:
        res = {"error": {"type": "Internal", "msg": "unknown kind", "line": None}}
    return json.dumps(res)
`;

  // Report download progress of the two big files by wrapping fetch while Pyodide loads.
  function watchDownloads(onProgress) {
    if (!onProgress || !g.fetch || typeof ReadableStream === "undefined" || typeof Response === "undefined") return function () {};
    var SIZES = { "pyodide.asm.wasm": 10088051, "python-stdlib-zip.wasm": 2341872 };
    var total = 0, got = {}, last = -1, k;
    for (k in SIZES) total += SIZES[k];
    var orig = g.fetch;
    function report() {
      var sum = 0;
      for (var n in got) sum += got[n];
      var v = Math.min(1, sum / total);
      if (v - last >= 0.01 || v === 1) { last = v; try { onProgress(v); } catch (e) { /* ignore */ } }
    }
    g.fetch = function (input, init) {
      var url = typeof input === "string" ? input : (input && (input.url || input.href)) || String(input || "");
      var name = null;
      for (var key in SIZES) if (url.slice(-key.length) === key) name = key;
      var p = orig.call(g, input, init);
      if (!name) return p;
      return p.then(function (res) {
        if (!res.ok || !res.body) return res;
        try {
          var reader = res.body.getReader();
          got[name] = 0;
          var stream = new ReadableStream({
            pull: function (ctrl) {
              return reader.read().then(function (r) {
                if (r.done) { got[name] = SIZES[name]; report(); ctrl.close(); return; }
                got[name] += r.value.byteLength;
                report();
                ctrl.enqueue(r.value);
              });
            }
          });
          return new Response(stream, { status: res.status, statusText: res.statusText,
            headers: { "Content-Type": res.headers.get("Content-Type") || "application/wasm" } });
        } catch (e) {
          return res;
        }
      });
    };
    return function () { g.fetch = orig; };
  }

  g.pyEngineInit = function (indexURL, onProgress) {
    var restore = watchDownloads(onProgress);
    return g.loadPyodide({ indexURL: indexURL, stdLibURL: indexURL + "python-stdlib-zip.wasm", fullStdLib: false }).then(function (py) {
      restore();
      py.runPython(HARNESS);
      return py;
    }, function (e) {
      restore();
      throw e;
    });
  };

  g.pyEngineCall = function (py, msg) {
    var api = py.globals.get("_api");
    try {
      return JSON.parse(api(JSON.stringify(msg)));
    } finally {
      api.destroy();
    }
  };
})(typeof self !== "undefined" ? self : window);
