import { useEffect } from "react";

// Scroll reveals are GSAP-driven — see motion.js.
export { useReveal } from "./motion.js";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
