import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
  OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
  NAME_OF_COLLECTIVE_RETRIEVED
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
  isUserInCollective(dispatch, { user });
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
const isUserInCollective = (dispatch, { user }) => {
  firebase
    .database()
    .ref('usersInCollective')
    .child(user.uid)
    .once('value', snapshot => {
       if (snapshot.val() !== null) {
         // Get all users of collective.
         firebase
            .database()
            .ref(`collectives/${snapshot.val()}`)
            .on('value', userSnapshot => {
              const userEmails = [];
              console.log(userSnapshot.val());
              for (const property in userSnapshot.val()) {
                if (userSnapshot.val().hasOwnProperty(property)) {
                  console.log(property);
                }
              }
              dispatch({
                type: OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
                payload: userEmails
              });
            });

         // Get the name of the collective.
         firebase
           .database()
           .ref(`id_name/${snapshot.val()}`)
           .on('value', nameSnapshot => {
             const collectiveName = nameSnapshot.val();

             dispatch({
               type: NAME_OF_COLLECTIVE_RETRIEVED,
               payload: [collectiveName, snapshot.val()]
             });

         dispatch({
           type: LOGIN_USER_SUCCESS,
           payload: user
         });
         Actions.home();
           });
       } else {
         Actions.collectiveManager();
       }
  });
};
