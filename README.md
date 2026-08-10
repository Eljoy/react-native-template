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

```sh
npx create-expo-app my-app --template github:iliasgazdaliev/react-native-template
```

This renames the app automatically (`package.json` `name`, `app.json` `name`/`slug`) and installs dependencies. What's left to do by hand:

- Replace this `README.md` (and `LICENSE` if it doesn't apply)
- `ios.bundleIdentifier` / `android.package` are intentionally unset — Expo prompts for them on the first native build
- `git init` if create-expo-app didn't — husky hooks install via the `prepare` script

Fallback without auto-rename: GitHub's **"Use this template"** or `npx degit`, then rename `package.json` `name` and `app.json` `name`/`slug` manually.

> Publishing note: npm strips `.gitignore` from tarballs; the `prepack` script generates a dotless `gitignore` twin that `create-expo-app` renames back on scaffold. Nothing to maintain — it's automatic.

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
