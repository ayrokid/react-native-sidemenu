/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'

import FirstScreen from "./src/FirstScreen"
import SecondScreen from "./src/SecondScreen"

const DrawerOption = DrawerNavigator(
  {
    First: {
      path: '/',
      screen: FirstScreen,
    },
    Second: {
      path: '/sent',
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'Second',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
)

export default DrawerOption;