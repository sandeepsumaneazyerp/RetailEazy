import React from 'react';
import { View, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import Sort from '../../../assets/images/sort.svg';
import Close from '../../../assets/images/close.svg';
import Search from '../../../assets/images/search.svg';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import createOrderScreen from '../../screens/CreateOrderScreen';
import { database } from '../../../db/Database';

var style = require('../../../assets/style/AppStyle');
import * as appConstant from '../../../constant/AppConstant';
import * as prefConstant from '../../../constant/PrefConstant';


var searchType;
class OrderToNavigationHeader extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      searchModalVisible: false,

    }
  }
  setSearchModalVisible = (visible) => {
    this.setState({ searchModalVisible: visible });
  };


  searchItems() {


    // var pageNo = '1';
    // var offset = '';
    // var table = 'DistributorMaster';





    // if (pageNo > 0) {
    //   offset = ' LIMIT 30  OFFSET ' + ((pageNo - 1) * 30).toString();
    // }

    // const { SEARCHKEY } = this.state;
    // var searchKey = SEARCHKEY;

      this.setState({ searchModalVisible: false });

    // console.log('not done',this.searchType);
    // var dataSource =  database.getFilteredDistributorData(
    //   searchKey,
    //   this.searchType,
    //   2,
    //   offset,
    // );

     

  }


  //-------------------------------------STOCK ITEM MENU START---------------------//
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = (searchTypeee) => {
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
  };

  hideMenuu = () => {
    this._menu.hide();

  };

  showMenu = () => {
    this._menu.show();
  };


  render() {
    const { searchModalVisible } = this.state;

    return (
      <View >

        <Menu
          ref={this.setMenuRef}
          button={
            <Sort
              style={{
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center'
              }}
              onPress={this.showMenu}
            />
          }>

          <MenuItem
            onPress={() => this.hideMenu('DistributorName')}
            textStyle={{
              fontFamily: 'TTNorms-Regular',
            }}>
            Search By Name
                </MenuItem>
          <MenuDivider />
          <MenuItem
            onPress={() => this.hideMenu('DistributorCode')}
            textStyle={{
              fontFamily: 'TTNorms-Regular',
            }}>
            Search By Code
                </MenuItem>
          <MenuDivider />
          <MenuItem
            onPress={() => this.hideMenuu()}
            textStyle={{
              fontFamily: 'TTNorms-Regular',
            }}>
            All
                </MenuItem>
        </Menu>


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
                    this.searchItems()
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
        {/* FILTER MODAL */}

      </View>
    );
  }
};
export default OrderToNavigationHeader;

//module.exports = OrderToNavigationHeader