import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BackCarousel from '../../Components/BackCarousel';

import CustomStatusBar from '../../Components/CustomStatusBar';
import styles from '../../styles';

const HomePage = props => {
  // -------------------------
  const images = [
    'https://w.wallhaven.cc/full/96/wallhaven-96q7y8.jpg',
    'https://w.wallhaven.cc/full/76/wallhaven-76moj9.jpg',
    'https://w.wallhaven.cc/full/j8/wallhaven-j8lyky.jpg',
    'https://w.wallhaven.cc/full/ym/wallhaven-ymgyxk.jpg',
    'https://w.wallhaven.cc/full/47/wallhaven-47l3q3.jpg',
    'https://w.wallhaven.cc/full/6k/wallhaven-6k22z6.jpg',
    'https://w.wallhaven.cc/full/p8/wallhaven-p83w1p.jpg',
  ];

  return (
    <SafeAreaView style={styles.fl1}>
      <CustomStatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ------------------ */}
        <View style={styles.HomeHeader}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Image
              style={{width: 20, height: 22}}
              source={require('../../assets/BurgerIcon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{width: 21, height: 21}}
              source={require('../../assets/SearchIcon.png')}
            />
          </TouchableOpacity>
        </View>
        {/* ------------------ */}
        <View style={styles.HomeHeaderBalance}>
          <View style={styles.fdRow}>
            <Image
              style={{width: 60, height: 60, marginRight: 13}}
              source={require('../../assets/defaultAva.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Pro'}}>Акиева Айпери</Text>
          </View>
          <TouchableOpacity style={styles.HomeCoin}>
            <Text style={{fontSize: 12, fontFamily: 'Pro', color: 'white'}}>
              1520 сом
            </Text>
          </TouchableOpacity>
        </View>
        {/* ------------------ */}

        <BackCarousel images={images} />
        {/* <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          {images.map((item, key) => (
            <View key={key}>
              <Image
                style={{
                  width: width - 40,
                  alignSelf: 'center',
                  marginHorizontal: 20,
                  height: 50,
                }}
                source={{uri: item}}
              />
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            top: 15 - 60,
            zIndex: 1,
            alignSelf: 'center',
          }}>
          {images.map((item, key) => (
            <View
              key={key}
              style={{
                backgroundColor: 'red',
                height: 1,
                marginHorizontal: 10,
                width: 14.71,
              }}
            />
          ))}
        </View> */}
        {/* ------------------ */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
