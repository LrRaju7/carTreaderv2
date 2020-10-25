import axios from 'axios';
import {
  LOGIN_SUCCESS,
  USER_LOADED,
  REGISTER_SUCCESS,
  USER_LOADING_ERROR,
  CLEAR_USER,
  LOGOUT
} from './types';
import { setAuthToken } from '../utils/setAuthToken';
import { addNotification } from './notification';

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/auth', { email, password }, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());
    dispatch(addNotification('Logged in Successfully', 'success'));
  } catch (err) {
    console.log(`Error: ${err.response.data.msg}`);
    dispatch(addNotification(err.response.data.msg, 'error'));
  }
};

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_LOADING_ERROR });
    console.log(`Error: ${err.response.data.message}`);
  }
};



export const register = (
  name,
  email,
  password,
  passwordConfirm,
  avatar,
  location,
  phone,
  role,
  nid,
  trade_license,
) => async dispatch => {
  console.log("----------------------------------------------->USER ROLE<-------------------------------------------")
      console.log(role)
      console.log("----------------------------------------------->USER PHONE<-------------------------------------------")
      console.log(phone)
      console.log("----------------------------------------------->USER LOCATION<-------------------------------------------")
      console.log(location)
      // console.log("----------------------------------------------->USER Documents<-------------------------------------------")
      // console.log(nid)
      // console.log(trade_license)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const documents = {
    nid: nid,
    trade_license: trade_license,
  };
  console.log("----------------------------------------------->USER Documents<-------------------------------------------")
      console.log(documents.nid)
      console.log(documents.trade_license)
  if (password !== passwordConfirm) {
    return dispatch(addNotification("Passwords don't match", 'error'));
  }
  try {
    const res = await axios.post(
      '/api/users',
      {
        name,
        email,
        password,
        avatar,
        location,
        phone,
        role,
        documents
      },
      config
    );
    console.log("----------------------------------------------->ALL DATA<-------------------------------------------")
      console.log(res.data)
      console.log("----------------------------------------------->USER ROLE<-------------------------------------------")
      console.log(res.data.role)
      console.log("----------------------------------------------->USER PHONE<-------------------------------------------")
      console.log(res.data.phone)
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    dispatch(addNotification(err.response.data.message, 'error'));
  }
};

export const logout = () => dispatch => {
  dispatch({ type: CLEAR_USER });
  dispatch({ type: LOGOUT });
  dispatch(addNotification('Logged out Successfully', 'success'));
};

export const updatePassword = (
  currentPassword,
  newPassword,
  newPasswordConfirm
) => async dispatch => {
  try {
    if (newPassword !== newPasswordConfirm) {
      return dispatch(addNotification("New passwords don't match", 'error'));
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    await axios.patch(
      '/api/auth/update-password',
      { currentPassword, newPassword },
      config
    );
    dispatch(addNotification('Password Successfully Updated', 'success'));
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    dispatch(addNotification(err.response.data.message, 'error'));
  }
};
