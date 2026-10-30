// Comportamientos comunes a todas las páginas.

const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } },
};
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s);

/* ---------- Aviso breve ---------- */
let toastT: number | undefined;
export function toast(msg: string) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastT);
  toastT = window.setTimeout(() => (t.hidden = true), 2200);
}

/* ---------- Altura del encabezado (para que nada quede tapado al saltar) ---------- */
const header = $("#top");
const setHH = () => header && document.documentElement.style.setProperty("--hh", header.offsetHeight + "px");
try { if (header) new ResizeObserver(setHH).observe(header); } catch { addEventListener("resize", setHH); }
setHH();

/* ---------- Sin conexión ---------- */
const offline = $("#offline");
const net = () => { if (offline) offline.hidden = navigator.onLine; setHH(); };
addEventListener("online", net);
addEventListener("offline", net);
net();

/* ---------- Tamaño de letra ---------- */
const SIZES: [number, string][] = [[1, "normal"], [1.12, "grande"], [1.25, "muy grande"]];
let sizeL = Math.min(2, Math.max(0, Number(store.get("ri-size")) || 0));
const sizeBtn = $<HTMLButtonElement>("#sizebtn");
function applySize() {
  document.documentElement.style.setProperty("--z", String(SIZES[sizeL][0]));
  if (sizeBtn) {
    sizeBtn.dataset.l = String(sizeL);
    sizeBtn.setAttribute("aria-label", `Tamaño de letra: ${SIZES[sizeL][1]}. Toque para cambiar`);
  }
}
export function nextSize() {
  sizeL = (sizeL + 1) % 3;
  store.set("ri-size", String(sizeL));
  applySize();
  toast("Letra " + SIZES[sizeL][1]);
}
sizeBtn?.addEventListener("click", nextSize);
applySize();

/* ---------- Escuchar en voz alta ---------- */
const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
if (!canSpeak) document.querySelectorAll<HTMLElement>("[data-speak]").forEach((b) => (b.hidden = true));
let speaking: HTMLButtonElement | null = null;
const label = (b: HTMLButtonElement, on: boolean) => {
  b.setAttribute("aria-pressed", String(on));
  const t = b.querySelector(".lbl-t");
  if (t) t.textContent = on ? "Detener" : b.dataset.idle || "Escuchar";
};
function stopSpeak() {
  if (!canSpeak) return;
  speechSynthesis.cancel();
  if (speaking) label(speaking, false);
  speaking = null;
}
function voice() {
  const vs = speechSynthesis.getVoices();
  return vs.find((v) => /^es(-|_)?(GT|MX|US|419)/i.test(v.lang)) || vs.find((v) => /^es/i.test(v.lang));
}
function speak(btn: HTMLButtonElement) {
  if (speaking === btn) { stopSpeak(); return; }
  stopSpeak();
  const u = new SpeechSynthesisUtterance(btn.dataset.speak || "");
  const v = voice();
  if (v) u.voice = v;
  u.lang = v ? v.lang : "es-MX";
  u.rate = 0.95;
  u.onend = u.onerror = () => { if (speaking === btn) stopSpeak(); };
  speaking = btn;
  label(btn, true);
  speechSynthesis.speak(u);
}
if (canSpeak) { try { speechSynthesis.getVoices(); } catch { /* nada */ } }
addEventListener("pagehide", stopSpeak);

/* ---------- Clics ---------- */
function selectFallback(btn: HTMLElement) {
  const s = btn.parentElement?.querySelector(".num,.addr");
  if (s) { const r = document.createRange(); r.selectNodeContents(s); const sel = getSelection(); sel?.removeAllRanges(); sel?.addRange(r); }
  toast("Seleccionado. Cópielo con el menú del teléfono.");
}

document.addEventListener("click", (e) => {
  const t = e.target as HTMLElement;

  const cp = t.closest<HTMLButtonElement>("[data-copy]");
  if (cp) {
    const ok = () => { cp.classList.add("done"); setTimeout(() => cp.classList.remove("done"), 1600); };
    try { navigator.clipboard.writeText(cp.dataset.copy || "").then(ok, () => selectFallback(cp)); } catch { selectFallback(cp); }
    return;
  }

  const cl = t.closest<HTMLButtonElement>("[data-copylink]");
  if (cl) {
    const link = new URL(cl.dataset.copylink || "", location.href).href;
    try { navigator.clipboard.writeText(link).then(() => toast("Enlace copiado"), () => toast(link)); } catch { toast(link); }
    return;
  }

  const sp = t.closest<HTMLButtonElement>("[data-speak]");
  if (sp) { speak(sp); return; }

  if (t.closest("[data-sizedemo]")) { nextSize(); return; }

  if (t.closest("[data-print]")) { try { window.print(); } catch { /* nada */ } return; }

  const sc = t.closest<HTMLElement>("[data-scroll]");
  if (sc) {
    const el = document.getElementById(sc.dataset.scroll || "");
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }
});
