import {Dimensions} from 'react-native';
import Color from 'color';
const window = Dimensions.get('window');

const colorBackgroundTheme = '#14CC8A';
const colorBackgroundLight = '#FFFFFF';
const colorLightPale = '#FFF6EC';
const colorBackgroundDark = '#35364B';
const colorGrey = '#E8E8E8';

const colorTextLight = 'rgba(255, 255, 255, 0.9)';
const colorTextDark = 'rgba(0, 0, 0, 0.9)';

export const constants = {
  windowWidth: window.width,
  windowHeight: window.height,
  colorBackgroundTheme,
  colorBackgroundAccent: '#ba0000',
  colorBackgroundLight,
  colorBackgroundDark,
  colorBackgroundDanger: '#DE1C44',
  colorLightPale,
  colorGrey,
  colorBackgroundThemeSoft: Color(colorBackgroundTheme)
    .lighten(0.25)
    .rgb()
    .string(2),
  colorBackgroundThemeSofter: Color(colorBackgroundTheme)
    .lighten(0.8)
    .rgb()
    .string(2),
  colorBackgroundThemeHard: Color(colorBackgroundTheme)
    .darken(0.25)
    .rgb()
    .string(2),
  colorBackgroundThemeHarder: Color(colorBackgroundTheme)
    .darken(0.5)
    .rgb()
    .string(2),
  colorBackgroundLightDark: Color(colorBackgroundLight)
    .darken(0.015)
    .rgb()
    .string(2),
  colorBackgroundLightDarker: Color(colorBackgroundLight)
    .darken(0.25)
    .rgb()
    .string(2),
  colorBackgroundDarkLight: Color(colorBackgroundDark)
    .lighten(0.15)
    .rgb()
    .string(2),
  colorBackgroundDarkLighter: Color(colorBackgroundDark)
    .lighten(0.25)
    .rgb()
    .string(2),

  colorBackDrop: 'rgba(0, 0, 0, 0.45)',

  colorTextTheme: '#14CC8A',
  colorTextNegativeBlue: '#64BFFC',
  colorTextNegativeYellow: '#E8B136',
  colorTextAccent: '#DB3022',
  colorTextLight,
  colorTextDark,
  colorTextDanger: '#DE1C44',
  colorBackgroundOrange: '#FC3D34',
  colorTextLightSoft: Color(colorTextLight).fade(0.3).rgb().string(2),
  colorTextLightSofter: Color(colorTextLight).fade(0.5).rgb().string(2),
  colorTextDarkSoft: Color(colorTextDark).fade(0.3).rgb().string(2),
  colorTextDarkSofter: Color(colorTextDark).fade(0.5).rgb().string(2),
  profileIconLight: '#E5E5E5',

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

  fontWeightLight: '300' as const,
  fontWeightRegular: '400' as const,
  fontWeightSemiBold: '500' as const,
  fontWeightBold: '700' as const,
  fontWeightExtraBold: '800' as const,

  profileAvatar: {
    size: 84,
    loaderColor: '#aaa69d',
    backgroundColor: '#ef5777',
    textColor: '#FFFF',
    fontSize: 30,
    backgroundColors: ['#575fcf', '#ef5777', '#0be881', '#ffa801'],
    marginRight: 0,
    marginTop: 0,
    borderColor: '#FFFFFF',
    borderWidth: 0,
    // bottomCircleColor: "#14CC8A",
  },
  profileImageLoader: {
    size: 84,
    loaderColor: '#aaa69d',
  },
};
