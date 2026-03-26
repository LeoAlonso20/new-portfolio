import { en } from "./en";
import { es } from "./es";
import type { Locale } from "./config";
import type { Dictionary } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function useTranslations(locale: Locale) {
  return dictionaries[locale];
}

export {
  languages,
  defaultLocale,
  getLocaleFromUrl,
  getLocalizedPath,
} from "./config";
export type { Locale, Dictionary };
