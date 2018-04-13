import {
  START_FETCHING_MESSAGES,
  RECEIVED_MESSAGES,
  UPDATE_MESSAGES_HEIGHT
} from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  height: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_MESSAGES:
      return { ...state, isFetching: true };
    case RECEIVED_MESSAGES:
      return { ...state, isFetching: false };
    case UPDATE_MESSAGES_HEIGHT:
      return { ...state, height: action.payload };
    default:
      return state;
  }
};
