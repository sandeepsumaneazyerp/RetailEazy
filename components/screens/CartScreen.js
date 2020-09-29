import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput, FlatList, ScrollView, TouchableOpacity, Modal, Alert, BackHandler } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import { database } from '../../db/Database.ts';
import { createAppContainer, StackActions, NavigationActions, } from 'react-navigation';
import NavigationRoutes from '../helper/routes/NavigationRoutes';

import LinearGradient from 'react-native-linear-gradient';
import * as prefConstant from '../../constant/PrefConstant';
import { ApiConstant } from '../../network/ApiConstant';
import * as ApiServices from '../../network/ApiServices';
import * as appConstant from '../../constant/AppConstant';
import Toast from 'react-native-simple-toast';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';

import BackArrow from '../../assets/images/back_arrow.svg';
import Plus from '../../assets/images/plus.svg';
import CartPlus from '../../assets/images/cart_plus.svg';
import Comment from '../../assets/images/comment.svg';

import Delete from '../../assets/images/delete.svg';
import DialogInput from 'react-native-dialog-input';

var style = require('../../assets/style/AppStyle');

let orderDetail, cartData, totalPrice, fianlPrice, orderId;

var userId, distributorId, distributorCode, distributorName, appOrderNumber, orderDate, createdOn, brand_id, unit, cartCounter, pageNo,
  appOrderNo, synchedOn, itemCounter, remark, qty, itemId, netTotal;



const resetAction = StackActions.reset({ // We reset the stack (cf. documentation)
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'DrawerNavigator' }),
  ],
});

export default class CartScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cart',

      headerTitleStyle: {
        fontFamily: 'TTNorms-Regular',
        fontWeight: '200',
      },

      headerLeft: () => (
        <BackArrow
          style={style.STOCK_ITEM_BACK_ARROW}
           onStartShouldSetResponder={() => navigation.navigate('DashboardScreen')} 
          // onStartShouldSetResponder={() => NavigationActions.reset({
          //   index: 1,
          //   actions: [
          //     NavigationActions.navigate({ routeName: 'DashboardScreen' }),
          //   ]
          // })}
        />
      ),

      headerRight: () => (
        <CartPlus
          style={style.CART_PLUS_ICON}
          onStartShouldSetResponder={() => navigation.navigate('StockItemScreen'
            , {
              orderId: orderId,

            })}
        //onStartShouldSetResponder={() => this.props.navigation.pop(1)}
        />
      ),

      headerStyle: {
        backgroundColor: '#2467BE',
      },
      headerTintColor: '#fff',

    }
  }





  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      orderDetail: [],
      userName: '',
      loading: true,
      inputText: '',
      isDialogVisible: false,
      modalVisible: false,
      value: ''
    };
   orderId = this.props.navigation.getParam('orderId', 'default');
    //orderId = 10000
    distributorCode =  this.props.navigation.getParam('distributorCode', 'default');
    distributorId =   this.props.navigation.getParam('distributorId', 'default');
    distributorName =  this.props.navigation.getParam('distributorName', 'default');
    synchedOn = appConstant.normalDate();
    this.userDetail();
    this.orderKey();

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    console.log('props////////=======>',props)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('DashboardScreen');
    // BackHandler.exitApp();
    return true;
  }


  showDialog(isShow) {
    this.setState({ isDialogVisible: isShow });
  }

  sendInput(inputText) {
    remark = this.state.inputText;
  }


  async userDetail() {
    userId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_USERID);
  }

  async orderKey() {
    appOrderNo = await prefConstant.getAsyncStorageValue(prefConstant.KEY_APP_ORDER_NUMBER);
    // orderId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_ORDER_ID);

  }

  async componentDidMount() {
    this.loadCartData();
    this.setState({ value: this.props.value });
  }


  keyExtractor1 = (item, index) => index.toString();

  async loadCartData() {
    var orderDetailTable = await database.getOrderTableDetailData(orderId);
    console.log(orderDetailTable);
    itemCounter = orderDetailTable.length;
    cartData = [];
    cartData = orderDetailTable;
    this.setState({ cartData });

    var orderTable = await database.getOrderTableData(orderId);
    console.log(orderTable);
    orderDetail = [];
    orderDetail = orderTable;
    this.setState({ orderDetail });
    this.setState({ loading: false });
  }

  async deleteSingleItem(itemId) {
    if (itemCounter > 1) {
      Alert.alert(
        '',
        'Are you sure, you want to delete selected item?',
        [
          {
            text: 'NO',
            onPress: () => {
              {
                cancelable: true;
              }
            },
          }, {
            text: 'YES',
            onPress: () => {
              database.deleteSingleOrder(itemId, orderId),
                this.loadCartData(),
                this.setState({
                  cartData: this.state.cartData.filter(
                    (item) => itemId !== item,
                  ),
                });
            },
          },
        ],
        { cancelable: true },
      );
    } else {
      // console.log('pppppppp');
      Toast.show('At-least one item should be in list');
    }
  }

  cancelOrder() {
    Alert.alert(
      '',
      'Are you sure, you want to delete selected item?',
      [
        {
          text: 'NO',
          onPress: () => {
            {
              cancelable: true;
            }
          },
        },
        {
          text: 'YES',
          onPress: () => {
            database.deleteOrder(orderId);
            this.removeKey();
            this.props.navigation.navigate('DashboardScreen');
            Toast.show('Your order cancelled successfully.');
            // this.setState({ loading: !this.state.loading, });
            //  this.props.navigation.navigate('StockItemScreen')
            //   this.props.navigation.dispatch(resetAction)
            // await AsyncStorage.removeItem(prefConstant.KEY_ORDER_ID);
            //   RNRestart.Restart();
          },
        },
      ],
      { cancelable: true },
    );
  }

  async submitOrder() {
    this.setState({ loading: !this.state.loading });

    var submitMyOrder = await database.getMyOrder(orderId);
    var submitMyOrderDetail = await database.getSubmitOrderDetailData(orderId);
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$', submitMyOrderDetail);
    var paramDetail = submitMyOrderDetail;
    var param = {
      OrderMasterList: [
        {
          rowid: submitMyOrder.OrderId,
          apiorderno: submitMyOrder.AppOrderNo,
          orderdate: submitMyOrder.OrderDate,
          createdon: submitMyOrder.CreatedOn,
          synchedon: synchedOn,
          remark: this.state.value,
          vendorid: submitMyOrder.DistributorId,
          OrderItemList: paramDetail,
        },
      ],
    };

    console.log('==============', param);


    try {
      var postOrder = ApiConstant.BASE_URL + ApiConstant.URL_SubmitOrder;
      var response = await ApiServices.post(postOrder, param);
      var output = JSON.parse(response);


      if (output.status === true) {
        this.setState({ loading: false });
        Toast.show('Order Placed Successfully.');
        this.removeKey();
        // this.props.navigation.navigate('SplashScreen');
        this.props.navigation.popToTop();

        database.updateCartOrder(orderId);
      }

    }

    catch (e) {
      this.setState({ loading: false });
      database.updateOfflineCartOrder(orderId);
      console.log(e, 'offline store here');

      Alert.alert('There is internet connection issue', 'Order hs been placed saved in local Storage successfully.',
        [
          {
            text: 'OK',
            onPress: () => {
              {
                cancelable: true;
                // this.removeKey();
                // this.props.navigation.popToTop();
                this.removeKey();
                this.props.navigation.dispatch(StackActions.popToTop());
              }
            },
          },
        ],
        { cancelable: true });



    }




    // if (output.status === true) {
    //   this.setState({ loading: false });
    //   Toast.show('Order Placed Successfully.');
    //   this.removeKey();
    //   // this.props.navigation.navigate('SplashScreen');
    //   this.props.navigation.popToTop();

    //   database.updateCartOrder(orderId);
    // }

    // else {
    //   this.setState({ loading: false });
    //   Toast.show('Something went wrong!!');

    //   Alert.alert('There is internet connection issue', 'Order hs been placed saved in local Storage successfully.',
    //     [
    //       {
    //         text: 'OK',
    //         onPress: () => {
    //           {
    //             cancelable: true;
    //             this.removeKey();
    //             this.props.navigation.popToTop();
    //           }
    //         },
    //       },
    //     ],
    //     { cancelable: true });
    //   //Toast.show('Order hs been placed saved in local Storage successfully.');
    //   //  this.removeKey();
    //   // this.props.navigation.popToTop();
    // }

    //  database.deleteOrder(orderId);
    // this.props.navigation.navigate('StockItemScreen');
  }

  async removeKey() {
    try {
      await AsyncStorage.removeItem(prefConstant.KEY_ORDER_ID);
      console.log('done');
      return true;
    } catch (exception) {
      console.log('remove order id', exception);

      return false;
    }
  }

  async _handlePress() {
    if (this.state.qty != 0) {
      if (this.state.qty != null) {
        orderId = orderId;
        itemId = this.state.itemId;
        qty = this.state.qty;
        var dataSource = await database.updateCartItemQuantity(
          orderId,
          itemId,
          qty,
        );
        this.componentDidMount();
      } else {
        console.log('enter valid digit');
        Toast.show('enter valid digit');
      }
    } else {
      console.log('enter non zero value');
      Alert.alert(
        '',
        'You cannot put 0 quantity',
        [
          {
            text: 'OK',
            onPress: () => {
              {
                cancelable: true;
              }
            },
          },
        ],
        { cancelable: true },
      );

      Toast.show('enter non zero value');
    }
  }

  keyExtractor = (item, index) => index.toString();



  renderOrderDetail = ({ item }) => {
    netTotal = item.NetTotal;
    console.log(netTotal);

    return (
      <Card containerStyle={style.CART_CARD_STYLE}>

        <Text style={style.CART_USER}>Order To</Text>

        <Text style={style.CART_DISTRIBUTOR_TEXT}>{distributorName}</Text>

        <View style={style.CART_HORIZONTAL_LINE} />

        <View style={{ flexDirection: 'row' }}>

          <View style={{ flexDirection: 'row', marginRight: 50 }}>

            <Text style={style.CART_ORDER_NO}>Order No :</Text>

            <Text style={style.CART_ORDER_NUMBER}> {item.AppOrderNo} </Text>


          </View>

          <View style={style.CART_ORDER_VIEW}>

            <Text style={style.CART_ORDER_NO}>Order Date :</Text>

            <Text style={style.CART_ORDER_NUMBER}>{item.OrderDate}</Text>

          </View>

        </View>

      </Card>
    );
  };


  renderItem = ({ item }) => {
    const { cartData } = this.state;
    totalPrice = 0;
    cartData.forEach((item) => { totalPrice += item.Rate * item.Qty })
    fianlPrice = totalPrice.toFixed(2);
    return (
      <Card containerStyle={style.CART_CARD_STYLE}>

        <View style={{ flexDirection: 'row', flex: 1 }}>

          <Text style={{ ...style.CART_USERNAME, flex: 1 }}>{item.ItemName}</Text>

          <TouchableOpacity onPress={() => this.deleteSingleItem(item.ItemId)}>
            <Delete style={style.CART_DELETE_ICON} />
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row' }}>

          <Text style={style.CART_QUALITY_TEXT}>Quantity :</Text>

          <TextInput
            keyboardType="number-pad"
            style={style.CART_TEXTINPUT}
            onBlur={() => this._handlePress()}

            onChangeText={(qty) =>
              this.setState({
                itemId: item.ItemId,
                itemCode: item.ItemCode,
                qty: qty,
                conversion: item.Conversion,
                altUMOId: item.AltUOMId,
                rate: item.Rate,
              })
            }>
            {item.Qty}
          </TextInput>

          <Text style={style.CART_UNIT_TEXT}>{item.UMO}</Text>

          <View style={style.CART_BOTTOM_VIEW}>
            <Text style={style.CART_RATE_TEXT}>Rate :</Text>

            <Text style={style.CART_RATE}>{'\u20B9'} {item.Rate}</Text>
          </View>
        </View>

        <View style={style.CART_HORIZONTAL_LINE} />

        <View style={{ flexDirection: 'row', }}>
          <Text style={style.CART_NET_TOTAL_TEXT}> Net Value</Text>
          <Text style={style.CART_NET_TOTAL}> {'\u20B9'} {item.Rate * item.Qty} </Text>
        </View>
      </Card>
    );
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };


  handleInputTextChange = (newText) => {
    this.setState({ value: newText })
  }


  render() {
    const { modalVisible } = this.state;

    return (
      <View style={style.CART_SCREEN_VIEW}>
        <StatusBar backgroundColor="#045589" />

        {/* <View>
          <LinearGradient
            colors={['#025487', '#2165B9']}
            style={{ width: '100%' }}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}>
            <View
              style={{
                height: 60,
                flexDirection: 'row',
                elevation: 20,
              }}>
              <BackArrow
                style={style.CART_BACK_BUTTON}
                onStartShouldSetResponder={() => this.props.navigation.popToTop()} />

              <Text style={style.CART_ACTION_BAR_TITLE}>Cart</Text>

              <CartPlus
                style={style.CART_PLUS_ICON}
                onStartShouldSetResponder={() => this.props.navigation.navigate('StockItemScreen')}
                  // , {
                  //   orderId: orderId,

                  // })}
              //onStartShouldSetResponder={() => this.props.navigation.pop(1)}


              />
            </View>
          </LinearGradient>
        </View> */}

        <Spinner visible={this.state.loading} color={'#045589'} />

        <ScrollView>
          {this.state.orderDetail > 0 ? (
            <View style={style.CART_ORDER_DETAIL_BACKGROUND}>
              <Text style={style.CART_ORDER_DETAIL_TEXT}>Order Details</Text>
            </View>
          ) : (
              <View style={style.CART_ORDER_DETAIL_BACKGROUND}>
                <Text style={style.CART_ORDER_DETAIL_TEXT}>Order Details</Text>
              </View>
            )}

          <FlatList
            keyExtractor={this.keyExtractor1}
            data={this.state.orderDetail}
            renderItem={this.renderOrderDetail}
          />

          {this.state.orderDetail > 0 ? (
            <View style={style.CART_ITEM_DETAIL_BACKGROUND}>
              <Text style={style.CART_ITEM_DETAIL_TEXT}>Item Details</Text>
            </View>
          ) : (
              <View style={style.CART_ITEM_DETAIL_BACKGROUND}>
                <Text style={style.CART_ITEM_DETAIL_TEXT}>Item Details</Text>
              </View>
            )}

          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.cartData}
            extraData={this.state}
            renderItem={this.renderItem}
          />

          <Spinner visible={this.state.loading} color={'#045589'} />

          <DialogInput
            isDialogVisible={this.state.isDialogVisible}
            message={'Enter your remark'}
            submitInput={(inputText) => { this.sendInput(inputText), this.showDialog(false); }}
            closeDialog={() => {
              this.showDialog(false);
            }}></DialogInput>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!modalVisible);
              }}>
              <View style={style.STOCK_ITEM_MODAL_BACKGROUD}>

                <View style={style.CART_REMARK_DIALOG}>

                  <View style={style.STOCK_ITEM_FIVE_ORDER_HEADING}>

                    <Text style={style.CART_ADD_REMARK_TEXT}> Enter your remark </Text>

                  </View>

                  <TextInput
                    style={style.CART_REMARK_TEXTINPUT}
                    multiline={true}
                    numberOfLines={3}
                    value={this.state.value}
                    onChangeText={this.handleInputTextChange} />

                  <View style={style.CART_REMARK_BUTTON_VIEW}>

                    <Text onPress={() => { this.setModalVisible(!modalVisible) }} style={style.CART_REMARK_CANCEL}>CANCEL</Text>

                    <Text style={style.CART_REMARK_OK} onPress={() => { this.setModalVisible(!modalVisible) }}>OK</Text>

                  </View>

                </View>

              </View>

            </Modal>


            <Comment
              style={style.CART_REMARK_IMAGE} />
            <Text
              style={style.CART_REMARK_TEXT}
              onPress={() => {
                //  this.showDialog(true);
                this.setModalVisible(true);
              }}>
              Add Your Remark
            </Text>

            <View style={style.CART_TOTAL_AMOUNT_VIEW}>
              <Text style={style.CART_TOTAL_AMOUNT_TEXT_HEADING}>
                Total Amount
              </Text>

              <Text style={style.CART_TOTAL_AMOUNT}>{'\u20B9'} {fianlPrice}</Text>
            </View>
          </View>

          <View style={style.CART_BUTTON_VIEW}>
            <TouchableOpacity
              style={style.CART_CANCEL_BUTTON_BACKGROUD}
              onPress={() => {
                this.cancelOrder();
              }}>
              <View>
                <Text style={style.CART_CANCEL_ORDER_TEXT}>Cancel Order</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.CART_SUBMIT_BUTTON_BACKGROUND}
              onPress={() => {
                this.submitOrder();
              }}>
              <View>
                <Text style={style.CART_SUBMIT_ORDER_TEXT}>Submit Order</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View >
    );
  }
}