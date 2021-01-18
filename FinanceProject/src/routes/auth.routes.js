import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();


function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false
        }}
        name="SignIn" component={SignIn} />
      <AuthStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00B94A'
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          title: 'Voltar'
        }}
        name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;