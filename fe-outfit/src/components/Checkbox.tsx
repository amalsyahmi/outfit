import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity} from './TouchableOpacity';
import {View, ViewProps} from './View';
import {constants as C} from '../style/constants';

interface CheckBoxProps {
  size?: number;
  checked: boolean;
  children?: ReactNode;
  style?: ViewProps['style'];
  onChange: (isChecked: boolean) => any;
}

const Styles = StyleSheet.create({
  children: {
    paddingHorizontal: 10,
  },
});

const CheckBox = ({
  checked,
  size = 24,
  style,
  children,
  onChange,
}: CheckBoxProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onChange(!checked);
      }}>
      <View flexDirectionRow style={style}>
        <Icon
          size={size}
          name={checked ? 'checkbox' : 'square-outline'}
          color={C.colorPrimary}
        />
        <View style={Styles.children}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

export {CheckBox};
