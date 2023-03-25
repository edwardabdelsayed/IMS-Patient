import * as React from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';

import Header from './Header'

export default function Scheduel({ navigation }) {
  return (
    <>
    <Header/>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Scheduel
      </Text>
      <Button title="back Home" onPress={() => navigation.goBack()} />

    </View>
    </>
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
