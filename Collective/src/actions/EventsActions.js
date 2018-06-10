import firebase from 'firebase';
import {
  SET_MODAL_VISIBILITY_EVENTS,
  ON_TITLE_CHANGE_TEXT,
  ON_DESCRIPTION_CHANGE_TEXT,
  ON_DATE_CHANGE
} from './types';


/*
  Opens and closes the modal in the events tab
*/
export const setModalVisibilityEvents = (isVisible) => dispatch => {
  dispatch({
    type: SET_MODAL_VISIBILITY_EVENTS,
    payload: isVisible
  });
};

/*
  Handles text input of events title
*/
export const onTitleChangeText = (text) => dispatch => {
  dispatch({
    type: ON_TITLE_CHANGE_TEXT,
    payload: text
  });
};

/*
  Handles text input of events description
*/
export const onDescriptionChangeText = (text) => dispatch => {
  dispatch({
    type: ON_DESCRIPTION_CHANGE_TEXT,
    payload: text
  });
};

/*
  Handles text input of events date
*/
export const onDateChange = (text) => dispatch => {
  dispatch({
    type: ON_DATE_CHANGE,
    payload: text
  });
};

/*
  Pushes event to firebase
*/
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
