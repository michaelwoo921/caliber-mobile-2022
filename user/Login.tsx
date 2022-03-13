import { View, Text, TextInput, Button } from 'react-native';
import styles from '../globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerState } from '../store/store';
import { loginChange } from '../store/actions';
import { auth, app, signInWithEmailAndPassword } from './config';
import { UserInput } from './user';

function LoginComponent() {
  const newUser = useSelector(
    (state: ReducerState) => state.userReducer.userLogin
  );
  const dispatch = useDispatch();
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
      <Text> Caliber </Text>
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={(val) => {
            console.log(newUser);
            dispatch(loginChange({ ...newUser, email: val }));
          }}
          value={newUser.email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(val) =>
            dispatch(loginChange({ ...newUser, password: val }))
          }
          value={newUser.password}
        />
        <Button title="submit" onPress={() => loginUser(newUser)} />
      </View>
    </View>
  );
}

export default LoginComponent;
