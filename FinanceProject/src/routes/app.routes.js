import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();


function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{
        backgroundColor: '#171717',
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: '#00B94A',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#DDD',
        itemStyle: {
          marginVertical: 5
        }
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Profile" component={Profile} />
      <AppDrawer.Screen name="Register" component={Register} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;