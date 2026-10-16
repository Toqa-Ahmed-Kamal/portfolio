import { Link } from "react-router-dom";
import { META, UI, STATS, STACK, PROJECTS, FEATURED_IDS, LOCATIONS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal, usePageTitle } from "../useReveal.js";
import BootOverlay from "../components/BootOverlay.jsx";
import CoverageMap from "../components/CoverageMap.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import MobileApps from "../components/MobileApps.jsx";
import { ArrowIcon } from "../components/Icons.jsx";

const pad = (n) => String(n).padStart(2, "0");

export default function Home() {
  const { t, lang } = useLang();
  usePageTitle(`${t(META.name)} — ${t(META.role)}`);
  useReveal([lang]);

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

      <section className="hero">
        <div className="container hero-grid">
          <div>
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
                  <span className="num">{num}</span>
                  <span className="lbl">{t(lbl)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-map-frame">
            <div className="hero-map-head">
              <span className="eyebrow">
                <span className="live-dot" aria-hidden="true"></span>
                {t(UI.map.label)}
              </span>
              <span className="coord">
                {LOCATIONS.length} {t(UI.map.sites)} · {STATS.countries} {t(UI.hero.statLabels.countries)}
              </span>
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
    </>
  );
}
