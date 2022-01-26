import { useNavigation } from '@react-navigation/native';
import { find, get, isNil, some } from 'lodash';
import { Text, View } from 'native-base';
import React from 'react';
import {
  Image,
  ImageBackground, Platform,
  ScrollView
} from 'react-native';
import Secrets from 'react-native-config';
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import String from '../../constants/Strings';
import favouriteActions from '../../redux/FavouriteRedux';
import hideActions from '../../redux/HideRedux';
import Colors from '../../theme/Colors';
import styles from './styles/DetailScreenStyles';

const getColor = (voteAvg) => {
  if (voteAvg > 70) {
    return Colors.green
  } else if (voteAvg > 45 && voteAvg < 70) {
    return Colors.orange
  } else {
    return Colors.red
  }
}

const onPressFavourite = (data, type, isFavourite, dispatch, fromSearch, navigation) => {
  if (isFavourite) {
    dispatch(favouriteActions.removeFavourite(type, data?.id))
    if (!fromSearch) {
      navigation.goBack()
    }
  } else {
    dispatch(favouriteActions.setFavourite(type, data))
  }
}

const onPressHide = (data, type, isHidden, dispatch) => {
  if (isHidden) {
    dispatch(hideActions.removeHide(type, data?.id))
  } else {
    dispatch(hideActions.setHide(type, data))
  }

}
const RenderFavouriteIcon = ({ type, data, fromSearch }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favouriteData = useSelector((state) => state.favourite);
  const allFavouriteData = favouriteData[type]
  const id = get(data, 'id', 0)
  const isFavourite = some(allFavouriteData, { 'id': id });
  return (
    <MaterialIcon
      name={isFavourite ? "favorite" : "favorite-border"}
      color={Colors.red}
      size={26}
      style={styles.favouriteIcon}
      onPress={() => onPressFavourite(data, type, isFavourite, dispatch, fromSearch, navigation)}
    />
  )
}

const RenderHideIcon = ({ type, data }) => {
  const dispatch = useDispatch();
  const HiddenData = useSelector((state) => state.hide);
  const allHiddenData = HiddenData[type]
  const id = get(data, 'id', 0)
  const isHidden = some(allHiddenData, { 'id': id });
  return (
    <Icon
      name={isHidden ? "eye-off" : "eye"}
      color={Colors.lightSkyBlue}
      size={26}
      style={styles.eyeIcon}
      onPress={() => onPressHide(data, type, isHidden, dispatch)}
    />
  )
}

const renderImageContainer = (backdrop_path, poster_path) => {
  return (
    <ImageBackground
      source={{
        uri: `${Secrets.IMAGE_URL}${backdrop_path}`
      }}
      style={styles.imgBackground}
      blurRadius={Platform.OS === 'ios' ? 0.55 : 0.2}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: `${Secrets.IMAGE_URL}${poster_path}`
          }}
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
}

const renderNameContainer = (title, tagline, type, data, fromSearch) => {
  return (
    <View style={styles.nameTagView}>
      <RenderFavouriteIcon type={type} data={data} fromSearch={fromSearch} />
      <RenderHideIcon type={type} data={data} />
      <Text style={styles.nameTextStyle}>{title}</Text>
      <Text style={styles.tagline}>{tagline}</Text>
    </View>
  );
}

const renderRatingContainer = (voteAvg) => {
  return (
    <View style={styles.USPT}>
      <View style={styles.ProgresssCircle}>
        <ProgressCircle
          showsText={true}
          percent={voteAvg}
          radius={25}
          bgColor={Colors.black}
          borderWidth={4}
          color={getColor(voteAvg)}
          shadowColor={Colors.white}
        >
          <Text style={styles.percentageText}>{voteAvg}%</Text>
        </ProgressCircle>
        <Text style={styles.userScore}>{String.userScore}</Text>
      </View>
    </View>
  );
}

const renderReleaseDateContainer = (release_date) => {
  return (
    <View style={styles.card2}>
      <View style={styles.discritionGrey}>
        <View style={styles.cardFilm}>
          <Icon
            name="film-outline"
            color={Colors.white}
            size={25}
            style={styles.filmIcon}
          />
          <Text style={styles.cardText}>
            {release_date}
          </Text>
        </View>
      </View>
    </View>
  );
}

const renderOverviewContainer = (overview) => {
  return (
    <View>
      <Text style={styles.overview}>{String.overview}</Text>
      <Text style={styles.Discription}>{overview}</Text>
    </View>
  );
}

function DetailScreen({ route }) {
  const id = get(route, 'params.id', 0);
  const type = get(route, 'params.type', 'movie');
  const fromSearch = get(route, 'params.fromSearch', false);
  let typeData = useSelector((state) => state.favourite);
  if (fromSearch) {
    typeData = useSelector((state) => state.movie);
  }
  const data = !isNil(find(typeData[type], { 'id': id })) ? find(typeData[type], { 'id': id }) : {}

  let voteAvg = get(data, 'vote_average', 0);
  var title = get(data, 'title', '');
  var tagline = get(data, 'tagline', '');
  var release_date = get(data, 'release_date', '');
  var overview = get(data, 'overview', '');
  var backdrop_path = get(data, 'backdrop_path', '');
  var poster_path = get(data, 'poster_path', '');
  voteAvg = voteAvg * 10;

  return (
    <ScrollView style={styles.mainContainer}>
      {renderImageContainer(backdrop_path, poster_path)}
      {renderNameContainer(title, tagline, type, data, fromSearch)}
      {renderRatingContainer(voteAvg)}
      {renderReleaseDateContainer(release_date)}
      {renderOverviewContainer(overview)}
    </ScrollView>
  );
}
export default DetailScreen;
