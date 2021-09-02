import React, {Component} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import LoginNavigation from './navigation/Welcome';
import {store} from './Store';
import SplashScreen from './navigation/SplashScreen';
import DrawerNavigation from './navigation/DrawerNavigation';

export default class App extends Component {
  // componentDidMount() {
  //   SplashScreen.hide();
  // }
  render() {
    const Stack = createStackNavigator();
    const MyTheme = {
      ...DefaultTheme,

      colors: {
        ...DefaultTheme.colors,
        background: 'white',
      },
    };
    return (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="LoginNavigation"
              component={LoginNavigation}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{header: () => null}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
