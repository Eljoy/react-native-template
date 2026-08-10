# react-native-template

Opinionated Expo template for starting new React Native projects.

## Stack

- **[Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)** + TypeScript (strict), React Navigation (native stack), Reanimated 4
- **[Uniwind](https://docs.uniwind.dev/)** — Tailwind CSS v4 on the Unistyles engine; `className` on core RN components, themed via design tokens in [src/global.css](src/global.css) (two tiers: primitives → semantic, light/dark built in)
- **React Compiler** enabled — no manual memoization
- **TanStack Query** — server state; client provider in [src/app/providers](src/app/providers/QueryProvider.tsx)
- **i18next + expo-localization** — typed translation keys per slice namespace, device-language detection
- **Jest + jest-expo + React Native Testing Library** — colocated `*.test.tsx` files; Maestro smoke flows in [.maestro/](.maestro/home.yaml)
- **ESLint 9 (flat) + Prettier + husky/lint-staged** — enforced import order, named exports only, no `StyleSheet`, FSD layer boundaries
- **[Feature-Sliced Design](https://feature-sliced.design/)** — `app → screens → widgets → features → entities → shared`, lint-enforced import direction, path aliases (`@app/*`, `@shared/*`, ...)

## Getting started

Yarn is the package manager for this project. Node version is pinned in `.nvmrc`.

```sh
yarn
yarn ios         # or: yarn android — builds and runs a dev build (needs Xcode / Android SDK)
yarn start       # dev server only, once a dev build is installed
```

Copy [.env.example](.env.example) to `.env` and fill in the values (only `EXPO_PUBLIC_*` variables reach app code; they're read through the validated [src/shared/config/env.ts](src/shared/config/env.ts)).

## Starting a project from this template

```sh
npx create-expo-app my-app --template github:iliasgazdaliev/react-native-template
```

This renames the app automatically (`package.json` `name`, `app.json` `name`/`slug`) and installs dependencies. What's left to do by hand:

- Replace this `README.md` (and `LICENSE` if it doesn't apply)
- Change `android.package` in `app.json` (create-expo-app does **not** rename it) and set `ios.bundleIdentifier` — Expo prompts for the latter on the first iOS build
- `git init` if create-expo-app didn't — husky hooks install via the `prepare` script

Fallback without auto-rename: GitHub's **"Use this template"** or `npx degit`, then rename `package.json` `name` and `app.json` `name`/`slug` manually.

> Publishing note: npm strips `.gitignore` from tarballs; the `prepack` script generates a dotless `gitignore` twin that `create-expo-app` renames back on scaffold. Nothing to maintain — it's automatic.

## Scripts

| Script                          | What it does                    |
| ------------------------------- | ------------------------------- |
| `yarn ios` / `yarn android`     | build + run a dev build         |
| `yarn start`                    | dev server (existing dev build) |
| `yarn lint` / `yarn lint:fix`   | ESLint                          |
| `yarn format`                   | Prettier                        |
| `yarn typecheck`                | `tsc --noEmit`                  |
| `yarn test` / `yarn test:watch` | Jest                            |

CI (GitHub Actions) runs lint + typecheck + tests on every push to `main` and on PRs. A husky pre-commit hook runs lint-staged locally.

## Conventions

All conventions — FSD layer rules, design-token usage, testing and i18n patterns — are documented in [AGENTS.md](AGENTS.md), which both humans and AI agents should follow.
