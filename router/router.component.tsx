import React, { useState, useEffect } from 'react';
import DrawerNavigator from './DrawerNavigator';
import { useDispatch } from 'react-redux';
import { LoginStackNavigator } from './MainStackNavigator';
import { auth } from '../user/config';
import { getUser } from '../store/actions';

function RouterComponent() {
  const [loggedIn, setLoggedIn] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onIdTokenChanged(function (user) {
      if (user) {
        setLoggedIn(true);
        user
          .getIdTokenResult()
          .then((result) => {
            const { claims, token } = result;

            const { ROLE_QC, ROLE_VP, ROLE_TRAINER }: any = claims;
            dispatch(
              getUser({
                email: user.email as string,
                token,
                role: { ROLE_QC, ROLE_VP, ROLE_TRAINER },
              })
            );
          })
          .catch((err: any) => console.log(err));
      } else {
        setLoggedIn(false);
        console.log('logged out');
      }
    });
  }, []);

  return <> {loggedIn ? <DrawerNavigator /> : <LoginStackNavigator />}</>;
}

export default RouterComponent;
