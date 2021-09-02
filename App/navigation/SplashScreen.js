import React, {useEffect} from 'react';
import {View, Image, StatusBar} from 'react-native';

import styles from '../styles';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      // try {
      //   const value = await AsyncStorage.getItem('Token');
      //   if (value !== null) {
      //     dispatch(saveToken(value));
      props.navigation.replace('LoginNavigation');
      // console.log(nav);
      // value previously stored
      //     } else {
      //       dispatch(saveToken(value));
      //       nav.navigation.replace('Login');
      //     }
      //   } catch (e) {
      //     console.log(e);
      //   }
    }, 2000);
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: 'white'}]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Image
        style={{width: 148, height: 148}}
        source={require('../assets/SplashIcon.png')}
      />
    </View>
  );
};

export default SplashScreen;
