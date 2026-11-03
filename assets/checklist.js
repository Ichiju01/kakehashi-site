// Japan Export Readiness Checklist: live score, remembered ticks (this browser only) and print.
(() => {
  const root = document.querySelector("[data-checklist]");
  if (!root) return;
  const boxes = [...root.querySelectorAll('input[type="checkbox"]')];
  const count = document.querySelector("[data-count]");
  const bar = document.querySelector("[data-bar]");
  const msg = document.querySelector("[data-msg]");
  const KEY = "kk-checklist";

  const MESSAGES = [
    [1, "You are well prepared. A Japanese buyer will want to see this groundwork, so you are ready to start conversations."],
    [0.6, "You have solid foundations. Close the remaining gaps before you approach buyers, and they will take you seriously from the first meeting."],
    [0.25, "You have made a start. Work through the unticked items first, as Japanese buyers will ask about most of them."],
    [0, "Tick each item you already have in place."],
  ];

  const update = () => {
    const done = boxes.filter((b) => b.checked).length;
    const share = done / boxes.length;
    count.textContent = done;
    bar.style.width = `${share * 100}%`;
    msg.textContent = (MESSAGES.find(([min]) => share >= min && (min > 0 || done === 0)) || MESSAGES[2])[1];
    try { localStorage.setItem(KEY, JSON.stringify(boxes.map((b) => b.checked))); } catch {}
  };

  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
    boxes.forEach((b, i) => (b.checked = !!saved[i]));
  } catch {}

  root.addEventListener("change", update);
  document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
  update();
})();
