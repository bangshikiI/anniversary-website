// gallery.js — filterable grid + lightbox

let galleryFiltered = [];
let lightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderGalleryFilters();
  renderGallery('all');
  setupLightbox();
});

function renderGalleryFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar || typeof GALLERY_DATA === 'undefined') return;
  const preferredOrder = ['all', 'favorites', 'anniversaries', '2022-2023', '2024', '2025', '2026', 'school days', 'college days'];
  const present = new Set(GALLERY_DATA.flatMap(g => g.tags));
  const cats = ['all', ...preferredOrder.filter(c => c !== 'all' && present.has(c))];
  // catch any tags not in the preferred list
  present.forEach(t => { if (!cats.includes(t)) cats.push(t); });

  bar.innerHTML = cats.map((c, i) => `
    <button class="filter-chip ${i === 0 ? 'active' : ''}" data-filter="${c}">${c}</button>
  `).join('');
  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-chip');
    if (!btn) return;
    bar.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
}

function renderGallery(filter) {
  const grid = document.getElementById('gallery-grid');
  if (!grid || typeof GALLERY_DATA === 'undefined') return;
  galleryFiltered = filter === 'all' ? GALLERY_DATA : GALLERY_DATA.filter(g => g.tags.includes(filter));
  grid.innerHTML = galleryFiltered.map((g, i) => `
    <div class="gallery-item" data-index="${i}" tabindex="0" role="button" aria-label="open photo ${i + 1}">
      <img src="${g.thumb}" alt="${g.alt}" loading="lazy">
      <span class="g-caption">${g.caption}</span>
    </div>`).join('');

  grid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
    item.addEventListener('keydown', (e) => { if (e.key === 'Enter') openLightbox(parseInt(item.dataset.index)); });
  });
}

function setupLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay) return;
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });
  document.getElementById('lightbox-prev')?.addEventListener('click', () => navLightbox(-1));
  document.getElementById('lightbox-next')?.addEventListener('click', () => navLightbox(1));

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });

  // basic swipe support
  let touchStartX = 0;
  overlay.addEventListener('touchstart', (e) => touchStartX = e.changedTouches[0].screenX);
  overlay.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) navLightbox(dx > 0 ? -1 : 1);
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox-overlay').classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('active');
}
function navLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryFiltered.length) % galleryFiltered.length;
  updateLightbox();
}
function updateLightbox() {
  const item = galleryFiltered[lightboxIndex];
  if (!item) return;
  document.getElementById('lightbox-img').src = item.medium;
  document.getElementById('lightbox-img').alt = item.alt;
  document.getElementById('lightbox-counter').textContent = `${lightboxIndex + 1} / ${galleryFiltered.length}`;
}
