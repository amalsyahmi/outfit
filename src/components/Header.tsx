import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
export const Header = () => {
  return (
    <SafeAreaView>
      <View style={{paddingVertical: 20}}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 25,
            color: '#555',
            fontWeight: 'bold',
          }}>
          React Native Template
        </Text>
      </View>
    </SafeAreaView>
  );
};
