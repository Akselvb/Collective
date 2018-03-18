import firebase from 'firebase';
import {
  GET_USER
} from '../actions/types';

export const userFetch = () => {
  const { currentUser } = firebase.auth();
  //console.log(currentUser.email);

  return {
    type: GET_USER,
    payload: currentUser.email
  };
};
