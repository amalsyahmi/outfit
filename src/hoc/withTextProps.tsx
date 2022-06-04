import React, {ReactNode, forwardRef} from 'react';
import {TextStyle} from 'react-native';

import {constants as C} from '../style/constants';

export interface WithTextProps {
  /** extraSmall=8, small=10, medium=16, large=20, extraLarge=24 */
  sizeExtraSmall?: boolean;
  sizeSmall?: boolean;
  sizeMedium?: boolean;
  sizeLarge?: boolean;
  sizeExtraLarge?: boolean;

  colorBlack?: boolean;
  colorGray?: boolean;
  colorPrimary?: boolean;
  colorWhite?: boolean;
  colorError?: boolean;
  colorSuccess?: boolean;
  colorHot?: boolean;

  /** light=300, regular=400, semibold=500, bold=700, extrabold=800 */
  weightLight?: boolean;
  weightRegular?: boolean;
  weightSemiBold?: boolean;
  weightBold?: boolean;
  weightExtraBold?: boolean;

  alignCenter?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  alignJustify?: boolean;

  underline?: boolean;
  lineThrough?: boolean;
  marginAuto?: boolean;

  children?: ReactNode;
}

export function withTextProps<Props extends {style?: any}>(
  Component: React.ComponentType<Props>,
) {
  type NewProps = Omit<Props, keyof WithTextProps> & WithTextProps;
  return forwardRef<typeof Component, NewProps>(
    (
      {
        sizeExtraSmall,
        sizeSmall,
        sizeMedium,
        sizeLarge,
        sizeExtraLarge,

        colorGray,
        colorPrimary,
        colorWhite,
        colorError,
        colorSuccess,
        colorHot,

        weightLight,
        weightRegular,
        weightSemiBold,
        weightBold,
        weightExtraBold,

        alignCenter,
        alignLeft,
        alignRight,
        alignJustify,

        underline,
        lineThrough,
        marginAuto,
        style: passThroughStyle,
        ...passThroughProps
      },
      ref,
    ) => {
      const style: TextStyle = {};
      style.fontSize = C.fontSizeMedium;
      style.lineHeight = 28;

      if (sizeExtraSmall) {
        style.fontSize = C.fontSizeExtraSmall;
        style.lineHeight = 11;
      } else if (sizeSmall) {
        style.fontSize = C.fontSizeSmall;
        style.lineHeight = 17;
      } else if (sizeMedium) {
        style.fontSize = C.fontSizeMedium;
        style.lineHeight = 28;
      } else if (sizeLarge) {
        style.fontSize = C.fontSizeLarge;
        style.lineHeight = 30;
      } else if (sizeExtraLarge) {
        style.fontSize = C.fontSizeExtraLarge;
        style.lineHeight = 32;
      }

      style.color = C.colorBlack;
      if (colorGray) {
        style.color = C.colorGray;
      } else if (colorPrimary) {
        style.color = C.colorPrimary;
      } else if (colorWhite) {
        style.color = C.colorWhite;
      } else if (colorError) {
        style.color = C.colorError;
      } else if (colorSuccess) {
        style.color = C.colorSuccess;
      } else if (colorHot) {
        style.color = C.colorHot;
      }

      style.fontWeight = C.fontWeightRegular;
      style.fontFamily = 'Metropolis-Regular';
      if (weightLight) {
        style.fontWeight = C.fontWeightLight;
        style.fontFamily = 'Metropolis-Light';
      } else if (weightRegular) {
        style.fontWeight = C.fontWeightRegular;
        style.fontFamily = 'Metropolis-Regular';
      } else if (weightSemiBold) {
        style.fontWeight = C.fontWeightSemiBold;
        style.fontFamily = 'Metropolis-SemiBold';
      } else if (weightBold) {
        style.fontWeight = C.fontWeightBold;
        style.fontFamily = 'Metropolis-Bold';
      } else if (weightExtraBold) {
        style.fontWeight = C.fontWeightExtraBold;
        style.fontFamily = 'Metropolis-ExtraBold';
      }

      style.textAlign = 'auto';
      if (alignCenter) {
        style.textAlign = 'center';
      } else if (alignLeft) {
        style.textAlign = 'left';
      } else if (alignRight) {
        style.textAlign = 'right';
      } else if (alignJustify) {
        style.textAlign = 'justify';
      }

      style.textDecorationLine = 'none';
      if (underline) {
        style.textDecorationLine = 'underline';
      } else if (lineThrough) {
        style.textDecorationLine = 'line-through';
      }

      if (marginAuto) {
        style.margin = 'auto';
      }

      return (
        <Component
          ref={ref}
          style={[style, passThroughStyle]}
          {...(passThroughProps as any)}
        />
      );
    },
  );
}
