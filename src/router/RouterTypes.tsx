import {NavigatorScreenParams} from '@react-navigation/native';

export type TopLevelStackParams = {
  MainStack: NavigatorScreenParams<MainStackParams>;
};

export type MainStackParams = {
  HomeScreen: NavigatorScreenParams<HomeStackParams>;
  FeedScreen: undefined;
  MessagesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
};

export type HomeStackParams = {
  HomeMainScreen: undefined;
  HomeSearchScreen: {
    orderBy: string;
    first: number;
    skip: number;
    searchText: string;
  };
};

// Type navigation globally
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends TopLevelStackParams {}
  }
}
