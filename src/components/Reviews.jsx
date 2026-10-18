import { useCallback, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UI, REVIEWS, REVIEW_SHOTS, STATS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { ExternalIcon } from "./Icons.jsx";

// A review may be written in one language only — show whichever exists.
const pick = (field, lang) => (field ? field[lang] || field.en || field.ar || "" : "");
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={i <= Math.round(rating) ? "on" : ""} aria-hidden="true">
          <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  const { t, lang } = useLang();
  const date = review.date ? new Date(review.date + "-01").toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", { month: "short", year: "numeric" }) : "";
  return (
    <figure className="review-card reveal">
      <div className="review-top">
        <Stars rating={review.rating} />
        {review.platform && <span className="review-platform">{review.platform}</span>}
      </div>
      <blockquote dir="auto">{pick(review.text, lang)}</blockquote>
      <figcaption>
        <span className="review-avatar" aria-hidden="true">
          {initials(review.name)}
        </span>
        <span className="review-who">
          <span className="review-name">{review.name}</span>
          <span className="review-meta">{[pick(review.role, lang), pick(review.project, lang), date].filter(Boolean).join(" · ")}</span>
        </span>
        {review.link && (
          <a className="review-link" href={review.link} target="_blank" rel="noopener noreferrer" aria-label={`${t(UI.reviews.verified)} ${review.platform || ""}`}>
            <ExternalIcon />
          </a>
        )}
      </figcaption>
    </figure>
  );
}

const INITIAL_SHOTS = 12;

// 1 / 2 / 3 masonry columns depending on width.
function useColumns() {
  const get = () => (window.innerWidth < 640 ? 1 : window.innerWidth < 1000 ? 2 : 3);
  const [cols, setCols] = useState(get);
  useEffect(() => {
    const onResize = () => setCols(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return cols;
}

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5l1.3-3.9A8 8 0 1112 20a8 8 0 01-4.1-1.1z" />
  </svg>
);

function Lightbox({ index, onClose, onStep }) {
  const { t } = useLang();
  const shot = REVIEW_SHOTS[index];
  useEffect(() => {
    const onKey = (e) => {
      const rtl = document.documentElement.dir === "rtl";
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") onStep(rtl ? 1 : -1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  return (
    <div className="shot-lightbox" role="dialog" aria-modal="true" aria-label={t(UI.reviews.shotAlt)} onClick={onClose}>
      <img src={`/${shot.src}`} width={shot.w} height={shot.h} alt={t(UI.reviews.shotAlt)} onClick={(e) => e.stopPropagation()} />
      <button className="shot-nav prev" aria-label={t(UI.reviews.prev)} onClick={(e) => { e.stopPropagation(); onStep(-1); }}>
        ‹
      </button>
      <button className="shot-nav next" aria-label={t(UI.reviews.next)} onClick={(e) => { e.stopPropagation(); onStep(1); }}>
        ›
      </button>
      <button className="shot-close" aria-label={t(UI.reviews.close)} onClick={onClose}>
        ×
      </button>
      <span className="shot-count" dir="ltr">
        {index + 1} / {REVIEW_SHOTS.length}
      </span>
    </div>
  );
}

/* Wall of real client messages (screenshots), dealt round-robin into columns so the
   strongest ones (first in the list) sit across the top row. */
function ReviewShots() {
  const { t } = useLang();
  const cols = useColumns();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(null);
  const shown = expanded ? REVIEW_SHOTS : REVIEW_SHOTS.slice(0, INITIAL_SHOTS);
  const columns = Array.from({ length: cols }, (_, c) => shown.map((s, i) => [s, i]).filter((_, i) => i % cols === c));

  // Expanding/collapsing moves everything below — let ScrollTrigger re-measure.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [expanded, cols]);

  const step = useCallback((d) => setOpen((i) => (i + d + REVIEW_SHOTS.length) % REVIEW_SHOTS.length), []);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <div className={`shot-wall${expanded ? "" : " is-collapsed"}`}>
        {columns.map((col, c) => (
          <div className="shot-col" key={c}>
            {col.map(([shot, i]) => (
              <button className="shot-card" key={shot.src} onClick={() => setOpen(i)}>
                <span className="shot-head">
                  <ChatIcon />
                  {t(UI.reviews.shotAlt)}
                </span>
                <img loading="lazy" src={`/${shot.src}`} width={shot.w} height={shot.h} alt={t(UI.reviews.shotAlt)} />
              </button>
            ))}
          </div>
        ))}
      </div>
      {REVIEW_SHOTS.length > INITIAL_SHOTS && (
        <div className="shot-more">
          <button
            className="btn btn-secondary"
            onClick={() => {
              if (expanded) document.querySelector(".reviews-section")?.scrollIntoView({ behavior: "smooth" });
              setExpanded((e) => !e);
            }}
          >
            {expanded ? t(UI.reviews.showLess) : `${t(UI.reviews.showAll)} (${REVIEW_SHOTS.length})`}
          </button>
        </div>
      )}
      {open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
    </>
  );
}

export default function Reviews() {
  const { t } = useLang();
  const avg = REVIEWS.length ? REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length : 0;

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-head">
          <div className="section-head reveal">
            <span className="eyebrow">{t(UI.reviews.label)}</span>
            <h2>{t(UI.reviews.title)}</h2>
            <p>{t(UI.reviews.sub)}</p>
          </div>
          {REVIEWS.length === 0 && REVIEW_SHOTS.length > 0 && (
            <div className="reviews-score reveal">
              <span className="score-num">{REVIEW_SHOTS.length}</span>
              <span className="score-lbl">
                {t(UI.reviews.messages)} · {STATS.freelance}+ {t(UI.reviews.freelance)}
              </span>
            </div>
          )}
          {REVIEWS.length > 0 && (
            <div className="reviews-score reveal">
              <span className="score-num">{avg.toFixed(1)}</span>
              <Stars rating={avg} />
              <span className="score-lbl">
                {t(UI.reviews.average)} · {REVIEWS.length} {t(UI.reviews.count)}
              </span>
            </div>
          )}
        </div>

        {REVIEWS.length > 0 && (
          <div className="review-grid">
            {REVIEWS.map((r, i) => (
              <ReviewCard review={r} key={i} />
            ))}
          </div>
        )}
        {REVIEW_SHOTS.length > 0 && <ReviewShots />}
        {REVIEWS.length === 0 && REVIEW_SHOTS.length === 0 && (
          <div className="review-empty reveal">
            <div className="review-ghosts" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div className="review-ghost" key={i}>
                  <span className="stars ghost">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} viewBox="0 0 24 24">
                        <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" />
                      </svg>
                    ))}
                  </span>
                  <span className="skeleton-bar" />
                  <span className="skeleton-bar" />
                  <span className="skeleton-bar short" />
                </div>
              ))}
            </div>
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true"></span>
              {t(UI.reviews.comingSoon)}
            </span>
            <p>{t(UI.reviews.empty)}</p>
          </div>
        )}
      </div>
    </section>
  );
}
