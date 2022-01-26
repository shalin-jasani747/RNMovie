import { Container } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { renderMoviePoster } from '../../components/MovieCard';
import styles from './styles/SearchScreenStyles';
import searchActions from '../../redux/MovieRedux';

const handleSearch = (searchText, type, dispatch) => {
  if (searchText.length > 3) {
    dispatch(searchActions.searchRequest(searchText, type));
  }
}

const renderTypeContainer = (type, setType) => {
  return (
    <View style={styles.typeContainer}>
      <TouchableOpacity
        style={{ backgroundColor: type === 'movie' ? '#00264D' : 'transparent', flex: 1 }}
        activeOpacity={0.9}
        onPress={() => setType('movie')}
      >
        <Text style={styles.typeText} >Movies</Text>
      </TouchableOpacity>
      <View style={styles.middleLine} />
      <TouchableOpacity
        style={{ backgroundColor: type === 'tv' ? '#00264D' : 'transparent', flex: 1 }}
        activeOpacity={0.9}
        onPress={() => setType('tv')}
      >
        <Text style={styles.typeText} >TV Show</Text>
      </TouchableOpacity>
    </View>
  );
}

const renderSearchContainer = (type, dispatch) => {
  return (
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={(searchText) => handleSearch(searchText, type, dispatch)}
      status='info'
      placeholder='Search'
      style={styles.textInput}
    />
  );
}

const renderHeaderComponent = (type, setType, dispatch) => {
  return (
    <View style={styles.searchContainer}>
      {renderTypeContainer(type, setType)}
      {renderSearchContainer(type, dispatch)}
    </View>
  );
}

const renderEmptyComponent = () => {
  return (
    <Text style={styles.emptyComponentText}>No Data!!!</Text>
  );
}

function SearchScreen({ navigation }) {
  const dispatch = useDispatch()
  const [type, setType] = useState('movie')
  const [data, setData] = useState([])
  const typeData = useSelector((state) => state.movie);

  useEffect(() => {
    setData(typeData[type])
  }, [typeData, type])

  return (
    <Container style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        ListHeaderComponent={() => renderHeaderComponent(type, setType, dispatch)}
        ListEmptyComponent={() => renderEmptyComponent()}
        renderItem={({ item }) => renderMoviePoster(item, navigation, type, true)}
      />
    </Container>
  );
}
export default SearchScreen;
