import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TopLevelStackParams} from './RouterTypes';
import {Header} from '../components/Header';
import {WelcomeScreen} from '../pages/welcome-screen';

export const Router = () => {
  const TopLevelStack = createStackNavigator<TopLevelStackParams>();
  return (
    <NavigationContainer
      children={
        <TopLevelStack.Navigator
          screenOptions={{
            headerMode: 'screen',
            header(props: any) {
              return <Header {...props} />;
            },
          }}>
          <TopLevelStack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{headerShown: true}}
          />
        </TopLevelStack.Navigator>
      }
    />
  );
};
