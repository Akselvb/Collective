import {
  SET_MODAL_VISIBILITY_NOTIFICATIONS
} from '../actions/types';

const INITIAL_STATE = {
  isModalVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY_NOTIFICATIONS:
      return { ...state, isModalVisible: action.payload };
    default:
      return state;
  }
};
