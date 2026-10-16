import { META, UI, EXPERIENCE, CREDENTIAL_NOTE, EDUCATION, SKILLS, CERTIFICATIONS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal, usePageTitle } from "../useReveal.js";
import { useRef } from "react";
import { PinIcon } from "../components/Icons.jsx";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "../motion.js";

export default function Experience() {
  const { t, lang } = useLang();
  usePageTitle(`${t(UI.nav.experience)} — ${t(META.name)}`);
  useReveal([lang]);
  const timelineRef = useRef(null);

  // The timeline line draws itself as you scroll; each role's dot lights up when reached.
  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          ".timeline-progress",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: timelineRef.current, start: "top 70%", end: "bottom 70%", scrub: 0.6 } }
        );
        gsap.utils.toArray(".timeline-item").forEach((item) =>
          ScrollTrigger.create({ trigger: item, start: "top 70%", toggleClass: { targets: item, className: "is-active" } })
        );
      });
    },
    { scope: timelineRef }
  );

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">{t(UI.experiencePage.eyebrow)}</span>
          <h1>{t(UI.experiencePage.title)}</h1>
          <p className="lead">{t(UI.experiencePage.intro)}</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="timeline" ref={timelineRef}>
            <div className="timeline-progress" aria-hidden="true" />
            {EXPERIENCE.map((job, i) => (
              <div className="timeline-item reveal" key={i}>
                <div className="timeline-period">{t(job.period)}</div>
                <h3>{t(job.role)}</h3>
                <div className="timeline-org">{t(job.org)}</div>
                <ul className="timeline-points">
                  {job.points.map((pt, j) => (
                    <li key={j}>{t(pt)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="credential-note">
            <span style={{ width: 16, flexShrink: 0, color: "var(--amber)" }}>
              <PinIcon />
            </span>
            <span>{t(CREDENTIAL_NOTE)}</span>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t(UI.experiencePage.educationLabel)}</span>
            <h2>{t(UI.experiencePage.educationTitle)}</h2>
          </div>
          <div className="edu-card reveal">
            <h3>{t(EDUCATION.degree)}</h3>
            <div className="timeline-org">{t(EDUCATION.school)}</div>
            <div className="timeline-period">{t(EDUCATION.period)}</div>
            <p className="extra">{t(EDUCATION.extra)}</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t(UI.experiencePage.skillsLabel)}</span>
            <h2>{t(UI.experiencePage.skillsTitle)}</h2>
          </div>
          <div className="skills-grid">
            {SKILLS.map((g, i) => (
              <div className="skill-group reveal" key={i}>
                <h3>
                  <span className="swatch" style={{ background: g.color }}></span>
                  {t(g.group)}
                </h3>
                <div className="skill-chips">
                  {g.items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t(UI.experiencePage.certsLabel)}</span>
            <h2>{t(UI.experiencePage.certsTitle)}</h2>
          </div>
          <div className="cert-grid">
            {CERTIFICATIONS.map((c, i) => (
              <div className="cert-card reveal" key={i}>
                <h4>{t(c.title)}</h4>
                <div className="cert-meta">
                  {c.issuer} — {t(c.date)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
