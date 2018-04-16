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
/*
  Called by onLoginPress() in LoginForm.
*/
export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => loginUserFail(dispatch, error.message));
};


/*
  Called by loginUser() when successfull.
*/
const loginUserSuccess = (dispatch, user) => {
  isUserInCollective(dispatch, { user });

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};


/*
  Checks whether user is in collective or not.
  If user is in collective, get other users inn collective and collective name,
  then go to Home.

  If not, go to CollectiveManager.
*/
const isUserInCollective = (dispatch, { user }) => {
  firebase
    .database()
    .ref('usersInCollective')
    .child(user.uid)
    .once('value', snapshot => {
       if (snapshot.val() !== null) {
         const collectiveId = snapshot.val();

         // Get all users of collective.
         getOtherUsersInCollective(dispatch, collectiveId, user.email);

         // Get the name of the collective.
         getCollectiveName(dispatch, collectiveId);

         // Redirect user to Home.
         Actions.home();
       } else {
         // Redirect user to CollectiveManager.
         Actions.collectiveManager();
       }
    });
};


/*
  Gets the other users related to the specified collective. Called by isUserInCollective().
*/
const getOtherUsersInCollective = (dispatch, collectiveId, userEmail) => {
  const otherUsers = [];
  firebase
  .database()
  .ref(`collectives/${collectiveId}/users`)
  .on('value', snapshot => {
    for (const key in snapshot.val()) {
      firebase
      .database()
      .ref(`collectives/${collectiveId}/users/${key}/email`)
      .on('value', snapshot1 => {
        otherUsers.push(snapshot1.val());
      });
    }
    otherUsers.splice(otherUsers.indexOf(userEmail), 1);
    dispatch({
      type: OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
      payload: otherUsers
    });
  });
};


/*
  Gets the collective name from firebase. Called by isUserInCollective().
*/
const getCollectiveName = (dispatch, collectiveId) => {
  firebase
    .database()
    .ref(`id_name/${collectiveId}`)
    .on('value', nameSnapshot => {
      const collectiveName = nameSnapshot.val();

      dispatch({
        type: NAME_OF_COLLECTIVE_RETRIEVED,
        payload: [collectiveName, collectiveId]
      });
    });
};


/*
  Called when user credentials do not meet the criterias.
*/
const loginUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: errorMessage
  });
};


/*
  CREATE AN ACCOUNT.
*/

/*
  Called by onPress() in SignupForm.
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


/*
  Called when user credentials do not meet the criterias.
*/
const signupUserFail = (dispatch, errorMessage) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: errorMessage
  });
};
