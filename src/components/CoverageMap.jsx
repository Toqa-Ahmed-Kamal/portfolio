import { useEffect, useRef } from "react";
import L from "leaflet";
import { gsap } from "gsap";
import { LOCATIONS } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useTheme } from "../theme.jsx";

// Esri Canvas basemaps — free, no API key (CARTO basemaps now require one).
const TILES = {
  dark: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  light: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
};

export default function CoverageMap() {
  const elRef = useRef(null);
  const mapRef = useRef(null);
  const tilesRef = useRef(null);
  const { t, lang } = useLang();
  const { theme } = useTheme();
  // Popups read the latest translator at open time, so they follow the language toggle.
  const tRef = useRef(t);
  tRef.current = t;

  useEffect(() => {
    const map = L.map(elRef.current, { scrollWheelZoom: false, minZoom: 2, maxZoom: 8 }).setView([26, 34], 3);
    mapRef.current = map;
    tilesRef.current = L.tileLayer(TILES[document.documentElement.dataset.theme === "light" ? "light" : "dark"], {
      maxZoom: 16,
      attribution: "",
    }).addTo(map);

    LOCATIONS.forEach((loc) => {
      const icon = L.divIcon({ className: "pulse-marker-wrap", html: '<span class="pulse-marker"></span>', iconSize: [14, 14] });
      const marker = L.marker([loc.lat, loc.lng], { icon, title: loc.id }).addTo(map);
      marker.bindPopup("", { closeButton: true });
      marker.on("popupopen", () => {
        const el = document.createElement("div");
        const title = document.createElement("div");
        title.className = "popup-title";
        title.textContent = tRef.current(loc.name);
        const note = document.createElement("div");
        note.className = "popup-note";
        note.textContent = tRef.current(loc.note);
        el.append(title, note);
        marker.setPopupContent(el);
      });
    });

    // Markers drop in one by one once the map has settled.
    const pins = elRef.current.querySelectorAll(".pulse-marker");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pop = reduced
      ? null
      : gsap.from(pins, { scale: 0, autoAlpha: 0, duration: 0.6, ease: "back.out(3)", stagger: { each: 0.06, from: "random" }, delay: 1.1 });

    const timer = setTimeout(() => map.invalidateSize(), 500);
    return () => {
      pop?.kill();
      clearTimeout(timer);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    tilesRef.current?.setUrl(TILES[theme]);
  }, [theme]);

  // Layout shifts with RTL/LTR — let Leaflet re-measure.
  useEffect(() => {
    const timer = setTimeout(() => mapRef.current?.invalidateSize(), 200);
    return () => clearTimeout(timer);
  }, [lang]);

  return <div ref={elRef} className="map-el" />;
}
