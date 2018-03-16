import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CREATE_ACCOUNT_BUTTON_PRESSED,
  SIGNIN_EMAIL_CHANGED,
  SIGNIN_PASSWORD_CHANGED,
  SIGNIN_CONFIRM_PASSWORD_CHANGED,
  SIGNIN_USER,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS
} from './types';


/*
  LOGIN EMAIL ACCOUNT.
*/
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

export const loginUser = ({ loginEmail, loginPassword }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch, error.message));
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: errorMessage
   });
};


/*
  CREATE AN ACCOUNT.
*/
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
      const errorMessage = 'Passwords does not match';
      signinUserFail(dispatch, errorMessage);
    } else {
      firebase.auth().createUserWithEmailAndPassword(signinEmail, signinPassword)
        .then(() => signinUserSuccess(dispatch))
        .catch((error) => {
          signinUserFail(dispatch, error.message);
        });
    }
  };
};

const signinUserSuccess = (dispatch) => {
  dispatch({
    type: SIGNIN_USER_SUCCESS
  });
};


const signinUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: SIGNIN_USER_FAIL,
    payload: errorMessage
   });
};
