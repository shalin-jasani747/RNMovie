import { reject } from 'lodash'
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setHide: ['setType', 'data'],
  removeHide: ['setType', 'id']
});

export const HideTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  movie: [],
  tv: [],
  fetching: false,
  error: null
});

/* ------------- Selectors ------------- */

export const HideSelectors = {
  getHiddenData: state => state.hide
};

/* ------------- Reducers ------------- */
// request the data from an api

export const setHideRequest = (state, action) => {
  const { setType, data } = action;
  return state.merge({
    fetching: false,
    error: false,
    [setType]: [
      ...state[setType],
      data
    ]
  });
};

export const removeHideRequest = (state, action) => {
  const { setType, id } = action;
  return state.merge({
    fetching: false,
    error: false,
    [setType]: reject(state[setType], { 'id': id })
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const hideReducer = createReducer(INITIAL_STATE, {
  [Types.SET_HIDE]: setHideRequest,
  [Types.REMOVE_HIDE]: removeHideRequest
});
