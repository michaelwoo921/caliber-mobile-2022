import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
import styles from '../globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ReducerState } from '../store/store';
import { loginChange } from '../store/actions';
import { auth, app, signInWithEmailAndPassword } from './config';
import { UserInput } from './user';

function LoginComponent() {
  const newUser = useSelector(
    (state: ReducerState) => state.userReducer.userLogin
  );
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const loginUser = async (newUser: UserInput) => {
    let { email, password } = newUser;
    if (email && password) {
      try {
        signInWithEmailAndPassword(auth, email, password).then((res) =>
          console.log(res)
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Missing email or password');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.caliber}> Caliber </Text>
      <View style={styles.login}>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Email"
            onChangeText={(val) => {
              console.log(newUser);
              dispatch(loginChange({ ...newUser, email: val }));
            }}
            value={newUser.email}
          />
        </View>

        <View>
          <TextInput
            placeholder="Password"
            onChangeText={(val) =>
              dispatch(loginChange({ ...newUser, password: val }))
            }
            secureTextEntry
            value={newUser.password}
          />
        </View>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => loginUser(newUser)}
          style={{
            backgroundColor: '#F26925',
            height: 45,
            width: 200,
            borderRadius: 40,
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              alignItems: 'center',
              padding: 8,
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Log in {'>'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={{
            backgroundColor: '#fff',
            height: 45,
            width: 200,
            borderRadius: 40,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              alignItems: 'center',
              color: '#72A4C2',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Forgot password?
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default LoginComponent;
