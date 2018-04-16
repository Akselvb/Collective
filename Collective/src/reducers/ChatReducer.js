import {
  NAME_OF_COLLECTIVE_RETRIEVED,
  START_FETCHING_MESSAGES,
  RECEIVED_MESSAGES,
  UPDATE_MESSAGES_HEIGHT,
  LOGIN_USER_SUCCESS,
  SEND_MESSAGE,
  ADD_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
  collectiveId: null,
  user: null,
  messages: [],
  isFetching: false,
  height: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_OF_COLLECTIVE_RETRIEVED:
      return { ...state, collectiveId: action.payload[1] };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case START_FETCHING_MESSAGES:
      return { ...state, isFetching: true };
    case RECEIVED_MESSAGES:
      return { ...state, isFetching: false, messages: action.payload };
    case UPDATE_MESSAGES_HEIGHT:
      return { ...state, height: action.payload };
    case SEND_MESSAGE:
      return { ...state, isFetching: false };
    case ADD_MESSAGE:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
