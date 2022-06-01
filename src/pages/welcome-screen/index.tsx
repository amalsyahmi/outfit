import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{paddingVertical: 100, paddingHorizontal: 30}}>
        <Text style={{alignSelf: 'center', fontSize: 25, color: '#777'}}>
          by Amal Syahmi
        </Text>
      </View>
    </SafeAreaView>
  );
};
