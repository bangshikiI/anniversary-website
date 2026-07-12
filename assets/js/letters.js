// letters.js — envelope grid + modal, main sealed letter, hidden bonus letter

document.addEventListener('DOMContentLoaded', () => {
  renderEnvelopes();
  setupLetterModal();
  setupMainLetter();
  setupFlowerSecret();
});

function renderEnvelopes() {
  const grid = document.getElementById('letters-grid');
  if (!grid || typeof LETTERS_DATA === 'undefined') return;
  grid.innerHTML = LETTERS_DATA.map(l => `
    <button class="envelope-card fade-up" data-id="${l.id}"><span>${l.label}</span></button>
  `).join('');
  grid.querySelectorAll('.envelope-card').forEach(card => {
    card.addEventListener('click', () => openLetterModal(card.dataset.id));
  });
}

function setupLetterModal() {
  const overlay = document.getElementById('letter-overlay');
  if (!overlay) return;
  const closeModal = () => {
    overlay.classList.remove('active');
    const videoEl = document.getElementById('letter-modal-video-el');
    videoEl?.pause();
  };
  document.getElementById('letter-modal-close')?.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openLetterModal(id) {
  const letter = LETTERS_DATA.find(l => l.id === id);
  if (!letter) return;
  showLetterModal(letter);
}

function showLetterModal(letter) {
  document.getElementById('letter-modal-title').textContent = letter.label;
  document.getElementById('letter-modal-body').innerHTML = emphasizeLastLine(letter.body);

  const videoWrap = document.getElementById('letter-modal-video');
  const videoEl = document.getElementById('letter-modal-video-el');
  if (letter.video) {
    videoEl.src = letter.video;
    if (letter.poster) videoEl.poster = letter.poster;
    videoWrap.style.display = 'block';
  } else {
    videoEl.pause();
    videoEl.removeAttribute('src');
    videoEl.load();
    videoWrap.style.display = 'none';
  }
  document.getElementById('letter-overlay').classList.add('active');
}

// wraps the final sentence in <strong> for the quiet-emphasis look, matching val's reference style
function emphasizeLastLine(text) {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const sentences = escaped.match(/[^.!?]+[.!?]+(\s|$)/g);
  if (!sentences || sentences.length < 2) return escaped;
  const last = sentences[sentences.length - 1].trim();
  const rest = sentences.slice(0, -1).join('').trim();
  return `${rest} <strong>${last}</strong>`;
}

function setupMainLetter() {
  const envelope = document.getElementById('seal-envelope');
  const panel = document.getElementById('letter-panel');
  const skip = document.getElementById('skip-animation');
  if (!envelope || typeof MAIN_LETTER === 'undefined') return;

  document.getElementById('letter-date').textContent = MAIN_LETTER.date;
  document.getElementById('letter-greeting').textContent = MAIN_LETTER.greeting;
  document.getElementById('letter-body-text').innerHTML = MAIN_LETTER.paragraphs.map(p => `<p>${p}</p>`).join('');
  document.getElementById('letter-sign-off').innerHTML = `${MAIN_LETTER.closing}<br>${MAIN_LETTER.signature}`;

  const open = () => { panel.classList.add('open'); envelope.style.display = 'none'; panel.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  envelope.addEventListener('click', open);
  envelope.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(); });
  skip?.addEventListener('click', open);
}

function setupFlowerSecret() {
  const icon = document.getElementById('flower-secret');
  if (!icon || typeof BONUS_LETTER === 'undefined') return;
  icon.addEventListener('click', () => {
    showLetterModal(BONUS_LETTER);
  });
}
