import { META, UI } from "../data.js";
import { useLang } from "../i18n.jsx";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <span className="name">{t(META.name)}</span>
          <span className="tagline">{t(UI.footer.tagline)}</span>
        </div>
        <div className="footer-right">
          <span className="coord">{META.coords}</span>
          <div className="rights">{t(UI.footer.rights)}</div>
        </div>
      </div>
    </footer>
  );
}
