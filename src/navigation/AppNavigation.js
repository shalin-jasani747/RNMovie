import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { NavigationRoutes } from '../constants';
import HomeScreen from '../modules/Home/HomeScreen';
import SplashScreen from '../modules/Splash/SplashScreen';
import DetailScreen from '../modules/DetailScreen/DetailScreen';
import SearchScreen from '../modules/SearchScreen/SearchScreen';
import { Colors, Icons } from '../theme';
import { navigationRef } from './services/navigationServices';
import styles from './styles/AppNavigationStyles';
import Icon from 'react-native-vector-icons/AntDesign';

const RootStack = createStackNavigator();
const renderImage = () => {
  return <Image source={Icons.back} style={{ width: 30, height: 30 }} />;
};

const stackScreenOptions = {
  headerBackTitleVisible: false,
  headerLeftContainerStyle: styles.backButtonStyle,
  headerTintColor: Colors.blackHeaderText,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerText,
  headerStyle: styles.headerStyle,
  headerBackImage: renderImage,
  cardStyle: {
    backgroundColor: Colors.white
  }
};

const HomeStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name={NavigationRoutes.HomeScreen}
        component={HomeScreen}
        options={({navigation}) => ({
          title: 'Home',
          headerLeft: () => null,
          headerRight: () => (
            <Icon
            style={{paddingRight: 20}}
            name="search1"
            size={25}
            color={Colors.white}
            onPress={() => navigation.navigate('SearchScreen')}
          />
          )
        })}
      />
      <RootStack.Screen
        name={NavigationRoutes.DetailScreen}
        component={DetailScreen}
        options={{ title: 'Details' }}
      />
      <RootStack.Screen
        name={NavigationRoutes.SearchScreen}
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
    </RootStack.Navigator>
  );
};

// Manifest of possible screens
const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={stackScreenOptions}>
        <RootStack.Screen
          name={NavigationRoutes.SplashScreen}
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <RootStack.Screen
          name={NavigationRoutes.HomeStack}
          options={{ headerShown: false }}
          component={HomeStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
