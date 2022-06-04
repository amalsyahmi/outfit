import {NavigatorScreenParams} from '@react-navigation/native';

export type TopLevelStackParams = {
  MainStack: NavigatorScreenParams<MainStackParams>;
};

export type MainStackParams = {
  HomeScreen: undefined;
  FeedScreen: undefined;
  MessagesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
};

// Type navigation globally
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends TopLevelStackParams {}
  }
}
