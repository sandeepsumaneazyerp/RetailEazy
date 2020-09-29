import 'react-native-gesture-handler';
import React from 'react';
//Import react-navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './components/screens/SplashScreen';
import LoginScreen from './components/screens/LoginScreen';
import NavigationRoutes from './components/helper/routes/NavigationRoutes';
import DatabaseScreen from './components/screens/DatabaseScreen'

const Auth = createSwitchNavigator({
  //Stack Navigator for Login and Sign up Screen
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },


  DatabaseScreen: {
    screen: DatabaseScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const App = createSwitchNavigator({
  SplashScreen: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  },


  NavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: NavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      headerShown: false,
    },
  },
});

//

export default createAppContainer(App);
