import { View, Text, TouchableHighlight } from 'react-native';
import { auth } from './config';
import { useDispatch } from 'react-redux';
import { loginChange } from '../store/actions';
import { UserInput } from './user';
import { useNavigation } from '@react-navigation/native';

function Logout() {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  function logout() {
    auth
      .signOut()
      .then(() => {
        console.log('logged out, user info should be removed from the store');
      })
      .catch((err) => console.log(err));
  }
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          logout();
          dispatch(loginChange(new UserInput()));
          navigation.navigate('Login', { Screen: 'Login' });
        }}
      >
        <Text> Log out</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Logout;
