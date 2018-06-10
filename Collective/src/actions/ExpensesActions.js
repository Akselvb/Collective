import {
  SET_MODAL_VISIBILITY_EXPENSES
} from './types';


/*
  Open and close modal in expenses tab
*/
export const setModalVisibilityExpenses = (isVisible) => dispatch => {
  dispatch({
    type: SET_MODAL_VISIBILITY_EXPENSES,
    payload: isVisible
  });
};
