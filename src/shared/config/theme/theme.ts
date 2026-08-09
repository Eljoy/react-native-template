export const theme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F4F5F7',
    text: '#111214',
    textSecondary: '#6B7076',
    primary: '#2F6FED',
    danger: '#E5484D',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 6,
    md: 12,
    lg: 20,
  },
} as const;

export type AppTheme = typeof theme;
