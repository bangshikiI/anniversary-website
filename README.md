# four years of us
an anniversary website for kei, from val. built for february 14, 2027.

## what's in here
a single-page website (`index.html`) with all the sections from our plan: hero, story, timeline, scrapbook, ordinary moments, our songs, open-when letters, reasons i love her, a photo/video gallery, the main letter (with a downloadable PDF), stats, future memories, and a closing section. there's also one hidden extra — a small flower icon in the footer that unlocks a bonus letter, not linked anywhere else.

## before you do anything: change the passcode
open `assets/js/main.js`, find this line near the top:
```js
const SITE_PASSCODE = "0214";
```
change `"0214"` to whatever you want kei to type to get in. **this is not real security** — anyone who looks at the page source can find it. it's just a soft barrier against randomly stumbling onto the link. see `docs/editing-guide.md` for more on this.

## previewing locally
see `docs/editing-guide.md` — section "viewing the website" — for the full walkthrough (double-click method vs. Live Server).

## adding photos, videos, or letters
everything is data-driven. you don't need to touch `index.html` or the CSS to add a new memory:
- **photos/videos** → `docs/editing-guide.md`, "adding photos" and "adding videos"
- **letters** → edit `content/letters.js`
- **timeline entries** → edit `content/timeline.js`
- **music** → edit `content/playlist.js`

## deploying to GitHub Pages
full step-by-step in `docs/editing-guide.md` under "GitHub deployment guide". short version: create a repo, upload everything in this folder, enable GitHub Pages from the repo settings, done.

## a few honest notes
- the passcode screen is a deterrent, not real privacy — see above.
- the background song (`assets/audio/libu-libong-buwan.mp3`) was provided by you; make sure you're comfortable with it living in a public (even if passcode-gated) repo. if not, swap it out or drop the audio file and just keep the written reason text.
- the site is built with plain HTML/CSS/JS — no build step, no accounts beyond GitHub, nothing that costs money.

happy anniversary. — built with Claude
