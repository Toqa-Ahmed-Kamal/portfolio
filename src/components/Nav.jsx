import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UI } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useTheme } from "../theme.jsx";
import { SunIcon, MoonIcon } from "./Icons.jsx";

const LINKS = [
  { to: "/", key: "home" },
  { to: "/experience", key: "experience" },
  { to: "/projects", key: "projects" },
  { to: "/contact", key: "contact" },
];

export default function Nav() {
  const { t, lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const themeLabel = theme === "light" ? (lang === "ar" ? "الوضع الداكن" : "Switch to dark mode") : lang === "ar" ? "الوضع الفاتح" : "Switch to light mode";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">◆</span>
          <span>Toqa Kamal</span>
        </Link>
        <div className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink key={l.key} to={l.to} end className={({ isActive }) => (isActive ? "active" : "")}>
              {t(UI.nav[l.key])}
            </NavLink>
          ))}
        </div>
        <div className="nav-right">
          <button
            className="theme-switch"
            onClick={(e) => toggleTheme(e.currentTarget)}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <span className="theme-icon" key={theme}>
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </span>
          </button>
          <button className="lang-switch" onClick={toggleLang}>
            {t(UI.langToggle)}
          </button>
          <button
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </nav>
  );
}
