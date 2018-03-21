import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: true, error: '', user: action.payload[0] };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    case SIGNUP_USER:
      return { ...state, loading: true };
    case SIGNUP_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
