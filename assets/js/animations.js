// animations.js — renders scrapbook, ordinary moments, timeline, and reasons sections

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderScrapbook();
  renderOrdinary();
  renderReasons();
  setupTimelineDraw();
});

function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container || typeof TIMELINE_DATA === 'undefined') return;
  container.innerHTML = TIMELINE_DATA.map(t => {
    let media = '';
    if (t.empty) {
      media = `<div class="timeline-media timeline-empty-frame">space for this one — coming feb 14, 2027.</div>`;
    } else if (t.video) {
      media = `<div class="timeline-media${t.large ? ' timeline-media-large' : ''}"><video muted loop playsinline poster="${t.poster || ''}" controls preload="none"><source src="${t.video}" type="video/mp4"></video></div>`;
    } else if (t.photo) {
      media = `<div class="timeline-media"><img src="${t.photo}" alt="${t.title}" loading="lazy"></div>`;
    }
    return `
      <div class="timeline-entry fade-up ${t.milestone ? 'milestone' : ''}">
        <span class="timeline-date">${t.date}</span>
        <h4 class="timeline-title">${t.title}</h4>
        <p class="timeline-note">${t.note}</p>
        ${media}
      </div>`;
  }).join('');
}

function setupTimelineDraw() {
  const wrap = document.querySelector('.timeline-wrap');
  if (!wrap) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) wrap.classList.add('is-visible'); });
  }, { threshold: 0.05 });
  obs.observe(wrap);
}

function renderScrapbook() {
  const container = document.getElementById('scrapbook-grid');
  if (!container || typeof GALLERY_DATA === 'undefined') return;
  // pick a curated mix: featured + a spread across senior-high/college
  const featured = GALLERY_DATA.filter(g => g.featured);
  const rest = GALLERY_DATA.filter(g => !g.featured);
  const picks = [...featured, ...rest.filter((_, i) => i % 6 === 0)].slice(0, 18);

  container.innerHTML = picks.map((p, i) => `
    <figure class="scrap-card ${i % 4 === 0 ? 'film' : ''} fade-up">
      ${p.tags && p.tags.includes('anniversaries') ? '<div class="calendar-badge"><span class="cb-month">feb</span><span class="cb-day">14</span></div>' : ''}
      <img src="${p.thumb}" alt="${p.alt}" loading="lazy">
      <figcaption>${p.caption}</figcaption>
    </figure>`).join('');
}

function renderOrdinary() {
  const container = document.getElementById('newspaper-flood');
  if (!container) return;
  const paragraphs = [
    "there's no headline big enough for the ordinary days, so here's an attempt anyway. this is the part of the archive that isn't a milestone — no anniversary, no big date, just the two of us existing in the same room. malls we wandered without buying anything. dinners where we argued about what to order and then split it anyway. car rides with no destination, just time to kill and someone to kill it with.",
    "if you asked me to name the moments i love most, i'm not sure i could point to one. it's closer to a texture than a memory — the sound of her laughing at something not even that funny, the way food tastes better when she's across the table, the quiet of just sitting near her doing nothing in particular.",
    "somewhere in one of the open-when letters i wrote her, i said i'd rather have the real version of her, moods and all, than an easier one that isn't really her. i still mean that. four years in, and the ordinary days are still the ones i'd choose first — every single time, no contest.",
    "our song still plays in the background of most of this. libu-libong buwan, kyle raphael — the one she sings to me when things get loud, the one that always sounds like a promise to come home no matter what changes.",
    "some of this archive is grand — anniversaries, letters, a website built at 2am. most of it isn't. most of it is ordinary, unremarkable, forgettable to anyone but us. that's exactly why it's here."
  ];
  // repeat enough times to flood the full section regardless of viewport size — text is decorative, not meant to be read
  const flood = [];
  for (let i = 0; i < 6; i++) flood.push(...paragraphs);
  container.innerHTML = flood.map(p => `<p>${p}</p>`).join('');
}

function renderReasons() {
  const container = document.getElementById('reasons-stack');
  if (!container || typeof REASONS_DATA === 'undefined') return;
  container.innerHTML = REASONS_DATA.map(r => `
    <div class="reason-card fade-up">${r}</div>
  `).join('');
}
