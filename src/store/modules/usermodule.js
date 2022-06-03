import UserService from '../services/User.service';
import { toast } from 'react-toastify';

import CookieChecker from '../utils/CookieChecker';

export const userMod = {
  state: {
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    setUser(state, payload) {
      state.user = payload;
      return {
        ...state,
      };
    },
    loggedInStatus(state, payload) {
      state.isLoggedIn = payload;
      return {
        ...state,
      };
    },
  },
  effects: (dispatch) => ({
    signUp(payload) {
      const user = UserService.signup(payload);
      if (user.error) toast(user.message, { type: 'error' });
      const cookie = new CookieChecker();
      cookie.setCookie('user', JSON.stringify(user.payload));
      cookie.getCookieStatus('user');
      if (!cookie._exists) toast('cookie not set.', { type: 'error' });
      dispatch.userMod.setUser(user.payload);
      toast(user.message, { type: 'success' });
      dispatch.userMod.loggedInStatus(!user.error ? true : false);
    },
    retrieveFromCookie(cookieKey) {
      const cookie = new CookieChecker();
      cookie.loadCookie(cookieKey);
      cookie.getCookieStatus(cookieKey);
      if (!cookie._exists) toast('Session has Expired', { type: 'error' });
      else {
        dispatch.userMod.setUser(cookie._cookie);
        dispatch.userMod.loggedInStatus(cookie ? true : false);
      }
    },
  }),
};
