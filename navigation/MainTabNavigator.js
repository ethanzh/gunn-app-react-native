import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import Schedule from '../screens/Schedule';
import Events from '../screens/Events';
import Map from '../screens/Map';
import Directory from '../screens/Directory';
import Barcode from '../screens/Barcode';

export default TabNavigator(
  {
    Schedule: {
      screen: Schedule,
    },
    Events: {
      screen: Events,
    },
    Map: {
      screen: Map,
    },
    Directory: {
      screen: Directory,
    },
    Barcode: {
      screen: Barcode,
    },
  },
  
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  }
);
