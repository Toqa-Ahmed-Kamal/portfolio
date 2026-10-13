/* Language state (EN/AR + RTL). Starts from ?lang=ar if present, then remembers the choice. */
import { createContext, useContext, useEffect, useState, useCallback } from "react";

const LangContext = createContext(null);

function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "ar" || fromUrl === "en") return fromUrl;
  try {
    return localStorage.getItem("lang") === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [lang]);

  const t = useCallback((field) => (field ? field[lang] || field.en || "" : ""), [lang]);
  const toggleLang = useCallback(() => setLang((l) => (l === "ar" ? "en" : "ar")), []);

  return <LangContext.Provider value={{ lang, t, toggleLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
