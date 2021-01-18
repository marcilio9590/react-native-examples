import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const myDrawer = createDrawerNavigator(
  {
    Home: Home,
    Profile: Profile,
    Settings: Settings
  }
);

export default createAppContainer(myDrawer);