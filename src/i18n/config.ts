export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = "en";

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Locale;
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
