/* GSAP motion layer — scroll reveals, split-text headings, magnetic buttons,
   page transitions and card spotlights. Everything is skipped when the
   visitor prefers reduced motion. */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Late layout shifts (web fonts, lazy images) move trigger positions — re-measure.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
window.addEventListener("load", () => ScrollTrigger.refresh());

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

// Wait for web fonts so SplitText measures real line breaks — but never longer than `ms`:
// on a slow connection the content must not stay hidden waiting for a font file.
export const fontsReady = (ms = 1500) =>
  Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, ms))]);
const isRtl = () => document.documentElement.dir === "rtl";

/* Section headings: eyebrow slides in, heading rises word by word out of a line mask.
   The split only exists while it animates — React owns the heading text again afterwards,
   so switching language never leaves stale split markup behind.
   Returns a cancel function: the start is async (waits for fonts), so a run that has already
   been cleaned up (StrictMode double-invoke, language switch) must not fire late. */
function animateHeading(head, scrollTriggered) {
  let alive = true;
  let tl, split;
  const eyebrow = head.querySelector(".eyebrow");
  const title = head.querySelector("h1, h2");
  const rest = head.querySelectorAll(":scope > p, :scope > .lead");
  gsap.set(head, { autoAlpha: 0 });

  const play = () => {
    if (!alive) return;
    gsap.set(head, { autoAlpha: 1 });
    split = title && SplitText.create(title, { type: "lines,words", mask: "lines" });
    tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => split?.revert() });
    if (eyebrow) tl.from(eyebrow, { x: isRtl() ? 24 : -24, autoAlpha: 0, duration: 0.6 });
    if (split) tl.from(split.words, { yPercent: 110, duration: 0.9, stagger: 0.05 }, "<0.1");
    if (rest.length) tl.from(rest, { y: 18, autoAlpha: 0, duration: 0.7 }, "<0.25");
  };

  // Split only after web fonts load, otherwise line breaks are measured with the fallback font.
  const start = () => fontsReady().then(play);
  if (scrollTriggered) ScrollTrigger.create({ trigger: head, start: "top 88%", once: true, onEnter: start });
  else start();

  return () => {
    alive = false;
    tl?.kill();
    split?.revert();
  };
}

/* Page-level scroll animations. Blocks re-run (and reset) whenever `deps` change;
   headings only when `headDeps` change — so e.g. a filter click doesn't replay the page title. */
export function useReveal(deps = [], headDeps = deps) {
  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const cancels = [
          ...[...document.querySelectorAll(".page-header .container")].map((h) => animateHeading(h, false)),
          ...[...document.querySelectorAll(".section-head")].map((h) => animateHeading(h, true)),
        ];
        return () => cancels.forEach((cancel) => cancel());
      });
    },
    { dependencies: headDeps, revertOnUpdate: true }
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Cards & blocks rise in, staggered per row.
        const blocks = gsap.utils.toArray(".reveal:not(.section-head)");
        gsap.set(blocks, { autoAlpha: 0, y: 48 });
        ScrollTrigger.batch(blocks, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.09,
              clearProps: "transform,opacity,visibility", // hand control back to CSS hover states
            }),
        });

        // Tags and chips pop in like map labels.
        const chips = gsap.utils.toArray(".stack-tags .tag, .skill-chip");
        gsap.set(chips, { autoAlpha: 0, scale: 0.8 });
        ScrollTrigger.batch(chips, {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2.5)", stagger: 0.025, clearProps: "transform" }),
        });
      });
    },
    { dependencies: deps, revertOnUpdate: true }
  );
}

/* Site-wide effects that live for the whole session (mounted once in App). */
export function useGlobalMotion(mainRef, pathname) {
  // Page transition: each route change fades up into place. Skipped on first load,
  // where the boot overlay (position: fixed, inside <main>) would be displaced by the transform.
  const firstRoute = useRef(true);
  useGSAP(
    () => {
      if (firstRoute.current) {
        firstRoute.current = false;
        return;
      }
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(mainRef.current, { autoAlpha: 0, y: 14, duration: 0.6, ease: "power2.out", clearProps: "transform,opacity,visibility" });
      });
      ScrollTrigger.refresh();
    },
    { dependencies: [pathname] }
  );

  // Magnetic buttons + cursor spotlight on cards (fine pointers only).
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and (pointer: fine)`, () => {
      const MAGNETIC = ".btn, .social-btn, .theme-switch, .lang-switch, .to-top, .footer-social a";
      const SPOT = ".project-card, .app-card, .stack-card, .timeline-item, .contact-row, .edu-card, .review-card";
      let current = null;

      const release = (el) => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      const onMove = (e) => {
        const mag = e.target.closest?.(MAGNETIC);
        if (current && current !== mag) release(current);
        current = mag;
        if (mag) {
          const r = mag.getBoundingClientRect();
          gsap.to(mag, {
            x: (e.clientX - (r.left + r.width / 2)) * 0.3,
            y: (e.clientY - (r.top + r.height / 2)) * 0.3,
            duration: 0.4,
            ease: "power3.out",
          });
        }
        const card = e.target.closest?.(SPOT);
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
      };
      const onLeave = () => {
        if (current) release(current);
        current = null;
      };
      document.addEventListener("pointermove", onMove);
      document.documentElement.addEventListener("pointerleave", onLeave);
      return () => {
        document.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
      };
    });
  });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
