import React from 'react';
import {StyleSheet} from 'react-native';

import {View} from '../components/View';
import PropTypes from 'prop-types';

import {constants as C} from '../style/constants';

const S = StyleSheet.create({
  spacingExtraSmall: {
    width: C.spacingExtraSmall,
    height: C.spacingExtraSmall,
  },
  spacingSmall: {width: C.spacingSmall, height: C.spacingSmall},
  spacingMedium: {width: C.spacingMedium, height: C.spacingMedium},
  spacingLarge: {width: C.spacingLarge, height: C.spacingLarge},
  spacingExtraLarge: {
    width: C.spacingExtraLarge,
    height: C.spacingExtraLarge,
  },
});

export interface SpacerProps {
  extraSmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  extraLarge?: boolean;
}

const Spacer = ({
  extraSmall,
  small,
  medium,
  large,
  extraLarge,
}: SpacerProps) => {
  let style = S.spacingMedium;
  if (extraSmall) {
    style = S.spacingExtraSmall;
  } else if (small) {
    style = S.spacingSmall;
  } else if (medium) {
    style = S.spacingMedium;
  } else if (large) {
    style = S.spacingLarge;
  } else if (extraLarge) {
    style = S.spacingExtraLarge;
  }

  return <View style={style} />;
};

Spacer.propTypes = {
  extraSmall: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  extraLarge: PropTypes.bool,
};

Spacer.defaultProps = {
  extraSmall: false,
  small: false,
  medium: false,
  large: false,
  extraLarge: false,
};

export {Spacer};
