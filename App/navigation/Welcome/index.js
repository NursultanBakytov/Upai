import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import Recover from './Recover';

const LoginStack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <LoginStack.Screen
        name="Recover"
        component={Recover}
        options={{
          header: () => null,
        }}
      />

      <LoginStack.Screen
        name="Signup"
        component={Signup}
        options={{
          header: () => null,
        }}
      />
    </LoginStack.Navigator>
  );
};

export default LoginNavigation;
