export const locales = ["en", "fa"];
export const defaultLocale = "en";
export const localeCookie = "trustence_locale";

export function normalizeLocale(value) {
  const candidate = String(value || "").toLowerCase();
  return candidate === "fa" || candidate.startsWith("fa-") ? "fa" : "en";
}

export function localeDirection(locale) {
  return normalizeLocale(locale) === "fa" ? "rtl" : "ltr";
}

export function detectLocale({ cookie, acceptLanguage } = {}) {
  if (cookie && locales.includes(cookie)) return cookie;
  return normalizeLocale(acceptLanguage);
}
