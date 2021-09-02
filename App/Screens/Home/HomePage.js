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
import {CustomWidth} from '../../Components/TopComponents';
import styles from '../../styles';

const HomePage = props => {
  // -------------------------
  const images = [
    'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',

    'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',

    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',

    'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',

    'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
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
        {console.log(CustomWidth)}
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

        <BackCarousel data={images} />
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
