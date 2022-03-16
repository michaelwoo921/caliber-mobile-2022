import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caliber: {
    color: '#474C55',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  login: {
    backgroundColor: '#fff',
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    alignItems: 'center',
    padding: 8,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 30,
    marginLeft: 60,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoLogin: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBackground: {
    backgroundColor: '#F26925',
    height: 40,
    width: 133,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 40,
  },
  loginInput: {
    marginBottom: 40,
    borderBottomColor: '#fff',
  },
  input: {
    borderColor: '#474C55',
    color: '#474C55',
    backgroundColor: '#B9B9BA',
    borderRadius: 20,
    height: 50,
    width: 250,
    padding: 15,
    borderWidth: 2,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
