import {
  CREATE_COLLECTIVE,
  JOIN_COLLECTIVE,
  JOIN_COLLECTIVE_FAIL,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  collectiveId: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case CREATE_COLLECTIVE:
      return { ...state, loading: true, error: '' };
    case JOIN_COLLECTIVE:
      return { ...state, loading: false, error: '', user: action.payload };
    case JOIN_COLLECTIVE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
