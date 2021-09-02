import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';

const window = Dimensions.get('window');
const [width, setwidth] = useState(window.width);
useEffect(() => {
  Dimensions.addEventListener('change', ({window: {width, height}}) => {
    if (width < height) {
      setwidth(width);
    } else {
      setwidth(width);
    }
    setwidth(width);
  });
}, []);

export const CustomWidth = width;

export const FullLoader = (
  <ActivityIndicator
    style={{
      position: 'absolute',
      zIndex: 2,
      flex: 1,
      width: CustomWidth,
      height: '100%',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'rgb(50,52,63)',
    }}
    size="large"
    color="#FFF"
  />
);

export const Loader = <ActivityIndicator size="large" color="#EA4F3D" />;
