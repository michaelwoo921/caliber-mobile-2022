import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../globalStyles';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import LoginComponent from '../user/Login';
import Home from '../user/Home';
import Logout from '../user/Logout';

const Stack = createNativeStackNavigator();

export const loginHeaderOptions: NativeStackNavigationOptions = {
  headerTitle: () => (
    <Image style={styles.logoLogin} source={require('./rev-logo.png')} />
  ),
};
export const generalHeaderOptions = () => {
  const navigation: any = useNavigation();
  return {
    headerTitle: () => (
      <Image style={styles.logoLogin} source={require('./rev-logo.png')} />
    ),
    headerLeft: () => (
      <Icon.Button
        name="ios-menu"
        backgroundColor="#fff"
        color="#72A4C2"
        onPress={() => navigation.openDrawer()}
      />
    ),
  };
};

export function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginComponent}
        options={loginHeaderOptions}
      />
    </Stack.Navigator>
  );
}

export function LogoutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={loginHeaderOptions}
      />
    </Stack.Navigator>
  );
}

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={generalHeaderOptions}
      />
    </Stack.Navigator>
  );
}
