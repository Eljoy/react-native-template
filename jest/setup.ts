import { initI18n } from '../src/shared/lib/i18n';

// Initialize i18next for tests (the app does this in src/app/App.tsx);
// jest-expo mocks expo-localization, so the fallback language is used.
initI18n();
