import React, { Component } from 'react';
import { View, StatusBar, Image, Platform, PermissionsAndroid } from 'react-native';
import { DBVariable } from '../../db/DBVariable';
import { database } from '../../db/Database.ts';
import * as prefConstant from '../../constant/PrefConstant';
import * as AppConstant from '../../constant/AppConstant';

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
    this.brand();
    this.brandName();

console.log('props===========>',props)
//this.props.navigation.closeDrawer();
  }





  async componentDidMount() {
    // var zz = await AppConstant.latlong();
    // console.log('#################################', zz);


    var dataSource = await database.getBrand();

    if (dataSource.length == 1) {
      prefConstant.setAsyncStorageValue(
        prefConstant.KEY_SWITCH_BRAND_ID,
        JSON.parse(dataSource[0].BrandId),
      );

      prefConstant.setAsyncStorageValue(
        prefConstant.KEY_SWITCH_BRAND_NAME,
        dataSource[0].BrandName,
      );
    } else {
      console.log('brand not selected');
      this.brand();
    }
  }

  async brandName() {
    var brandname = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_NAME,
    );
  }

  async brand() {
    var brand_id = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_ID,
    );

    var brand_name = await prefConstant.getAsyncStorageValue(
      prefConstant.KEY_SWITCH_BRAND_NAME,
    );

    if (brand_id == 'null') {
      this.props.navigation.navigate('SwitchBrandScreen');
    } else {
      console.log('everything is fine');
    }
  }

  render() {
    return (
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <StatusBar backgroundColor="#045589" />
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    );
  }
}
export default DashboardScreen;
