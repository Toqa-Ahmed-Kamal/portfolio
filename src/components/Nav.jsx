import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UI } from "../data.js";
import { useLang } from "../i18n.jsx";

const LINKS = [
  { to: "/", key: "home" },
  { to: "/experience", key: "experience" },
  { to: "/projects", key: "projects" },
  { to: "/contact", key: "contact" },
];

export default function Nav() {
  const { t, toggleLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="dot">◆</span>&nbsp;Toqa Kamal
        </Link>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink key={l.key} to={l.to} end className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setOpen(false)}>
              {t(UI.nav[l.key])}
            </NavLink>
          ))}
        </div>
        <div className="nav-right">
          <button className="lang-switch" onClick={toggleLang}>
            {t(UI.langToggle)}
          </button>
        </div>
      </div>
    </nav>
  );
}
