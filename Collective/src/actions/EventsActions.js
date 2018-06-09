import firebase from 'firebase';
import {
  SET_MODAL_VISIBILITY_EVENTS,
  ON_TITLE_CHANGE_TEXT,
  ON_DESCRIPTION_CHANGE_TEXT,
  ON_DATE_CHANGE
} from './types';


export const setModalVisibilityEvents = (isVisible) => dispatch => {
  dispatch({
    type: SET_MODAL_VISIBILITY_EVENTS,
    payload: isVisible
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
