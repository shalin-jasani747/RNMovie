import { networkSaga } from 'react-native-offline';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { MovieTypes } from '../redux/MovieRedux';
import API from '../services/Api';
import { searchMoviesOrTvShows } from './MovieSaga';
import { NetworkSagaArgsObjConst } from '../constants/Strings';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const apiMovie = API.movie();

export default function* rootSaga() {
  yield all([
    fork(networkSaga, NetworkSagaArgsObjConst),
    takeLatest(MovieTypes.SEARCH_REQUEST, searchMoviesOrTvShows, apiMovie)
  ]);
}
