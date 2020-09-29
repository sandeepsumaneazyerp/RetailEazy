import React from 'react';

import { Text, View, StatusBar, } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { database } from '../../db/Database.ts';
import { DBVariable } from '../../db/DBVariable.ts';
import AppStyle from '../../assets/style/AppStyle';
import * as ApiServices from '../../network/ApiServices';
import { ApiConstant } from '../../network/ApiConstant';
import * as prefConstant from '../../constant/PrefConstant';
var style = require('../../assets/style/AppStyle');

var progress = 0;
var pageNo = 0;
var alteredOn = "";
const dbVariable = new DBVariable();

export default class DatabaseScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progressMsg: "",
      fill: 0,
    };
  }

  async componentDidMount() {
    this.MasterApi("BrandMaster");
  }

  async MasterApi(key) {

    progress = progress + 2;

    if (progress == 100) {
      this.setState({ fill: 2 });
      this.setState({ progressMsg: "Loading More Data Please wait..." });
    } else {
      this.setState({ fill: progress });
      this.setState({ progressMsg: "Creating Masters Please wait..." });
    }

    if (key === 'DesignationMaster') {
      this.setState({ fill: 100 });
    }

    /////------------------------------------------- Brand API -------------------------------------------------/////
    if (key === 'BrandMaster') {
      var brandApi = ApiConstant.BASE_URL + ApiConstant.URL_BrandMaster;
      if (pageNo === 0) {
        var brandTable = dbVariable.BrandTable;
        alteredOn = await database.getAlterOn(brandTable.BRAND_TABLE, brandTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(brandApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        await database.insertUpdateBrand(output.result);
        pageNo = pageNo + 1;
        this.MasterApi("BrandMaster");
      } else {
        pageNo = 0;
        this.MasterApi("DistributorMaster");
      }
    }

    /////------------------------------------------- Distributor API -------------------------------------------------/////

    if (key === 'DistributorMaster') {
      var distributorApi = ApiConstant.BASE_URL + ApiConstant.URL_DistributorMaster;
      if (pageNo === 0) {
        var dealerTable = dbVariable.DistributorMaster;
        alteredOn = await database.getAlterOn(dealerTable.DISTRIBUTOR_TABLE, dealerTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(distributorApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var distributorStringArray = JSON.stringify(output.result);
        await database.insertUpdateDistributorData(distributorStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("DistributorMaster");
      } else {
        pageNo = 0;
        this.MasterApi("DealerMaster");
      }
    }

    /////------------------------------------------- Dealer  API -------------------------------------------------/////

    if (key === 'DealerMaster') {
      var dealerApi = ApiConstant.BASE_URL + ApiConstant.URL_GetDealer;
      if (pageNo === 0) {
        var dealerTable = dbVariable.DealerMaster;
        alteredOn = await database.getAlterOn(dealerTable.DEALER_TABLE, dealerTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(dealerApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        await database.insertUpdateDealerData(JSON.stringify(output.result));
        pageNo = pageNo + 1;
        this.MasterApi("DealerMaster");
      } else {
        pageNo = 0;
        this.MasterApi("ItemGroupMaster");
      }
    }

    /////------------------------------------------- Item group  API -------------------------------------------------/////


    if (key === 'ItemGroupMaster') {
      var itemGroupApi = ApiConstant.BASE_URL + ApiConstant.URL_ItemGroupMaster;
      if (pageNo === 0) {
        var itemGroupTable = dbVariable.ItemsMaster;
        alteredOn = await database.getAlterOn(itemGroupTable.ITEMS_TABLE, itemGroupTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(itemGroupApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var itemGroupStringArray = JSON.stringify(output.result);
        await database.insertUpdateItemGroupData(itemGroupStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("ItemGroupMaster");
      } else {
        pageNo = 0;
        this.MasterApi("ItemMaster");
      }
    }

    /////------------------------------------------- Item API -------------------------------------------------/////

    if (key === 'ItemMaster') {
      var itemMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_ItemMaster;
      if (pageNo === 0) {
        var itemMasterTable = dbVariable.ItemsMaster;
        alteredOn = await database.getAlterOn(itemMasterTable.ITEMS_TABLE, itemMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(itemMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var itemStringArray = JSON.stringify(output.result);
        console.log("Item Master Array : " + itemStringArray);
        await database.insertUpdateItemMasterData(itemStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("ItemMaster");
      } else {
        pageNo = 0;
        this.MasterApi("UnitMaster");
      }
    }



    /////------------------------------------------- Unit Master  API -------------------------------------------------/////
    if (key === 'UnitMaster') {
      var unitMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_UnitMaster;
      if (pageNo === 0) {
        var unitMasterTable = dbVariable.UnitMaster;
        alteredOn = await database.getAlterOn(unitMasterTable.UNITMASTER_MASTER, unitMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(unitMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var unitMasterStringArray = JSON.stringify(output.result);
        await database.insertUpdateUnitMasterData(unitMasterStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("UnitMaster");
      } else {
        pageNo = 0;
        this.MasterApi("DivisionMaster");
      }
    }

    /////------------------------------------------- Division Master  API -------------------------------------------------/////

    if (key === 'DivisionMaster') {
      var divisionMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_Division;
      if (pageNo === 0) {
        var divisionMasterTable = dbVariable.DivisionTable;
        alteredOn = await database.getAlterOn(divisionMasterTable.DIVISION_TABLE, divisionMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(divisionMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var divisionStringArray = JSON.stringify(output.result);
        await database.insertUpdateDivisionData(divisionStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("DivisionMaster");
      } else {
        pageNo = 0;
        this.MasterApi("UserDivisionMappingMaster");
      }
    }

    /////------------------------------------------- User Division Mapping API -------------------------------------------------/////

    if (key === 'UserDivisionMappingMaster') {
      var divisionMappingMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_UserDivisionMapping;
      if (pageNo === 0) {
        var divisionMappingMasterTable = dbVariable.DivisionMappingTable;
        alteredOn = await database.getAlterOn(divisionMappingMasterTable.DIVISIONMAP_TABLE, divisionMappingMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(divisionMappingMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var userDivisionMappingStringArray = JSON.stringify(output.result);
        await database.insertUpdateUserDivisionMappingData(userDivisionMappingStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("UserDivisionMappingMaster");
      } else {
        pageNo = 0;
        this.MasterApi("CityMaster");
      }
    }

    /////------------------------------------------- City API -------------------------------------------------/////

    if (key === 'CityMaster') {
      var cityMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_CityMaster;
      if (pageNo === 0) {
        var cityMasterTable = dbVariable.CityMaster;
        alteredOn = await database.getAlterOn(cityMasterTable.CITYMASTERTABLE, cityMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(cityMasterApi, param);
      var output = JSON.parse(response);
      console.log('qqqqqqqqqqqqqqqqqqqqqq', output);

      if (output.status === true) {
        var cityMasterStringArray = JSON.stringify(output.result);
        await database.insertUpdateCityMasterData(cityMasterStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("CityMaster");
      } else {
        pageNo = 0;
        this.MasterApi("StateMaster");
      }
    }


    /////------------------------------------------- State API -------------------------------------------------/////

    if (key === 'StateMaster') {
      var stateMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_StateMaster;
      if (pageNo === 0) {
        var stateMasterTable = dbVariable.StateMaster;
        alteredOn = await database.getAlterOn(stateMasterTable.STATEMASTERTABLE, stateMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(stateMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var stateMasterStringArray = JSON.stringify(output.result);
        await database.insertUpdateStateMasterData(stateMasterStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("StateMaster");
      } else {
        pageNo = 0;
        this.MasterApi("PlacedOrderMaster");
      }
    }


    /////------------------------------------------- Placed Order API -------------------------------------------------/////

    if (key === 'PlacedOrderMaster') {
      var placedOrderMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_GetPlacedOrder;
      if (pageNo === 0) {
        var placedOrderMasterTable = dbVariable.OrderTable;
        alteredOn = await database.getAlterOn(placedOrderMasterTable.ORDER_TABLE, placedOrderMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(placedOrderMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        await database.insertUpdatePlacedOrderData(JSON.stringify(output.result));
        pageNo = pageNo + 1;
        this.MasterApi("PlacedOrderMaster");
      } else {
        pageNo = 0;
        this.MasterApi("ReceivedOrderMaster");
      }
    }


    /////------------------------------------------- Received Order API -------------------------------------------------/////

    if (key === 'ReceivedOrderMaster') {
      var receivedOrderMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_GetReceivedOrder;
      if (pageNo === 0) {
        var receivedOrderMasterTable = dbVariable.ReceivedOrderTable;
        alteredOn = await database.getAlterOn(receivedOrderMasterTable.RECEIVED_ORDER_TABLE, receivedOrderMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(receivedOrderMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        await database.insertUpdateReceivedOrderData(JSON.stringify(output.result));
        pageNo = pageNo + 1;
        this.MasterApi("ReceivedOrderMaster");
      } else {
        pageNo = 0;
        this.MasterApi("BillingMaster");
      }
    }


    /////------------------------------------------- Billing API -------------------------------------------------/////

    if (key === 'BillingMaster') {
      var billingMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_GetBillingDetail;
      if (pageNo === 0) {
        var billingMasterTable = dbVariable.BillingTable;
        alteredOn = await database.getAlterOn(billingMasterTable.BILLING_TABLE, billingMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(billingMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        await database.insertUpdateBillingData(JSON.stringify(output.result));
        pageNo = pageNo + 1;
        this.MasterApi("BillingMaster");
      } else {
        pageNo = 0;
        this.MasterApi("PrimaryCategory");
      }
    }



    /////------------------------------------------- Primary Category API -------------------------------------------------/////

    if (key === 'PrimaryCategory') {
      var primaryCategoryApi = ApiConstant.BASE_URL + ApiConstant.URL_PrimaryCategory;
      if (pageNo === 0) {
        var primaryCategoryMasterTable = dbVariable.PrimaryCategory;
        alteredOn = await database.getAlterOn(primaryCategoryMasterTable.PRIMARY_CATEGORY_TABLE, primaryCategoryMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(primaryCategoryApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        await database.insertUpdatePrimaryCategoryData(JSON.stringify(output.result));
        pageNo = pageNo + 1;
        this.MasterApi("PrimaryCategory");
      } else {
        pageNo = 0;
        this.MasterApi("SecondaryCategory");
      }
    }



    //  /////------------------------------------------- Secondary Category API -------------------------------------------------/////

    if (key === 'SecondaryCategory') {
      var secondaryCategoryApi = ApiConstant.BASE_URL + ApiConstant.URL_SecondaryCategory;
      if (pageNo === 0) {
        var secondaryCategoryMasterTable = dbVariable.SecondaryCategory;
        alteredOn = await database.getAlterOn(secondaryCategoryMasterTable.SECONDARY_CATEGORY_TABLE, secondaryCategoryMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(secondaryCategoryApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        await database.insertUpdateSecondaryCategoryData(JSON.stringify(output.result));
        pageNo = pageNo + 1;
        this.MasterApi("SecondaryCategory");
      } else {
        pageNo = 0;
        this.MasterApi("PurchaseInvoice");
      }
    }


    //  /////------------------------------------------- Purchase Invoice Table API -------------------------------------------------/////

    if (key === 'PurchaseInvoice') {
      var purchaseInvoiceApi = ApiConstant.BASE_URL + ApiConstant.URL_PurchaseInvoice;
      if (pageNo === 0) {
        var purchaseInvoiceMasterTable = dbVariable.PurchaseInvoiceTable;
        alteredOn = await database.getAlterOn(purchaseInvoiceMasterTable.PURCHASE_INVOICE_TABLE, purchaseInvoiceMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(purchaseInvoiceApi, param);
      var output = JSON.parse(response);

      console.log('==================', output);


      if (output.status === true) {
        await database.insertUpdatePurchaseInvoiceData(JSON.stringify(output.result));
        pageNo = pageNo + 1;
        this.MasterApi("PurchaseInvoice");
      } else {
        pageNo = 0;
        this.MasterApi("DesignationMaster");
      }
    }





    /////------------------------------------------- Designation API -------------------------------------------------/////

    if (key === 'DesignationMaster') {
      var designationMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_GetDesignation;
      if (pageNo === 0) {
        var designationMasterTable = dbVariable.DesignationTable;
        alteredOn = await database.getAlterOn(designationMasterTable.DESIGNATION_TABLE, designationMasterTable.KEY_AlteredOn);
      }
      var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };
      var response = await ApiServices.post(designationMasterApi, param);
      var output = JSON.parse(response);
      if (output.status === true) {
        var getDesignationStringArray = JSON.stringify(output.result);
        await database.insertUpdateGetDesignationData(getDesignationStringArray);
        pageNo = pageNo + 1;
        this.MasterApi("DesignationMaster");
      } else {
        pageNo = 0;
        //this.MasterApi("DistributorDivisionTaggingMaster");
        //console.warn('==========================DONE===========================');
        prefConstant.setAsyncStorageValue(prefConstant.KEY_ISLOGIN, true);
        this.props.navigation.navigate('NavigationRoutes')
      }
    }



    /////------------------------------------------- Designation API -------------------------------------------------/////

    // if (key === 'DistributorDivisionTaggingMaster') {
    //   var destributionDivisionTaggingMasterApi = ApiConstant.BASE_URL + ApiConstant.URL_DistributorDivisionTagging;

    //   if (pageNo === 0) {

    //     var distributionTaggingMasterTable = dbVariable.DistributorDivisionTable;
    //     alteredOn = await database.getAlterOn(distributionTaggingMasterTable.DIST_DIVISION_TABLE, distributionTaggingMasterTable.KEY_AlteredOn);
    //   }

    //   var param = { 'alteredon': alteredOn, 'pageindexno': pageNo };

    //   var response = await ApiServices.post(destributionDivisionTaggingMasterApi, param);
    //   console.log(response);
    //   var output = JSON.parse(response);

    //   if (output.status === true) {
    //     
    //     var getDistributionDivisionTaggingStringArray = JSON.stringify(output.result);
    //     await database.insertUpdateGetDistributionDivisionTagging(getDistributionDivisionTaggingStringArray);
    //     pageNo = pageNo + 1;
    //     this.MasterApi("DistributorDivisionTaggingMaster");
    //   } else {
    //     pageNo = 0;
    //     this.MasterApi("ItemMaster");
    //   }
    // }
  }

  render() {
    return (
      <View
        style={style.DATABASE_SCREEN_CONTAINER}>
        {/* status bar */}
        <StatusBar backgroundColor="#045589" />

        <View
          style={style.DATABASE_SCREEN_PROGRESS_BAR_TEXT}>
          <Text style={AppStyle.DbScreenText}>{this.state.progressMsg}</Text>

          <AnimatedCircularProgress
            style={{
              width: '90%',
              margin: 30,
            }}
            size={200}
            width={12}
            rotation={0}
            fill={this.state.fill}
            tintColor="#045589"

            backgroundColor="#dcdcdc"
          />
        </View>
      </View>
    );
  }
}
