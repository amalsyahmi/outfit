import Icon from 'react-native-vector-icons/Ionicons';

interface TabBarIcon {
  focused: boolean;
  color: string;
  focusedIconName: string;
  unfocusedIconName: string;
}

const BottomTabBarIcon = ({
  focused,
  color,
  focusedIconName,
  unfocusedIconName,
}: TabBarIcon) => {
  const iconColor = color;
  return (
    <Icon
      name={focused ? focusedIconName : unfocusedIconName}
      size={24}
      color={iconColor}
    />
  );
};

export default BottomTabBarIcon;
