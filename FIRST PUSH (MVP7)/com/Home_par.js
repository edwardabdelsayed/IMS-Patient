import * as React from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Header from './Header'

import About_us from './About_us';
import Vision from './Vision';

export default function Home({ navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    

    <Tab.Navigator>
      <Tab.Screen name="About_us" component={About_us}   />
      <Tab.Screen name="Vision" component={Vision} />
    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
