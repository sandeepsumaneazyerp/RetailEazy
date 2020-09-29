import React, { Component, Fragment } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as prefConstant from '../../../constant/PrefConstant';

import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import NavigationDrawerHeader from './NavigationDrawerHeader';
import OrderToNavigationHeader from './OrderToNavigationHeader';

import DashboardScreen from '../../screens/DashboardScreen';
import CreateOrderScreen from '../../screens/CreateOrderScreen';
import PlacedOrderScreen from '../../screens/PlacedOrderScreen';
import ReceivedOrderScreen from '../../screens/ReceivedOrderScreen';

import KYCScreen from '../../screens/KYCScreen';
import PayScreen from '../../screens/PayScreen';
import AvailableStockScreen from '../../screens/AvailableStockScreen';
import CustomerScreen from '../../screens/CustomerScreen';

import BillingScreen from '../../screens/BillingScreen';
import MasterSummaryScreen from '../../screens/MasterSummaryScreen';
import SettingScreen from '../../screens/SettingScreen';

import ManualSync from '../../screens/ManualSync';
import ProfileScreen from '../../screens/ProfileScreen';
import ChangePasswordScreen from '../../screens/ChangePasswordScreen';

import StockItemScreen from '../../screens/StockItemScreen';
import SwitchBrandScreen from '../../screens/SwitchBrandScreen';

import CartScreen from '../../screens/CartScreen';
import ScannerScreen from '../../screens/ScannerScreen';

import AsyncStorage from '@react-native-community/async-storage';
import CustomSidebarMenu from '../routes/DrawerItems';
import { database } from '../../../db/Database';


const DashboardScreenNav = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,

    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',

      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const CreateOrderScreenNav = createStackNavigator({
  CreateOrderScreen: {
    screen: CreateOrderScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Order To',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerRight: () => <OrderToNavigationHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const SwitchBrandScreenNav = createStackNavigator({
  SwitchBrand: {
    screen: SwitchBrandScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Switch Brand',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const PlacedOrderScreenNav = createStackNavigator({
  PlacedOrder: {
    screen: PlacedOrderScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Placed Order',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const ReceivedOrderScreenNav = createStackNavigator({
  ReceivedOrderScreen: {
    screen: ReceivedOrderScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Received Order',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const KYCScreenNav = createStackNavigator({
  KYCScreen: {
    screen: KYCScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'KYC',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const PayScreenNav = createStackNavigator({
  PayScreen: {
    screen: PayScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Pay',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const AvailableStockScreenNav = createStackNavigator({
  AvailableStockScreen: {
    screen: AvailableStockScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Available Stock',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const CustomerScreenNav = createStackNavigator({
  CustomerScreen: {
    screen: CustomerScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Customer',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const BillingScreenNav = createStackNavigator({
  BillingScreen: {
    screen: BillingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Billing',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const MasterSummaryScreenNav = createStackNavigator({
  MasterSummaryScreen: {
    screen: MasterSummaryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Master Summary',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const SettingScreenNav = createStackNavigator({
  First: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const ManualSyncScreenNav = createStackNavigator({
  ManualSync: {
    screen: ManualSync,
    navigationOptions: ({ navigation }) => ({
      title: 'Manual Sync',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const ProfileScreenNav = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const ChangePasswordScreenNav = createStackNavigator({
  ChangePasswordScreen: {
    screen: ChangePasswordScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Change Password',
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'TTNorms-Regular',
      },
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#2467BE' },
      headerTintColor: '#fff',
    }),
  },
});

const BottomTab = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreenNav,
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarOptions: {
          activeTintColor: '#045589',
        },

      },
    },
    CreateOrderScreen: {
      screen: CreateOrderScreenNav,
      navigationOptions: {
        tabBarLabel: 'Create Order',
        tabBarOptions: {
          activeTintColor: '#045589',
        },
                tabBarOnPress:async({navigation})=>{
                   // alert('hi');
                 // const value = await AsyncStorage.getItem('any_key_here')
                  // const orderId =  await AsyncStorage.getItem('order_id_here')
               var   orderId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_ORDER_ID);
                  
                  try {
                    const value =  await AsyncStorage.getItem('any_key_here')
                    if(value == 0) {
                      // value previously stored
                      navigation.navigate('CreateOrderScreen')
                      
                    }else{
                      navigation.navigate('CartScreen',{orderId:orderId})
                    }
                  } catch(e) {
                    // error reading value
                  }
               //   this.props.navigation.navigate(value!==null?'CartStackScreen',{orderId:orderId}:'Auth')
                }
        // // console.log('jkhdsfbmfhb');

        // navigation.navigate('CreateOrderScreenNav')

        //         }
      },
    },
    PayScreen: {
      screen: PayScreenNav,
      navigationOptions: {
        tabBarLabel: 'Pay',
        tabBarOptions: {
          activeTintColor: '#045589',
        },
      },
    },
    AvailableStock: {
      screen: AvailableStockScreenNav,
      navigationOptions: {
        tabBarLabel: 'Available Stock',
        tabBarOptions: {
          activeTintColor: '#045589',
        },
      },
    },
    Billing: {
      screen: BillingScreenNav,
      navigationOptions: {
        tabBarLabel: 'Billing',
        tabBarOptions: {
          activeTintColor: '#045589',
        },
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // async cartCounter(){
      //   var cartCounter = await database.cartCounterDemo();
      //   console.log('updated cart counter2====================', cartCounter);

      //   // orderId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_ORDER_ID);
      //   // console.log('Order Id Check====================', orderId);

      // },

      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Dashboard') {
          return (
            //<Settings />

            <Image
              source={
                focused
                  ? require('../../../assets/images/dashboard_dark.png')
                  : require('../../../assets/images/dashboard_light.png')
              }
              style={{
                width: 24,
                height: 24,
              }}
            />
          );
        }
        if (routeName === 'CreateOrderScreen') {
          
          return (
            // <CreateOrder />
            <Image
              source={
                focused
                  ? require('../../../assets/images/order_dark.png')
                  : require('../../../assets/images/order_light.png')
              }
              style={{
                width: 24,
                height: 24,
              }}
            />
          );
        }

        if (routeName === 'PayScreen') {
          return (
            // <Settings />
            <Image
              source={
                focused
                  ? require('../../../assets/images/pay_dark.png')
                  : require('../../../assets/images/pay_light.png')
              }
              style={{
                width: 24,
                height: 24,
              }}
            />
          );
        }

        if (routeName === 'AvailableStock') {
          return (
            //  <AvailableStock />
            <Image
              source={
                focused
                  ? require('../../../assets/images/stock_dark.png')
                  : require('../../../assets/images/stock_light.png')
              }
              style={{
                width: 24,
                height: 24,
              }}
            />
          );
        }

        if (routeName === 'Billing') {
          return (
            // <Billing />
            <Image
              source={
                focused
                  ? require('../../../assets/images/bill_dark.png')
                  : require('../../../assets/images/bill_light.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        }
      },
    }),
  },
  { initialRouteName: "Dashboard" }
);

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    DashboardScreen: {
      screen: BottomTab,
      navigationOptions: {
        drawerLabel: 'Dashboard',
      },
    },

    CreateOrderScreen: {
      screen: CreateOrderScreen,
      navigationOptions: {
        drawerLabel: 'Create Order',
      },
    },

    SwitchBrandScreen: {
      screen: SwitchBrandScreenNav,
      navigationOptions: {
        drawerLabel: 'Switch Brand',
      },
    },

    PlacedOrderScreen: {
      screen: PlacedOrderScreenNav,
      navigationOptions: {
        drawerLabel: 'Placed Order',
      },
    },

    ReceivedOrderScreen: {
      screen: ReceivedOrderScreenNav,
      navigationOptions: {
        drawerLabel: 'Received Order',
      },
    },

    KYCScreen: {
      screen: KYCScreenNav,
      navigationOptions: {
        drawerLabel: 'KYC',
      },
    },

    PayScreen: {
      screen: BottomTab,
      navigationOptions: {
        drawerLabel: 'Pay',
      },
    },

    AvailableStockScreen: {
      screen: BottomTab,
      navigationOptions: {
        drawerLabel: 'Available Stock',
      },
    },

    CustomerScreen: {
      screen: CustomerScreenNav,
      navigationOptions: {
        drawerLabel: 'Customers',
      },
    },

    BillingScreen: {
      screen: BottomTab,
      navigationOptions: {
        drawerLabel: 'Billing',
      },
    },

    MasterSummaryScreen: {
      screen: MasterSummaryScreenNav,
      navigationOptions: {
        drawerLabel: 'Master Summary',
      },
    },

    SettingScreen: {
      screen: SettingScreenNav,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
      },
    },

    ManualSync: {
      screen: ManualSyncScreenNav,
      navigationOptions: {
        drawerLabel: 'Manual Sync',
      },
    },

    ProfileScreen: {
      screen: ProfileScreenNav,
      navigationOptions: {
        drawerLabel: 'Profile',
      },
    },

    ChangePasswordScreen: {
      screen: ChangePasswordScreenNav,
      navigationOptions: {
        drawerLabel: 'Change Password',
      },
    },
  },

  {
    initialRouteName: 'DashboardScreen',
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

//export default DrawerNavigatorRoutes;
const CartStackScreen = createStackNavigator({
  CartScreen: {
    screen: CartScreen,
  },
})
const TabsStackNavigator = createStackNavigator({
  BottomTab: {
    screen: BottomTab,
    navigationOptions: { headerShown: false },
  },

  StockItemScreen: {
    screen: StockItemScreen,
  },

  CartScreen: {
    screen: CartScreen,
  },
  ScannerScreen: {
    screen: ScannerScreen,
  },


});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {

       
      //AuthSplash:SplashStack,
      AuthRoot: DrawerNavigatorRoutes,
      Auth: TabsStackNavigator,
      //AuthLoading:AuthLoadingScreen,
      CartStackScreen:CartStackScreen
      // App: RootStack,



    },

    //  {initialRouteName: 'AuthLoading'},
    // {CreateEvent:CreateEvent}
  ),
);

export default AppContainer;

