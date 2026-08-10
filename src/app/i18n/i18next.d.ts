import type { homeTranslations } from '@screens/home';
import type { commonTranslations } from '@shared/lib/i18n';

// Typed translation keys: `en` is the source of truth per namespace.
// Register every slice namespace here alongside src/app/i18n/init.ts.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: (typeof commonTranslations)['en'];
      home: (typeof homeTranslations)['en'];
    };
  }
}
