import React, { ReactNode } from 'react';
import { StyleProp, Text as RNText, TextProps, TextStyle } from 'react-native';
import { Font, FontColor, getFontStyle } from './TokenTypography';

export declare namespace Text {
  export type Props = {
    font: Font;
    color?: FontColor;
    children?: ReactNode;
  } & TextProps;
}

export const Text: React.FC<Text.Props> = ({
  style,
  font,
  color = FontColor.Primary,
  ...props
}) => {
  const textStyle: StyleProp<TextStyle>[] = [getFontStyle(font, color), style];
  return <RNText {...props} style={textStyle} />;
};
