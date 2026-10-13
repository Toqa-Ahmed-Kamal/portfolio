import { META, UI, HELP_ITEMS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal, usePageTitle } from "../useReveal.js";
import { LinkedinIcon, GithubIcon, MailIcon } from "../components/Icons.jsx";

export default function Contact() {
  const { t, lang } = useLang();
  usePageTitle(`${t(UI.nav.contact)} — ${t(META.name)}`);
  useReveal([lang]);

  const phoneHref = "tel:+20" + META.phones[0].replace(/^0/, "");

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">{t(UI.contactPage.eyebrow)}</span>
          <h1>{t(UI.contactPage.title)}</h1>
          <p className="lead">{t(UI.contactPage.intro)}</p>
        </div>
      </header>

      <section style={{ paddingTop: "var(--s-8)" }}>
        <div className="container contact-grid">
          <div>
            <div className="contact-list">
              <div className="contact-row reveal">
                <span className="lbl">{t(UI.contactPage.emailLabel)}</span>
                <a className="val" href={`mailto:${META.email}`}>
                  {META.email}
                </a>
              </div>
              <div className="contact-row reveal">
                <span className="lbl">{t(UI.contactPage.phoneLabel)}</span>
                <a className="val" href={phoneHref}>
                  {META.phones.join(" · ")}
                </a>
              </div>
              <div className="contact-row reveal">
                <span className="lbl">{t(UI.contactPage.locationLabel)}</span>
                <span className="val">{t(META.location)}</span>
              </div>
            </div>
            <div style={{ marginTop: "var(--s-8)" }}>
              <span
                className="lbl"
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted-dim)",
                }}
              >
                {t(UI.contactPage.socialLabel)}
              </span>
              <div className="social-row">
                <a className="social-btn reveal" href={META.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a className="social-btn reveal" href={META.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a className="social-btn reveal" href={`mailto:${META.email}`} aria-label="Email">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="stack-card reveal">
            <h3>{t(UI.contactPage.helpTitle)}</h3>
            <ul style={{ marginTop: "var(--s-5)" }}>
              {HELP_ITEMS.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    color: "var(--muted)",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    paddingBlock: 10,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span style={{ color: "var(--terrain)", flexShrink: 0 }}>◆</span>
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
