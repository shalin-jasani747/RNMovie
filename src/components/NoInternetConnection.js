import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import String from '../constants/Strings';
import styles from './styles/NoInternetConnectionStyle';

const NoInternetConnection = () => {
  return (
    <View style={styles.noInternetConnectionView}>
      <Ionicons
        name={'cloud-offline-outline'}
        size={30}
      />
      <Text>{String.noInternet}</Text>
    </View>
  );
};

export default NoInternetConnection;
