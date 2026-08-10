import { initReactI18next } from 'react-i18next';

import { getLocales } from 'expo-localization';
import type { Resource } from 'i18next';
import i18next from 'i18next';

import en from './locales/en.json';

export const fallbackLanguage = 'en';

/** Strings owned by the shared layer (used by shared/ui components). */
export const commonTranslations = { en } as const;

type TranslationsByLanguage = Record<string, object>;

/**
 * Initializes i18next with one namespace per slice.
 * Slices own their translations; the app layer aggregates them
 * (see src/app/i18n) — shared only provides the machinery and
 * the `common` namespace.
 */
export const initI18n = (
  namespaces: Record<string, TranslationsByLanguage>
) => {
  const allNamespaces = { common: commonTranslations, ...namespaces };

  const resources: Resource = {};
  for (const [namespace, byLanguage] of Object.entries(allNamespaces)) {
    for (const [language, translations] of Object.entries(byLanguage)) {
      resources[language] = {
        ...resources[language],
        [namespace]: translations,
      };
    }
  }

  // eslint-disable-next-line import/no-named-as-default-member -- chaining off the default instance is the documented i18next API
  void i18next.use(initReactI18next).init({
    resources,
    ns: Object.keys(allNamespaces),
    defaultNS: 'common',
    lng: getLocales()?.[0]?.languageCode ?? fallbackLanguage,
    fallbackLng: fallbackLanguage,
    interpolation: {
      // React already escapes rendered values
      escapeValue: false,
    },
  });

  return i18next;
};
