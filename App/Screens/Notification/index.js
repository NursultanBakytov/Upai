import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NotificationHome from './NotificationHome';

const Notification = props => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NotificationHome" component={NotificationHome} />
      </Stack.Navigator>
    </>
  );
};

export default Notification;
