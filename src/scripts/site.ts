// Page behaviour: mobile menu (dialog with focus trap), centre filter, bottom call bar.
// Everything works as plain content without this script: links, anchors and the full list of centres.

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- mobile menu ---------- */
const menu = document.getElementById("mmenu");
const burger = document.querySelector<HTMLButtonElement>(".hdr__burger");
const closeBtn = menu?.querySelector<HTMLButtonElement>(".mmenu__close");

const focusables = () =>
  Array.from(menu?.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]') ?? []).filter((el) => el.offsetParent !== null);

function openMenu() {
  if (!menu || !burger) return;
  menu.hidden = false;
  burger.setAttribute("aria-expanded", "true");
  document.documentElement.classList.add("menu-open");
  requestAnimationFrame(() => menu.classList.add("is-open"));
  closeBtn?.focus();
}
function closeMenu(returnFocus = true) {
  if (!menu || !burger || menu.hidden) return;
  menu.classList.remove("is-open");
  menu.hidden = true;
  burger.setAttribute("aria-expanded", "false");
  document.documentElement.classList.remove("menu-open");
  if (returnFocus) burger.focus();
}
burger?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", () => closeMenu());
menu?.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest("a[href]");
  if (a) closeMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (!menu || menu.hidden) return;
  if (e.key === "Escape") { e.preventDefault(); closeMenu(); return; }
  if (e.key === "Tab") {
    const f = focusables();
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.matchMedia("(min-width: 1024px)").addEventListener("change", (m) => { if (m.matches) closeMenu(false); });

/* ---------- centre filter ---------- */
const group = document.querySelector<HTMLElement>("[data-filter]");
const items = Array.from(document.querySelectorAll<HTMLElement>(".centre"));
const status = document.querySelector<HTMLElement>("[data-filter-status]");

function applyFilter(type: string) {
  if (!group) return;
  group.querySelectorAll<HTMLButtonElement>(".filter__btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.type === type)));
  let n = 0;
  items.forEach((li) => {
    const show = type === "all" || (li.dataset.types ?? "").split(" ").includes(type);
    li.classList.remove("is-in");
    li.hidden = !show;
    if (show) {
      li.style.setProperty("--k", String(n++));
      if (!reduce) { void li.offsetWidth; li.classList.add("is-in"); }
    }
  });
  if (status) status.textContent = `Показано адрес: ${n}`;
}
group?.addEventListener("click", (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>(".filter__btn");
  if (b?.dataset.type) applyFilter(b.dataset.type);
});
document.querySelectorAll<HTMLAnchorElement>("[data-filter-go]").forEach((a) =>
  a.addEventListener("click", () => applyFilter(a.dataset.filterGo ?? "all")),
);

/* ---------- bottom call bar (phones): appears after the hero ---------- */
const bar = document.querySelector<HTMLElement>(".mbar");
const hero = document.getElementById("hero");
if (bar && hero && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(([e]) => bar.classList.toggle("is-shown", !e.isIntersecting), { threshold: 0 });
  io.observe(hero);
} else bar?.classList.add("is-shown");
