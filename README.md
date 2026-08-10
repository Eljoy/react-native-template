# react-native-template

Opinionated Expo template for starting new React Native projects.

## Stack

- **[Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)** + TypeScript (strict), React Navigation (native stack), Reanimated 4
- **[Uniwind](https://docs.uniwind.dev/)** — Tailwind CSS v4 on the Unistyles engine; `className` on core RN components, themed via design tokens in [src/global.css](src/global.css) (two tiers: primitives → semantic, light/dark built in)
- **React Compiler** enabled — no manual memoization
- **i18next + expo-localization** — typed translation keys, device-language detection ([src/shared/lib/i18n](src/shared/lib/i18n))
- **Jest + jest-expo + React Native Testing Library** — colocated `*.test.tsx` files
- **ESLint 9 (flat) + Prettier + husky/lint-staged** — enforced import order, named exports only, no `StyleSheet`, FSD layer boundaries
- **[Feature-Sliced Design](https://feature-sliced.design/)** — `app → screens → widgets → features → entities → shared`, lint-enforced import direction, path aliases (`@app/*`, `@shared/*`, ...)

## Getting started

```sh
npm install
npm start        # dev server; npm run ios / npm run android for a platform
```

Copy [.env.example](.env.example) to `.env` and fill in the values (only `EXPO_PUBLIC_*` variables reach app code; they're read through the validated [src/shared/config/env.ts](src/shared/config/env.ts)).

## Starting a project from this template

1. Use GitHub's **"Use this template"**, or `npx degit <owner>/react-native-template my-app`
2. Rename checklist:
   - `package.json` — `name`
   - `app.json` — `name`, `slug`; add `ios.bundleIdentifier` and `android.package` before the first native build
   - `README.md` — replace this file
3. `npm install`, then `git init` (if degit) — husky hooks install via the `prepare` script

## Scripts

| Script                                          | What it does              |
| ----------------------------------------------- | ------------------------- |
| `npm start` / `npm run ios` / `npm run android` | dev server / platform run |
| `npm run lint` / `npm run lint:fix`             | ESLint                    |
| `npm run format`                                | Prettier                  |
| `npm run typecheck`                             | `tsc --noEmit`            |
| `npm test` / `npm run test:watch`               | Jest                      |

CI (GitHub Actions) runs lint + typecheck + tests on every push to `main` and on PRs. A husky pre-commit hook runs lint-staged locally.

## Conventions

All conventions — FSD layer rules, design-token usage, testing and i18n patterns — are documented in [AGENTS.md](AGENTS.md), which both humans and AI agents should follow.
