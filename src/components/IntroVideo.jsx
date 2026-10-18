import { useEffect, useRef, useState } from "react";
import { UI } from "../data.js";
import { useLang } from "../i18n.jsx";

const SRC = "/video/intro.mp4";
const POSTER = "/video/intro-poster.jpg";

const SoundIcon = ({ on }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" fillOpacity="0.15" />
    {on ? (
      <>
        <path d="M15.5 9a4 4 0 010 6" />
        <path d="M18 6.5a7.5 7.5 0 010 11" />
      </>
    ) : (
      <path d="M16 9.5l5 5M21 9.5l-5 5" />
    )}
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
  </svg>
);
const ReplayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12a8 8 0 108-8 8.4 8.4 0 00-6 2.6L4 9" />
    <path d="M4 4v5h5" />
  </svg>
);

/* Hero intro video. Browsers only allow autoplay when muted, so it starts muted and
   looping as soon as the boot overlay clears; "Tap for sound" restarts it from the top
   with audio. It pauses while scrolled out of view. */
export default function IntroVideo() {
  const { t } = useLang();
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false); // false → show the big play button (autoplay blocked / reduced motion)
  const [ended, setEnded] = useState(false);
  const wanted = useRef(false); // should be playing when visible

  // Start playing once the boot overlay is gone (immediately on later visits).
  useEffect(() => {
    const v = videoRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // wait for a click
    const start = () => v.play().catch(() => {}); // e.g. low-power mode blocks autoplay → play button stays
    if (document.body.classList.contains("hero-ready")) start();
    else window.addEventListener("boot-done", start, { once: true });
    return () => window.removeEventListener("boot-done", start);
  }, []);

  // Pause off-screen, resume when back (unless it finished).
  useEffect(() => {
    const v = videoRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) v.pause();
        else if (wanted.current && !v.ended) v.play().catch(() => {});
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const onTime = () => {
    const v = videoRef.current;
    if (barRef.current && v.duration) barRef.current.style.transform = `scaleX(${v.currentTime / v.duration})`;
  };

  const playFromStart = (withSound) => {
    const v = videoRef.current;
    v.muted = !withSound;
    v.loop = !withSound; // muted preview loops; with sound it plays once
    v.currentTime = 0;
    setMuted(!withSound);
    setEnded(false);
    v.play().catch(() => {});
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (muted) playFromStart(true);
    else {
      v.muted = !v.muted;
      setMuted(v.muted);
    }
  };

  return (
    <div className="hero-video">
      <video
        ref={videoRef}
        src={SRC}
        poster={POSTER}
        muted
        loop
        playsInline
        preload="auto"
        onPlay={() => {
          wanted.current = true;
          setStarted(true);
        }}
        onEnded={() => {
          wanted.current = false;
          setEnded(true);
        }}
        onTimeUpdate={onTime}
        aria-label={t(UI.intro.label)}
      />

      <span className="hero-video-tag">
        <span className="live-dot" aria-hidden="true"></span>
        {t(UI.intro.label)}
      </span>

      {ended ? (
        <button className="hero-video-center" onClick={() => playFromStart(true)}>
          <ReplayIcon />
          <span>{t(UI.intro.replay)}</span>
        </button>
      ) : !started ? (
        <button className="hero-video-center" onClick={() => playFromStart(true)}>
          <PlayIcon />
          <span>{t(UI.intro.play)}</span>
        </button>
      ) : null}

      {!ended && (
        <button
          className={`hero-video-sound${muted ? " is-muted" : ""}`}
          onClick={toggleSound}
          aria-label={muted ? t(UI.intro.sound) : t(UI.intro.mute)}
        >
          <SoundIcon on={!muted} />
          {muted && <span>{t(UI.intro.sound)}</span>}
        </button>
      )}

      <span className="hero-video-progress" aria-hidden="true">
        <span ref={barRef} />
      </span>
    </div>
  );
}
