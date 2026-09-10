"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { localeCookie, localeDirection, normalizeLocale } from "./config";

const LocaleContext = createContext(null);

export default function LocaleProvider({ initialLocale = "en", children }) {
  const [locale, setLocaleState] = useState(normalizeLocale(initialLocale));

  useEffect(() => {
    setLocaleState(normalizeLocale(initialLocale));
  }, [initialLocale]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.has("lang")) return;
    url.searchParams.delete("lang");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }, []);

  const setLocale = useCallback((nextLocale) => {
    const next = normalizeLocale(nextLocale);
    document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next;
    document.documentElement.dir = localeDirection(next);
    setLocaleState(next);
  }, []);

  const value = useMemo(() => ({
    locale,
    isRtl: locale === "fa",
    dir: localeDirection(locale),
    setLocale,
    toggleLocale: () => setLocale(locale === "fa" ? "en" : "fa"),
  }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}
