# editing guide — VS Code, previewing, adding content, deploying

## 1. installing and opening VS Code

1. download VS Code from `code.visualstudio.com` and install it like any other app.
2. open VS Code. go to **File → Open Folder** and select the `anniversary-website` folder (the one containing `index.html`).
3. on the left side you'll see the **Explorer** panel — this is your file tree. click any file to open it in the editor.
4. click `index.html` to open it. you'll see the HTML code. don't worry about understanding all of it — most of your edits will happen in the `content/` folder instead, in plain-looking text.
5. to save any file: `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac). VS Code shows a dot on the tab if you have unsaved changes.

## 2. viewing the website

### method 1 — open the file directly
find `index.html` in your file explorer (outside VS Code) and double-click it. it opens in your browser.
**limitation:** some things (loading data files, fonts) may not work perfectly this way because browsers restrict local file access. use method 2 for real testing.

### method 2 — Live Server (recommended)
1. in VS Code, click the **Extensions** icon on the left sidebar (looks like 4 squares).
2. search "Live Server" (by Ritwick Dey), click **Install**.
3. right-click `index.html` in the Explorer panel → **Open with Live Server**.
4. your browser opens automatically at something like `http://127.0.0.1:5500`.
5. now, every time you save a file, the browser refreshes automatically.
6. if "Open with Live Server" doesn't appear: make sure the extension finished installing (check the Extensions panel), then restart VS Code.

## 3. adding photos

1. resize/compress your photo if it's huge (anything under 2–3MB is fine for a personal site). you can use any free tool, or just skip this for now — the site will still work, just slower to load.
2. put the file in `assets/images/medium/` (or `thumbnails/` if you already have a small version). keep the filename lowercase, no spaces — use dashes instead, e.g. `beach-trip-1.jpg` not `Beach Trip 1.jpg`.
3. open `content/gallery-data.js`. copy one existing entry (the whole `{ ... }` block) and paste it at the end of the list, right before the closing `];`.
4. edit the fields:
   - `"slug"` — a short unique name, e.g. `"beach-trip-1"`
   - `"thumb"` and `"medium"` — the path to your file, e.g. `"assets/images/medium/beach-trip-1.jpg"`
   - `"caption"` — your caption text
   - `"tags"` — an array like `["college days", "favorites"]`
   - `"featured"` — `true` if you want it to show up more prominently, otherwise `false`
5. save. if you're using Live Server, check the gallery section in your browser.

**example — adding a new entry:**
```js
{
  "slug": "beach-trip-1",
  "thumb": "assets/images/thumbnails/beach-trip-1.jpg",
  "medium": "assets/images/medium/beach-trip-1.jpg",
  "orientation": "landscape",
  "category": "college days",
  "tags": ["college days", "favorites"],
  "caption": "the trip we almost didn't take.",
  "featured": true,
  "alt": "kei and val at the beach"
},
```

## 4. adding videos

1. put your video file in `assets/videos/compressed/`. `.mp4` is the safest format for browsers.
2. for a poster image (the thumbnail shown before it plays), take a screenshot or export a frame, save it in `assets/videos/posters/` with a matching name.
3. add a new entry in `content/timeline.js` (if it belongs on the timeline) using `video` and `poster` fields instead of `photo`, following the existing examples.
4. keep video files under ~5–10MB where possible — large files load slowly, especially on mobile data.

## 5. adding music

1. put the audio file in `assets/audio/`.
2. open `content/playlist.js`, copy the existing track object, and add a new one with your file's path, title, artist, and personal reason.
3. the player automatically shows however many tracks are in this file — no other changes needed.
4. remember: the site never autoplays sound. it always waits for kei to press play. that's intentional (and also required — most browsers block autoplay with sound anyway).

## 6. editing letters

open `content/letters.js`. each letter is a `{ ... }` block with an `id`, `label`, and `body`. edit the `body` text directly — just be careful not to delete the quotation marks (`"`) around the text, or the commas between entries. if you accidentally break the file, VS Code will usually show a red squiggly line or the page will stop working — undo with `Ctrl+Z` / `Cmd+Z` and try again.

the hidden bonus letter (unlocked via the footer flower icon) lives in the same file, at the bottom, in `BONUS_LETTER`.

## 7. troubleshooting

| problem | likely fix |
|---|---|
| blank page | open the browser console (`F12` or right-click → Inspect → Console) and look for a red error — it usually names the exact file/line |
| missing image | check the filename matches exactly, including lowercase/uppercase and extension (`.jpg` vs `.JPG` matters on GitHub Pages even though your computer might not care) |
| music not playing | check you clicked play — it never autoplays. also check the file path in `playlist.js` matches the real file |
| Live Server option missing | restart VS Code after installing the extension |
| CSS changes not showing | hard-refresh the browser (`Ctrl+Shift+R` / `Cmd+Shift+R`) — sometimes the browser caches the old CSS |
| JS errors | check the browser console; a missing comma or quote in a `content/*.js` file is the most common cause |
| wrong file path | paths are case-sensitive on GitHub Pages even if your computer isn't — double check |
| GitHub Pages shows 404 | confirm Pages is enabled in repo Settings → Pages, and that it's pointing at the right branch/folder |
| works locally, not on GitHub | almost always a filename casing or path mismatch — check the exact filenames in your repo |
| large photos loading slowly | compress them before uploading; aim under ~500KB each for gallery images |

## 8. GitHub deployment guide

1. create a free account at `github.com` if you don't have one.
2. click **New repository**. name it something like `our-anniversary` (this name becomes part of your URL).
3. choose **Public** (GitHub Pages requires this on free accounts, unless you have GitHub Pro/Team) — see the privacy note below.
4. on the new repo page, click **uploading an existing file**, then drag in everything from this folder (or use "Add file → Upload files").
5. commit the upload.
6. go to **Settings → Pages**. under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. save.
7. wait a minute or two, then refresh — GitHub shows your live URL (something like `https://yourusername.github.io/our-anniversary/`).
8. to update the site later: edit files locally in VS Code, then re-upload the changed files through the same "Add file → Upload files" flow (or use Git through VS Code's Source Control panel, if you want the faster way — ask me for that guide separately if you'd like it).
9. before deleting or overwriting anything, it's worth keeping a backup copy of the folder on your computer.
10. after every update, open the live URL and click through the site once, on both desktop and phone.

### a note on privacy
a standard GitHub Pages site is public to anyone with the link, and can be indexed by search engines unless you take extra steps. this site includes:
- a lightweight passcode screen (change the code in `assets/js/main.js` — see the README)
- a `noindex` meta tag asking search engines not to index it (not a guarantee, just a request most engines respect)

if you want genuine privacy — not just obscurity — options include making the GitHub repo private (requires Pages access via GitHub Pro, or hosting elsewhere), or using a different host with real authentication. happy to walk through either if you want it.

## 9. checklists

### pre-launch checklist
- [ ] passcode changed from the default
- [ ] all photo/video paths load correctly (check browser console for 404s)
- [ ] music plays after pressing the button
- [ ] all 12 open-when letters + the hidden bonus letter open and close correctly
- [ ] main letter unfolds and the PDF download works
- [ ] stats section shows sensible numbers

### mobile testing checklist
- [ ] no horizontal scrolling on a real phone (not just a resized browser)
- [ ] all tap targets are easy to hit
- [ ] gallery swipe works
- [ ] text is readable without zooming
- [ ] test both portrait and landscape

### privacy checklist
- [ ] comfortable with the repo being public (even passcode-gated)
- [ ] no sensitive screenshots or private conversations included
- [ ] checked photos for identifying location metadata if that matters to you
- [ ] decided whether the audio file should stay, given it wasn't from a licensed source

### content proofreading checklist
- [ ] read every letter out loud once
- [ ] check dates are all correct (easy to mistype a year)
- [ ] check names/nicknames are consistent throughout

### february 14, 2027 publishing checklist
- [ ] final content review a few days before
- [ ] test the live GitHub Pages link on your own phone before sending it
- [ ] send the link with the passcode separately (e.g., say it out loud, don't put it in the same message as the link)
