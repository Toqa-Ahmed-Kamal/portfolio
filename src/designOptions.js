/* ==========================================================================
   DESIGN LAB OPTIONS — font pairings and color palettes to try on the live site.
   Once one is chosen, bake it into style.css / index.html and delete the lab.
   ========================================================================== */

// Each font: Google Fonts family + the weights to request (must exist for that family,
// otherwise Google returns 400). `null` = the family's single default weight.
const F = (family, weights) => ({ family, weights });

export const FONT_PAIRS = [
  {
    id: "plex",
    name: "Cartographer (current)",
    display: F("Space Grotesk", "500;600;700"),
    body: F("IBM Plex Sans", "400;500;600"),
    mono: F("IBM Plex Mono", "400;500"),
    arDisplay: F("Noto Kufi Arabic", "500;600;700"),
    arBody: F("IBM Plex Sans Arabic", "400;500;600;700"),
  },
  {
    id: "syne",
    name: "Gallery — Syne + Inter",
    display: F("Syne", "600;700;800"),
    body: F("Inter", "400;500;600"),
    mono: F("JetBrains Mono", "400;500"),
    arDisplay: F("Cairo", "600;700;800"),
    arBody: F("Cairo", "400;500;600"),
    weight: 700,
  },
  {
    id: "fraunces",
    name: "Editorial — Fraunces serif",
    display: F("Fraunces", "500;600;700"),
    body: F("Inter", "400;500;600"),
    mono: F("IBM Plex Mono", "400;500"),
    arDisplay: F("Amiri", "400;700"),
    arBody: F("Noto Naskh Arabic", "400;500;600"),
    weight: 600,
  },
  {
    id: "unbounded",
    name: "Bold — Unbounded + Manrope",
    display: F("Unbounded", "500;600;700"),
    body: F("Manrope", "400;500;600"),
    mono: F("Space Mono", "400;700"),
    arDisplay: F("Lalezar", null),
    arBody: F("Almarai", "400;700"),
    weight: 600,
    arWeight: 400,
  },
  {
    id: "instrument",
    name: "Studio — Instrument Serif",
    display: F("Instrument Serif", null),
    body: F("Instrument Sans", "400;500;600"),
    mono: F("Geist Mono", "400;500"),
    arDisplay: F("Reem Kufi", "500;600;700"),
    arBody: F("Rubik", "400;500;600"),
    weight: 400,
    arWeight: 600,
  },
  {
    id: "outfit",
    name: "Clean — Outfit + DM Sans",
    display: F("Outfit", "500;600;700"),
    body: F("DM Sans", "400;500;600"),
    mono: F("DM Mono", "400;500"),
    arDisplay: F("Tajawal", "500;700;800"),
    arBody: F("Tajawal", "400;500;700"),
  },
  {
    id: "bricolage",
    name: "Characterful — Bricolage",
    display: F("Bricolage Grotesque", "500;600;700"),
    body: F("Figtree", "400;500;600"),
    mono: F("Fira Code", "400;500"),
    arDisplay: F("El Messiri", "500;600;700"),
    arBody: F("Noto Sans Arabic", "400;500;600"),
    weight: 700,
  },
  {
    id: "sora",
    name: "Tech — Sora + Readex",
    display: F("Sora", "500;600;700"),
    body: F("Sora", "400;500"),
    mono: F("Martian Mono", "400;500"),
    arDisplay: F("Readex Pro", "500;600;700"),
    arBody: F("Readex Pro", "400;500"),
  },
  {
    id: "archivo",
    name: "Industrial — Archivo + Changa",
    display: F("Archivo", "600;700;800"),
    body: F("Archivo", "400;500"),
    mono: F("Azeret Mono", "400;500"),
    arDisplay: F("Changa", "500;600;700"),
    arBody: F("Changa", "400;500"),
    weight: 700,
  },
  {
    id: "playfair",
    name: "Classic — Playfair + Source",
    display: F("Playfair Display", "500;600;700"),
    body: F("Source Sans 3", "400;500;600"),
    mono: F("Source Code Pro", "400;500"),
    arDisplay: F("Aref Ruqaa", "400;700"),
    arBody: F("IBM Plex Sans Arabic", "400;500;600"),
    weight: 600,
    arWeight: 700,
  },
  {
    id: "terminal",
    name: "Retro Terminal — Space Mono",
    display: F("Space Mono", "400;700"),
    body: F("Work Sans", "400;500;600"),
    mono: F("Space Mono", "400;700"),
    arDisplay: F("IBM Plex Sans Arabic", "600;700"),
    arBody: F("IBM Plex Sans Arabic", "400;500"),
    weight: 700,
  },
  {
    id: "shoulders",
    name: "Poster — Big Shoulders",
    display: F("Big Shoulders Display", "600;700;800"),
    body: F("Barlow", "400;500;600"),
    mono: F("JetBrains Mono", "400;500"),
    arDisplay: F("Mada", "600;700;800"),
    arBody: F("Mada", "400;500"),
    weight: 800,
  },
  {
    id: "bebas",
    name: "Headline — Bebas Neue",
    display: F("Bebas Neue", null),
    body: F("Barlow", "400;500;600"),
    mono: F("IBM Plex Mono", "400;500"),
    arDisplay: F("Marhey", "500;600;700"),
    arBody: F("Tajawal", "400;500;700"),
    weight: 400,
    arWeight: 600,
  },
  {
    id: "dmserif",
    name: "Magazine — DM Serif",
    display: F("DM Serif Display", null),
    body: F("DM Sans", "400;500;600"),
    mono: F("DM Mono", "400;500"),
    arDisplay: F("Amiri", "400;700"),
    arBody: F("Noto Naskh Arabic", "400;500;600"),
    weight: 400,
    arWeight: 700,
  },
  {
    id: "lexend",
    name: "Friendly — Lexend + Alexandria",
    display: F("Lexend", "500;600;700"),
    body: F("Lexend", "300;400;500"),
    mono: F("Fira Code", "400;500"),
    arDisplay: F("Alexandria", "500;600;700"),
    arBody: F("Alexandria", "300;400;500"),
  },
  {
    id: "josefin",
    name: "Vintage — Josefin + Nunito",
    display: F("Josefin Sans", "500;600;700"),
    body: F("Nunito Sans", "400;600"),
    mono: F("Space Mono", "400;700"),
    arDisplay: F("Baloo Bhaijaan 2", "600;700;800"),
    arBody: F("Baloo Bhaijaan 2", "400;500"),
    weight: 700,
  },
  {
    id: "righteous",
    name: "Playful — Righteous + Poppins",
    display: F("Righteous", null),
    body: F("Poppins", "400;500;600"),
    mono: F("DM Mono", "400;500"),
    arDisplay: F("Lemonada", "500;600;700"),
    arBody: F("Cairo", "400;500;600"),
    weight: 400,
    arWeight: 600,
  },
  {
    id: "cormorant",
    name: "Luxury — Cormorant Garamond",
    display: F("Cormorant Garamond", "500;600;700"),
    body: F("Karla", "400;500;600"),
    mono: F("IBM Plex Mono", "400;500"),
    arDisplay: F("Scheherazade New", "500;600;700"),
    arBody: F("Noto Naskh Arabic", "400;500;600"),
    weight: 600,
    arWeight: 700,
  },
  {
    id: "redhat",
    name: "Corporate — Red Hat + Kufam",
    display: F("Red Hat Display", "500;600;700"),
    body: F("Red Hat Text", "400;500;600"),
    mono: F("Red Hat Mono", "400;500"),
    arDisplay: F("Kufam", "500;600;700"),
    arBody: F("Noto Sans Arabic", "400;500;600"),
  },
  {
    id: "anton",
    name: "Impact — Anton + Inter Tight",
    display: F("Anton", null),
    body: F("Inter Tight", "400;500;600"),
    mono: F("JetBrains Mono", "400;500"),
    arDisplay: F("Vazirmatn", "700;800;900"),
    arBody: F("Vazirmatn", "400;500"),
    weight: 400,
    arWeight: 800,
  },
];

/* ==========================================================================
   LOOKS — each one re-skins the whole site, not just the accent:
     colors (per theme): bg, panel, line, ink (text), muted, accent, secondary, tertiary
     shape:   sharp | soft | default | round           → corner radii
     cards:   default | glass | outline | flat | brutal → card treatment
     pattern: grid | dots | topo | blueprint | lines | none → page background texture
     glow:    subtle | aurora | sunset | neon | none     → ambient light behind the page
   ========================================================================== */
export const LOOKS = [
  { id: "survey", name: "Survey Amber", tagline: "current · night basemap", shape: "default", cards: "default", pattern: "grid", glow: "subtle", dark: null, light: null },
  {
    id: "ocean",
    name: "Deep Ocean",
    tagline: "navy · glass cards · contour lines",
    shape: "round", cards: "glass", pattern: "topo", glow: "aurora",
    dark: { bg: "#071a2e", panel: "#0d2540", line: "#1d3d60", ink: "#e6f1fb", muted: "#8fb0cc", accent: "#38bdf8", secondary: "#818cf8", tertiary: "#2dd4bf" },
    light: { bg: "#e6f0f8", panel: "#ffffff", line: "#c6d9ea", ink: "#0b2540", muted: "#4a6782", accent: "#0369a1", secondary: "#4f46e5", tertiary: "#0f766e" },
  },
  {
    id: "blueprint",
    name: "Blueprint",
    tagline: "engineering blue · sharp · outlined",
    shape: "sharp", cards: "outline", pattern: "blueprint", glow: "none",
    dark: { bg: "#0c3a7a", panel: "#0f4590", line: "#4a7cc2", ink: "#ffffff", muted: "#bcd0ef", accent: "#ffd23f", secondary: "#9fd8ff", tertiary: "#ffffff" },
    light: { bg: "#f2f7ff", panel: "#ffffff", line: "#9db8e3", ink: "#0c3a7a", muted: "#4766a0", accent: "#e85d04", secondary: "#1d4ed8", tertiary: "#0891b2" },
  },
  {
    id: "paper",
    name: "Paper & Ink",
    tagline: "editorial · ruled paper · flat",
    shape: "soft", cards: "flat", pattern: "lines", glow: "none",
    dark: { bg: "#1a1714", panel: "#24201b", line: "#3a332c", ink: "#efe6d8", muted: "#a89a86", accent: "#e4572e", secondary: "#c9a227", tertiary: "#7fa886" },
    light: { bg: "#f3ecdf", panel: "#fbf7ef", line: "#d9ccb5", ink: "#1d1a16", muted: "#6b5f50", accent: "#c0392b", secondary: "#8a6d1d", tertiary: "#3f6b4a" },
  },
  {
    id: "brutal",
    name: "Brutalist",
    tagline: "thick borders · hard shadows · no curves",
    shape: "sharp", cards: "brutal", pattern: "none", glow: "none",
    dark: { bg: "#121212", panel: "#1c1c1c", line: "#f2f2f2", ink: "#f2f2f2", muted: "#bdbdbd", accent: "#ff4d00", secondary: "#5b7cff", tertiary: "#00d16a" },
    light: { bg: "#fffdf2", panel: "#ffffff", line: "#111111", ink: "#111111", muted: "#444444", accent: "#ff4d00", secondary: "#2141ff", tertiary: "#00a344" },
  },
  {
    id: "aurora",
    name: "Aurora Glass",
    tagline: "purple night · moving aurora · frosted glass",
    shape: "round", cards: "glass", pattern: "none", glow: "aurora",
    dark: { bg: "#0b0820", panel: "#171338", line: "#2e2864", ink: "#f1eeff", muted: "#a9a3d6", accent: "#c084fc", secondary: "#22d3ee", tertiary: "#f472b6" },
    light: { bg: "#f2eeff", panel: "#ffffff", line: "#dcd4fb", ink: "#1d1640", muted: "#5f5790", accent: "#7c3aed", secondary: "#0891b2", tertiary: "#db2777" },
  },
  {
    id: "neon",
    name: "Neon Terminal",
    tagline: "black + phosphor green · dots · glow",
    shape: "sharp", cards: "outline", pattern: "dots", glow: "neon",
    dark: { bg: "#030806", panel: "#07120c", line: "#14402a", ink: "#c8ffd9", muted: "#6fbf8c", accent: "#00ff88", secondary: "#00e5ff", tertiary: "#ff2bd6" },
    light: { bg: "#effff4", panel: "#ffffff", line: "#b5e6c5", ink: "#06331a", muted: "#3d7a55", accent: "#00894a", secondary: "#007f99", tertiary: "#b8108a" },
  },
  {
    id: "forest",
    name: "Forest Topo",
    tagline: "deep green · contour map · earthy",
    shape: "soft", cards: "default", pattern: "topo", glow: "subtle",
    dark: { bg: "#0d1f16", panel: "#14291e", line: "#26422f", ink: "#e8f2e9", muted: "#9cb8a3", accent: "#a3d65c", secondary: "#d9a873", tertiary: "#4fb286" },
    light: { bg: "#ecf2e6", panel: "#fbfdf8", line: "#cddcc5", ink: "#142a1c", muted: "#4f6b57", accent: "#3f7d20", secondary: "#a0612e", tertiary: "#1f7a57" },
  },
  {
    id: "desert",
    name: "Desert Dunes",
    tagline: "sand & clay · sunset light · round",
    shape: "round", cards: "default", pattern: "dots", glow: "sunset",
    dark: { bg: "#1f150c", panel: "#2b1e13", line: "#4a3520", ink: "#f6e7cf", muted: "#c4a982", accent: "#f2994a", secondary: "#e7b64e", tertiary: "#6aa58a" },
    light: { bg: "#f1e2c6", panel: "#fbf3e2", line: "#dcc49b", ink: "#3b2614", muted: "#7d5f3e", accent: "#b8541c", secondary: "#a77b14", tertiary: "#3a7a62" },
  },
  {
    id: "burgundy",
    name: "Burgundy & Gold",
    tagline: "wine red · gold accent · flat & elegant",
    shape: "soft", cards: "flat", pattern: "none", glow: "subtle",
    dark: { bg: "#1f0a13", panel: "#2c101c", line: "#4c1e30", ink: "#f8eaee", muted: "#c9a1ad", accent: "#e3b448", secondary: "#e88aa0", tertiary: "#bfaee0" },
    light: { bg: "#f8eef1", panel: "#ffffff", line: "#e8cdd5", ink: "#3a0d1d", muted: "#7a4a58", accent: "#8c1c3c", secondary: "#a67c00", tertiary: "#6b4fa0" },
  },
  {
    id: "mono",
    name: "Arctic Mono",
    tagline: "pure grayscale · outlined · minimal",
    shape: "soft", cards: "outline", pattern: "none", glow: "none",
    dark: { bg: "#0d0e10", panel: "#15171a", line: "#2a2d32", ink: "#f2f3f5", muted: "#9aa0a8", accent: "#ffffff", secondary: "#9aa0a8", tertiary: "#d0d4da" },
    light: { bg: "#ffffff", panel: "#f6f6f7", line: "#e2e3e6", ink: "#0d0e10", muted: "#5d636b", accent: "#111111", secondary: "#5d636b", tertiary: "#2a2d32" },
  },
  {
    id: "sunset",
    name: "Sunset Coral",
    tagline: "plum dusk · coral · glass · pill shapes",
    shape: "round", cards: "glass", pattern: "none", glow: "sunset",
    dark: { bg: "#1a0f1c", panel: "#261629", line: "#45273f", ink: "#ffe9e0", muted: "#d1a6a8", accent: "#ff7a59", secondary: "#ffb347", tertiary: "#c86dd7" },
    light: { bg: "#fff0e8", panel: "#ffffff", line: "#f4d0c0", ink: "#3d1626", muted: "#8a5562", accent: "#e8512a", secondary: "#c97f00", tertiary: "#9b3fb0" },
  },
  {
    id: "royal",
    name: "Royal Navy",
    tagline: "midnight navy · gold · classic grid",
    shape: "default", cards: "default", pattern: "grid", glow: "subtle",
    dark: { bg: "#08102a", panel: "#0f1a3d", line: "#22305f", ink: "#eef2ff", muted: "#9aa6cc", accent: "#e9c46a", secondary: "#7aa2ff", tertiary: "#a5b4cf" },
    light: { bg: "#f5f3ec", panel: "#ffffff", line: "#ddd8c8", ink: "#0f1a3d", muted: "#55607f", accent: "#9a7a10", secondary: "#2f4fa3", tertiary: "#4b6a80" },
  },
  {
    id: "mint",
    name: "Mint Fresh",
    tagline: "teal & mint · dotted · soft round",
    shape: "round", cards: "default", pattern: "dots", glow: "subtle",
    dark: { bg: "#08201d", panel: "#0e2b27", line: "#1f4741", ink: "#e6fffb", muted: "#8fc7bf", accent: "#2ee6b8", secondary: "#5ab0ff", tertiary: "#ffc857" },
    light: { bg: "#ecf9f5", panel: "#ffffff", line: "#c6e9e0", ink: "#0b3b33", muted: "#4c7d74", accent: "#0d9488", secondary: "#2563eb", tertiary: "#d97706" },
  },
];

export const LOOK_ATTRS = ["shape", "cards", "pattern", "glow"];

/* ---- helpers ---- */
const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const rgbToHex = (rgb) => "#" + rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
const mix = (a, b, t) => rgbToHex(hexToRgb(a).map((v, i) => v + (hexToRgb(b)[i] - v) * t));
const rgbList = (h) => hexToRgb(h).join(", ");
const luminance = (h) => hexToRgb(h).reduce((s, v, i) => s + v * [0.299, 0.587, 0.114][i], 0);

const RADII = {
  sharp: ["0px", "2px", "2px"],
  soft: ["4px", "8px", "12px"],
  round: ["10px", "20px", "28px"],
};

/* Every token a look controls — cleared before applying, so switching never leaves leftovers. */
export const LOOK_TOKENS = [
  "--amber", "--amber-bright", "--amber-dim", "--water", "--water-dim", "--terrain", "--terrain-dim",
  "--bedrock", "--bedrock-raised", "--panel", "--panel-raised", "--line", "--line-bright",
  "--paper", "--muted", "--muted-dim",
  "--amber-rgb", "--water-rgb", "--terrain-rgb", "--bg-rgb", "--bg-raised-rgb", "--panel-rgb", "--panel-raised-rgb",
  "--ink-rgb", "--shadow-rgb", "--on-accent", "--glow-amber", "--shadow-card", "--shadow-lift",
  "--radius-s", "--radius-m", "--radius-l",
];

export function lookTokens(look, mode) {
  const out = {};
  if (RADII[look.shape]) [out["--radius-s"], out["--radius-m"], out["--radius-l"]] = RADII[look.shape];
  const c = look[mode];
  if (!c) return out;

  const darkBg = luminance(c.bg) < 128;
  const lift = darkBg ? "#ffffff" : "#000000";
  const bgRaised = mix(c.bg, lift, darkBg ? 0.025 : 0.025);
  const panelRaised = mix(c.panel, lift, darkBg ? 0.05 : 0.015);
  const shadow = darkBg ? "0, 0, 0" : rgbList(mix(c.ink, c.bg, 0.3));
  return {
    ...out,
    "--amber": c.accent,
    "--amber-bright": darkBg ? mix(c.accent, "#ffffff", 0.15) : mix(c.accent, "#000000", 0.08),
    "--amber-dim": mix(c.accent, c.bg, 0.55),
    "--water": c.secondary,
    "--water-dim": mix(c.secondary, c.bg, 0.4),
    "--terrain": c.tertiary,
    "--terrain-dim": mix(c.tertiary, c.bg, 0.4),
    "--bedrock": c.bg,
    "--bedrock-raised": bgRaised,
    "--panel": c.panel,
    "--panel-raised": panelRaised,
    "--line": c.line,
    "--line-bright": look.cards === "brutal" ? c.line : mix(c.line, c.ink, 0.18),
    "--paper": c.ink,
    "--muted": c.muted,
    "--muted-dim": mix(c.muted, c.bg, 0.35),
    "--amber-rgb": rgbList(c.accent),
    "--water-rgb": rgbList(c.secondary),
    "--terrain-rgb": rgbList(c.tertiary),
    "--bg-rgb": rgbList(c.bg),
    "--bg-raised-rgb": rgbList(bgRaised),
    "--panel-rgb": rgbList(c.panel),
    "--panel-raised-rgb": rgbList(panelRaised),
    "--ink-rgb": rgbList(c.ink),
    "--shadow-rgb": shadow,
    "--on-accent": luminance(c.accent) > 150 ? "#0a0e13" : "#ffffff",
    "--glow-amber": `0 8px 28px -8px rgba(${rgbList(c.accent)}, 0.55)`,
    "--shadow-card": `0 18px 40px -24px rgba(${shadow}, ${darkBg ? 0.7 : 0.35})`,
    "--shadow-lift": `0 28px 60px -28px rgba(${shadow}, ${darkBg ? 0.85 : 0.45}), 0 0 0 1px rgba(${rgbList(c.accent)}, 0.18)`,
  };
}

export function lookSwatches(look, mode) {
  const c = look[mode];
  if (c) return c;
  return mode === "dark"
    ? { bg: "#0a0e13", panel: "#121820", line: "#232d38", ink: "#edf1ee", muted: "#94a0ab", accent: "#e3a53d", secondary: "#5b90b5", tertiary: "#7fae8f" }
    : { bg: "#f4f2ec", panel: "#ffffff", line: "#e2ddd2", ink: "#182029", muted: "#55616d", accent: "#b06f12", secondary: "#2c6a93", tertiary: "#357a52" };
}

export function fontHref(f) {
  const fam = f.family.replace(/ /g, "+");
  return `https://fonts.googleapis.com/css2?family=${fam}${f.weights ? `:wght@${f.weights}` : ""}&display=swap`;
}

export const fontStack = (latin, arabic, generic) => `"${latin.family}", "${arabic.family}", ${generic}`;
