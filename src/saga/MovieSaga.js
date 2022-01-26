import { reject } from 'lodash'
import { call, put, select } from 'redux-saga/effects';
import MovieActions from '../redux/MovieRedux';
import {HideSelectors } from '../redux/HideRedux';

export function* searchMoviesOrTvShows(api, { searchTerm, searchType }) {
  const hiddenData = yield select(HideSelectors.getHiddenData)
  const hiddenTypeData = hiddenData[searchType]
  try {
    const response = yield call(api.searchVideoOrShow, searchType, searchTerm);
    let removedZeroVote = reject(response?.data?.results, { 'vote_average': 0 })
    hiddenTypeData.map(data => {
      removedZeroVote = reject(removedZeroVote, { 'id': data.id })
    })
    yield put(MovieActions.searchSuccess(searchType, removedZeroVote));
  }
  catch (e) {
    yield put(MovieActions.searchFailure(e));
  }
}
