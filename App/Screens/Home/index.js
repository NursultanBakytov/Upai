import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './HomePage';

const Home = props => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </>
  );
};

export default Home;
