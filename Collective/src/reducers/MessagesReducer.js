import firebase from 'firebase';
import {
  ADD_MESSAGE,
  SEND_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
  id: null,
  text: null,
  time: null,
  author: null,
  collectiveId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        id: action.payload[0],
        text: action.payload[1],
        time: action.payload[2],
        author: action.payload[3]
      };
    case SEND_MESSAGE:
      let msg = {
        text: action.payload[1],
        time: Date.now(),
        author: action.payload[3]
      };

      const newMsgRef = firebase
                          .database()
                          .ref(`collectives/${collectiveId}/chatroom/messages`)
                          .push();
      msg.id = newMsgRef.key;
      newMsgRef.set(msg);

      return msg;

    default:
      return state;
  }
};
