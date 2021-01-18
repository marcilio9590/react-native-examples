import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import About from './src/components/About';
import Contact from './src/components/Contact';
import CustomerDrawer from './src/components/CustomDrawer';
import Home from './src/components/Home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomerDrawer}
      >
        <Drawer.Screen name="Home" options={{
          headerShown: false
        }} component={Home} />
        <Drawer.Screen name="Sobre" component={About} />
        <Drawer.Screen name="Contato" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})
