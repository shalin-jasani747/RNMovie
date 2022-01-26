import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  searchRequest: ['searchTerm', 'searchType'],
  searchSuccess: ['searchType', 'data'],
  searchFailure: ['error']
});

export const MovieTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  movie: [],
  tv: [],
  fetching: false,
  error: null
});

/* ------------- Selectors ------------- */
export const MoviesSelectors = {
  getData: (state) => state.movie
};

export const TvShowsSelectors = {
  getData: (state) => state.tv
};


/* ------------- Reducers ------------- */
// request the data from an api
export const request = (state) => state.merge({ fetching: true });

// successful api lookup
export const success = (state, action) => {
  const { searchType, data } = action;
  return state.merge({
    fetching: false,
    error: false,
    [searchType]: [
      ...data
    ]
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const movieReducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_REQUEST]: request,
  [Types.SEARCH_SUCCESS]: success,
  [Types.SEARCH_FAILURE]: failure,
});
