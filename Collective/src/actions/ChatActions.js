import firebase from 'firebase';
import {
  START_FETCHING_MESSAGES,
  ADD_MESSAGE,
  RECEIVED_MESSAGES,
  SEND_MESSAGE
} from './types';

/*
  Called once, but always looking for new messages.
*/
export const fetchMessages = (collectiveId) => dispatch => {
  dispatch({ type: START_FETCHING_MESSAGES });

  firebase
    .database()
    .ref(`collectives/${collectiveId}/chat`)
    .on('value', snapshot => {
      // Gets around Redux panicking about actions in reducers
      setTimeout(() => {
        const messages = snapshot.val() || [];
        dispatch(receiveMessages(messages));
      }, 0);
    });
};

/*
  Loop through all messages and send them to reducer.
*/
export const receiveMessages = (messages) => dispatch => {
  Object.values(messages).forEach(msg => dispatch({
    type: ADD_MESSAGE,
    payload: msg
  }));

  dispatch({
    type: RECEIVED_MESSAGES,
    payload: messages
  });
};

/*
  Push new message to firebase.
*/
export const sendMessage = ({ collectiveId, user }, message) => dispatch => {
  dispatch({ type: SEND_MESSAGE });

  const msg = {
    text: message,
    time: Date.now(),
    author: user.email
  };

  firebase
    .database()
    .ref(`collectives/${collectiveId}/chat`)
    .push(msg);
};
