import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  CREATE_ACCOUNT_BUTTON_PRESSED,
  SIGNIN_EMAIL_CHANGED,
  SIGNIN_PASSWORD_CHANGED,
  SIGNIN_CONFIRM_PASSWORD_CHANGED,
  SIGNIN_USER
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


export const signinConfirmPasswordChanged = (text) => {
  return {
    type: SIGNIN_CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};


export const signinUser = ({ signinEmail, signinPassword, signinConfirmPassword }) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_USER });

    if (signinPassword !== signinConfirmPassword) {
      console.log('Passwords does not match');
    } else {
      firebase.auth().createUserWithEmailAndPassword(signinEmail, signinPassword)
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/weak-password') {
            console.log('The password is too weak.');
          } else {
            console.log(errorMessage);
          }
          console.log(error);
        });
    }
  };
};
