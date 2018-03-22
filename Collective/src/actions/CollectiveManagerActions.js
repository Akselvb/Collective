import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  CREATE_COLLECTIVE,
  JOIN_COLLECTIVE_FAIL,
  OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
  NAME_OF_COLLECTIVE_RETRIEVED
} from './types';


/*
  Join collective. Invoked by onJoinCollectivePress() in JoinCollective.js.
*/
export const joinCollective = ({ user, collectiveId }) => dispatch => {
  firebase
    .database()
    .ref('collectives')
    .child(collectiveId.toString())
    .once('value', snapshot => {
      // If collectiveId exists.
     if (snapshot.val() !== null) {
       joinCollectiveSuccess(dispatch, { user, collectiveId });
     } else {
      joinCollectiveFail(dispatch, collectiveId.toString());
     }
  });
};


/*
  Invoked when user types collectiveId that exist.
*/
const joinCollectiveSuccess = (dispatch, { user, collectiveId }) => {
  // Push user to correct collective.
  addUserToCollectives({ user }, collectiveId);

  // Push user to list of users in collective.
  addUserToUsersInCollective({ user }, collectiveId);

  // Retrieve collective information.
  retrieveCollectiveInformation(dispatch, { collectiveId });

  Actions.main();
};


/*
  Invoked when user types collectiveId that does not exist.
*/
const joinCollectiveFail = (disptach, collectiveId) => {
  disptach({
    type: JOIN_COLLECTIVE_FAIL,
    payload: collectiveId
  });
};


/*
  Create new collective. Invoked by onCreateCollectivePress() in CreateCollective.js.
*/
export const createCollective = ({ user }, collectiveName) => dispatch => {
  // Generate collective id.
  const collectiveId = getCollectiveId();

  // Push user to correct collective.
  addUserToCollectives({ user }, collectiveId);

  // Push user to list of users in collective.
  addUserToUsersInCollective({ user }, collectiveId);

  // Map collectiveId and collectiveName.
  addCollectiveIdAndCollectiveName(collectiveId, collectiveName);

  dispatch({
    type: CREATE_COLLECTIVE,
    payload: [collectiveId, user]
  });

  Actions.main();
};


/*
  Add user to list of users in collective.
*/
const addUserToUsersInCollective = ({ user }, collectiveId) => {
  firebase
    .database()
    .ref(`usersInCollective/${user.uid}`)
    .set(collectiveId);
};


/*
  Add user to correct collective.
*/
const addUserToCollectives = ({ user }, collectiveId) => {
  firebase
    .database()
    .ref(`collectives/${collectiveId}`)
    .push(user.uid);
};


/*
  Map between collectiveId and collectiveName.
*/
const addCollectiveIdAndCollectiveName = (collectiveId, collectiveName) => {
  firebase
    .database()
    .ref(`id_name/${collectiveId}`)
    .set(collectiveName.collectiveName);
};


/*
  Retrieve collective information.
*/
const retrieveCollectiveInformation = (dispatch, { collectiveId }) => {
  // Get all users of collective.
  getAllUsersInCollective(dispatch, { collectiveId });

  // Get the name of the collective.
  getCollectiveName(dispatch, { collectiveId });
};


/*
  Get other users in the same collective.
*/
const getAllUsersInCollective = (dispatch, { collectiveId }) => {
  firebase
     .database()
     .ref(`collectives/${collectiveId}`)
     .on('value', userSnapshot => {
       dispatch({
         type: OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
         payload: userSnapshot.val()
       });
     });
};


/*
  Get name of the collective.
*/
const getCollectiveName = (dispatch, { collectiveId }) => {
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
  Generate a collective id.
  TODO: Make sure the ID is unique.
*/
const getCollectiveId = () => {
  let id = '';
  const numbers = '0123456789';

  for (let i = 0; i < 9; i++) {
    if (i === 4) {
      id += '-';
    } else {
    id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  }
  return id;
};
