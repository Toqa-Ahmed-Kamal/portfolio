import { META, UI } from "../data.js";
import { useLang } from "../i18n.jsx";
import { LinkedinIcon, GithubIcon, MailIcon, ArrowUpIcon } from "./Icons.jsx";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <span className="name">{t(META.name)}</span>
          <span className="tagline">{t(UI.footer.tagline)}</span>
        </div>
        <div className="footer-social">
          <a href={META.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={META.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={`mailto:${META.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
        <div className="footer-right">
          <span className="coord">{META.coords}</span>
          <div className="rights">{t(UI.footer.rights)}</div>
        </div>
        <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUpIcon />
        </button>
      </div>
    </footer>
  );
}
