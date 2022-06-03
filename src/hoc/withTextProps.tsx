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

  colorTheme?: boolean;
  colorNegativeBlue?: boolean;
  colorNegativeYellow?: boolean;
  colorAccent?: boolean;
  colorDark?: boolean;
  colorDarkSoft?: boolean;
  colorDarkSofter?: boolean;
  colorLight?: boolean;
  colorLightSoft?: boolean;
  colorLightSofter?: boolean;
  colorDanger?: boolean;

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

  // * Comment out due to unused
  // includeFontPadding?: boolean;
  // textAlignVertical?: "auto" | "top" | "bottom" | "center";

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

        colorTheme,
        colorNegativeBlue,
        colorNegativeYellow,
        colorAccent,
        colorDark,
        colorDarkSoft,
        colorDarkSofter,
        colorLight,
        colorLightSoft,
        colorLightSofter,
        colorDanger,

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
        // * Comment out due to unused
        // includeFontPadding = false,
        // textAlignVertical = "center",
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

      style.color = C.colorTextDark;
      if (colorTheme) {
        style.color = C.colorTextTheme;
      } else if (colorNegativeBlue) {
        style.color = C.colorTextNegativeBlue;
      } else if (colorNegativeYellow) {
        style.color = C.colorTextNegativeYellow;
      } else if (colorAccent) {
        style.color = C.colorTextAccent;
      } else if (colorDark) {
        style.color = C.colorTextDark;
      } else if (colorDarkSoft) {
        style.color = C.colorTextDarkSoft;
      } else if (colorDarkSofter) {
        style.color = C.colorTextDarkSofter;
      } else if (colorLight) {
        style.color = C.colorTextLight;
      } else if (colorLightSoft) {
        style.color = C.colorTextLightSoft;
      } else if (colorLightSofter) {
        style.color = C.colorTextLightSofter;
      } else if (colorDanger) {
        style.color = C.colorTextDanger;
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
