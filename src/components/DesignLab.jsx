/* Design Lab — a floating panel for trying font pairings and color palettes live.
   Shown in dev, or on the deployed site with ?lab in the URL. Choices persist in
   localStorage; once one is picked, bake it into the stylesheet and remove the lab. */
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../theme.jsx";
import { FONT_PAIRS, LOOKS, LOOK_TOKENS, LOOK_ATTRS, lookTokens, lookSwatches, fontHref, fontStack } from "../designOptions.js";

const STORE = "design-lab";
const DEFAULT = { font: "plex", look: "survey" };

export function labEnabled() {
  if (import.meta.env.DEV) return true;
  try {
    if (new URLSearchParams(window.location.search).has("lab")) sessionStorage.setItem("lab", "1");
    return sessionStorage.getItem("lab") === "1";
  } catch {
    return false;
  }
}

function readChoice() {
  try {
    return { ...DEFAULT, ...JSON.parse(localStorage.getItem(STORE) || "{}") };
  } catch {
    return DEFAULT;
  }
}

const loaded = new Set();
function loadFont(f) {
  const href = fontHref(f);
  if (loaded.has(href)) return Promise.resolve();
  loaded.add(href);
  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = link.onerror = resolve;
    document.head.appendChild(link);
  });
}
const pairFonts = (p) => [p.display, p.body, p.mono, p.arDisplay, p.arBody];

function applyFonts(pair) {
  const root = document.documentElement.style;
  if (pair.id === "plex") {
    ["--f-display", "--f-body", "--f-mono", "--w-display", "--w-display-ar"].forEach((v) => root.removeProperty(v));
  } else {
    root.setProperty("--f-display", fontStack(pair.display, pair.arDisplay, "sans-serif"));
    root.setProperty("--f-body", fontStack(pair.body, pair.arBody, "sans-serif"));
    root.setProperty("--f-mono", fontStack(pair.mono, pair.arBody, "monospace"));
    root.setProperty("--w-display", String(pair.weight ?? 600));
    root.setProperty("--w-display-ar", String(pair.arWeight ?? pair.weight ?? 600));
  }
  Promise.all(pairFonts(pair).map(loadFont))
    .then(() => document.fonts.ready)
    .then(() => ScrollTrigger.refresh());
}

function applyLook(look, mode) {
  const html = document.documentElement;
  LOOK_TOKENS.forEach((v) => html.style.removeProperty(v));
  Object.entries(lookTokens(look, mode)).forEach(([k, v]) => html.style.setProperty(k, v));
  // shape / cards / pattern / glow switch whole CSS treatments (see "DESIGN LAB LOOKS" in style.css)
  LOOK_ATTRS.forEach((a) => {
    if (look.id === "survey") delete html.dataset[a];
    else html.dataset[a] = look[a];
  });
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/* A tiny mock page in the look's own colors, shape and card style. */
function LookPreview({ look, mode }) {
  const c = lookSwatches(look, mode);
  const r = { sharp: 1, soft: 4, default: 6, round: 10 }[look.shape] ?? 6;
  const card = {
    background: look.cards === "outline" ? "transparent" : c.panel,
    border: `${look.cards === "brutal" ? 2 : 1}px solid ${look.cards === "flat" ? "transparent" : c.line}`,
    borderRadius: r,
    boxShadow: look.cards === "brutal" ? `3px 3px 0 ${c.ink}` : look.cards === "glass" ? `0 0 0 1px ${c.line}, 0 6px 14px -8px ${c.accent}` : "none",
    opacity: look.cards === "glass" ? 0.85 : 1,
  };
  return (
    <span className={`lab-preview pat-${look.pattern}`} style={{ background: c.bg, color: c.line, borderRadius: r + 2 }}>
      {look.glow !== "none" && <span className="lab-preview-glow" style={{ background: `radial-gradient(60% 70% at 80% 0%, ${c.accent}55, transparent 70%), radial-gradient(50% 60% at 10% 10%, ${c.secondary}44, transparent 70%)` }} />}
      <span className="lab-preview-line" style={{ background: c.ink, width: "58%" }} />
      <span className="lab-preview-line" style={{ background: c.muted, width: "40%", opacity: 0.7 }} />
      <span className="lab-preview-cards">
        <span style={card}>
          <span className="lab-preview-pill" style={{ background: c.accent, borderRadius: look.shape === "sharp" ? 1 : 99 }} />
        </span>
        <span style={card}>
          <span className="lab-preview-pill" style={{ background: c.tertiary, borderRadius: look.shape === "sharp" ? 1 : 99 }} />
        </span>
      </span>
    </span>
  );
}

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M12 3a9 9 0 100 18c1.1 0 1.6-.8 1.6-1.6 0-1-.8-1.4-.8-2.4 0-1 .8-1.6 1.8-1.6H17a4 4 0 004-4c0-4.7-4-8.4-9-8.4z" />
    <circle cx="7.5" cy="11" r="1.2" fill="currentColor" />
    <circle cx="10.5" cy="7" r="1.2" fill="currentColor" />
    <circle cx="15" cy="7.5" r="1.2" fill="currentColor" />
  </svg>
);

export default function DesignLab() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("fonts");
  const [choice, setChoice] = useState(readChoice);
  const [copied, setCopied] = useState(false);

  const pair = FONT_PAIRS.find((p) => p.id === choice.font) || FONT_PAIRS[0];
  const look = LOOKS.find((l) => l.id === choice.look) || LOOKS[0];

  useEffect(() => {
    try {
      localStorage.setItem(STORE, JSON.stringify(choice));
    } catch {
      /* ignore */
    }
  }, [choice]);

  useEffect(() => applyFonts(pair), [pair]);
  useEffect(() => applyLook(look, theme), [look, theme]);

  // Previews in the list need every font — load them all the first time the panel opens.
  useEffect(() => {
    if (open && tab === "fonts") FONT_PAIRS.forEach((p) => pairFonts(p).forEach(loadFont));
  }, [open, tab]);

  const summary = `Font: ${pair.name} [${pair.id}] · Look: ${look.name} [${look.id}]`;
  const copy = () => {
    navigator.clipboard?.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="lab" dir="ltr">
      <button className={`lab-fab${open ? " open" : ""}`} onClick={() => setOpen((o) => !o)} aria-label="Design lab" aria-expanded={open}>
        <PaletteIcon />
      </button>

      {open && (
        <div className="lab-panel" role="dialog" aria-label="Design lab">
          <div className="lab-head">
            <strong>Design Lab</strong>
            <span>try it live · saved on this browser</span>
          </div>

          <div className="lab-tabs">
            <button className={tab === "fonts" ? "active" : ""} onClick={() => setTab("fonts")}>
              Fonts <em>{FONT_PAIRS.length}</em>
            </button>
            <button className={tab === "colors" ? "active" : ""} onClick={() => setTab("colors")}>
              Looks <em>{LOOKS.length}</em>
            </button>
          </div>

          <div className="lab-list">
            {tab === "fonts"
              ? FONT_PAIRS.map((p) => (
                  <button
                    key={p.id}
                    className={`lab-option${p.id === pair.id ? " active" : ""}`}
                    onClick={() => setChoice((c) => ({ ...c, font: p.id }))}
                  >
                    <span className="lab-font-sample" style={{ fontFamily: `"${p.display.family}"`, fontWeight: p.weight ?? 600 }}>
                      Maps behind decisions
                    </span>
                    <span className="lab-font-sample ar" dir="rtl" style={{ fontFamily: `"${p.arDisplay.family}"`, fontWeight: p.arWeight ?? p.weight ?? 600 }}>
                      خرائط تُبنى عليها القرارات
                    </span>
                    <span className="lab-font-body" style={{ fontFamily: `"${p.body.family}"` }}>
                      {p.name}
                    </span>
                    <span className="lab-font-meta" style={{ fontFamily: `"${p.mono.family}"` }}>
                      {p.display.family} · {p.body.family} · {p.arDisplay.family}
                    </span>
                  </button>
                ))
              : LOOKS.map((l) => (
                  <button
                    key={l.id}
                    className={`lab-option lab-look${l.id === look.id ? " active" : ""}`}
                    onClick={() => setChoice((ch) => ({ ...ch, look: l.id }))}
                  >
                    <LookPreview look={l} mode={theme} />
                    <span className="lab-look-text">
                      <span className="lab-font-body">{l.name}</span>
                      <span className="lab-font-meta">{l.tagline}</span>
                    </span>
                  </button>
                ))}
          </div>

          <div className="lab-foot">
            <button onClick={() => setChoice(DEFAULT)}>Reset</button>
            <button className="primary" onClick={copy}>
              {copied ? "Copied ✓" : "Copy my choice"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
