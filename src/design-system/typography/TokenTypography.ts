import { TextStyle } from 'react-native';

export enum Font {
  Body1 = 'body1',
  Body2 = 'body2',
  Caption = 'caption',
  Button = 'button',
}

export enum FontColor {
  Primary = '#6A6872',
  Secondary = '#A2A1B4',
}

const FontWeight: Record<Font, TextStyle['fontWeight']> = {
  [Font.Body1]: '500',
  [Font.Body2]: '500',
  [Font.Caption]: 'normal',
  [Font.Button]: '600',
} as const;

const FontSize: Record<Font, TextStyle['fontSize']> = {
  [Font.Body1]: 16,
  [Font.Body2]: 14,
  [Font.Caption]: 12,
  [Font.Button]: 14,
} as const;

const LetterSpacing: Record<Font, TextStyle['letterSpacing']> = {
  [Font.Body1]: 0.5,
  [Font.Body2]: 0.25,
  [Font.Caption]: 0.4,
  [Font.Button]: 1.25,
};

export const getFontStyle = (font: Font, color: FontColor): TextStyle => ({
  fontWeight: FontWeight[font],
  fontSize: FontSize[font],
  letterSpacing: LetterSpacing[font],
  color,
});
