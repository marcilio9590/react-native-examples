import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Cadastro from './src/Cadastro';
import Home from './src/Home';
import Login from './src/Login';
import Reducers from './src/Reducers';


export default function App() {
  const Stack = createStackNavigator();

  let store = createStore(Reducers);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})
