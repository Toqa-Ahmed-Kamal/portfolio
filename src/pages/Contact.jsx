import { META, UI, HELP_ITEMS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal, usePageTitle } from "../useReveal.js";
import { LinkedinIcon, GithubIcon, MailIcon, PhoneIcon, PinIcon, ArrowIcon } from "../components/Icons.jsx";

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
              <a className="contact-row reveal" href={`mailto:${META.email}`}>
                <span className="contact-icon"><MailIcon /></span>
                <span className="contact-text">
                  <span className="lbl">{t(UI.contactPage.emailLabel)}</span>
                  <span className="val">{META.email}</span>
                </span>
                <span className="contact-go"><ArrowIcon /></span>
              </a>
              <a className="contact-row reveal" href={phoneHref}>
                <span className="contact-icon"><PhoneIcon /></span>
                <span className="contact-text">
                  <span className="lbl">{t(UI.contactPage.phoneLabel)}</span>
                  <span className="val" dir="ltr">{META.phones.join(" · ")}</span>
                </span>
                <span className="contact-go"><ArrowIcon /></span>
              </a>
              <div className="contact-row reveal">
                <span className="contact-icon"><PinIcon /></span>
                <span className="contact-text">
                  <span className="lbl">{t(UI.contactPage.locationLabel)}</span>
                  <span className="val">{t(META.location)}</span>
                </span>
              </div>
            </div>
            <div className="social-block">
              <span className="lbl">{t(UI.contactPage.socialLabel)}</span>
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
          <div className="stack-card help-card reveal">
            <h3>{t(UI.contactPage.helpTitle)}</h3>
            <ul className="help-list">
              {HELP_ITEMS.map((item, i) => (
                <li key={i}>
                  <span className="help-num">{String(i + 1).padStart(2, "0")}</span>
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
