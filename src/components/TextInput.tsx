import React, {forwardRef, ReactNode, useState} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {constants as C} from '../style/constants';
import {Text} from './Text';
import {View} from './View';

const S = StyleSheet.create({
  textInput: {
    flex: 1,
    minHeight: 52,
    paddingHorizontal: C.spacingMedium,
  },
  spacer: {height: 8},
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: C.spacingLarge,
  },
});

export interface TextInputProps extends RNTextInputProps {
  sizeExtraSmall?: boolean;
  sizeSmall?: boolean;
  sizeMedium?: boolean;
  sizeLarge?: boolean;
  sizeExtraLarge?: boolean;

  colorGray?: boolean;
  colorPrimary?: boolean;
  colorWhite?: boolean;
  colorError?: boolean;
  colorSuccess?: boolean;
  colorHot?: boolean;

  weightLight?: boolean;
  weightRegular?: boolean;
  weightSemiBold?: boolean;
  weightBold?: boolean;
  weightExtraBold?: boolean;
  forwardedRef?: React.Ref<RNTextInput>;

  label?: string;
  error?: boolean;
  caption?: string;
  containerStyle?: ViewStyle;
  leftComponent?: () => ReactNode;
  rightComponent?: () => ReactNode;

  children?: ReactNode;
}

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
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

      style,

      label,
      error = false,
      caption = ' ',
      containerStyle,

      leftComponent,
      rightComponent,

      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    let fontSize: TextStyle['fontSize'] = C.fontSizeMedium;
    if (sizeExtraSmall) fontSize = C.fontSizeExtraSmall;
    else if (sizeSmall) fontSize = C.fontSizeSmall;
    else if (sizeMedium) fontSize = C.fontSizeMedium;
    else if (sizeLarge) fontSize = C.fontSizeLarge;
    else if (sizeExtraLarge) fontSize = C.fontSizeExtraLarge;

    let color: TextStyle['color'] = C.colorBlack;
    if (colorGray) color = C.colorGray;
    else if (colorPrimary) color = C.colorPrimary;
    else if (colorWhite) color = C.colorWhite;
    else if (colorError) color = C.colorError;
    else if (colorSuccess) color = C.colorSuccess;
    else if (colorHot) color = C.colorHot;

    let fontWeight: TextStyle['fontWeight'] = C.fontWeightRegular;
    const fontFamily: TextStyle['fontFamily'] = undefined; // "OpenSans-Regular";
    if (weightLight) {
      fontWeight = C.fontWeightLight;
      // fontFamily = "OpenSans-Light";
    } else if (weightRegular) {
      fontWeight = C.fontWeightRegular;
      // fontFamily = "OpenSans-Regular";
    } else if (weightSemiBold) {
      fontWeight = C.fontWeightSemiBold;
      // fontFamily = "OpenSans-SemiBold";
    } else if (weightBold) {
      fontWeight = C.fontWeightBold;
      // fontFamily = "OpenSans-Bold";
    } else if (weightExtraBold) {
      fontWeight = C.fontWeightExtraBold;
      // fontFamily = "OpenSans-ExtraBold";
    }

    const editable = props.editable ?? true;

    let borderColor: TextStyle['borderColor'] = 'rgba(232, 232, 232, 1)';
    if (error) {
      borderColor = C.colorError;
    } else if (isFocused) {
      borderColor = C.colorBlack;
    } else {
      borderColor = C.colorGray;
    }

    const backgroundColor = editable ? C.colorWhite : C.colorGray;

    return (
      <View>
        {!!label && (
          <>
            <Text sizeSmall weightBold>
              {label}
            </Text>
            <View style={S.spacer} />
          </>
        )}
        <View
          centerContent
          style={[S.container, {backgroundColor, borderColor}, containerStyle]}>
          {leftComponent ? leftComponent() : null}
          <RNTextInput
            ref={ref}
            placeholderTextColor={C.colorGray}
            selectionColor={C.colorPrimary}
            onFocus={() => {
              setIsFocused(true);
            }}
            onEndEditing={() => {
              setIsFocused(false);
            }}
            style={[
              S.textInput,
              {
                fontSize,
                color,
                fontWeight,
                fontFamily,
              },
              style,
            ]}
            {...props}
          />
          {rightComponent ? rightComponent() : null}
        </View>
        <View style={S.spacer} />
        <Text sizeSmall colorError={error} weightBold>
          {caption}
        </Text>
      </View>
    );
  },
);
