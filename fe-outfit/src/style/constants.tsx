import {Dimensions} from 'react-native';
const window = Dimensions.get('window');

const colorBlack = '#222222';
const colorGray = '#9B9B9B';
const colorDarkGray = '#F1F1F1';
const colorPrimary = '#DB3022';
const colorBackground = '#F9F9F9';
const colorWhite = '#FFFFFF';
const colorError = '#F01F0E';
const colorSuccess = '#2AA952';
const colorHot = '#DB3022';

export const constants = {
  windowWidth: window.width,
  windowHeight: window.height,
  colorBlack,
  colorGray,
  colorDarkGray,
  colorPrimary,
  colorBackground,
  colorWhite,
  colorError,
  colorSuccess,
  colorHot,

  spacingExtraSmall: 2,
  spacingSmall: 4,
  spacingMedium: 8,
  spacingLarge: 16,
  spacingExtraLarge: 24,

  fontSizeExtraSmall: 10,
  fontSizeSmall: 14,
  fontSizeMedium: 16,
  fontSizeLarge: 20,
  fontSizeExtraLarge: 24,
  fontSizeHeadline: 44,

  fontWeightLight: '300' as const,
  fontWeightRegular: '400' as const,
  fontWeightSemiBold: '500' as const,
  fontWeightBold: '700' as const,
  fontWeightExtraBold: '800' as const,
};
