import {
  NAME_OF_COLLECTIVE_RETRIEVED,
  START_FETCHING_MESSAGES,
  RECEIVED_MESSAGES,
  UPDATE_MESSAGES_HEIGHT
} from '../actions/types';

const INITIAL_STATE = {
  collectiveId: null,
  isFetching: false,
  height: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_OF_COLLECTIVE_RETRIEVED:
      return { ...state, collectiveId: action.payload[1] };
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
