import firebase from 'firebase';
import {
  SET_MODAL_VISIBILITY_EVENTS,
  ON_TITLE_CHANGE_TEXT,
  ON_DESCRIPTION_CHANGE_TEXT,
  ON_START_DATE_CHANGE,
  ON_END_DATE_CHANGE,
  EVENTS_FETCH_SUCCESS
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
  Handles text input of events start date
*/
export const onStartDateChange = (text) => dispatch => {
  dispatch({
    type: ON_START_DATE_CHANGE,
    payload: text
  });
};

/*
  Handles text input of events end date
*/
export const onEndDateChange = (text) => dispatch => {
  dispatch({
    type: ON_END_DATE_CHANGE,
    payload: text
  });
};

/*
  Pushes event to firebase
*/
export const saveEvent = ({ collectiveId }, title, description, startDate, endDate) => dispatch => {
  const event = {
    title: title.text,
    description: description.text,
    startDate: startDate.text,
    endDate: endDate.text
  };

  firebase
    .database()
    .ref(`collectives/${collectiveId}/events/`)
    .push(event);
};

/*
  Read data from firebase
*/
export const eventsFetch = (collectiveId) => {
  return (dispatch) => {
    firebase
      .database()
      .ref(`collectives/${collectiveId}/events`)
      .on('value', snapshot => {
        dispatch({
          type: EVENTS_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
