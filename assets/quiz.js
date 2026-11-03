// Japan fit check: one question at a time, then a result band with a booking link.
(() => {
  const root = document.getElementById("quiz");
  if (!root) return;
  const { questions, results } = JSON.parse(document.getElementById("quiz-data").textContent);
  const stage = root.querySelector(".quiz-stage");
  const bar = root.querySelector(".quiz-progress span");
  const count = root.querySelector(".quiz-count");
  const answers = [];
  const arrow = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  const show = (i) => {
    bar.style.width = `${(i / questions.length) * 100}%`;
    if (i >= questions.length) return result();
    const q = questions[i];
    count.textContent = `Question ${i + 1} of ${questions.length}`;
    stage.innerHTML = `<fieldset class="quiz-q"><legend><h2 class="h3">${q.q}</h2></legend><div class="quiz-options">${q.a
      .map(([label], j) => `<button type="button" class="quiz-opt${answers[i] === j ? " picked" : ""}" data-j="${j}">${label}</button>`)
      .join("")}</div></fieldset>${i ? '<button type="button" class="quiz-back">Back</button>' : ""}`;
    stage.querySelectorAll(".quiz-opt").forEach((b) => b.addEventListener("click", () => { answers[i] = +b.dataset.j; show(i + 1); }));
    stage.querySelector(".quiz-back")?.addEventListener("click", () => show(i - 1));
    stage.querySelector(".quiz-opt").focus({ preventScroll: true });
  };

  const result = () => {
    const score = answers.reduce((s, j, i) => s + questions[i].a[j][1], 0);
    const r = results.find((x) => score >= x.min);
    count.textContent = "Your result";
    stage.innerHTML = `<div class="quiz-result" tabindex="-1"><p class="eyebrow">Your Japan fit</p><h2 class="result-label">${r.label}</h2><p>${r.text}</p>
      <div class="actions"><a class="btn btn-primary btn-lg" href="${root.dataset.book}">Book a free call ${arrow}</a><button type="button" class="btn btn-ghost btn-lg quiz-restart">Start again</button></div></div>`;
    stage.querySelector(".quiz-restart").addEventListener("click", () => { answers.length = 0; show(0); });
    stage.querySelector(".quiz-result").focus();
    window.track?.("quiz_complete", { result: r.label, score });
  };

  show(0);
})();
