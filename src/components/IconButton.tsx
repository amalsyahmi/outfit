import React, {forwardRef} from 'react';

import {Button} from '../components/Button';
import {ButtonProps} from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

export interface IconButtonProps extends ButtonProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
}

const HIT_SLOP: ButtonProps['hitSlop'] = {
  top: 4,
  right: 4,
  bottom: 4,
  left: 4,
};

export const IconButton = forwardRef<Button, IconButtonProps>(
  ({iconName, iconSize, iconColor, ...props}, ref: any) => {
    return (
      <Button
        ref={ref}
        hitSlop={HIT_SLOP}
        blockUi={false}
        transparent
        {...props}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </Button>
    );
  },
);
