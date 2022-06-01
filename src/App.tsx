import React from 'react';
import {Text} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const TabbedApp = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Text style={{}}>Outfit</Text>
    </SafeAreaProvider>
  );
};

export default TabbedApp;
