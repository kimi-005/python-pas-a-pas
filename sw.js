/* Python pas à pas: keeps the app working offline after the first visit. */
const CACHE = "ppa-20261021171213";
const CORE = ["./", "index.html", "manifest.webmanifest", "py-engine.js", "py-worker.js", "memo.js", "icons/icon-192.png", "icons/icon-512.png", "lessons/chaines.js", "lessons/comp.js", "lessons/fonctions2.js", "lessons/l01.js", "lessons/l02.js", "lessons/l03.js", "lessons/l04.js", "lessons/l05.js", "lessons/l06.js", "lessons/l07.js", "lessons/l08.js", "lessons/l09.js", "lessons/l10.js", "lessons/l11.js", "lessons/l12.js", "lessons/p01.js", "lessons/p02.js", "lessons/p03.js", "lessons/p04.js", "lessons/p05.js", "lessons/p06.js", "pyodide/pyodide.js", "pyodide/pyodide.asm.js", "pyodide/pyodide.asm.wasm", "pyodide/pyodide-lock.json", "pyodide/python-stdlib-zip.wasm"];
const CDN = ["https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&display=swap", "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700&display=swap", "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:wght@400;600&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js", "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE);
    await Promise.all(CDN.map((u) => c.add(new Request(u, { mode: "no-cors" })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Python itself never changes between versions: serve it from the cache first.
  if (url.origin === self.location.origin && url.pathname.includes("/pyodide/")) {
    e.respondWith(caches.match(req).then((r) => r || fetch(req)));
    return;
  }
  // Everything else: try the network (to get updates), fall back to the cache when offline.
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res.ok || res.type === "opaque") {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    } catch (err) {
      const hit = await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      if (req.mode === "navigate") return caches.match("index.html");
      throw err;
    }
  })());
});
