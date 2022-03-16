import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDUetHWOtMFacYBgqYEecAt97rWlsIkxGw',
  authDomain: 'caliber-12-2021.firebaseapp.com',
  databaseURL: 'https://caliber-12-2021-default-rtdb.firebaseio.com',
  projectId: 'caliber-12-2021',
  storageBucket: 'caliber-12-2021.appspot.com',
  messagingSenderId: '844365230658',
  appId: '1:844365230658:web:ee8b3e0cb11a68a9cff3db',
  measurementId: 'G-Y0NR39092W',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth, signInWithEmailAndPassword, sendPasswordResetEmail };
