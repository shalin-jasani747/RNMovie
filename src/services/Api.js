import Secrets from 'react-native-config';
import { apiConfig } from './Utils';

const api = apiConfig(Secrets.API_URL);

const movie = () => {

const searchVideoOrShow = (searchType, searchTerm) =>
  api.get(`/search/${searchType}?api_key=${Secrets.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);

  return {
    searchVideoOrShow
  };
};

export default {
  movie
};
