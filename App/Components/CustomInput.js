import React from 'react';
import {View, Image, TextInput} from 'react-native';

import styles from '../styles';

const CustomInput = ({
  style,
  value,
  setValue,
  placeholder,
  width,
  icon,
  security,
  mtop,
  ...props
}) => (
  <View
    style={[
      style || styles.CustomInput,
      {width: width || '100%', marginTop: mtop || 0},
    ]}>
    <Image style={{width: 22, height: 22, marginRight: 7}} source={icon} />
    <TextInput
      {...props}
      onChangeText={setValue}
      value={value}
      style={{width: '90%', paddingBottom: 8}}
      placeholder={placeholder}
      secureTextEntry={security ? true : false}
    />
  </View>
);

export default CustomInput;
