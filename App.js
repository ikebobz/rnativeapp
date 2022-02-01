// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { PartA, PartB, PartC } from './components/Parts'
import AddItem from './components/AddItem'
import { createStore } from 'redux';
//import { Provider } from 'react';
import reducers from './src/reducers'
import { Provider } from 'react-redux';
import ViewItem from './components/ViewItem'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const store = createStore(reducers)

const Stack = createStackNavigator()

 export default function App() {
  return (
  <Provider store = {store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "AddItem">
      <Stack.Screen name = "AddItem" component = {AddItem}/>
      <Stack.Screen name = "ViewItem" component = {ViewItem} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
