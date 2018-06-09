import {
  NAME_OF_COLLECTIVE_RETRIEVED,
  OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
  OPEN_MODAL,
  CLOSE_MODAL,
  ON_TITLE_CHANGE_TEXT,
  ON_DESCRIPTION_CHANGE_TEXT,
  ON_DATE_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  collectiveName: null,
  collectiveId: null,
  otherUsers: null,
  modalVisible: false,
  title: null,
  description: null,
  date: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case NAME_OF_COLLECTIVE_RETRIEVED:
      return { ...state, collectiveName: action.payload[0], collectiveId: action.payload[1] };
    case OTHER_USERS_IN_COLLECTIVE_RETRIEVED:
      return { ...state, otherUsers: action.payload.toString() };


    case OPEN_MODAL:
      return { ...state, modalVisible: action.payload };
    case CLOSE_MODAL:
      return { ...state, modalVisible: action.payload };

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
