import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileHome from './ProfileHome';

const Profile = props => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ProfileHome" component={ProfileHome} />
      </Stack.Navigator>
    </>
  );
};

export default Profile;
