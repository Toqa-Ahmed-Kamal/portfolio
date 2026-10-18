# Toqa Ahmed Kamal — Portfolio

Personal portfolio for Toqa Ahmed Kamal, a **Web GIS Developer** based in Cairo. It is a bilingual
(English / Arabic, full RTL) single-page app with a dark "night basemap" cartographic design, an
interactive Leaflet coverage map, GSAP animations, and light/dark themes.

- Repo: https://github.com/Toqa-Ahmed-Kamal/portfolio (branch `main`), deployed on Vercel.
- The owner usually writes in Egyptian Arabic. Reply in Arabic unless asked otherwise.

## Stack & commands

React 18 + Vite 5, react-router-dom 6, Leaflet 1.9, GSAP 3.13 (+ `@gsap/react`, ScrollTrigger, SplitText).
No TypeScript, no CSS framework, no test suite.

```bash
npm run dev      # http://localhost:5173 (StrictMode on — effects run twice)
npm run build    # → dist/
```

`vercel.json` rewrites every path to `index.html` so `/projects` etc. survive a refresh.

## Pages (src/pages) and what's on them

| Route | Page | Content |
|---|---|---|
| `/` | Home.jsx | Boot overlay → hero (headline, CTA, count-up stats, intro video) · coverage map · tech stack · featured projects · Mobile Applications · Client Reviews |
| `/experience` | Experience.jsx | Timeline of roles (line draws on scroll) · education · skills · certifications |
| `/projects` | Projects.jsx | All projects with category filter chips (incl. a "Mobile Apps" filter) |
| `/contact` | Contact.jsx | Email / phone / location cards, socials, "what I can help with" |

Shared components (src/components): Nav (links, theme toggle, language toggle, scroll progress),
Footer, ProjectCard, MobileApps, Reviews, CoverageMap, BootOverlay, IntroVideo, Icons, DesignLab.

**Intro video** (`IntroVideo.jsx`, files in `public/video/`): Toqa's 41 s self-introduction, portrait.
`intro.mp4` is a re-encode of the original (white picture-frame border cropped out, H.264 CRF 30,
faststart, ~5.7 MB) plus `intro-poster.jpg`. Browsers only autoplay muted, so it starts muted + looping
when the boot overlay clears; "Tap for sound" restarts it from 0 with audio, played once, then "Replay".
It pauses while off-screen. The original HeyGen export has a visible watermark.

## Content lives in `src/data.js` — edit text there, not in components

Every user-facing string is bilingual: `{ en: "...", ar: "..." }`, rendered with `t(field)` from
`useLang()` (src/i18n.jsx). Main exports:

- `META` (name, contacts, coords), `UI` (all interface copy, grouped per section), `STATS`, `STACK`,
  `EXPERIENCE`, `EDUCATION`, `SKILLS`, `CERTIFICATIONS`, `HELP_ITEMS`, `LOCATIONS` (map markers).
- `PROJECTS` — `{ id, category, title, desc, tags, image, video, link }`.
  `category` ∈ `gov | mapping | analysis | market | mobile` (labels in `CAT_NAMES`, ProjectCard.jsx).
  `image: "img/File Name.png"` points into `public/img/` (file names with spaces are fine).
  `video` is a YouTube ID.
- `FEATURED_IDS` — projects shown on Home.
- `MOBILE_APP_IDS` — projects shown in the Mobile Applications section and the "Mobile Apps" filter.
  Optional `mobileImage` on a project = portrait screenshot shown inside a phone frame; otherwise the
  (usually multi-device) showcase `image` is shown full width.
- `REVIEWS` — typed freelance reviews (schema documented above the array). Currently empty.
- `REVIEW_SHOTS` — 40 real WhatsApp screenshots of client messages, shown as a 1/2/3-column wall
  (12 first, "Show all" expands, click opens a lightbox). Files: `public/reviews/rNN.webp`, re-encoded
  from the owner's originals in `public/img/rev/`. Two originals showed a client's phone number — the
  webp copies have it covered with a box in the bubble color. `public/img/rev/` is git-ignored so the
  unredacted originals are never deployed; always redact personal data in new screenshots the same way.

## Styling — `src/style.css` (single file)

- Everything is CSS custom properties on `:root`. Token names come from the map metaphor:
  `--amber` = primary accent, `--water` = secondary, `--terrain` = tertiary, `--bedrock` = page bg,
  `--panel` = cards, `--line` = borders, `--paper` = text, `--muted` = secondary text.
  Translucent fills use rgb-channel tokens: `rgba(var(--amber-rgb), 0.1)`, `--bg-rgb`, `--panel-rgb`…
  Never hard-code colors; add/derive a token so both themes and the Design Lab keep working.
- Light theme: `:root[data-theme="light"]` redefines the tokens. `--on-accent` is the text color on
  accent-filled things (buttons, active nav pill).
- RTL: use logical properties (`inset-inline-start`, `margin-inline-*`, `padding-inline-*`).
- Layout primitives: `.container`, `section`, `.section-head` (eyebrow + h2 + p), `.page-header`.

## Theme — `src/theme.jsx`

`ThemeProvider` / `useTheme()`. An inline script in `index.html` sets `data-theme` before first paint
(saved choice, else system preference). Toggling uses the View Transitions API so the new theme grows
as a circle from the toggle button. CoverageMap swaps Esri Dark Gray / Light Gray basemaps by theme.

## Motion — `src/motion.js` (GSAP)

- `useReveal(deps, headDeps)` (re-exported by `useReveal.js`) runs on every page:
  `.section-head` / `.page-header` headings rise word-by-word (SplitText), `.reveal` blocks rise in
  with ScrollTrigger.batch, tags/chips pop in. Add `className="reveal"` to new cards/blocks.
- `useGlobalMotion` (in App): page transition on route change, magnetic buttons, cursor spotlight on
  cards (`--mx/--my`).
- Home has its own hero timeline (waits for the boot overlay's `boot-done` event + `document.fonts.ready`),
  count-up stats, map parallax. Experience draws `.timeline-progress` with a scrubbed ScrollTrigger.
- Everything is wrapped in `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`.

**Gotchas already solved — keep these patterns:**
0. Font waits go through `fontsReady()` (motion.js), capped at 1.5 s — waiting on `document.fonts.ready`
   alone left the hero blank on slow connections.
1. Animation starts are async (fonts / boot). Each start has an `alive` flag + cancel/cleanup so a
   run that React already cleaned up (StrictMode double-invoke, language switch) never fires late.
   Without it, counters stuck at `00` and the Projects heading vanished.
2. Count-up reads the real value from `data-value`, never from the element's text.
3. SplitText is only applied while a heading animates, then `revert()`ed, so React owns the text
   again and switching language never leaves stale split markup.
4. The hero `h1` uses gradient text (`background-clip: text`), which can't render transformed
   children — `.is-splitting` swaps it to solid ink during the word animation.
5. The page transition is skipped on first load (the boot overlay is `position: fixed` inside `<main>`).

## Design Lab (temporary) — `src/components/DesignLab.jsx` + `src/designOptions.js`

A floating palette button (bottom-left) for trying designs live. Visible in dev, or on the deployed
site with `?lab` in the URL (remembered for the session); normal visitors never see it.
- **Fonts tab:** 20 pairings (display / body / mono + Arabic display / body), loaded on demand from
  Google Fonts. Applied via `--f-display`, `--f-body`, `--f-mono`, `--w-display`, `--w-display-ar`.
  Google returns 400 if a requested weight doesn't exist — keep weights accurate in `FONT_PAIRS`.
- **Looks tab:** 14 whole-site looks (`LOOKS`). Each sets color tokens per theme (inline on `<html>`)
  plus `data-shape` (sharp/soft/round radii), `data-cards` (glass/outline/flat/brutal),
  `data-pattern` (grid/dots/topo/blueprint/lines/none) and `data-glow` (subtle/aurora/sunset/neon/none),
  styled in the "DESIGN LAB LOOKS" block of style.css.
- Choice persists in `localStorage["design-lab"]`; "Copy my choice" copies e.g.
  `Font: … [syne] · Look: … [ocean]`.
- **When the owner picks one:** bake those fonts into `index.html` + `:root` font tokens, bake the look's
  tokens into `:root` / `:root[data-theme="light"]` and its pattern/card/shape rules into the base CSS,
  then delete DesignLab.jsx, designOptions.js, the lab CSS blocks, and the `SHOW_LAB` line in App.jsx.

## Working conventions

- Never invent reviews, testimonials, client names or project facts. Ask the owner for real ones.
  When a project description had to be inferred from screenshots, say so and ask her to confirm.
- New project images go in `public/img/`; check that no image there is left unlinked in data.js.
- Commit/push only when asked. Commit messages end with the Co-Authored-By line from the session.
- Verify UI changes in a real browser (puppeteer-core driving the installed Chrome works well; keep
  test scripts outside the repo). Headless Chrome's `--screenshot` freezes GSAP mid-animation and has
  a ~500px minimum window width, so it misreports mobile layout.
- Check dev mode too (`npm run dev`): StrictMode exposes animation-lifecycle bugs the build hides.

## Open items (as of 2026-10-17)

- 8 projects still have no image: asir-education, oil-spill, wind-turbines, khalid-airport,
  bagcilar-green, tigris-hydrology, alexandria-qol (**featured on Home**), gmarketing-research.
- Design Lab choice pending — then bake it in and remove the lab.
- Descriptions of the Livestock, LinkedWhere, Recipes and Shopping apps were written from their
  screenshots and still need the owner's confirmation.
