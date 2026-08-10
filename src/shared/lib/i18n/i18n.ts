import { initReactI18next } from 'react-i18next';

import { getLocales } from 'expo-localization';
import i18next from 'i18next';

import en from './locales/en.json';

export const fallbackLanguage = 'en';

export const resources = {
  en: { translation: en },
} as const;

export const initI18n = () => {
  // eslint-disable-next-line import/no-named-as-default-member -- chaining off the default instance is the documented i18next API
  void i18next.use(initReactI18next).init({
    resources,
    lng: getLocales()?.[0]?.languageCode ?? fallbackLanguage,
    fallbackLng: fallbackLanguage,
    interpolation: {
      // React already escapes rendered values
      escapeValue: false,
    },
  });

  return i18next;
};
