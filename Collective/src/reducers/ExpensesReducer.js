import {
  LOGIN_USER_SUCCESS,
  NAME_OF_COLLECTIVE_RETRIEVED,
  OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
  SET_MODAL_VISIBILITY_EXPENSES
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  collectiveName: null,
  collectiveId: null,
  otherUsers: null,
  isModalVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case NAME_OF_COLLECTIVE_RETRIEVED:
      return { ...state, collectiveName: action.payload[0], collectiveId: action.payload[1] };
    case OTHER_USERS_IN_COLLECTIVE_RETRIEVED:
      return { ...state, otherUsers: action.payload.toString() };

    case SET_MODAL_VISIBILITY_EXPENSES:
      return { ...state, isModalVisible: action.payload };

    default:
      return state;
  }
};
