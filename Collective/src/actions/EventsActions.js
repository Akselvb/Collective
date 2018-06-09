import firebase from 'firebase';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ON_TITLE_CHANGE_TEXT,
  ON_DESCRIPTION_CHANGE_TEXT,
  ON_DATE_CHANGE
} from './types';


export const openModal = () => dispatch => {
  dispatch({
    type: OPEN_MODAL,
    payload: true
  });
};


export const closeModal = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL,
    payload: false
  });
};

export const onTitleChangeText = (text) => dispatch => {
  dispatch({
    type: ON_TITLE_CHANGE_TEXT,
    payload: text
  });
};

export const onDescriptionChangeText = (text) => dispatch => {
  dispatch({
    type: ON_DESCRIPTION_CHANGE_TEXT,
    payload: text
  });
};

export const onDateChange = (text) => dispatch => {
  dispatch({
    type: ON_DATE_CHANGE,
    payload: text
  });
};

export const saveEvent = ({ collectiveId }, title, description, date) => dispatch => {
  const event = {
    title: title.text,
    description: description.text,
    date: date.text
  };

  firebase
    .database()
    .ref(`collectives/${collectiveId}/events/`)
    .push(event);
};
