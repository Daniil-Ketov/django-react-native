import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import Home from './screens/Home';

export default function App() {
  return (
    <Home></Home>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle :{
    fontSize:25,
    color: '#f00',
  }
});
