import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../globalStyles';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import LoginComponent from '../user/Login';
import ForgotPassword from '../user/ForgotPassword';
import Home from '../user/Home';
import Logout from '../user/Logout';
import ManageCategories from '../categories/ManageCategories';
import BatchStackNavigator from './BatchStackNavigator';
import BatchPageComponent from '../batchPage/BatchPageComponent';
import ReportTable from '../reports/ReportTable';
import categoryService from '../categories/category.service';
import { getActive, getStale, getRender } from '../store/actions';
import { ReducerState } from '../store/store';

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
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
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

export function QCAuditStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QC Batches"
        component={BatchStackNavigator}
        options={generalHeaderOptions}
        initialParams={{ screen: 'Batch Page' }}
      />
      <Stack.Screen
        name="Batch Page"
        component={BatchPageComponent}
        options={generalHeaderOptions}
      />
    </Stack.Navigator>
  );
}

export function ManagementStack() {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: ReducerState) => state.userReducer.user
  );
  const token = currentUser.token;
  const [rend, setRend] = useState(false);
  async function getCategoryFunc() {
    const activeCat = await categoryService.getCategories(token, true);
    const staleCat = await categoryService.getCategories(token, false);
    dispatch(getActive(activeCat));
    dispatch(getStale(staleCat));
  }
  useEffect(() => {
    setRend(true);
    getCategoryFunc();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Management"
        component={ManageCategories}
        options={generalHeaderOptions}
      />
    </Stack.Navigator>
  );
}

export function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Report Batches"
        component={BatchStackNavigator}
        options={generalHeaderOptions}
        initialParams={{ screen: 'Reports' }}
      />
      <Stack.Screen
        name="Reports"
        component={ReportTable}
        options={generalHeaderOptions}
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
        options={generalHeaderOptions}
      />
    </Stack.Navigator>
  );
}
