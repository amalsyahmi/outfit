import React, {useEffect, useState} from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {SplashScreen} from './pages/splash';
import {Router} from './router/Router';
import './App.css';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api-ap-northeast-1.graphcms.com/v2/cl42ag4ul3uws01xvf64ydjb9/master',
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Router />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
