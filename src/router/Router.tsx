import React from 'react';
import {Platform} from 'react-native';
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
import BottomTabBarIcon from '../components/BottomTabBarIcon';
import {constants as C} from '../style/constants';

export const Router = () => {
  const TopLevelStack = createStackNavigator<TopLevelStackParams>();
  const MainStackMobile = createBottomTabNavigator<MainStackParams>();
  const MainStackWeb = createStackNavigator<MainStackParams>();
  const HomeStack = createStackNavigator();
  const FeedStack = createStackNavigator();
  const MessagesStack = createStackNavigator();
  const CartStack = createStackNavigator();
  const ProfileStack = createStackNavigator();

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
              //TODO: If !== 'web' show mobile UI
              if (Platform.OS === 'web')
                return (
                  <MainStackMobile.Navigator
                    screenOptions={{
                      header(props: any) {
                        return <Header {...props} />;
                      },
                      tabBarActiveTintColor: C.colorPrimary,
                      tabBarInactiveTintColor: C.colorGray,
                      tabBarHideOnKeyboard: true,
                    }}>
                    <MainStackMobile.Screen
                      name="HomeScreen"
                      options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon(props) {
                          return (
                            <BottomTabBarIcon
                              focusedIconName="home"
                              unfocusedIconName="home-outline"
                              {...props}
                            />
                          );
                        },
                      }}>
                      {() => {
                        return (
                          <HomeStack.Navigator initialRouteName="HomeScreen">
                            <HomeStack.Screen
                              name="HomeMainScreen"
                              component={HomeScreen}
                              options={{headerShown: false}}
                            />
                          </HomeStack.Navigator>
                        );
                      }}
                    </MainStackMobile.Screen>
                    <MainStackMobile.Screen
                      name="FeedScreen"
                      options={{
                        title: 'Feed',
                        headerShown: false,
                        tabBarIcon(props) {
                          return (
                            <BottomTabBarIcon
                              focusedIconName="layers"
                              unfocusedIconName="layers-outline"
                              {...props}
                            />
                          );
                        },
                      }}>
                      {() => {
                        return (
                          <FeedStack.Navigator initialRouteName="FeedScreen">
                            <FeedStack.Screen
                              name="FeedMainScreen"
                              component={FeedScreen}
                              options={{headerShown: false}}
                            />
                          </FeedStack.Navigator>
                        );
                      }}
                    </MainStackMobile.Screen>
                    <MainStackMobile.Screen
                      name="MessagesScreen"
                      options={{
                        title: 'Messages',
                        headerShown: false,
                        tabBarIcon(props) {
                          return (
                            <BottomTabBarIcon
                              focusedIconName="chatbubbles"
                              unfocusedIconName="chatbubbles-outline"
                              {...props}
                            />
                          );
                        },
                      }}>
                      {() => {
                        return (
                          <MessagesStack.Navigator initialRouteName="MessagesScreen">
                            <MessagesStack.Screen
                              name="MessagesMainScreen"
                              component={MessagesScreen}
                              options={{headerShown: false}}
                            />
                          </MessagesStack.Navigator>
                        );
                      }}
                    </MainStackMobile.Screen>
                    <MainStackMobile.Screen
                      name="CartScreen"
                      options={{
                        title: 'Cart',
                        headerShown: false,
                        tabBarIcon(props) {
                          return (
                            <BottomTabBarIcon
                              focusedIconName="cart"
                              unfocusedIconName="cart-outline"
                              {...props}
                            />
                          );
                        },
                      }}>
                      {() => {
                        return (
                          <CartStack.Navigator initialRouteName="CartScreen">
                            <CartStack.Screen
                              name="CartMainScreen"
                              component={CartScreen}
                              options={{headerShown: false}}
                            />
                          </CartStack.Navigator>
                        );
                      }}
                    </MainStackMobile.Screen>
                    <MainStackMobile.Screen
                      name="ProfileScreen"
                      options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon(props) {
                          return (
                            <BottomTabBarIcon
                              focusedIconName="person-circle"
                              unfocusedIconName="person-circle-outline"
                              {...props}
                            />
                          );
                        },
                      }}>
                      {() => {
                        return (
                          <ProfileStack.Navigator initialRouteName="ProfileScreen">
                            <ProfileStack.Screen
                              name="ProfileMainScreen"
                              component={ProfileScreen}
                              options={{headerShown: false}}
                            />
                          </ProfileStack.Navigator>
                        );
                      }}
                    </MainStackMobile.Screen>
                  </MainStackMobile.Navigator>
                );
              else
                return (
                  <MainStackWeb.Navigator initialRouteName="HomeScreen">
                    <HomeStack.Screen
                      name="HomeScreen"
                      component={HomeScreen}
                      options={{headerShown: false}}
                    />
                  </MainStackWeb.Navigator>
                );
            }}
          </TopLevelStack.Screen>
        </TopLevelStack.Navigator>
      }
    />
  );
};
