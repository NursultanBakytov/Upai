import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomBar from './BottomBar';
import DrawerContent from './DrawerContent';
import Categories from '../Screens/BurgerScreens/Categories';
import CashBack from '../Screens/BurgerScreens/CashBack';
import Partner from '../Screens/BurgerScreens/Partner';
import About from '../Screens/BurgerScreens/About';
import Faq from '../Screens/BurgerScreens/Faq';
import Settings from '../Screens/BurgerScreens/Settings';

const DrawerNavigation = nav => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{header: () => null, drawerStyle: {width: '100%'}}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={BottomBar} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="CashBack" component={CashBack} />
        <Drawer.Screen name="Partner" component={Partner} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Faq" component={Faq} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
