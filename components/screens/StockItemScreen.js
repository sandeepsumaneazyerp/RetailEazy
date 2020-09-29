import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, Modal, TouchableOpacity, Alert } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { database } from '../../db/Database.ts';
import * as prefConstant from '../../constant/PrefConstant';
import * as appConstant from '../../constant/AppConstant';
import oo from '../helper/routes/OrderToNavigationHeader';

import Toast from 'react-native-simple-toast';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import BackArrow from '../../assets/images/back_arrow.svg';
import Cart from '../../assets/images/cart.svg';
import List from '../../assets/images/list.svg';
import Info from '../../assets/images/info.svg';
import Scan from '../../assets/images/scan_new.svg';
import Filter from '../../assets/images/filter.svg';
import Copy from '../../assets/images/copy.svg';
import Close from '../../assets/images/close.svg';
import Checked from '../../assets/images/checked.svg';
import UnChecked from '../../assets/images/unchecked.svg';
import LastFiveClose from '../../assets/images/last_five_close.svg';
import Search from '../../assets/images/search.svg';
import AsyncStorage from '@react-native-community/async-storage';

var style = require('../../assets/style/AppStyle');

var userId, distributorId, distributorCode, distributorName, appOrderNumber, orderId, orderDate, createdOn, brand_id, unit, cartCounter, pageNo,
  searchKey, searchType, id, zampa;



export default class StockItemScreen extends React.PureComponent {

  //---------------------- STOCK ITEM HEADER(ACTION BAR) --------------------//
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Stock Items',

      headerTitleStyle: {
        fontFamily: 'TTNorms-Regular',
        fontWeight: '200',
      },

      headerLeft: () => (
        <BackArrow
          style={style.STOCK_ITEM_BACK_ARROW}
          onStartShouldSetResponder={() => navigation.goBack()} />
      ),

      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>

          <Scan style={style.STOCK_ITEM_SCAN_ICON}
            onStartShouldSetResponder={() =>
              navigation.navigate('ScannerScreen', {
                orderId: orderId,
                distributorCode: distributorCode,
                distributorId: distributorId,
                distributorName: distributorName,
              })
            }

          />

          {cartCounter == '0' ?
            <View style={style.STOCK_ITEM_CART_VIEW}>
              <Cart style={style.STOCK_ITEM_CART_NEW} />
            </View>
            :
            <View style={style.STOCK_ITEM_CART_VIEW}
              onStartShouldSetResponder={() =>
                navigation.navigate('CartScreen', {
                  orderId: orderId,
                  distributorCode: distributorCode,
                  distributorId: distributorId,
                  distributorName: distributorName,
                })
              }>
              <Cart
                style={style.STOCK_ITEM_CART_NEW}
              />

              <View style={style.STOCK_ITEM_COUNTER_BACKGROUND}>
                <Text style={style.STOCK_ITEM_COUNTER}>
                  {navigation.getParam('cartcounter', '')}
                </Text>
              </View>

            </View>}

        </View>
      ),

      headerStyle: {
        backgroundColor: '#2467BE',
      },
      headerTintColor: '#fff',

    }
  }

  //------------------------ CONSTRUCTOR ------------------------//
  constructor(props) {
    super(props);
    distributorCode = this.props.navigation.getParam('distributorCode', 'default');
    distributorId = this.props.navigation.getParam('distributorId', 'default');
    distributorName = this.props.navigation.getParam('distributorName', 'default');
    orderId = this.props.navigation.getParam('orderId', null);

    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.cartCounter();
    });

    this.state = {
      stockItemData: [],
      lastFiveOrder: [],
      isListEnd: false,
      fetching_from_db: false,
      cartItem: '',
      userId: '',
      distributorId: '',
      distributorCode: '',
      appOrderNumber: '',
      orderId: '',
      orderDate: '',
      createdOn: '',
      cartCounter: '',
      unit: 'PCS',
      updatedUnit: '',
      modalVisible: false,
      searchModalVisible: false,
      infoModalVisible: false,
      id: '',
      animating: 'true',
      hasScrolled: false,
      flatListReady: false,
      netTotal: '',
      checkBoxUmo: true,
      refresh: false,
    };
    //  this.orderInformation();
    // this.cartCounter();

    this.userDetail();
    // this.insertOrderInformation();
    this.brandId();
    //  this.insertOrderInformation();

    this.pageNo = 1;

    orderDate = appConstant.normalDate();
    createdOn = appConstant.normalDate();

  }





  //----------------------- CART COUNTER ------------------------//

  // async cartCounter() {
  //   var count = await database.cartCounter(orderId);
  //   cartCounter = count;
  //   this.setState({
  //     cartCounter,
  //   });

  //   //  console.log('=========================', count);
  //   this.props.navigation.setParams({
  //     cartcounter: this.state.cartCounter,
  //   });
  // }


  async cartCounter() {
    var count = await database.cartCounterDemo();
   
    cartCounter = count;
    this.setState({
      cartCounter,
    });

     // console.log('=========================', AsyncStorage.setItem('any_key_here', count.toString()));
    this.props.navigation.setParams({
      cartcounter: this.state.cartCounter,
    });
  }


  //------------------------ USER DETAIL------------------------//
  async userDetail() {
    userId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_USERID);
  }

  //----------------------- GET APP ORDER NUMBER -------------------------//
  async orderInformation() {
    var getappOrderNumber = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_APP_ORDER_NUMBER,
    );

    // console.log('appOrderNumber', getappOrderNumber);
  }


  //------------------------ BRAND ID ----------------------------------//
  async brandId() {
    brand_id = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_ID,
    );
  }


  // ---------------------- COMPONENT DID MOUNT --------------------------//
  async componentDidMount(item, index, value) {
    // this.orderInformation();

    if (orderId == null) {
      this.insertOrderInformation();
    }
    else {
      orderId = await prefConstant.getAsyncStorageValue(prefConstant.KEY_ORDER_ID);
      console.log('Order Id Check====================', orderId);
    }


    this.loadMoreData();
    if (!this.state.refresh) {
      this._check(item, index, value);
    }

    this.lastFiveOrders();

    // if (cartCounter > 0) {


    // } else {
    //   console.log("Need Actionnnnnnnnnnnnnnnnnnnnnnn");
    //   this.insertOrderInformation();
    // }

   

  }

  //---------------------  APP ORDER NUMBER & ORDER ID GENERATOR FUNCTION---------------------//
  async insertOrderInformation() {
    this.appOrderNumberGenerator();
    this.orderIdGenerator();
  }

  //--------------------  APP ORDER NUMBER GENERERATOR-------------------//
  async appOrderNumberGenerator() {
    appOrderNumber = await database.getAppOrderNumber();
    prefConstant.setAsyncStorageValue(prefConstant.KEY_APP_ORDER_NUMBER, appOrderNumber);
    //   console.log('appOrderNumber stored', appOrderNumber);
  }

  //----------------------- ORDER ID GENERATOR------------------------//
  async orderIdGenerator() {
    orderId = await database.getOrderId();
    prefConstant.setAsyncStorageValue(prefConstant.KEY_ORDER_ID, orderId);
    console.log('Order id stored', orderId);
  }




  //---------------------- LOAD ITEM LIST ----------------------------------//
  async loadMoreData() {
    if (!this.state.fetching_from_db && !this.state.isListEnd) {
      var brand_id = await prefConstant.getAsyncStorageValue(
        prefConstant.KEY_SWITCH_BRAND_ID,
      );
      var offset = '';

      if (this.pageNo > 0) {
        offset = ' LIMIT 10  OFFSET ' + ((this.pageNo - 1) * 30).toString();
      }

      if (orderId == null) {
        var dataSource = await database.getStockItemData(0, brand_id, this.pageNo);
        //console.log(dataSource);


      }
      else {
        var dataSource = await database.getStockItemData(orderId, brand_id, this.pageNo);
      }

      ///var dataSource = await database.getStockItemData(brand_id, this.pageNo);
      // console.log(dataSource);

      if (dataSource.length > 0) {
        this.pageNo = this.pageNo + 1;
        let stockItemData = [];
        stockItemData = dataSource;

        this.setState({

          stockItemData: [...this.state.stockItemData, ...dataSource],
          fetching_from_db: false,
        });
      } else {
        this.setState({

          fetching_from_db: false,
          isListEnd: true,
        });
      }



    }
    this._check(item, index, value);
  }


  //---------------------------- INFINITE SCROLL----------------------------//
  renderFooter() {
    return (
      <View style={style.BOTTOM_ACTIVITY_INDICATOR}>
        {this.state.stockItemData ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  }


  //---------------------------- ITEM LIST RENDER---------------------------//
  keyExtractor = (item, index) => index.toString();

  _check = (item, index, value) => {
    // alert('hi');
    const { stockItemData } = this.state;
    stockItemData[index].IsActive = value;
    this.setState({
      stockItemData: stockItemData,
      refresh: !this.state.refresh,
    })

    console.log('stockItemData===>', this.state.stockItemData);

  }


  renderItem = ({ item, index }) => {
    const { unit } = this.state;
    const { infoModalVisible } = this.state;
    console.log('item====>', item)
    var itemrate = item.PTR;
    // var itemrateDec = itemrate.toFixed(1);

    //var itemrateDec = parseFloat(itemrate);

    //  console.log(itemrateDec);

    return (

      <Card
        containerStyle={style.STOCK_ITEM_RENDER_CARD_VIEW}
        onPress={() => {
          this.onRelease();
        }}>
        <View>

          <View style={{ flexDirection: 'row', }}>

            <View style={{ flexDirection: 'column', flex: 1, }}>
              <Text style={style.STOCK_ITEM_RENDER_ITEM_NAME}>
                {item.ItemName}
              </Text>

              <Text style={style.STOCK_ITEM_RENDER_ITEM_CODE}>
                {item.ItemCode}
              </Text>

            </View>

            <View
              style={{ flexDirection: 'column', justifyContent: 'center', marginRight: -10 }}>

              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',

              }}>


                <TouchableOpacity
                  style={style.STOCK_ITEM_RENDER_INFO_IMAGE}
                  onPress={() => {
                    this.viewItemInfo(
                      item.ItemCode,
                      item.Conversion,
                      item.PTR,
                      // itemrateDec,
                      item.GroupName,
                    );
                  }}>
                  <Info style={style.STOCK_ITEM_RENDER_INFO_IMAGE} />
                </TouchableOpacity>

                <TextInput
                  keyboardType="number-pad"
                  style={style.STOCK_ITEM_RENDER_QUANTITY_TEXTINPUT}
                  onChangeText={(qty) =>
                    this.setState({
                      itemId: item.ItemId,
                      itemCode: item.ItemCode,
                      qty: qty,
                      conversion: item.Conversion,
                      altUMOId: item.AltUOMId,
                      rate: item.PTR,
                    })
                  }
                  onBlur={() => this._handlePress()}
                >{item.Qty}</TextInput>




                <Text style={style.STOCK_ITEM_RENDER_QUANTITY}>{item.IsActive === 1 ? item.UMO : item.AltUOM}</Text>

              </View>

            </View>

          </View>

          <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: -10 }}>

            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginRight: 50 }}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <CheckBox
                  center
                  //  onPress={() => { this.setState({ checkBoxUmo: true }) }}
                  onPress={() => { this._check(item, index, item.UMO) }}
                  checked={this.state.checkBoxUmo}
                  //  checkedIcon={checkBoxUmo ? <Checked style={style.STOCK_ITEM_RENDER_CHECKBOX} /> : <UnChecked style={style.STOCK_ITEM_RENDER_CHECKBOX} />}
                  checkedIcon={<Checked style={style.STOCK_ITEM_RENDER_CHECKBOX} />}
                  uncheckedIcon={<UnChecked style={style.STOCK_ITEM_RENDER_CHECKBOX} />}
                  containerStyle={{ marginRight: 0, marginLeft: 0, marginTop: 0, marginBottom: 0 }} /> */}

                <TouchableOpacity
                  onPress={() => { this._check(item, index, 1) }}

                >
                  {
                    item.IsActive === 1 ? <Checked style={style.STOCK_ITEM_RENDER_CHECKBOX} /> : <UnChecked style={style.STOCK_ITEM_RENDER_CHECKBOX} />
                  }

                </TouchableOpacity>



                <Text style={{ fontFamily: 'TTNorms-Regular', marginLeft: 8, fontSize: 12 }}>{item.UMO}</Text>

              </View>


              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <CheckBox
                  center
                  // onPress={() => { this.setState({ checkBoxUmo: false }) }}
                  checkedIcon={<Checked style={style.STOCK_ITEM_RENDER_CHECKBOX} />}
                  uncheckedIcon={<UnChecked style={style.STOCK_ITEM_RENDER_CHECKBOX} />}
                  checked={!this.state.checkBoxUmo}
                  onPress={() => { this._check(item, index, item.AltUOM) }}
                  containerStyle={{ marginRight: 0, marginLeft: 0, marginTop: 0, marginBottom: 0 }}
                /> */}

                <TouchableOpacity
                  onPress={() => { this._check(item, index, 2) }}

                >
                  {
                    item.IsActive === 2 ? <Checked style={style.STOCK_ITEM_RENDER_CHECKBOX} /> : <UnChecked style={style.STOCK_ITEM_RENDER_CHECKBOX} />
                  }
                </TouchableOpacity>
                <Text style={{ fontFamily: 'TTNorms-Regular', marginLeft: 8, fontSize: 12 }}>{item.AltUOM}</Text>
              </View>

            </View>

            <View style={style.STOCK_ITEM_RENDER_PRICE_VIEW}>
              <Text style={style.STOCK_ITEM_RENDER_PRICE_TEXTVIEW}>

                Rate / {item.UMO}
              </Text>

              <Text style={style.STOCK_ITEM_RENDER_PRICE_TEXT}>
                {'\u20B9'} {item.PTR}
                {/* {'\u20B9'} {itemrateDec} */}
              </Text>
            </View>


          </View>

        </View>

      </Card>
    );
  };


  //----------------------------- INSERT ITEM IN CART --------------------//
  async _handlePress() {
    console.log('focus out', orderId,
      appOrderNumber);
    // var netTotal = this.setState({ net: net + this.state.qty * this.state.rate });
    // console.log('NET TOTAL==================', netTotal);

    if (this.state.qty != 0) {
      if (this.state.qty != null) {
        if (this.state.rate != 0) {
          var net = this.state.qty * this.state.rate;

          //  console.log('saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', net);
          //  this.setState({ netTotal: net })
          var orderTableParam = [
            {
              userid: userId,
              customer_id: 0,
              distributor_id: distributorId,
              distributor_code: distributorCode,
              order_date: createdOn,
              createdon: orderDate,
              nettotal: net,
              brandid: brand_id,
              orderId,
              appOrderNumber,
              weborder_no: '',
              alteredon: '',
              is_sync: false,
              addedincart: true,
              remark: '',
              latitude: '35.9000',
              longitude: '45.0000',
              itemId: this.state.itemId,
              itemCode: this.state.itemCode,
              qty: this.state.qty,
              conversion: this.state.conversion,
              altUMOId: this.state.altUMOId,
              rate: this.state.rate,
            },
          ];

          console.log(orderTableParam);

          var dataSource = await database.updateCart(
            JSON.stringify(orderTableParam),
          );
          var count = await database.cartCounter(orderId);
          cartCounter = count;
          this.setState({
            cartCounter,
          });
          this.cartCounter();
          this.setState({ qty: '' })

        }
        else {
          Toast.show('Can not add zero rate item in cart');
        }
      } else {
        Toast.show('Enter valid digit');

      }
    } else {

      Toast.show('Enter non zero value');
    }
  }

  changeUnit(i) {
    // console.log(i);
  }

  //---------------------------------  ITEM INFO ------------------------//
  viewItemInfo = (ItemCode, Conversion, ItemRates, GroupName) => {
    this.setState({
      infoModalVisible: true,
      ItemCode,
      Conversion,
      ItemRates,
      GroupName,
    });
  };


  //--------------------------- MODAL START---------------------------//
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  setSearchModalVisible = (visible) => {
    this.setState({ searchModalVisible: visible });
  };

  //------------------------------ MODAL END -------------------------//

  //---------------------------- LOAD LAST FIVE ORDER --------------------------//
  async lastFiveOrders() {
    var brand_id = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_ID,
    );
    var dataSource = await database.getLastFiveOrder(brand_id);
    //  console.log('LAST FIVE ORDER',dataSource);

    let lastFiveOrder = [];
    lastFiveOrder = dataSource;
    this.setState({
      lastFiveOrder,
    });
  }


  //----------------------------- LAST FIVE ORDER RENDER ----------------------//
  renderFiveOrder = ({ item }) => {
    return (
      <View
        onPress={() => {
          this.functionCombined(item.BrandId),
            this.setModalVisible(!modalVisible);
        }}>
        <Card containerStyle={style.STOCK_ITEM_LAST_FIVE_ORDER_CART}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={style.STOCK_ITEM_LAST_FIVE_ORDER_DIST_NAME}>
              {item.DistributorName}
            </Text>

            <Copy
              style={{ marginTop: 0 }}
              onPress={() => { this.copyItem(item.OrderId), this.setModalVisible(false); }} />
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 5 }}>
            <Text style={style.STOCK_ITEM_LAST_FIVE_ORDER_NO}>Order No :</Text>

            <Text style={style.STOCK_ITEM_LAST_FIVE_ORDER}> {item.AppOrderNo} </Text>
          </View>

          <View style={style.STOCK_ITEM_LAST_FIVE_HORIZONTAL_LINE} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={style.CART_ORDER_DATE_TEXT}>Amount :</Text>

              <Text style={style.CART_ORDER_DATE}>{'\u20B9'}{item.NetTotal}</Text>
            </View>

            <View style={style.CART_ORDER_VIEW}>
              <Text style={style.CART_ORDER_DATE_TEXT}>Date :</Text>

              <Text style={style.CART_ORDER_DATE}>{item.OrderDate}</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };




  //---------------------------- COPY ITEMS ------------------------------///
  async copyItem(orderIdd) {
    // console.log(orderIdd);
    var obj;
    var dataSource = await database.getCopyOrderDetail(orderIdd);
    // console.log('COPYYYYYYYYYYYYYYY', dataSource);


    // try {
    //  // var itemArrayList = JSON.parse(dataSource);
    //   //console.log("Received Order Item Obj :" + itemArrayList[0].orderid);
    //   for (var i = 0; i < dataSource.length; i++) {
    //      obj = dataSource[i];
    //     // await this.executeReceivedItem(obj.orderid, obj.item_id, obj.item_code, obj.qty, obj.rate,
    //     //   obj.amount, obj.UnitId, obj.conversion, obj.pendingqty, sqlitedb);
    //     console.log('pppppppppppppppppppppppppppppppppppppppppppppp',obj.OrderId);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }


    var orderTableParam = [
      {
        userid: userId,
        customer_id: 0,
        distributor_id: distributorId,
        distributor_code: distributorCode,
        order_date: createdOn,
        createdon: orderDate,
        nettotal: 0,
        brandid: brand_id,
        orderId,
        appOrderNumber,
        weborder_no: '',
        alteredon: '',
        is_sync: false,
        addedincart: true,
        remark: '',
        itemId: dataSource.ItemId,
        itemCode: dataSource.ItemCode,
        qty: dataSource.Qty,
        conversion: dataSource.Conversion,
        altUMOId: dataSource.UnitId,
        rate: dataSource.Rate,
      },
    ];

    //   console.log(orderTableParam);


    var dataSource = await database.updateCart(JSON.stringify(orderTableParam));
    Toast.show('Item add successfully.');
    var count = await database.cartCounter(orderId);
    cartCounter = count;
    this.setState({
      cartCounter,
    });
    this.cartCounter();
  }


  //-------------------------------------STOCK ITEM MENU START---------------------//
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu(searchTypeee) {
    this._menu.hide();
    this.setState({ searchModalVisible: true });
    // console.log(searchTypeee);
    this.searchType = searchTypeee;

    if (searchTypeee == appConstant.AllStockSearch) {
      this.setState({ searchModalVisible: false });
      // this.loadMoreData();
      //   console.log('done');
    } else {
      //   console.log('not done');
    }
  }

  showMenu = () => {
    this._menu.show();
  };

  //-------------------------------------STOCK ITEM MENU END---------------------//

  //------------------------------ MENU SEARCH-------------------------------//
  async searchItems(item, type) {
    const { SEARCHKEY } = this.state;
    var searchKey = SEARCHKEY;
    // console.log(searchKey);
    this.setState({ searchModalVisible: false });

    //   console.log('not done');
    var dataSource = await database.getFilteredData(
      searchKey,
      this.searchType,
      orderId,
      brand_id,
      this.pageNo,
    );
    console.log('search item =======>',searchKey)
    this.setState({ loading: false });
    // if (dataSource.length < 0) {
    //     console.log('no data found');
    // }

    let stockItemData = [];
    stockItemData = dataSource;

    // this.setState({
    //   stockItemData,
    // });

    this.setState({
      stockItemData,

      fetching_from_db: false,
    });
  }

  //-----------------------------------MAIN SEARCH--------------------------//
  async searchItem(item) {
    //  console.log('stop load data here');

    // console.log('loading search');

    const { SEARCH_ITEM } = this.state;
    //  console.log(item);
    this.setState({ searchModalVisible: false });
    var dataSource = await database.getFilteredData(
      SEARCH_ITEM,
      'StockSearchByName',
      orderId,
      brand_id,
      this.pageNo,
    );

    if (dataSource.length < 0) {
      //   console.log('no data found');
      Toast.show('no data found');



    }



    if (!this.state.isListEnd) {
      let stockItemData = [];
      stockItemData = dataSource;
      this.setState({
        // stockItemData,
        stockItemData: stockItemData,

      });

      this.setState({ hasScrolled: false })


    }
  }

  render() {
    const { modalVisible } = this.state;
    const { searchModalVisible } = this.state;
    const { infoModalVisible } = this.state;

    return (
      <View style={{ height: '100%', marginBottom: 20, backgroundColor: '#fff' }}>
        <View>
          {/* SEARCH BAR */}

          <View style={{ height: 60, flexDirection: 'row', backgroundColor: '#2467BE' }}>
            <List
              style={style.STOCK_ITEM_FIVE_ORDER}
              onPress={() => {
                this.setModalVisible(true);
              }}
            />

            {/* <TextInput
              keyboardType="default"
              returnKeyType="search"
              placeholder="Search"
              placeholderTextColor='#488DCB'
              onSubmitEditing={() => this.searchItem('StockSearchByName')}
              onChangeText={(SEARCH_ITEM) => this.setState({ SEARCH_ITEM })}
              style={style.STOCK_ITEM_SEARCH_TEXTINPUT}

            /> */}


            <View style={style.STOCK_ITEM_SEARCH_VIEW}>
              <Search
                style={style.STOCK_ITEM_SEARCH_ICON_MAIN}
                onPress={() => {
                  this.setModalVisible(true);
                }}
              />
              <TextInput
                keyboardType="default"
                returnKeyType="search"
                placeholder="Search"
                placeholderTextColor='#488DCB'
                onSubmitEditing={() => this.searchItem('StockSearchByName')}
                onChangeText={(SEARCH_ITEM) => this.setState({ SEARCH_ITEM })}
                style={style.STOCK_ITEM_SEARCH_TEXTINPUT}

              />
            </View>



            {/* SORT FILTER */}

            <Menu
              ref={this.setMenuRef}
              button={
                <Filter
                  style={style.STOCK_ITEM_FILTER_ICON}
                  onPress={this.showMenu}
                />
              }>
              <MenuItem
                onPress={() => this.hideMenu(appConstant.AllStockSearch)}
                textStyle={{
                  fontFamily: 'TTNorms-Regular',
                }}>
                All Stock
                </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => this.hideMenu(appConstant.StockSearchByName)}
                textStyle={{
                  fontFamily: 'TTNorms-Regular',
                }}>
                Search By Name
                </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => this.hideMenu(appConstant.StockSearchByGroup)}
                textStyle={{
                  fontFamily: 'TTNorms-Regular',
                }}>
                Search By Group
                </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => this.hideMenu(appConstant.StockSearchByItemCode)}
                textStyle={{
                  fontFamily: 'TTNorms-Regular',
                }}>
                Search By Item Code
                </MenuItem>
            </Menu>
            {/* SORT FILTER */}
          </View>

          {/* SEARCH BAR */}
        </View>

        {/* LAST FIVE ORDER MODAL */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={style.STOCK_ITEM_MODAL_BACKGROUD}>
            <View style={style.STOCK_ITEM_FIVE_ORDER_MODAL}>
              <LinearGradient
                colors={['#2165B9', '#025487']}
                style={{
                  width: '100%',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}>
                <View style={style.STOCK_ITEM_FIVE_ORDER_HEADING}>
                  <Text style={style.STOCK_ITEM_LAST_FIVE_ORDER_MODAL_TEXT}>
                    Last 5 Ordered List
                  </Text>

                  <LastFiveClose
                    style={style.STOCK_ITEM_CLOSE_LIST}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                  />
                </View>
              </LinearGradient>

              <FlatList
                style={{ marginBottom: 20 }}
                keyExtractor={this.keyExtractor}
                data={this.state.lastFiveOrder}
                renderItem={this.renderFiveOrder}
              />
            </View>
          </View>
        </Modal>

        {/* LAST FIVE ORDER MODAL */}

        {/* INFO MODAL */}
        <Modal
          transparent={true}
          visible={infoModalVisible}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            //       console.log('fdsfsdf');
          }}>
          <View style={style.STOCK_ITEM_MODAL_BACKGROUD}>
            <View style={style.STOCK_ITEM_INFO_MODAL_BACKGROUND}>
              <Text style={style.STOCK_ITEM_INFO_TITLE}>Item Info</Text>

              <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                <Text style={style.STOCK_ITEM_INFO_HEADING}>Item Code</Text>
                <Text style={style.STOCK_ITEM_INFO_TEXT}>
                  {this.state.ItemCode}
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                <View style={{ flex: 1 }}>
                  <Text style={style.STOCK_ITEM_INFO_HEADING}>
                    Item Conversion
                  </Text>
                  <Text style={style.STOCK_ITEM_INFO_TEXT}>
                    {this.state.Conversion}
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={style.STOCK_ITEM_INFO_HEADING}>Item Rate</Text>
                  <Text style={style.STOCK_ITEM_INFO_TEXT}>
                    {this.state.ItemRates}
                  </Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                <Text style={style.STOCK_ITEM_INFO_HEADING}>
                  Item Group/Category
                </Text>
                <Text style={style.STOCK_ITEM_INFO_TEXT}>
                  {this.state.GroupName}
                </Text>
              </View>

              <Text
                style={style.STOCK_ITEM_INFO_CLOSE_TEXT}
                onPress={() => {
                  this.setState({ infoModalVisible: false });
                }}>
                Close
              </Text>
            </View>
          </View>
        </Modal>
        {/* INFO MODAL */}

        {/* FILTER MODAL */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={searchModalVisible}
          onRequestClose={() => {
            this.setSearchModalVisible(!searchModalVisible);
          }}>
          <View style={style.STOCK_ITEM_MODAL_SEARCH_VIEW}>
            <Close
              style={style.STOCK_ITEM_FILTER_MODAL_CLOSE}
              onPress={() => {
                this.setSearchModalVisible(!searchModalVisible);
              }}
            />

            <View style={style.STOCK_ITEM_FILTER_MODAL_BACKGROUND}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Search"
                  onChangeText={(SEARCHKEY) =>
                    this.setState({ SEARCHKEY, searchType })
                  }
                />

                <Search
                  style={style.STOCK_ITEM_SEARCH_ICON}
                  onPress={() => {
                    this.searchItems();
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
        {/* FILTER MODAL */}

        <FlatList
          initialNumToRender={this.state.stockItemData.length}
          keyExtractor={this.keyExtractor}
          data={this.state.stockItemData}
          onEndReachedThreshold={0.5}
          onEndReached={() => { this.loadMoreData() }}
          ListFooterComponent={this.renderFooter()}
          extraData={this.state.stockItemData}
          renderItem={this.renderItem}
        />

      </View>
    );
  }
}

