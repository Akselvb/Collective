import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  CREATE_COLLECTIVE,
  JOIN_COLLECTIVE_FAIL
} from './types';


/*
  Join collective. Invoked by onJoinCollectivePress() in JoinCollective.js.
*/
export const joinCollective = ({ user, collectiveId }) => dispatch => {
  const ref = firebase.database().ref('collectives');
  ref
    .child(collectiveId.toString())
    .once('value', snapshot => {
      // If collecticeId exists.
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
const joinCollectiveSuccess = (disptach, { user, collectiveId }) => {
  // Push user to correct collective.
  addUserToCollectives({ user }, collectiveId);

  // Push user to list of users in collective.
  addUserToUsersInCollective({ user }, collectiveId);

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
