import { View, Text, TouchableHighlight } from 'react-native';
import { auth } from './config';
import { useDispatch } from 'react-redux';
import { loginChange } from '../store/actions';
import { UserInput } from './user';
import { useNavigation } from '@react-navigation/native';
import styles from '../globalStyles';

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
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          logout();
          dispatch(loginChange(new UserInput()));
          navigation.navigate('Login');
        }}
        style={styles.logoutBackground}
      >
        <Text style={styles.logoutText}> Log out</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Logout;
