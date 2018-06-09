import {
  SET_MODAL_VISIBILITY_EXPENSES
} from './types';

export const setModalVisibilityExpenses = (isVisible) => dispatch => {
  dispatch({
    type: SET_MODAL_VISIBILITY_EXPENSES,
    payload: isVisible
  });
};
