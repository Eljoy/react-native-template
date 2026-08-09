import type { ReactNode } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

import { theme } from '@shared/config/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
