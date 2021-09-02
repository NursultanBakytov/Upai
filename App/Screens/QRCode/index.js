import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import QRCodeHome from './QRCodeHome';

const QRCode = props => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="QRCodeHome" component={QRCodeHome} />
      </Stack.Navigator>
    </>
  );
};

export default QRCode;
