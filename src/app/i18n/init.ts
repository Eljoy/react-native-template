import { homeTranslations } from '@screens/home';
import { initI18n } from '@shared/lib/i18n';

// One namespace per slice; the app layer is the only layer that
// may import from all slices, so aggregation happens here.
export const initAppI18n = () =>
  initI18n({
    home: homeTranslations,
  });
