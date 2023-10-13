import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../features/auth/authSlice';

const AuthWrapper = ({ children }) => {
  const { loginWithRedirect, logout: auth0Logout, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(logIn(user));
    } else {
      dispatch(logOut());
    }
  }, [user, dispatch]);

  return (
    <div>
      {children({
        loginWithRedirect, 
        logout: auth0Logout,
        user, 
      })}
    </div>
  );
};

export default AuthWrapper;
