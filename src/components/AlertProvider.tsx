import React, {useState, createContext, useCallback} from 'react';
import {
  AlertButton,
  AlertOptions,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

import {Button} from './Button';
import {Modal} from './ModalProvider';
import {Text} from './Text';
import {View} from './View';
import {Spacer} from './Spacer';
import shadow from '../style/shadow';

import {constants as C} from '../style/constants';

interface ContextType {
  alert: (
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions & {buttonsContainerStyle?: ViewStyle},
  ) => void;
}

export const AlertContext = createContext<ContextType | undefined>(undefined);

const defaultOptions = {
  cancelable: false,
  onDismiss: () => {},
  buttonsContainerStyle: {},
};

const MODAL_BACKDROP_COLOR = 'rgba(0, 0, 0, 0.5)';

const S = StyleSheet.create({
  containerStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: MODAL_BACKDROP_COLOR,
  },
  alertContainer: {
    backgroundColor: C.colorBackground,
    width: '80%',
    borderRadius: 8,
    ...shadow(4),
  },
  buttonsContainer: {flexDirection: 'row-reverse'},
});

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider = ({
  children,
  ...otherProps
}: AlertProviderProps) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertParams, setAlertParams] = useState({
    title: '',
    body: '',
    buttons: [] as AlertButton[],
    options: defaultOptions,
  });

  const alert: ContextType['alert'] = useCallback(
    (title = '', body = '', buttons = [], options = defaultOptions) => {
      const preparedOptions = {...defaultOptions, ...options};
      setAlertParams({title, body, buttons, options: preparedOptions});
      setAlertVisible(true);
    },
    [],
  );

  const contextValue = {alertVisible, setAlertVisible, alert};

  const {title, body, buttons, options} = alertParams;

  const {onDismiss, cancelable, buttonsContainerStyle} = options;

  const handleModalPress = () => {
    if (cancelable) {
      onDismiss();
      setAlertVisible(false);
    }
  };

  const buttonsRender = buttons.map((button, index) => {
    return (
      <React.Fragment key={button.text}>
        {index !== 0 && <Spacer medium />}
        <Button
          transparent
          title={button.text}
          onPress={() => {
            button.onPress?.();
            setAlertVisible(false);
          }}
          style={{flex: 1}}
          colorError={button.style === 'destructive'}
        />
      </React.Fragment>
    );
  });

  const shouldShowTitle = typeof title === 'string' && title !== '';
  const shouldShowBody = typeof body === 'string' && body !== '';

  return (
    <AlertContext.Provider value={contextValue} {...otherProps}>
      {children}
      {alertVisible && (
        <Modal>
          <View style={S.containerStyle}>
            <TouchableWithoutFeedback onPress={handleModalPress}>
              <View
                justifyContentCenter
                alignItemsCenter
                style={S.containerStyle}>
                <View paddingLarge style={S.alertContainer}>
                  {shouldShowTitle && (
                    <View paddingVerticalMedium>
                      <Text weightBold>{title}</Text>
                    </View>
                  )}
                  {shouldShowBody && (
                    <View paddingVerticalMedium>
                      <Text>{body}</Text>
                    </View>
                  )}
                  <View
                    paddingVerticalMedium
                    style={[S.buttonsContainer, buttonsContainerStyle]}>
                    {buttonsRender.length === 0 ? (
                      <Button
                        transparent
                        title="OK"
                        onPress={() => {
                          setAlertVisible(false);
                        }}
                      />
                    ) : (
                      buttonsRender
                    )}
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      )}
    </AlertContext.Provider>
  );
};
