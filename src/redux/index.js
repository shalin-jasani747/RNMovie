import { reducer as network } from 'react-native-offline';
import { combineReducers } from 'redux';
import { favouriteReducer } from './FavouriteRedux';
import { hideReducer } from './HideRedux';
import { movieReducer } from './MovieRedux';

export default combineReducers({
  movie: movieReducer,
  favourite: favouriteReducer,
  hide: hideReducer,
  network
});
