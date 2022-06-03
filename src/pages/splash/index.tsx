import * as React from 'react';
import {View} from 'react-native';
import {Text} from '../../components/Text';

export const SplashScreen = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#DB3022'}}>
      <Text sizeExtraLarge weightBold colorLight marginAuto>
        Outfit
      </Text>
    </View>
  );
};
