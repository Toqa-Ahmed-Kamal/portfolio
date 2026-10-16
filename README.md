# Toqa Ahmed Kamal — Portfolio (React)

The portfolio site built with React + Vite. Bilingual (EN/AR with RTL), dark
geospatial theme, and an interactive Leaflet map.

## Run it locally
You need [Node.js](https://nodejs.org) (version 18 or newer).

```bash
npm install      # first time only
npm run dev      # opens the site at http://localhost:5173
```

`npm run build` creates the production version in `dist/`.

## File map
```
index.html                 HTML shell (fonts, <div id="root">)
public/img/                Project images — drop new screenshots here
src/data.js                ALL text content — edit this file to change any copy
src/style.css              All design/styling
src/App.jsx                Page routes (/, /experience, /projects, /contact)
src/i18n.jsx               EN/AR language switch + RTL
src/pages/                 One component per page
src/components/            Nav, Footer, ProjectCard, CoverageMap, BootOverlay, Icons
```

## Adding a project image
1. Put the file in `public/img/`.
2. In `src/data.js`, set the project's `image: "img/your-file.png"`.

For a video, upload it to YouTube (Unlisted) and set `video: "VIDEO_ID"`.

## Mobile Applications section
In `src/data.js`, add project ids to `MOBILE_APP_IDS`, e.g. `["aula-tourism"]`.
They appear in the "Mobile Applications" section on Home (inside a phone frame)
and under the "Mobile Apps" filter on Projects. While the list is empty, both
show a "Coming soon" state. For a better fit, give the project a portrait
screenshot with `mobileImage: "img/your-phone-shot.png"`.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: Add New → Project → import the repo.
3. Framework Preset: **Vite** (detected automatically). Build Command: `npm run build`. Output Directory: `dist`.
4. Deploy. `vercel.json` already makes page links like `/projects` work on refresh.
