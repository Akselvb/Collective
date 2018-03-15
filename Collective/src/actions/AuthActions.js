import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CREATE_ACCOUNT_BUTTON_PRESSED
} from './types';


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};


export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};


export const createAccountButtonPressed = () => {
  return (dispatch) => {
    dispatch({ type: CREATE_ACCOUNT_BUTTON_PRESSED });
    Actions.signinEmailForm();
  };
};
