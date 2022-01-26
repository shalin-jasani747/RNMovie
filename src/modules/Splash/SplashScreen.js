import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles/SplashScreenStyles';
import String from '../../constants/Strings'
const SplashScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.textStyle}>{String.movieMania}</Text>
  </View>
);

export default SplashScreen;
