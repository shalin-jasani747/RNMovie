import { reject } from 'lodash';
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setFavourite: ['setType', 'data'],
  removeFavourite: ['setType', 'id']
});

export const FavouriteTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  movie: [],
  tv: [],
  fetching: false,
  error: null
});

/* ------------- Reducers ------------- */
// request the data from an api

export const setRequest = (state, action) => {
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

export const removeRequest = (state, action) => {
  const { setType, id } = action;
  return state.merge({
    fetching: false,
    error: false,
    [setType]: reject(state[setType], { 'id': id })
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const favouriteReducer = createReducer(INITIAL_STATE, {
  [Types.SET_FAVOURITE]: setRequest,
  [Types.REMOVE_FAVOURITE]: removeRequest
});
