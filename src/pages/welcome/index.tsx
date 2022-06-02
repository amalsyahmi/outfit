import * as React from 'react';
import {Text, View} from 'react-native';

export const WelcomeScreen = () => {
  return (
    <View style={{paddingVertical: 100, paddingHorizontal: 30}}>
      <Text style={{alignSelf: 'center', fontSize: 25, color: '#777'}}>
        by Amal Syahmi
      </Text>
    </View>
  );
};
