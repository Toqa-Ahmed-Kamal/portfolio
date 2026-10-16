import { useState } from "react";
import { UI } from "../data.js";
import { useLang } from "../i18n.jsx";
import { PinIcon, PlayIcon, ExternalIcon } from "./Icons.jsx";

export const CAT_NAMES = {
  gov: { en: "Enterprise & Government", ar: "مؤسسي وحكومي" },
  mapping: { en: "Web Mapping & Apps", ar: "خرائط وتطبيقات ويب" },
  analysis: { en: "Spatial Analysis", ar: "تحليل مكاني" },
  market: { en: "Market & Business", ar: "سوق وأعمال" },
  mobile: { en: "Mobile Apps", ar: "تطبيقات موبايل" },
};

// Image paths in data.js are written like "img/x.png" — serve them from /public.
export const imgSrc = (path) => (/^(https?:)?\//.test(path) ? path : `/${path}`);

function Media({ project }) {
  const { t } = useLang();
  const [playing, setPlaying] = useState(false);

  if (project.video) {
    if (playing) {
      return (
        <div className="project-media has-media is-playing">
          <iframe
            src={`https://www.youtube.com/embed/${project.video}?autoplay=1`}
            title="Project video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <div className="project-media has-media" onClick={() => setPlaying(true)}>
        <img loading="lazy" src={`https://img.youtube.com/vi/${project.video}/hqdefault.jpg`} alt="" />
        <span className="play-btn">
          <PlayIcon />
        </span>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="project-media has-media">
        <img loading="lazy" src={imgSrc(project.image)} alt={t(project.title)} />
      </div>
    );
  }

  return (
    <div className="project-media">
      <PinIcon />
      <span className="pending">{t(UI.projectsPage.mediaPending)}</span>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { t } = useLang();
  return (
    <article className="project-card reveal">
      <Media project={project} />
      <div className="project-body">
        <span className="project-cat">{t(CAT_NAMES[project.category])}</span>
        <h3>{t(project.title)}</h3>
        <p>{t(project.desc)}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
            {t(UI.projectsPage.viewLive)}
            <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  );
}
