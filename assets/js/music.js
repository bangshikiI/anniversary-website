// music.js — press-to-play audio, volume persists for the session, no autoplay

let currentTrack = 0;
let audioEl = null;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PLAYLIST_DATA === 'undefined' || !PLAYLIST_DATA.length) return;

  audioEl = new Audio();
  const savedVolume = sessionStorage.getItem('anniv-volume');
  audioEl.volume = savedVolume !== null ? parseFloat(savedVolume) : 0.7;

  renderPlayerCard();
  loadTrack(0);

  // global header toggle — starts music on first explicit press only
  const headerToggle = document.getElementById('music-toggle');
  headerToggle?.addEventListener('click', () => {
    if (audioEl.paused) { playAudio(); } else { pauseAudio(); }
  });
});

function renderPlayerCard() {
  const el = document.getElementById('player-card');
  const reasonEl = document.getElementById('player-reason');
  if (!el) return;
  const track = PLAYLIST_DATA[currentTrack];
  el.innerHTML = `
    <div class="player-art">${track.title.split(' ').map(w => w[0]).slice(0,2).join('')}</div>
    <div class="player-body">
      <div class="player-title">${track.title}</div>
      <div class="player-artist">${track.artist}</div>
      <div class="player-controls">
        <button id="play-pause-btn" aria-label="play or pause">▶</button>
        <div class="player-progress" id="player-progress"><div class="player-progress-fill" id="player-progress-fill"></div></div>
        <button id="mute-btn" aria-label="mute">🔊</button>
      </div>
    </div>`;
  if (reasonEl) reasonEl.textContent = track.reason;

  document.getElementById('play-pause-btn').addEventListener('click', togglePlay);
  document.getElementById('mute-btn').addEventListener('click', toggleMute);
  document.getElementById('player-progress').addEventListener('click', seek);
}

function loadTrack(i) {
  currentTrack = i;
  audioEl.src = PLAYLIST_DATA[i].src;
  audioEl.addEventListener('timeupdate', updateProgress);
}

function playAudio() {
  audioEl.play().catch(() => {});
  document.querySelectorAll('#play-pause-btn').forEach(b => b.textContent = '❚❚');
  document.getElementById('music-toggle') && (document.getElementById('music-toggle').textContent = '♫');
}
function pauseAudio() {
  audioEl.pause();
  document.querySelectorAll('#play-pause-btn').forEach(b => b.textContent = '▶');
}
function togglePlay() {
  if (audioEl.paused) playAudio(); else pauseAudio();
}
function toggleMute() {
  audioEl.muted = !audioEl.muted;
  document.getElementById('mute-btn').textContent = audioEl.muted ? '🔇' : '🔊';
}
function seek(e) {
  const bar = e.currentTarget;
  const pct = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
  if (audioEl.duration) audioEl.currentTime = pct * audioEl.duration;
}
function updateProgress() {
  const fill = document.getElementById('player-progress-fill');
  if (fill && audioEl.duration) {
    fill.style.width = (audioEl.currentTime / audioEl.duration * 100) + '%';
  }
  sessionStorage.setItem('anniv-volume', audioEl.volume);
}

// hero prompt button also starts music
document.addEventListener('click', (e) => {
  if (e.target.id === 'hero-play-music') {
    playAudio();
  }
});
