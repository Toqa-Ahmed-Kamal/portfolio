import { useEffect } from "react";

/* Fades in any .reveal element as it scrolls into view. Re-scans whenever deps change. */
export function useReveal(deps = []) {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
