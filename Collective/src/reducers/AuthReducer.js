import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  CREATE_ACCOUNT_BUTTON_PRESSED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,

  SIGNIN_EMAIL_CHANGED,
  SIGNIN_PASSWORD_CHANGED,
  SIGNIN_CONFIRM_PASSWORD_CHANGED,
  SIGNIN_USER,
  SIGNIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loginEmail: '',
  loginPassword: '',
  user: null,

  signinEmail: '',
  signinPassword: '',
  signinConfirmPassword: '',

  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, loginEmail: action.payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, loginPassword: action.payload };
    case CREATE_ACCOUNT_BUTTON_PRESSED:
      return { ...state, ...INITIAL_STATE };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };

    case SIGNIN_EMAIL_CHANGED:
      return { ...state, signinEmail: action.payload };
    case SIGNIN_PASSWORD_CHANGED:
      return { ...state, signinPassword: action.payload };
    case SIGNIN_CONFIRM_PASSWORD_CHANGED:
      return { ...state, signinConfirmPassword: action.payload };
    case SIGNIN_USER:
      return { ...state, loading: true };
    case SIGNIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
