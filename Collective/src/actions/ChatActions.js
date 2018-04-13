import firebase from 'firebase';
import {
  START_FETCHING_MESSAGES,
  ADD_MESSAGE,
  RECEIVED_MESSAGES
} from './types';


export const fetchMessages = () => dispatch => {
  dispatch({ type: START_FETCHING_MESSAGES });

  firebase
    .database()
    .ref(`collectives/${collectiveId}/chatroom/messages`)
    .on('value', snapshot => {
      // Gets around Redux panicking about actions in reducers
      setTimeout(() => {
        const messages = snapshot.val() || [];

        dispatch(receiveMessages(messages));
      }, 0);
    });
};


export const receiveMessages = (messages) => dispatch => {
  Object.values(messages).forEach(msg => dispatch({
    type: ADD_MESSAGE,
    payload: msg
  }));

  dispatch({ type: RECEIVED_MESSAGES });
};
