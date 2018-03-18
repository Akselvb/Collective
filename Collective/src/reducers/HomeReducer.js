import {
  GET_USER
} from '../actions/types';

const INITIAL_STATE = {
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      console.log(action.payload);
      return { ...state, user: action.payload };

  default:
      return { state };
  }
};
