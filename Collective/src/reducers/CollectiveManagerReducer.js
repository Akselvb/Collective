import {
  CREATE_COLLECTIVE,
  JOIN_COLLECTIVE,
  JOIN_COLLECTIVE_SUCCESS,
  JOIN_COLLECTIVE_FAIL,
  LOGIN_USER_SUCCESS,
  NAME_OF_COLLECTIVE_RETRIEVED,
  OTHER_USERS_IN_COLLECTIVE_RETRIEVED
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  collectiveId: null,
  collectiveName: null,
  error: '',
  loading: false,
  otherUsers: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_OF_COLLECTIVE_RETRIEVED:
      return { ...state, collectiveName: action.payload[0], collectiveId: action.payload[1] };
    case OTHER_USERS_IN_COLLECTIVE_RETRIEVED:
      return { ...state, otherUsers: action.payload.toString() };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };

    case CREATE_COLLECTIVE:
      return { ...state, loading: true, error: '' };
    case JOIN_COLLECTIVE:
      return { ...state, loading: true, error: '' };
    case JOIN_COLLECTIVE_SUCCESS:
      return { ...state, loading: false, error: '', user: action.payload };
    case JOIN_COLLECTIVE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
