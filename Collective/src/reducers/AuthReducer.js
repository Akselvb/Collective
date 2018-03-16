import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  CREATE_ACCOUNT_BUTTON_PRESSED,
  SIGNIN_EMAIL_CHANGED,
  SIGNIN_PASSWORD_CHANGED,
  SIGNIN_CONFIRM_PASSWORD_CHANGED,
  SIGNIN_USER,
  SIGNIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loginEmail: '',
  loginPassword: '',
  signinEmail: '',
  signinPassword: '',
  signinConfirmPassword: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, loginEmail: action.payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, loginPassword: action.payload };
    case CREATE_ACCOUNT_BUTTON_PRESSED:
      return { ...state, ...INITIAL_STATE };
    case SIGNIN_EMAIL_CHANGED:
      return { ...state, signinEmail: action.payload };
    case SIGNIN_PASSWORD_CHANGED:
      return { ...state, signinPassword: action.payload };
    case SIGNIN_CONFIRM_PASSWORD_CHANGED:
      return { ...state, signinConfirmPassword: action.payload };
    case SIGNIN_USER:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGNIN_USER_FAIL:
      console.log('DETTE ER I AUTH REDUCER');
      return { ...state, error: 'Signin failed', signinPassword: '', signinConfirmPassword: '' };
    default:
      return state;
  }
};
