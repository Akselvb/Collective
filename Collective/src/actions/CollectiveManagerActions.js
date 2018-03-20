import firebase from 'firebase';
import {
  CREATE_COLLECTIVE,
  JOIN_COLLECTIVE_FAIL
} from './types';


export const joinCollective = ({ user, collectiveId }) => dispatch => {
  const ref = firebase.database().ref('collectiveId');
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


const joinCollectiveSuccess = (disptach, { user, collectiveId }) => {
  // Push user to correct collective.
  firebase.database().ref(`collectiveId/${collectiveId}/users/`)
    .push(user.uid);

  // Push user to list of users in collective.
  firebase.database().ref(`usersInCollective/${user.uid}`)
    .push(user.uid);

  console.log('Jeee');
  /*
  disptach({
    type: JOIN_COLLECTIVE_FAIL,
    payload: collectiveId
  });
  */
};


const joinCollectiveFail = (disptach, collectiveId) => {
  disptach({
    type: JOIN_COLLECTIVE_FAIL,
    payload: collectiveId
  });
};

export const createCollective = ({ user }) => dispatch => {
  const collectiveId = '123-123';

  // Push user to correct collective.
  firebase.database().ref(`collectiveId/${collectiveId}/users/`)
    .push(user.uid);

  // Push user to list of users in collective.
  firebase.database().ref(`usersInCollective/${user.uid}`)
    .push(user.uid);

    dispatch({
      type: CREATE_COLLECTIVE,
      payload: [collectiveId, user]
    });
};
