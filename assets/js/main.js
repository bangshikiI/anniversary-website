// main.js — core setup: passcode gate, loading screen, static content rendering, scroll reveals

const SITE_PASSCODE = "0214"; // change this — see docs/editing-guide.md

document.addEventListener('DOMContentLoaded', () => {
  setupPasscodeGate();
  renderHero();
  renderDedication();
  renderStory();
  renderNumbers();
  renderFuture();
  renderClosing();
  setupFadeReveals();
  runLoadingSequence();
});

function setupPasscodeGate() {
  const gate = document.getElementById('passcode-gate');
  if (!gate) return;

  const unlocked = sessionStorage.getItem('anniv-unlocked') === 'true';
  if (unlocked) { gate.classList.add('hidden'); return; }

  const input = document.getElementById('passcode-input');
  const btn = document.getElementById('passcode-submit');
  const error = document.getElementById('passcode-error');

  function tryUnlock() {
    if (input.value.trim() === SITE_PASSCODE) {
      sessionStorage.setItem('anniv-unlocked', 'true');
      gate.classList.add('hidden');
    } else {
      error.textContent = "that's not it, try again.";
      input.value = '';
      input.focus();
    }
  }
  btn.addEventListener('click', tryUnlock);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryUnlock(); });
}

function runLoadingSequence() {
  const screen = document.getElementById('loading-screen');
  const textEl = document.getElementById('loading-text');
  if (!screen) return;
  const lines = (typeof SITE_TEXT !== 'undefined' && SITE_TEXT.loading) ? SITE_TEXT.loading : ['loading...'];
  textEl.textContent = lines[Math.floor(Math.random() * lines.length)];

  window.addEventListener('load', () => {
    setTimeout(() => screen.classList.add('hidden'), 700);
  });
  // fallback in case 'load' already fired
  setTimeout(() => screen.classList.add('hidden'), 3500);
}

function renderHero() {
  if (typeof SITE_TEXT === 'undefined') return;
  const tagEl = document.getElementById('hero-tagline');
  const dateEl = document.getElementById('hero-dates');
  const btnEl = document.getElementById('hero-cta');
  if (tagEl) tagEl.textContent = SITE_TEXT.hero.tagline;
  if (dateEl) dateEl.textContent = SITE_TEXT.hero.dates;
  if (btnEl) btnEl.textContent = SITE_TEXT.hero.button;
}

function renderDedication() {
  const el = document.getElementById('dedication-text');
  if (el && typeof SITE_TEXT !== 'undefined') el.textContent = SITE_TEXT.dedication;
}

function renderStory() {
  const container = document.getElementById('story-blocks');
  if (!container || typeof SITE_TEXT === 'undefined') return;
  SITE_TEXT.story.forEach((block, i) => {
    const div = document.createElement('div');
    div.className = 'story-block fade-up' + (i % 2 === 1 ? ' reverse' : '');
    div.innerHTML = `
      <div class="story-text">
        <span class="eyebrow">${block.eyebrow}</span>
        <h3>${block.heading}</h3>
        <p>${block.text}</p>
      </div>
      <div class="story-photo">
        <img src="${block.photo}" alt="kei and val" loading="lazy">
      </div>`;
    container.appendChild(div);
  });
  const quoteEl = document.getElementById('pull-quote');
  if (quoteEl) quoteEl.textContent = '"' + SITE_TEXT.pullQuote + '"';
}

function renderNumbers() {
  const container = document.getElementById('numbers-grid');
  if (!container) return;
  const start = new Date('2023-02-14T00:00:00');
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((now - start) / msPerDay);
  const years = (days / 365.25).toFixed(1);
  const anniversaries = Math.min(4, Math.floor(days / 365));

  const stats = [
    { num: years, label: SITE_TEXT.numbers.labels.years },
    { num: days.toLocaleString(), label: SITE_TEXT.numbers.labels.days },
    { num: anniversaries, label: SITE_TEXT.numbers.labels.anniversaries },
    { num: (typeof GALLERY_DATA !== 'undefined' ? GALLERY_DATA.length : '—'), label: SITE_TEXT.numbers.labels.photos },
    { num: (typeof LETTERS_DATA !== 'undefined' ? LETTERS_DATA.length : '—'), label: SITE_TEXT.numbers.labels.letters },
    { num: (typeof PLAYLIST_DATA !== 'undefined' ? PLAYLIST_DATA.length : '—'), label: SITE_TEXT.numbers.labels.songs }
  ];
  container.innerHTML = stats.map(s => `
    <div class="fade-up">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
}

function renderFuture() {
  const container = document.getElementById('future-grid');
  if (!container || typeof SITE_TEXT === 'undefined') return;
  container.innerHTML = SITE_TEXT.future.frames.map(f => `
    <div class="future-frame fade-up">${f}</div>
  `).join('');
}

function renderClosing() {
  if (typeof SITE_TEXT === 'undefined') return;
  const h = document.getElementById('closing-headline');
  const b = document.getElementById('closing-body');
  const d = document.getElementById('closing-date');
  const s = document.getElementById('closing-sign');
  if (h) h.textContent = SITE_TEXT.closing.headline;
  if (b) b.textContent = SITE_TEXT.closing.body;
  if (d) d.textContent = SITE_TEXT.closing.date;
  if (s) s.innerHTML = SITE_TEXT.closing.signature.replace('\n', '<br>');
}

function setupFadeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // re-observe periodically since content renders dynamically
  const observeAll = () => document.querySelectorAll('.fade-up:not(.is-visible)').forEach(el => observer.observe(el));
  observeAll();
  setTimeout(observeAll, 400);
  setTimeout(observeAll, 1200);
}

document.getElementById('replay-btn')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
