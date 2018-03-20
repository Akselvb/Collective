import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_FAIL
} from './types';

/*
  LOGIN EMAIL ACCOUNT.
*/
export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => loginUserFail(dispatch, error.message));
};

const loginUserSuccess = (dispatch, user) => {
  isUserInCollective({ user });
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
export const signupUser = ({ email, password }) => dispatch => {
  dispatch({ type: SIGNUP_USER });

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => {
      signupUserFail(dispatch, error.message);
    });
};

const signupUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: errorMessage
  });
};


/*
  LOGIN SEMANTICS.
*/
const isUserInCollective = ({ user }) => {
  const ref = firebase.database().ref('usersInCollective');
  ref.child(user.uid).once('value', snapshot => {
     if (snapshot.val() !== null) {
       Actions.home();
     } else {
       Actions.collectiveManager();
     }
  });
};
