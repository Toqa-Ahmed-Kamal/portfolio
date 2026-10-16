import { useEffect, useRef, useState } from "react";
import { META, UI } from "../data.js";
import { useLang } from "../i18n.jsx";

// The intro plays once per visit, not every time you navigate back to Home.
let hasBooted = false;

export default function BootOverlay() {
  const { t } = useLang();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visible, setVisible] = useState(!hasBooted && !reducedMotion);
  const [fading, setFading] = useState(false);
  const [coord, setCoord] = useState("00.0000° N, 00.0000° E");
  const [locked, setLocked] = useState(false);
  const finishRef = useRef(() => {});

  useEffect(() => {
    if (!visible) {
      document.body.classList.add("hero-ready");
      window.dispatchEvent(new Event("boot-done"));
      return;
    }

    let ticks = 0;
    let finished = false;
    let lockTimer, removeTimer;

    const finish = () => {
      if (finished) return;
      finished = true;
      hasBooted = true;
      clearInterval(interval);
      setFading(true);
      document.body.classList.add("hero-ready");
      window.dispatchEvent(new Event("boot-done"));
      removeTimer = setTimeout(() => setVisible(false), 550);
    };
    finishRef.current = finish;

    const interval = setInterval(() => {
      ticks++;
      if (ticks >= 20) {
        clearInterval(interval);
        setCoord(META.coords);
        setLocked(true);
        lockTimer = setTimeout(finish, 420);
        return;
      }
      setCoord(`${(Math.random() * 90).toFixed(4)}° N, ${(Math.random() * 180).toFixed(4)}° E`);
    }, 55);

    document.addEventListener("keydown", finish, { once: true });
    return () => {
      clearInterval(interval);
      clearTimeout(lockTimer);
      clearTimeout(removeTimer);
      document.removeEventListener("keydown", finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div className={`boot-overlay${fading ? " fade-out" : ""}`} onClick={() => finishRef.current()}>
      <svg className="boot-reticle" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="40" stroke="var(--line-bright)" strokeWidth="1" />
        <circle cx="60" cy="60" r="40" stroke="var(--amber)" strokeWidth="1.5" className="boot-ring" />
        <line x1="60" y1="4" x2="60" y2="22" stroke="var(--muted)" strokeWidth="1" />
        <line x1="60" y1="98" x2="60" y2="116" stroke="var(--muted)" strokeWidth="1" />
        <line x1="4" y1="60" x2="22" y2="60" stroke="var(--muted)" strokeWidth="1" />
        <line x1="98" y1="60" x2="116" y2="60" stroke="var(--muted)" strokeWidth="1" />
        <circle cx="60" cy="60" r="4" fill="var(--amber)" />
      </svg>
      <div className="boot-coord">{coord}</div>
      <div className={`boot-status${locked ? " locked" : ""}`}>{t(locked ? UI.boot.locked : UI.boot.acquiring)}</div>
      <div className="boot-skip">{t(UI.boot.skip)}</div>
    </div>
  );
}
