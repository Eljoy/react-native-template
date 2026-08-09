import { Text } from 'react-native';
import type { ReactNode } from 'react';

type TypographyVariant = 'title' | 'body' | 'caption';

type TypographyProps = {
  children: ReactNode;
  variant?: TypographyVariant;
};

const classNameByVariant: Record<TypographyVariant, string> = {
  title: 'text-2xl font-bold text-foreground',
  body: 'text-base text-foreground',
  caption: 'text-xs text-muted',
};

export const Typography = ({ children, variant = 'body' }: TypographyProps) => (
  <Text className={classNameByVariant[variant]}>{children}</Text>
);
