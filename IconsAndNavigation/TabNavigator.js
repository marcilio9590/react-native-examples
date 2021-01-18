import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Home from './src/components/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  },
  Contato: {
    name: 'ios-call'
  }
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Ionicons name={name} color={color} size={size} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#121212',
        },
        activeTintColor: 'red'
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobre" component={About} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Contato" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}