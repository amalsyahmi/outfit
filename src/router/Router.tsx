import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackParams, TopLevelStackParams} from './RouterTypes';
import {Header} from '../components/Header';
import HomeScreen from '../pages/HomeScreen';
import FeedScreen from '../pages/FeedScreen';
import MessagesScreen from '../pages/MessagesScreen';
import CartScreen from '../pages/CartScreen';
import ProfileScreen from '../pages/ProfileScren';

export const Router = () => {
  const TopLevelStack = createStackNavigator<TopLevelStackParams>();
  const MainStack = createBottomTabNavigator<MainStackParams>();
  const HomeStack = createStackNavigator();

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
          <TopLevelStack.Screen name="MainStack" options={{headerShown: false}}>
            {() => {
              return (
                <MainStack.Navigator
                  screenOptions={{
                    header(props: any) {
                      return <Header {...props} />;
                    },
                    tabBarHideOnKeyboard: true,
                  }}>
                  <MainStack.Screen
                    name="HomeScreen"
                    options={{
                      title: 'Home',
                      headerShown: false,
                      tabBarIcon(_props) {
                        return <></>;
                      },
                    }}>
                    {() => {
                      return (
                        <HomeStack.Navigator initialRouteName="HomeScreen">
                          <HomeStack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                            options={{headerShown: false}}
                          />
                        </HomeStack.Navigator>
                      );
                    }}
                  </MainStack.Screen>
                  <MainStack.Screen
                    name="FeedScreen"
                    options={{
                      title: 'Feed',
                      headerShown: false,
                      tabBarIcon(_props) {
                        return <></>;
                      },
                    }}>
                    {() => {
                      return (
                        <HomeStack.Navigator initialRouteName="FeedScreen">
                          <HomeStack.Screen
                            name="FeedScreen"
                            component={FeedScreen}
                            options={{headerShown: false}}
                          />
                        </HomeStack.Navigator>
                      );
                    }}
                  </MainStack.Screen>
                  <MainStack.Screen
                    name="MessagesScreen"
                    options={{
                      title: 'Messages',
                      headerShown: false,
                      tabBarIcon(_props) {
                        return <></>;
                      },
                    }}>
                    {() => {
                      return (
                        <HomeStack.Navigator initialRouteName="MessagesScreen">
                          <HomeStack.Screen
                            name="MessagesScreen"
                            component={MessagesScreen}
                            options={{headerShown: false}}
                          />
                        </HomeStack.Navigator>
                      );
                    }}
                  </MainStack.Screen>
                  <MainStack.Screen
                    name="CartScreen"
                    options={{
                      title: 'Cart',
                      headerShown: false,
                      tabBarIcon(_props) {
                        return <></>;
                      },
                    }}>
                    {() => {
                      return (
                        <HomeStack.Navigator initialRouteName="CartScreen">
                          <HomeStack.Screen
                            name="CartScreen"
                            component={CartScreen}
                            options={{headerShown: false}}
                          />
                        </HomeStack.Navigator>
                      );
                    }}
                  </MainStack.Screen>
                  <MainStack.Screen
                    name="ProfileScreen"
                    options={{
                      title: 'Profile',
                      headerShown: false,
                      tabBarIcon(_props) {
                        return <></>;
                      },
                    }}>
                    {() => {
                      return (
                        <HomeStack.Navigator initialRouteName="ProfileScreen">
                          <HomeStack.Screen
                            name="ProfileScreen"
                            component={ProfileScreen}
                            options={{headerShown: false}}
                          />
                        </HomeStack.Navigator>
                      );
                    }}
                  </MainStack.Screen>
                </MainStack.Navigator>
              );
            }}
          </TopLevelStack.Screen>
        </TopLevelStack.Navigator>
      }
    />
  );
};
