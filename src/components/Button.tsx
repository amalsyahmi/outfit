import React, {ReactNode, useState, forwardRef, useEffect} from 'react';
import {TextStyle, TouchableWithoutFeedback} from 'react-native';

import {TouchableOpacity, TouchableOpacityProps} from './TouchableOpacity';
import {Modal} from './ModalProvider';
import {Spacer} from './Spacer';
import {Text} from './Text';
import {View} from './View';
import shadow from '../style/shadow';

import {constants as C} from '../style/constants';

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  small?: boolean;
  outline?: boolean;
  transparent?: boolean;

  colorHot?: boolean;
  colorSuccess?: boolean;
  colorError?: boolean;
  colorWhite?: boolean;
  colorGray?: boolean;
  colorBlack?: boolean;
  children?: ReactNode;
  onPress?:
    | TouchableOpacityProps['onPress']
    | ((...args: any[]) => Promise<any>);
  blockUi?: boolean;
  // loading?: boolean;
}
export type Button = typeof Button;
export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  (
    {
      title,

      small = false,
      outline = false,
      transparent = false,

      colorHot = false,
      colorSuccess = false,
      colorError = false,
      colorWhite = false,
      colorGray = false,
      colorBlack = false,
      style: inheritedStyle,
      disabled,
      children,
      // loading,
      onPress,
      blockUi = true,
      ...props
    },
    ref,
  ) => {
    const isMounted = React.useRef<boolean>(true);
    useEffect(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

    const shouldRenderTitle = typeof title === 'string';

    const resolveBackgroundColor = () => {
      if (outline) {
        return 'transparent';
      }
      if (transparent) {
        return 'transparent';
      }

      if (colorHot) {
        return C.colorHot;
      } else if (colorSuccess) {
        return C.colorSuccess;
      } else if (colorError) {
        return C.colorError;
      } else if (colorWhite) {
        return C.colorWhite;
      } else if (colorGray) {
        return C.colorGray;
      } else if (colorBlack) {
        return C.colorBlack;
      }

      return C.colorPrimary;
    };

    const resolvePadding = () => {
      if (small) {
        return C.spacingSmall;
      }
      return C.spacingMedium;
    };

    const resolveTextStyle = () => {
      const style: TextStyle = {};
      if (small) {
        style.fontSize = C.fontSizeSmall;
      } else {
        style.fontSize = C.fontSizeMedium;
        style.fontWeight = C.fontWeightBold;
      }

      if (outline || transparent) {
        if (colorHot) {
          style.color = C.colorHot;
        } else if (colorSuccess) {
          style.color = C.colorSuccess;
        } else if (colorError) {
          style.color = C.colorError;
        } else if (colorWhite) {
          style.color = C.colorWhite;
        } else if (colorGray) {
          style.color = C.colorGray;
        } else if (colorBlack) {
          style.color = C.colorBlack;
        } else {
          style.color = C.colorPrimary;
        }
      } else {
        if (colorWhite) {
          style.color = C.colorBlack;
        } else {
          style.color = C.colorWhite;
        }
      }

      return style;
    };

    const resolveBorderColor = () => {
      if (outline) {
        return resolveTextStyle().color;
      }
      if (transparent) {
        return 'transparent';
      }
      if (colorHot) {
        return C.colorHot;
      } else if (colorSuccess) {
        return C.colorSuccess;
      } else if (colorError) {
        return C.colorError;
      } else if (colorWhite) {
        return C.colorWhite;
      } else if (colorGray) {
        return C.colorGray;
      } else if (colorBlack) {
        return C.colorBlack;
      }
      return C.colorPrimary;
    };

    const resolveShadow = () => {
      return 0;
    };

    const [isLoading, setIsLoading] = useState(false);

    const borderRadius = 10; // shared between the button and the spinner overlay
    const style: TouchableOpacityProps['style'] = {
      minHeight: 45,
      flexDirection: 'row',
      justifyContent: 'center', // ideja kod dodavanja ikona -> children != null ? "flex-start" : "center"
      alignItems: 'center',
      backgroundColor: resolveBackgroundColor(),
      borderColor: resolveBorderColor(),
      borderWidth: 1,
      padding: resolvePadding(),
      borderRadius,
      ...shadow(resolveShadow()),
      opacity: isLoading || disabled ? 0.5 : 1,
    };

    const textStyle = resolveTextStyle();

    return (
      <>
        <TouchableOpacity
          ref={ref}
          style={[style, inheritedStyle]}
          onPress={event => {
            if (typeof onPress === 'function') {
              const maybePromise = onPress(event);

              if (maybePromise && typeof maybePromise.then === 'function') {
                setIsLoading(true);
                maybePromise.finally(
                  () => isMounted.current && setIsLoading(false),
                );
              }
            }
          }}
          disabled={isLoading || disabled}
          {...props}>
          <>
            {children}
            {Boolean(children && shouldRenderTitle) && <Spacer />}
            {shouldRenderTitle && (
              <Text numberOfLines={1} style={textStyle}>
                {title}
              </Text>
            )}
          </>
          {/* {loading && (
            <View
              centerContent
              style={{ ...StyleSheet.absoluteFillObject, borderRadius }}
            >
              <Spinner size="small" color={C.colorTextDarkSoft} />
            </View>
          )} */}
        </TouchableOpacity>

        {Boolean(blockUi && isLoading) && (
          <Modal blockHardwareBackButton>
            <TouchableWithoutFeedback>
              <View flex />
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </>
    );
  },
);
