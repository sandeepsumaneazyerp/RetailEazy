import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { database } from '../../../db/Database';
import Dashboard from '../../../assets/images/drawer_dashboard.svg';
import Switch from '../../../assets/images/swap.svg';
import PlacedOrderIcon from '../../../assets/images/drawer_placed_order.svg';
import KYCIcon from '../../../assets/images/kyc.svg';
import Payment from '../../../assets/images/drawer_pay.svg';
import Sync from '../../../assets/images/sync.svg';

import Avatar from '../../../assets/images/avatar.svg';
import AvailableStock from '../../../assets/images/available_stock.svg';
import Billing from '../../../assets/images/billing.svg';
import ChangePassword from '../../../assets/images/change_password.svg';
import CreateOrder from '../../../assets/images/create_order.svg';
import Customers from '../../../assets/images/customers.svg';
import MasterSummary from '../../../assets/images/master_summary.svg';
import ReceivedOrder from '../../../assets/images/received_order.svg';
import Settings from '../../../assets/images/settings.svg';
import * as prefConstant from '../../../constant/PrefConstant';
import NavigationDrawerHeader from './NavigationDrawerHeader';

var style = require('../../../assets/style/AppStyle');
var userName, brand_id, orderId, brandName, cartCounter;

class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { logoutModalVisible: false }
    this.userInfo();

    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.cartCounter();

    });
    
  }

  async userInfo() {
    userName = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_USERNAME,
    );
    brand_id = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_ID,
    );

    brandName = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_NAME,
    );
  }

  async cartCounter() {
    cartCounter = await database.cartCounterDemo();
    console.log('updated cart counter====================', cartCounter);

    orderId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_ORDER_ID);
    console.log('Order Id Check====================', orderId);
    AsyncStorage.setItem('any_key_here', cartCounter.toString());
   // AsyncStorage.setItem('order_id_here', cartCounter.toString());
  }

  async logout() {
    try {
      await AsyncStorage.clear();
      this.props.navigation.navigate('LoginScreen');

    } catch (exception) {
      return false;
    }
  }


  setModalVisible = (visible) => {
    this.setState({ logoutModalVisible: visible });
  }

  condition() {
    if (cartCounter == 0) {
      this.props.navigation.navigate('CreateOrderScreen');
    } else {
      this.props.navigation.navigate('CartScreen', { orderId: orderId} );
    }
  }

  render() {
    const { logoutModalVisible } = this.state;

    return (
      <ScrollView>
        <View>
          <View>
            <View style={style.DASHBOARD_PROFILE_HEADER}>
              <LinearGradient
                colors={['#025487', '#2165B9']}
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text style={style.DASHBOARD_VERSION_TEXT}>Version 1.0</Text>
                <View style={style.DASHBOARD_PROFILE_HEADER_PIC_CIRCLE}>
                  <Image
                    source={require('../../../assets/images/user_placeholder.png')}
                    style={style.DASHBOARD_SIDEMENU_PROFILE_ICON}
                  />
                </View>
                <Text style={style.DASHBOARD_USERNAME}>{userName}</Text>
                <Text style={style.DASHBOARD_BRANDNAME}>{brandName}</Text>
              </LinearGradient>
            </View>
          </View>

          <View>
            <View style={{ width: '100%' }}>
              <TouchableOpacity
                onPress={() =>{ 
                  //this.props.navigation.closeDrawer();
                  this.props.navigation.navigate('DashboardScreen')
              }
                }>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Dashboard style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Dashboard </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  //  this.props.navigation.navigate('CreateOrderScreen');
                  this.condition();
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <CreateOrder style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Create Order </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SwitchBrandScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Switch style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Switch Brand </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('PlacedOrderScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <PlacedOrderIcon style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Placed Order </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ReceivedOrderScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <ReceivedOrder style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Received Order </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('KYCScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <KYCIcon style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> KYC </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('PayScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Payment style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Pay </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('AvailableStockScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <AvailableStock style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}>
                    {' '}
                    Available Stock{' '}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('CustomerScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Customers style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Customers </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('BillingScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Billing style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Billing </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('MasterSummaryScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <MasterSummary style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Master Summary </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SettingScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Settings style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Settings </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ManualSync');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Sync style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Manual Sync </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ProfileScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <Avatar style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}> Profile </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ChangePasswordScreen');
                }}>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <ChangePassword style={style.DASHBOARD_SIDEMENU_ICON} />
                  <Text style={style.DASHBOARD_MENUTEXT}>
                    {' '}
                    Change Password{' '}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={style.DASHBOARD_SEPARATOR} />

              <TouchableOpacity>
                <View style={style.DASHBOARD_DRAWER_VIEW_STYLE}>
                  <TouchableOpacity
                    style={style.DASHBOARD_LOGOUT_BUTTON}
                    onPress={() => { this.setModalVisible(true) }}>
                    <Image
                      source={require('../../../assets/images/logout.png')}
                      style={style.DASHBOARD_LOGOUT_IMAGE}
                    />
                    <Text style={style.DASHBOARD_LOGOUT_TEXT}> LogOut </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>

              <Modal
                transparent={true}
                visible={logoutModalVisible}
                onRequestClose={() => {
                  this.setSearchModalVisible(!logoutModalVisible);
                }}>
                <View style={style.STOCK_ITEM_MODAL_SEARCH_VIEW}>

                  <View style={{
                    width: '98%',
                    backgroundColor: "white",
                    borderRadius: 10,


                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                  }}>
                    <View>

                      <Text style={{ textAlign: 'center', fontFamily: 'TTNorms-Bold', color: '#045589', fontSize: 25, marginTop: 10 }}>Exit</Text>
                      <View style={{ ...style.DASHBOARD_SEPARATOR, marginVertical: 10 }} />
                      <Text style={{ textAlign: 'center', fontFamily: 'TTNorms-Regular', fontSize: 15, marginBottom: 10 }}>Are you sure, you want to logout?</Text>

                      <View style={style.CART_BUTTON_VIEW}>

                        <TouchableOpacity
                          style={style.CART_SUBMIT_BUTTON_BACKGROUND}
                          onPress={() => {
                            this.setModalVisible(!logoutModalVisible);
                          }}>
                          <View>
                            <Text style={style.CART_CANCEL_ORDER_TEXT}>Cancel </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={style.CART_CANCEL_BUTTON_BACKGROUD}
                          onPress={() => {
                            this.logout();
                          }}>
                          <View>
                            <Text style={style.CART_SUBMIT_ORDER_TEXT}>Logout</Text>

                          </View>
                        </TouchableOpacity>


                      </View>

                    </View>
                  </View>
                </View>
              </Modal>

            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default CustomSidebarMenu;
