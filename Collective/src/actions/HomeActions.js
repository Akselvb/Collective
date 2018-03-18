import {
  GET_USER
} from '../actions/types';

export const userFetch = (user) => {
  return {
    type: GET_USER,
    payload: user
  };
};
