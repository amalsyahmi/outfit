import React, {ReactNode, useRef} from 'react';
import {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  ViewProps,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from '../components/View';
import {constants as C} from '../style/constants';
import {mergeRefs} from '../utils/mergeRefs';

const S = StyleSheet.create({
  flex: {flex: 1},
});

export type ScreenProps = (
  | ({preventScroll: true} & ViewProps)
  | ({preventScroll?: false} & ScrollViewProps)
) & {
  children: ReactNode;
  //   colorBackgroundTheme?: boolean;
  //   colorBackgroundAccent?: boolean;
  //   colorBackgroundLight?: boolean;
  //   colorBackgroundDark?: boolean;
  //   colorBackgroundDanger?: boolean;
  //   colorBackgroundThemeSoft?: boolean;
  //   colorBackgroundThemeSofter?: boolean;
  //   colorBackgroundThemeHard?: boolean;
  //   colorBackgroundThemeHarder?: boolean;
  //   colorBackgroundLightDark?: boolean;
  //   colorBackgroundLightDarker?: boolean;
  //   colorBackgroundDarkLight?: boolean;
  //   colorBackgroundDarkLighter?: boolean;
  withoutBottomTabBar?: boolean;
  withoutHeader?: boolean;
};

export interface ScreenContextType {
  scrollTo: ScrollView['scrollTo'] | undefined;
  flashScrollIndicators: ScrollView['flashScrollIndicators'] | undefined;
  scrollToEnd: ScrollView['scrollToEnd'] | undefined;
  scrollToTop: () => void | undefined;
}

export const ScreenContext = React.createContext<ScreenContextType | undefined>(
  undefined,
);

export const Screen = React.forwardRef<ScrollView | View, ScreenProps>(
  (props, ref) => {
    const insets = useSafeAreaInsets();
    const insetBottom = insets.bottom;
    const insetTop = insets.top;
    const scrollViewRef = useRef<ScrollView>();

    const providerValue = useRef<ScreenContextType>({
      scrollTo: undefined,
      flashScrollIndicators: undefined,
      scrollToEnd: undefined,
      scrollToTop: () => {},
    });

    useEffect(() => {
      providerValue.current.scrollTo = scrollViewRef.current?.scrollTo;
      providerValue.current.flashScrollIndicators =
        scrollViewRef.current?.flashScrollIndicators;
      providerValue.current.scrollToEnd = scrollViewRef.current?.scrollToEnd;
      providerValue.current.scrollToTop = () => {
        scrollViewRef.current?.scrollTo({y: 0, animated: true});
      };
    }, []);

    const resolveBackgroundColor = () => {
      //   if (props.colorBackgroundTheme) return C.colorBackgroundTheme;
      //   if (props.colorBackgroundAccent) return C.colorBackgroundAccent;
      //   if (props.colorBackgroundLight) return C.colorBackgroundLight;
      //   if (props.colorBackgroundDark) return C.colorBackgroundDark;
      //   if (props.colorBackgroundDanger) return C.colorBackgroundDanger;
      //   if (props.colorBackgroundThemeSoft) return C.colorBackgroundThemeSoft;
      //   if (props.colorBackgroundThemeSofter) return C.colorBackgroundThemeSofter;
      //   if (props.colorBackgroundThemeHard) return C.colorBackgroundThemeHard;
      //   if (props.colorBackgroundThemeHarder) return C.colorBackgroundThemeHarder;
      //   if (props.colorBackgroundLightDark) return C.colorBackgroundLightDark;
      //   if (props.colorBackgroundLightDarker) return C.colorBackgroundLightDarker;
      //   if (props.colorBackgroundDarkLight) return C.colorBackgroundDarkLight;
      //   if (props.colorBackgroundDarkLighter) return C.colorBackgroundDarkLighter;
      return C.colorBackground;
    };

    const resolvePaddingBottom = () => {
      if (props.withoutBottomTabBar) {
        return insetBottom;
      }
      return undefined;
    };

    const resolvePaddingTop = () => {
      if (props.withoutHeader) {
        return insetTop;
      }
      return undefined;
    };

    const backgroundColor = resolveBackgroundColor();
    const paddingBottom = resolvePaddingBottom();
    const paddingTop = resolvePaddingTop();

    if (props.preventScroll) {
      const {style, ...otherProps} = props;
      const screenStyle = [
        {backgroundColor, flex: 1, paddingBottom, paddingTop},
        style,
      ];

      return (
        <KeyboardAvoidingView
          enabled={Platform.select({android: false, default: true})}
          behavior="padding"
          style={S.flex}>
          <View
            ref={ref as React.Ref<View>}
            style={screenStyle}
            {...otherProps}
          />
        </KeyboardAvoidingView>
      );
    } else {
      const {style, contentContainerStyle, ...otherProps} = props;
      const screenStyle = [{backgroundColor, flex: 1}, style];
      const screenContentContainerStyle = [
        {flexGrow: 1, backgroundColor, paddingBottom, paddingTop},
        contentContainerStyle,
      ];

      return (
        <KeyboardAvoidingView
          enabled={Platform.select({android: false, default: true})}
          behavior="padding"
          style={S.flex}>
          <ScreenContext.Provider value={providerValue.current}>
            <ScrollView
              ref={mergeRefs([scrollViewRef, ref])}
              style={screenStyle}
              contentContainerStyle={screenContentContainerStyle}
              keyboardShouldPersistTaps="handled"
              {...otherProps}
            />
          </ScreenContext.Provider>
        </KeyboardAvoidingView>
      );
    }
  },
);

export type Screen = typeof Screen;
