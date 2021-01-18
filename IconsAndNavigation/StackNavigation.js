import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from './src/components/StackAbout';
import Contact from './src/components/Contact';
import Home from './src/components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#FFF',
            headerShown: false
          }}
        />
        <Stack.Screen name="Sobre" component={About} />
        <Stack.Screen name="Contato" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}