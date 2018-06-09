import {
  LOGIN_USER_SUCCESS,
  NAME_OF_COLLECTIVE_RETRIEVED,
  OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
  SET_MODAL_VISIBILITY_EVENTS,
  ON_TITLE_CHANGE_TEXT,
  ON_DESCRIPTION_CHANGE_TEXT,
  ON_DATE_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  collectiveName: null,
  collectiveId: null,
  otherUsers: null,
  isModalVisible: false,
  title: null,
  description: null,
  date: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case NAME_OF_COLLECTIVE_RETRIEVED:
      return { ...state, collectiveName: action.payload[0], collectiveId: action.payload[1] };
    case OTHER_USERS_IN_COLLECTIVE_RETRIEVED:
      return { ...state, otherUsers: action.payload.toString() };

    case SET_MODAL_VISIBILITY_EVENTS:
      return { ...state, isModalVisible: action.payload };

    case ON_TITLE_CHANGE_TEXT:
      return { ...state, title: action.payload };
    case ON_DESCRIPTION_CHANGE_TEXT:
      return { ...state, description: action.payload };
    case ON_DATE_CHANGE:
      return { ...state, date: action.payload };

    default:
      return state;
  }
};
