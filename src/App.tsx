import React, {useEffect, useState} from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {SplashScreen} from './pages/splash';
import {Router} from './router/Router';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }, []);

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
