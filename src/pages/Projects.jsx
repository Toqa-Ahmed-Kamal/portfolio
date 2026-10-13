import { useState } from "react";
import { META, UI, PROJECTS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal, usePageTitle } from "../useReveal.js";
import ProjectCard, { CAT_NAMES } from "../components/ProjectCard.jsx";

const CATEGORIES = ["all", "gov", "mapping", "analysis", "market"];

export default function Projects() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState("all");
  usePageTitle(`${t(UI.nav.projects)} — ${t(META.name)}`);
  useReveal([lang, filter]);

  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const count = lang === "ar" ? `${list.length} مشروع` : `${list.length} project${list.length !== 1 ? "s" : ""}`;

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">{t(UI.projectsPage.eyebrow)}</span>
          <h1>{t(UI.projectsPage.title)}</h1>
          <p className="lead">{t(UI.projectsPage.intro)}</p>
        </div>
      </header>

      <section style={{ paddingTop: "var(--s-8)" }}>
        <div className="container">
          <div className="filter-row">
            {CATEGORIES.map((c) => (
              <button key={c} className={`filter-chip${c === filter ? " active" : ""}`} onClick={() => setFilter(c)}>
                {c === "all" ? t(UI.projectsPage.filterAll) : t(CAT_NAMES[c])}
              </button>
            ))}
          </div>
          <div className="projects-count">{count}</div>
          <div className="projects-grid">
            {list.map((p) => (
              <ProjectCard project={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
