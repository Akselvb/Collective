import { Actions } from 'react-native-router-flux';
import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  CREATE_ACCOUNT_BUTTON_PRESSED,
  SIGNIN_EMAIL_CHANGED,
  SIGNIN_PASSWORD_CHANGED
} from './types';


export const loginEmailChanged = (text) => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text
  };
};


export const loginPasswordChanged = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
  };
};


export const createAccountButtonPressed = () => {
  return (dispatch) => {
    dispatch({ type: CREATE_ACCOUNT_BUTTON_PRESSED });
    Actions.signinEmailForm();
  };
};


export const signinEmailChanged = (text) => {
  return {
    type: SIGNIN_EMAIL_CHANGED,
    payload: text
  };
};


export const signinPasswordChanged = (text) => {
  return {
    type: SIGNIN_PASSWORD_CHANGED,
    payload: text
  };
};
