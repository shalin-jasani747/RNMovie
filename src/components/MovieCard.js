import { useNavigation } from '@react-navigation/native';
import { upperFirst } from 'lodash';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Secrets from 'react-native-config';
import { useSelector } from 'react-redux';
import NavigationRoutes from '../constants/NavigationRoutes';
import CustomProgressCircle from './CustomProgressCircle';
import styles from './styles/MovieCardStyle';

export const renderMoviePoster = (item, navigation, type, fromSearch = false) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate(NavigationRoutes.DetailScreen, {
            id: item.id,
            type,
            fromSearch
          });
        }}
      >
        <ImageBackground
          source={{ uri: `${Secrets.IMAGE_URL}${item.poster_path}` }}
          style={styles.image}
        >
          <CustomProgressCircle percentage={item.vote_average} radious={24} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default ({ type = '' }) => {
  const [data, setData] = useState([])
  const typeData = useSelector((state) => state.favourite);
  const navigation = useNavigation();

  useEffect(() => {
    setData(typeData[type])
  }, [])

  useEffect(() => {
    setData(typeData[type])
  }, [type, typeData])



  return (
    <View style={styles.topContainer}>
      <Text style={styles.textStyleWP}>{`Favourite ${upperFirst(type)}`}</Text>
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={() => <Text style={styles.noData}>{`Your not having any favourite ${type}`}</Text>}
          data={data}
          renderItem={({ item }) => renderMoviePoster(item, navigation, type)}
        />
      </View>
    </View>
  );
}