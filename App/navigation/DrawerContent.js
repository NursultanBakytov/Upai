import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import CustomStatusBar from '../Components/CustomStatusBar';

import styles from '../styles';

const DrawerContent = props => {
  // ************************************************************************

  const Screens = [
    {
      img: require('../assets/Categories.png'),
      name: 'Категории',
      nav: () => props.navigation.navigate('Categories'),
    },
    {
      img: require('../assets/NotifBurger.png'),
      name: 'Уведомления',
      nav: () => props.navigation.navigate('Уведомления'),
    },
    {
      img: require('../assets/CashBack.png'),
      name: 'Горячий кэшбэк',
      nav: () => props.navigation.navigate('CashBack'),
    },
    {
      img: require('../assets/Partner.png'),
      name: 'Партнерская программа',
      nav: () => props.navigation.navigate('Partner'),
    },
    {
      img: require('../assets/About.png'),
      name: 'О программе',
      nav: () => props.navigation.navigate('About'),
    },
    {
      img: require('../assets/faq.png'),
      name: 'FAQ',
      nav: () => props.navigation.navigate('Faq'),
    },
    {
      img: require('../assets/settings.png'),
      name: 'Настройки',
      nav: () => props.navigation.navigate('Settings'),
    },
    {
      img: require('../assets/Exit.png'),
      name: 'Выйти',
      nav: () => props.navigation.replace('LoginNavigation'),
    },
  ];

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      {...props}
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 30,
      }}>
      <CustomStatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* -------------- */}
      <TouchableOpacity
        style={{marginBottom: 37}}
        onPress={() => props.navigation.closeDrawer()}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../assets/arrowLeft.png')}
        />
      </TouchableOpacity>
      {/* -------------- */}
      <View style={[styles.fdRow, {marginLeft: 16}]}>
        <Image
          style={{width: 60, height: 60}}
          source={require('../assets/defaultAva.png')}
        />
        <View style={{marginLeft: 12}}>
          <Text style={{fontSize: 16, marginBottom: 6}}>Акиева Айпери</Text>
          <Text style={{fontSize: 12, color: '#8D8D8D'}}>id123456789</Text>
        </View>
      </View>
      <View
        style={{height: 1, backgroundColor: '#EBEBEB', marginVertical: 21}}
      />
      {/* -------------- */}
      {/* Start Screens */}
      {Screens.map((item, key) => (
        <TouchableOpacity
          key={key}
          onPress={item.nav}
          style={[
            styles.BurgerItems,
            {borderBottomWidth: Screens.length === key + 1 ? 0 : 1},
          ]}>
          <Image
            style={{width: 18, height: 18, resizeMode: 'contain'}}
            source={item.img}
          />
          <Text style={styles.BurgerItemsText}>{item.name}</Text>
        </TouchableOpacity>
      ))}

      {/* ----------- */}
      <View style={{marginVertical: 50}} />
      {/* End Social Network */}
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
