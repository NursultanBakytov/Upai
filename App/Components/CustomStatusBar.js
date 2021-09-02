import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

function CustomStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default CustomStatusBar;

// USE =>  <CustomStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
