import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, LogoutStack } from './MainStackNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigatorComponent() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Logout"
        component={LogoutStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;
