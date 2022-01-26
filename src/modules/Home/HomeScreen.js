import { Container } from 'native-base';
import React from 'react';
import MovieCard from '../../components/MovieCard';
import styles from './styles/HomeScreenStyle';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <MovieCard type={'movie'} />
        <MovieCard type={'tv'} />
      </Container>
    );
  }
}

export default HomeScreen;
