import { useRef } from "react";
import { Link } from "react-router-dom";
import { META, UI, STATS, STACK, PROJECTS, FEATURED_IDS, LOCATIONS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal, usePageTitle } from "../useReveal.js";
import BootOverlay from "../components/BootOverlay.jsx";
import CoverageMap from "../components/CoverageMap.jsx";
// import IntroVideo from "../components/IntroVideo.jsx"; // re-enable together with <IntroVideo /> below
import ProjectCard from "../components/ProjectCard.jsx";
import MobileApps from "../components/MobileApps.jsx";
import Reviews from "../components/Reviews.jsx";
import { ArrowIcon } from "../components/Icons.jsx";
import { gsap, SplitText, useGSAP, MOTION_OK, fontsReady } from "../motion.js";

const pad = (n) => String(n).padStart(2, "0");

// Rolls a stat like "04", "42+" or "60,000+" up from zero, keeping its format.
// Reads the real value from data-value — never from the text, which may be mid-count.
function countUp(el) {
  const m = (el.dataset.value || "").match(/^([\d,]+)(.*)$/);
  if (!m) return null;
  const digits = m[1];
  const target = Number(digits.replace(/,/g, ""));
  const fmt = (v) => {
    const n = Math.round(v);
    if (digits.includes(",")) return n.toLocaleString("en-US") + m[2];
    return String(n).padStart(digits.length, "0") + m[2];
  };
  const proxy = { v: 0 };
  el.textContent = fmt(0);
  return gsap.to(proxy, {
    v: target,
    duration: 1.8,
    ease: "power2.out",
    onUpdate: () => (el.textContent = fmt(proxy.v)),
    onInterrupt: () => (el.textContent = el.dataset.value), // killed early → show the real number
  });
}

/* Hero intro — waits for the boot overlay (and web fonts, so lines split correctly),
   then plays in one sequence. */
function useHeroIntro(heroRef, lang) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(heroRef);
        const h1 = q("h1")[0];
        const media = q(".hero-video");
        const rise = [q(".hero-copy > .coord, .hero-copy > .status-pill"), q(".lead"), q(".hero-cta .btn"), q(".stat")];

        gsap.set(rise.flat(), { autoAlpha: 0, y: 22 });
        gsap.set(h1, { autoAlpha: 0 });
        gsap.set(media, { autoAlpha: 0, scale: 0.94, clipPath: "inset(12% 12% 12% 12% round 20px)" });

        // Gentle parallax: the video drifts up as the hero scrolls away.
        gsap.to(media, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
        });

        let alive = true; // the start is async (boot + fonts) — a cleaned-up run must not fire late
        let split, tl;
        const counters = [];
        const play = () => {
          if (!alive) return;
          h1.classList.add("is-splitting"); // gradient text can't clip transformed children — solid ink while animating
          split = SplitText.create(h1, { type: "lines,words", mask: "lines", wordsClass: "word" });
          gsap.set(h1, { autoAlpha: 1 });
          const [meta, lead, ctas, stats] = rise;

          tl = gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(meta, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 })
            .from(split.words, { yPercent: 115, duration: 1, stagger: 0.07, ease: "power4.out" }, "-=0.3")
            .add(() => {
              split.revert();
              h1.classList.remove("is-splitting");
            })
            .to(lead, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6")
            .to(ctas, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1, clearProps: "transform" }, "-=0.55")
            .to(stats, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08, clearProps: "transform" }, "-=0.45")
            .add(() => q(".stat .num").forEach((el) => counters.push(countUp(el))), "<")
            .to(media, { autoAlpha: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 20px)", duration: 1.2, ease: "expo.out", clearProps: "clipPath,scale" }, 0.35);
        };
        const start = () => fontsReady().then(play);

        if (document.body.classList.contains("hero-ready")) start();
        else window.addEventListener("boot-done", start, { once: true });
        return () => {
          alive = false;
          window.removeEventListener("boot-done", start);
          tl?.kill();
          counters.forEach((c) => c?.kill());
          q(".stat .num").forEach((el) => (el.textContent = el.dataset.value));
          gsap.set([h1, ...rise.flat(), ...media], { clearProps: "all" });
          split?.revert();
          h1.classList.remove("is-splitting");
        };
      });
    },
    { scope: heroRef, dependencies: [lang], revertOnUpdate: true }
  );
}

export default function Home() {
  const { t, lang } = useLang();
  usePageTitle(`${t(META.name)} — ${t(META.role)}`);
  useReveal([lang]);
  const heroRef = useRef(null);
  useHeroIntro(heroRef, lang);

  const stats = [
    [pad(STATS.years), UI.hero.statLabels.years],
    [STATS.projects + "+", UI.hero.statLabels.projects],
    [STATS.freelance + "+", UI.hero.statLabels.freelance],
    [pad(STATS.countries), UI.hero.statLabels.countries],
    [STATS.users.toLocaleString("en-US") + "+", UI.hero.statLabels.users],
  ];
  const featured = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id) || p.featured).slice(0, 4);

  return (
    <>
      <BootOverlay />

      <section className="hero" ref={heroRef}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="coord">{META.coords}</div>
            <div className="status-pill hero-eyebrow">
              <span className="status-dot" aria-hidden="true"></span>
              {t(UI.hero.eyebrow)}
            </div>
            <h1>{t(UI.hero.headline)}</h1>
            <p className="lead">{t(UI.hero.sub)}</p>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                {t(UI.hero.ctaPrimary)}
                <ArrowIcon />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t(UI.hero.ctaSecondary)}
              </Link>
            </div>
            <div className="stat-row">
              {stats.map(([num, lbl]) => (
                <div className="stat" key={lbl.en}>
                  <span className="num" data-value={num}>
                    {num}
                  </span>
                  <span className="lbl">{t(lbl)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Intro video temporarily hidden while it's being re-edited — uncomment to show it again.
          <IntroVideo /> */}
        </div>
      </section>

      <section className="coverage-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t(UI.map.label)}</span>
            <h2>{t(UI.map.title)}</h2>
            <p>{t(UI.map.sub)}</p>
          </div>
          <div className="hero-map-frame coverage-frame reveal">
            <div className="hero-map-head">
              <span className="eyebrow">
                <span className="live-dot" aria-hidden="true"></span>
                {LOCATIONS.length} {t(UI.map.sites)} · {STATS.countries} {t(UI.hero.statLabels.countries)}
              </span>
              <span className="coord">{META.coords}</span>
            </div>
            <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
              <CoverageMap />
              <div className="map-compass-badge" title="North" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="17" fill="var(--bedrock)" fillOpacity="0.82" stroke="var(--line-bright)" strokeWidth="1" />
                  <polygon points="20,6 23,20 20,17 17,20" fill="var(--amber)" />
                  <polygon points="20,34 23,20 20,23 17,20" fill="var(--muted-dim)" />
                </svg>
              </div>
            </div>
            <div className="hero-map-caption">{t(UI.map.attribution)}</div>
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t(UI.stack.label)}</span>
            <h2>{t(UI.stack.title)}</h2>
          </div>
          <div className="stack-grid">
            <div className="stack-card reveal">
              <h3>
                <span className="stack-swatch" style={{ background: "var(--water)" }} aria-hidden="true"></span>
                {t(UI.stack.esri)}
                <span className="stack-count">{String(STACK.esri.length).padStart(2, "0")}</span>
              </h3>
              <div className="stack-tags">
                {STACK.esri.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="stack-card reveal">
              <h3>
                <span className="stack-swatch" style={{ background: "var(--terrain)" }} aria-hidden="true"></span>
                {t(UI.stack.openSource)}
                <span className="stack-count">{String(STACK.openSource.length).padStart(2, "0")}</span>
              </h3>
              <div className="stack-tags">
                {STACK.openSource.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t(UI.featured.label)}</span>
            <h2>{t(UI.featured.title)}</h2>
          </div>
          <div className="card-grid">
            {featured.map((p) => (
              <ProjectCard project={p} key={p.id} />
            ))}
          </div>
          <div className="featured-footer reveal">
            <Link to="/projects" className="btn btn-secondary">
              {t(UI.featured.viewAll)}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <MobileApps />

      <Reviews />
    </>
  );
}
