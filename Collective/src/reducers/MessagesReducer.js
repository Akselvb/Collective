import firebase from 'firebase';
import {
  ADD_MESSAGE
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
      return { ...state, id: 1 };
    default:
      return state;
  }
};
