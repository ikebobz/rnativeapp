import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PartA, PartB, PartC } from './components/Parts'
import AddItem from './components/AddItem'
import { createStore } from 'redux';
//import { Provider } from 'react';
import reducers from './src/reducers'
import { Provider } from 'react-redux';

const store = createStore(reducers)

 export default function App() {
  return (
    <Provider store = {store}>
    <View style={styles.container}>
      <Text>Funny enough I love working with React native on the linux platform</Text>
      <StatusBar style="auto" />
      <PartA />
      <PartB />
      <PartC />
      <AddItem></AddItem>
    </View>
    </Provider>
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
