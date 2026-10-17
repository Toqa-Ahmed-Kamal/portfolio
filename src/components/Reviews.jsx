import { UI, REVIEWS } from "../data.js";
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

        {REVIEWS.length > 0 ? (
          <div className="review-grid">
            {REVIEWS.map((r, i) => (
              <ReviewCard review={r} key={i} />
            ))}
          </div>
        ) : (
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
