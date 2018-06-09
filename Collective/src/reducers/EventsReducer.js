import {
  NAME_OF_COLLECTIVE_RETRIEVED,
  OTHER_USERS_IN_COLLECTIVE_RETRIEVED,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/types';

const INITIAL_STATE = {
  collectiveName: null,
  otherUsers: null,
  modalVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case NAME_OF_COLLECTIVE_RETRIEVED:
      return { ...state, collectiveName: action.payload[0] };
    case OTHER_USERS_IN_COLLECTIVE_RETRIEVED:
      return { ...state, otherUsers: action.payload.toString() };


    case OPEN_MODAL:
      console.log('sjdfjsdfjsdjfsdjf');
      return { ...state, modalVisible: action.payload };
    case CLOSE_MODAL:
      return { ...state, modalVisible: action.payload };
    default:
      return state;
  }
};
