import { initAppI18n } from '../src/app/i18n';

// Initialize i18next with all slice namespaces for tests (the app does
// this in src/app/App.tsx); jest-expo mocks expo-localization, so the
// fallback language is used.
initAppI18n();
