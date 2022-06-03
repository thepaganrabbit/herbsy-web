import React from 'react';
import Store from '../store/Store';
import CookieChecker from '../store/utils/CookieChecker';

const useUsers = () => {
  const { dispatch } = Store;

  // Hook State
  const [user, setUser] = React.useState(Store.getState().userMod.user);
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    Store.getState().userMod.isLoggedIn,
  );

  // logIn attempt
  const [attempt, setAttempt] = React.useState(0);
  
  React.useEffect(() => {
    // initialize user Cookie
    CookieChecker.setCookie('user', {token:null})
    // if not loggin try cookie
    if (!isLoggedIn && attempt === 1) {
      console.log('collard');
      refreshUserCookie();
      setAttempt(attempt + 1);
    }
  }, [isLoggedIn]);

  // when going to a new page if user not in state retry it
  const retryCookie = () => {
    setAttempt(0);
  };

  // Gets users login status
  const checkLoggedInStatus = () => {
    return Store.getState().userMod.isLoggedIn;
  };

  // refresh the users based on cookie
  const refreshUserCookie = () => {
    dispatch({ type: 'userMod/retrieveFromCookie', payload: 'user' });
  };

  // Logs in user
  const logUserIn = (user) => {
    dispatch({ type: 'userMod/login', payload: user });
  };

  // signs user up
  const signUp = (user) => {
    dispatch({ type: 'userMod/signup', payload: user });
  };

  return {
    checkLoggedInStatus,
    logUserIn,
    signUp,
    refreshUserCookie,
    retryCookie,
    isLoggedIn,
    user,
  };
};

export default useUsers;
