import { Root } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { NavigationRoutes } from './constants';
import AppNavigation from './navigation/AppNavigation';
import { navigate } from './navigation/services/navigationServices';
import { ApplicationStyles } from './theme';
import NoInternetConnection from './components/NoInternetConnection'

const RootContainer = () => {
  const {isConnected} = useSelector(state => state.network)

  useEffect(() => {
    setTimeout(() => {
      navigate(NavigationRoutes.HomeStack);
    }, 2000);
  }, [isConnected]);

  return (
    <Root>
      <View style={[ApplicationStyles.screen.mainContainer]}>
        <StatusBar barStyle="dark-content" />
        {isConnected && <AppNavigation />}
        {!isConnected && <NoInternetConnection />}
      </View>
    </Root>
  );
};

export default RootContainer;
