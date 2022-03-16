import { View, Text, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from '../globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ReducerState } from '../store/store';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './config';
import { getUser, loginChange } from '../store/actions';
import { UserInfo } from './user';

function ForgotPassword() {
  const newUser = useSelector(
    (state: ReducerState) => state.userReducer.userLogin
  );
  const dispatch = useDispatch();
  const nav: any = useNavigation();
  function submitHandler() {
    try {
      sendPasswordResetEmail(auth, newUser.email);
    } catch (err) {
      alert('Email Not sent!');
    }
    dispatch(getUser(new UserInfo()));
    nav.navigate('Login');
  }
  return (
    <View style={[styles.login, styles.container]}>
      <Text style={styles.caliber}> Reset Password</Text>
      <View>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          onChangeText={(val) =>
            dispatch(loginChange({ ...newUser, email: val }))
          }
          value={newUser.email}
        />
      </View>
      <View>
        <TouchableHighlight
          onPress={submitHandler}
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
            SEND EMAIL
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default ForgotPassword;
