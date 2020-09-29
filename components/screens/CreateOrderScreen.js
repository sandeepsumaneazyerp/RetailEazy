import React, { Component } from 'react';
import { Text, View, StatusBar, Image, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { database } from '../../db/Database.ts';
import Snackbar from 'react-native-snackbar';
import * as prefConstant from '../../constant/PrefConstant';
import CartScreen from './CartScreen';
var style = require('../../assets/style/AppStyle');

export default class CreateOrderScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = { distributorData: [] };
    this.userInfo();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.cartCounter();

    });
    // this.focusListener = this.props.navigation.addListener('didFocus', () => {
    //   this.orderIdGenerator();
    // });
    // var zampa =  orderToNavigationHeader.searchItems();
    // console.log('=====================================', zampa);
  }

//--------------------------- USELESS BUT IMPORTANT REMOVE AT YOUR OWN RISK-----------------------//
  
  // async orderIdGenerator() {
  //   getOrderId = await prefConstant.getAsyncStorageValue(
  //     prefConstant.KEY_ORDER_ID,
  //   );
  //   console.log('Create Order Screen: Order Id ', getOrderId);

  //   if (getOrderId != null) {
  //     console.log('generate Cart counter');
  //     this.cartCounter(getOrderId);
  //   }
  // }

  //  async cartCounter(getOrderId) {
  //   count = await database.cartCounter(getOrderId);
  //   // cartCounter = count;
  //   // this.setState({
  //   //   cartCounter,
  //   // });
  //   console.log('updated cart counter', count);
  // }

  async componentDidMount() {
    var brand_id = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_ID,
    );
    var pageNo = '1';
    var offset = '';
    var table = 'DistributorMaster';

    if (pageNo > 0) {
      offset = ' LIMIT 30  OFFSET ' + ((pageNo - 1) * 30).toString();
    }
    var dataSource = await database.getDistributorData(table, brand_id, offset);
    let distributorData = [];
    distributorData = dataSource;
    this.setState({
      distributorData,
    });

  }


  endReached() {
    Snackbar.show({
      text: 'No More Seller Found',
      duration: 900,

    });
  }


 

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <View style={{ marginBottom: 5 }}>
      <Card
        containerStyle={style.CREATE_ORDER_CARD}
        onStartShouldSetResponder={() => {

          this.props.navigation.navigate('StockItemScreen')
          // if (getOrderId == '' || count == 0) {
          //   this.props.navigation.navigate('StockItemScreen', {
          //     distributorCode: item.DistributorCode,
          //     distributorId: item.DistributorId,
          //     distributorName: item.DistributorName,
          //   });
          // } else {
          //   this.props.navigation.navigate('CartScreen', {
          //     distributorCode: item.DistributorCode,
          //     distributorId: item.DistributorId,
          //     distributorName: item.DistributorName,
          //     orderId: getOrderId,
          //   });
          // }
        }}>
        <Text style={style.CREATE_ORDER_DIST_NAME}>{item.DistributorName}</Text>

        {/* <Text style={style.CREATE_ORDER_DIST_ADDRESS}>{item.Address}</Text> */}

        <Text style={style.CREATE_ORDER_DIST_ADDRESS}>
          {item.DistributorCode}
        </Text>
      </Card>
    </View>
  );
  async userInfo() {
  var  userName = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_USERNAME,
    );
    brand_id = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_ID,
    );

   var brandName = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_NAME,
    );
  }

  async cartCounter() {
  var  cartCounter = await database.cartCounterDemo();
    console.log('updated cart counter==............-------', cartCounter);

  var  orderId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_ORDER_ID);
    console.log('Order Id Check====================', orderId);

  }
  render(cartCounter,orderId) {
  //  if(cartCounter==0){
      return (
        <View style={{ paddingBottom: 30 }}>
          <StatusBar backgroundColor="#045589" />
  
  
          <FlatList
            style={{ paddingBottom: 10 }}
            keyExtractor={this.keyExtractor}
            data={this.state.distributorData}
            renderItem={this.renderItem}
            onEndReached={() => this.endReached()}
          />
        </View>
      );
   // }
    // else{
    //   // this.props.navigation.navigate('CartScreen', { orderId: orderId} );
    //   return(
    //     <CartScreen navigation={this.props.navigation} orderId={orderId} />
    //   )
    // }
   
  }
}
