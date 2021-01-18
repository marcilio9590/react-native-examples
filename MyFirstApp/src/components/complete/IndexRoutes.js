import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Login from './Login';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home'
      }
    }
  }
)

export default createAppContainer(AppNavigator);