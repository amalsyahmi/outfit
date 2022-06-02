export type TopLevelStackParams = {
  WelcomeScreen: undefined;
};

// Type navigation globally
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends TopLevelStackParams {}
  }
}
