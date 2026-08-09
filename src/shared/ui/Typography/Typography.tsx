import type { ReactNode } from 'react';

import styled from 'styled-components/native';

type TypographyVariant = 'title' | 'body' | 'caption';

type TypographyProps = {
  children: ReactNode;
  variant?: TypographyVariant;
};

export const Typography = ({ children, variant = 'body' }: TypographyProps) => (
  <StyledText $variant={variant}>{children}</StyledText>
);

const fontSizeByVariant: Record<TypographyVariant, number> = {
  title: 24,
  body: 16,
  caption: 12,
};

const StyledText = styled.Text<{ $variant: TypographyVariant }>`
  color: ${({ theme, $variant }) =>
    $variant === 'caption' ? theme.colors.textSecondary : theme.colors.text};
  font-size: ${({ $variant }) => fontSizeByVariant[$variant]}px;
  font-weight: ${({ $variant }) => ($variant === 'title' ? 700 : 400)};
`;
