import { UI, PROJECTS, MOBILE_APP_IDS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { CAT_NAMES, imgSrc } from "./ProjectCard.jsx";
import { ExternalIcon } from "./Icons.jsx";

export const MOBILE_APPS = MOBILE_APP_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);

function Phone({ children, ghost }) {
  return (
    <div className={`phone${ghost ? " ghost" : ""}`}>
      <span className="phone-notch" aria-hidden="true" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

function AppCard({ app }) {
  const { t } = useLang();
  // A portrait screenshot goes inside our phone frame; a ready-made device showcase is shown as-is.
  const media = app.mobileImage ? (
    <div className="app-media framed">
      <Phone>
        <img loading="lazy" src={imgSrc(app.mobileImage)} alt={t(app.title)} />
      </Phone>
    </div>
  ) : app.image ? (
    <div className="app-media">
      <img loading="lazy" src={imgSrc(app.image)} alt={t(app.title)} />
    </div>
  ) : (
    <div className="app-media framed">
      <Phone>
        <span className="phone-empty">{t(UI.mobileApps.comingSoon)}</span>
      </Phone>
    </div>
  );
  return (
    <article className="app-card reveal">
      {media}
      <div className="app-body">
        <span className="project-cat">{t(CAT_NAMES[app.category])}</span>
        <h3>{t(app.title)}</h3>
        <p>{t(app.desc)}</p>
        <div className="project-tags">
          {app.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {app.link && (
          <a className="project-link" href={app.link} target="_blank" rel="noopener noreferrer">
            {t(UI.projectsPage.viewLive)}
            <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function MobileApps() {
  const { t } = useLang();

  return (
    <section className="mobile-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t(UI.mobileApps.label)}</span>
          <h2>{t(UI.mobileApps.title)}</h2>
          <p>{t(UI.mobileApps.sub)}</p>
        </div>
        {MOBILE_APPS.length > 0 ? (
          <div className="app-grid">
            {MOBILE_APPS.map((app) => (
              <AppCard app={app} key={app.id} />
            ))}
          </div>
        ) : (
          <div className="app-empty reveal">
            <div className="app-empty-phones" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <Phone ghost key={i}>
                  <span className="skeleton-bar" />
                  <span className="skeleton-bar short" />
                  <span className="skeleton-block" />
                  <span className="skeleton-bar" />
                </Phone>
              ))}
            </div>
            <div className="app-empty-text">
              <span className="status-pill">
                <span className="status-dot" aria-hidden="true"></span>
                {t(UI.mobileApps.comingSoon)}
              </span>
              <p>{t(UI.mobileApps.empty)}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
