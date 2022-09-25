import React, { ReactNode } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import {
  getMargin,
  getPadding,
  getPaddingHorizontal,
  spaceScale,
} from '../lib';
import { LayoutAlign, LayoutDirection, LayoutUtils } from './layoutUtils';

export type LayoutProps = {
  direction?: LayoutDirection;
  align?: LayoutAlign;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  paddingScale?: keyof typeof spaceScale;
  marginScale?: keyof typeof spaceScale;
  paddingHorizontalScale?: keyof typeof spaceScale;
} & Pick<ViewStyle, 'flex' | 'height' | 'maxHeight' | 'width' | 'maxWidth'> &
  ViewProps;

// It is my small utility component inspired by angular js layout system,
// that I did not have time to publish as a standalone library
export const Layout: React.FC<LayoutProps> = ({
  flex,
  height,
  maxHeight,
  maxWidth,
  width,
  direction,
  align,
  style,
  paddingScale,
  paddingHorizontalScale,
  children,
  marginScale,
  ...props
}) => {
  const layoutStyle = [
    flex && { flex },
    direction && LayoutUtils.toLayoutStyle(direction),
    align && LayoutUtils.toLayoutAlignStyle(align),
    marginScale && getMargin(marginScale),
    paddingScale && getPadding(paddingScale),
    paddingHorizontalScale && getPaddingHorizontal(paddingHorizontalScale),
    height && { height },
    maxHeight && { maxHeight },
    maxWidth && { maxWidth },
    width && { width },
    style,
  ] as StyleProp<ViewStyle>;

  return (
    <View style={layoutStyle} {...props}>
      {children}
    </View>
  );
};
