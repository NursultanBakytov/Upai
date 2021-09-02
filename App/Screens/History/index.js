import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HistoryHome from './HistoryHome';

const History = props => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HistoryHome" component={HistoryHome} />
      </Stack.Navigator>
    </>
  );
};

export default History;
