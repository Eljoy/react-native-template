# react-native-template

Opinionated Expo (SDK 57) + TypeScript template. React Navigation (native stack), Reanimated 4, styled-components, Feature-Sliced Design.

> Expo HAS CHANGED — read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

## Commands

- `npm start` — start the dev server (`npm run ios` / `npm run android` for a platform)
- `npm run lint` / `npm run lint:fix` — ESLint (flat config, `eslint.config.js`)
- `npm run format` — Prettier
- `npm run typecheck` — `tsc --noEmit`

Run `npm run lint` and `npm run typecheck` after making changes.

## Architecture — Feature-Sliced Design

Code lives in `src/`, split into layers (https://feature-sliced.design/):

- `app/` — app initialization: providers, navigation, root `App` component
- `screens/` — the FSD "pages" layer; one slice per screen
- `widgets/` — large self-sufficient UI blocks composed from lower layers
- `features/` — user interactions carrying business value
- `entities/` — business entities (user, product, ...)
- `shared/` — reusable code with no business logic: `shared/ui`, `shared/lib`, `shared/config`

Rules:

- A layer may only import from layers **below** it (app → screens → widgets → features → entities → shared). Never import upward or sideways between slices of the same layer.
- Every slice exposes a public API through its `index.ts`; import slices only through it (e.g. `import { HomeScreen } from '@screens/home'`), never deep paths.
- Use the path aliases from `tsconfig.json`: `@app/*`, `@screens/*`, `@widgets/*`, `@features/*`, `@entities/*`, `@shared/*`.
- Typical slice segments: `ui/`, `model/`, `api/`, `lib/`.

## Code style

- Prefer arrow functions for components
- Don't use default exports (named exports only; enforced by `import/no-default-export`)
- Prefer `type` over `interface` (exception: `.d.ts` declaration merging)
- Don't use `StyleSheet` — use `styled-components/native`
- Styled components must have a `Styled` prefix (e.g. `StyledWrapper`, `StyledText`) and live below the component that uses them in the same file
- Prefer `Wrapper` naming over `Container`, unless the component holds business logic
- Take colors/spacing from the theme (`shared/config/theme`) via the `theme` prop, not literals
- Use `import type { ... }` for type-only imports (enforced)
- Import order is enforced by `simple-import-sort` (react → external → FSD layers → relative); run `npm run lint:fix` to sort

## Git

- When creating new files, add them to git (`git add`)
- Don't autocommit — never commit unless explicitly asked
