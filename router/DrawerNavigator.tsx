import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  HomeStack,
  LogoutStack,
  QCAuditStack,
  ReportStack,
  ManagementStack,
} from './MainStackNavigator';
import { useSelector } from 'react-redux';
import { ReducerState } from '../store/store';

const Drawer = createDrawerNavigator();

function DrawerNavigatorComponent() {
  const user = useSelector((state: ReducerState) => state.userReducer.user);
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="QC Audit"
        component={QCAuditStack}
        options={{ headerShown: false }}
        initialParams={{ screen: 'Batch Page' }}
      />
      <Drawer.Screen
        name="Reports"
        component={ReportStack}
        options={{ headerShown: false }}
        initialParams={{ screen: 'Reports ...' }}
      />
      {!user.role.ROLE_QC && (
        <Drawer.Screen
          name="Management"
          component={ManagementStack}
          options={{ headerShown: false }}
        />
      )}

      <Drawer.Screen
        name="Logout"
        component={LogoutStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;
