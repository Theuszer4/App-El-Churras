import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Header from './components/Header';
import AdicionarUsuarios from './pages/AdicionarUsuarios';

export default function App() {
  return (


    <View style={styles.container}>
      <Header />
      <AdicionarUsuarios />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
