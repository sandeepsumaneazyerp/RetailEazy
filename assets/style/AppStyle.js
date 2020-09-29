'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  //---------------------------------------------- Margin  -----------------------------------------------//
  _marginTop10: { marginTop: 10 },
  _marginTop20: { marginTop: 20 },
  _marginTop30: { marginTop: 30 },
  _marginTop40: { marginTop: 40 },
  _marginTop50: { marginTop: 50 },
  _marginTop60: { marginTop: 60 },
  _marginTop70: { marginTop: 70 },
  _marginTop80: { marginTop: 80 },
  _marginTop90: { marginTop: 90 },
  _marginTop100: { marginTop: 100 },

  _marginBottom10: { marginBottom: 10 },
  _marginBottom20: { marginBottom: 20 },
  _marginBottom30: { marginBottom: 30 },
  _marginBottom40: { marginBottom: 40 },
  _marginBottom50: { marginBottom: 50 },
  _marginBottom60: { marginBottom: 60 },
  _marginBottom70: { marginBottom: 70 },
  _marginBottom80: { marginBottom: 80 },
  _marginBottom90: { marginBottom: 90 },
  _marginBottom100: { marginBottom: 100 },

  _marginLeft10: { marginLeft: 10 },
  _marginLeft20: { marginLeft: 20 },
  _marginLeft30: { marginLeft: 30 },
  _marginLeft40: { marginLeft: 40 },
  _marginLeft50: { marginLeft: 50 },
  _marginLeft60: { marginLeft: 60 },
  _marginLeft70: { marginLeft: 70 },
  _marginLeft80: { marginLeft: 80 },
  _marginLeft90: { marginLeft: 90 },
  _marginLeft100: { marginLeft: 100 },

  _marginRight10: { marginRight: 10 },
  _marginRight20: { marginRight: 20 },
  _marginRight30: { marginRight: 30 },
  _marginRight40: { marginRight: 40 },
  _marginRight50: { marginRight: 50 },
  _marginRight60: { marginRight: 60 },
  _marginRight70: { marginRight: 70 },
  _marginRight80: { marginRight: 80 },
  _marginRight90: { marginRight: 90 },
  _marginRight100: { marginRight: 100 },

  //---------------------------------------------- Margin  -----------------------------------------------//

  // Splash Screen
  SPLASH_SCREEN_CONTAINER: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  SPLASH_SCREEN_LOGO: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  //Database screen
  DATABASE_SCREEN_CONTAINER: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  DATABASE_SCREEN_PROGRESS_BAR_TEXT: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  // Login screen style
  forgetPasswordText: {
    color: '#045589',
    textAlign: 'right',
    marginRight: 20,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontFamily: 'TTNorms-Regular',
  },

  textInputEmail: { flexDirection: 'row', marginHorizontal: 20 },

  container: { backgroundColor: '#ffffff' },

  logoImage: { width: 120, height: 120 },

  textInputImage: {
    width: 25,
    height: 25,
    marginTop: 40,
    marginRight: 7,
  },

  signInButtonImage: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    marginRight: 20,
  },

  boldText: {
    fontSize: 20,
    fontFamily: 'TTNorms-Bold',
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    width: '100%',
    marginTop: 10,
    fontFamily: 'TTNorms-Medium',
    fontSize: 19,
  },

  horizontalLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  horizontalLineDemo: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
    flexDirection: 'row',
    flex: 1,
  },

  verticalLine: {
    borderBottomColor: 'grey',
    borderLeftWidth: 0.5,
    marginTop: 20,
    marginHorizontal: 7,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 18,
    fontFamily: 'TTNorms-Regular',
  },
  emailTextField: {
    flex: 1,
    marginLeft: 15,
    marginTop: 4
  },
  marginTop50: {
    marginTop: 50
  },
  loginButtonTextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordEye: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    marginTop: 15,
  },
  marginVertical20: { marginVertical: 20 },

  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5,
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: '#045589',
  },
  loginButtonContainer: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5
  },
  versionText: {
    textAlign: 'right',
    marginRight: 20,
    color: '#045589',
    marginBottom: 40,
    textDecorationLine: 'underline',
    fontFamily: 'TTNorms-Regular',
  },

  DbScreenText: {
    textAlign: 'right',
    marginRight: 20,
    fontSize: 18,
    fontFamily: 'TTNorms-Regular',

  },


  /////////////////---------------------- DASHBOARD NAVIGATION DRAWER SCREEN STYLE -----------------------------//////////////////

  DASHBOARD_PROFILE_HEADER: {
    backgroundColor: '#307ecc',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },

  DASHBOARD_VERSION_TEXT: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontFamily: 'TTNorms-Regular',
    marginBottom: 10,
    fontSize: 10
  },


  DASHBOARD_PROFILE_HEADER_PIC_CIRCLE: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    color: '#0E5B9A',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  DASHBOARD_SIDEMENU_PROFILE_ICON:
  {
    resizeMode: 'center',
    width: 90,
    height: 90,
    borderRadius: 90 / 2
  },

  DASHBOARD_USERNAME: {
    color: '#fff',
    marginTop: 10,
    fontFamily: 'TTNorms-Regular'
  },

  DASHBOARD_BRANDNAME: {
    color: '#fff',
    fontFamily: 'TTNorms-Regular'
  },

  DASHBOARD_DRAWER_VIEW_STYLE: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white'
  },

  DASHBOARD_SIDEMENU_ICON: {
    resizeMode: 'center',
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 20
  },

  DASHBOARD_MENUTEXT: {
    fontSize: 13,
    color: '#222222',
    marginLeft: 10,
    fontFamily: 'TTNorms-Regular',
  },

  DASHBOARD_SEPARATOR: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2'
  },

  DASHBOARD_LOGOUT_BUTTON: {
    backgroundColor: '#F85E5E',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3
  },

  DASHBOARD_LOGOUT_IMAGE: {
    height: 20,
    width: 20,
    justifyContent: 'center'
  },

  DASHBOARD_LOGOUT_TEXT: {
    fontSize: 13,
    color: '#222222',
    marginLeft: 10,
    fontFamily: 'TTNorms-Regular',
    textAlign: 'center',
    paddingVertical: 8,
    color: 'white'
  },


  /////////////////-------------------------------- KYC SCREEN STYLE  -----------------------------/////////////////

  KYC_VIEW_CONTAINER: { backgroundColor: '#fff' },

  KYC_HEADING_VIEW: { alignItems: 'center', marginVertical: 20 },

  KYC_HEADING_TEXT: { fontFamily: 'TTNorms-Bold', fontSize: 21, color: '#000' },

  KYC_FIELD_VIEW: { marginHorizontal: 20, marginTop: 10, marginBottom: 5 },

  KYC_FIELD_TEXT: { fontFamily: 'TTNorms-Medium', fontSize: 18, color: '#000' },

  KYC_FIELD_TEXTINPUT: { fontFamily: 'TTNorms-Regular', marginTop: 5, fontSize: 15, backgroundColor: '#F9F9F9', borderRadius: 5 },

  KYC_BUTTON_TOUCHABLE: { marginVertical: 40, marginHorizontal: 20, },



  /////////////////-------------------------------- PROFILE SCREEN STYLE  -----------------------------/////////////////

  PROFILE_VIEW_CONTAINER: { backgroundColor: '#fff' },

  PROFILE_HEADING_VIEW: { alignItems: 'center', marginVertical: 20 },

  PROFILE_HEADING_TEXT: { fontFamily: 'TTNorms-Bold', fontSize: 21, color: '#000' },

  PROFILE_FIELD_VIEW: { marginHorizontal: 20, marginTop: 10, marginBottom: 5 },

  PROFILE_FIELD_TEXT: { fontFamily: 'TTNorms-Medium', fontSize: 18, color: '#000' },

  PROFILE_FIELD_TEXTINPUT: { fontFamily: 'TTNorms-Regular', marginTop: 5, fontSize: 15, backgroundColor: '#F9F9F9', borderRadius: 5 },

  PROFILE_BUTTON_TOUCHABLE: { marginVertical: 40, marginHorizontal: 20, },


  /////////////////-------------------------------- STOCK SCREEN STYLE  -----------------------------/////////////////

  STOCK_ITEM_HEADER_TITLE: {
    fontFamily: 'TTNorms-Regular',
    fontWeight: '200',
  },




  STOCK_ITEM_RENDER_CARD_VIEW: { borderRadius: 10, marginHorizontal: '4%', backgroundColor: '#fff', marginTop: 10 },

  STOCK_ITEM_RENDER_ITEM_NAME: { fontSize: 15, fontFamily: 'TTNorms-Medium', },

  STOCK_ITEM_RENDER_ITEM_CODE: { fontFamily: 'TTNorms-Regular', marginTop: 5, fontSize: 12 },

  STOCK_ITEM_RENDER_INFO_IMAGE: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginTop: 5
  },


  STOCK_ITEM_RENDER_CHECKBOX: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  STOCK_ITEM_RENDER_QUANTITY_TEXTINPUT: {
    fontFamily: 'TTNorms-Regular',
    backgroundColor: '#ff0000',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#F9F9F9',
    width: 50,
    height: 38,
    borderColor: '#BFE1FF',
    borderWidth: 2,
    borderRadius: 10,
    color: '#236FB4'
  },

  STOCK_ITEM_RENDER_QUANTITY: {
    fontFamily: 'TTNorms-Regular',

    marginHorizontal: 5,
    fontSize: 10,
    textAlign: 'center'
  },

  STOCK_ITEM_RENDER_PRICE_VIEW: { flexDirection: 'column', marginBottom: 10, marginRight: 10, justifyContent: 'flex-end' },

  STOCK_ITEM_RENDER_PRICE_TEXTVIEW: { textAlign: 'center', color: '#045589', fontSize: 12, },

  STOCK_ITEM_RENDER_PRICE_TEXT: { textAlign: 'center', fontSize: 12, alignContent: 'center', alignItems: 'center', alignSelf: 'center' },

  STOCK_ITEM_BACK_ARROW: {

    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  STOCK_ITEM_ACTION_BAR_TITLE: {
    fontFamily: 'TTNorms-Regular',
    marginTop: 5,
    fontSize: 15,
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    flex: 1,
  },

  STOCK_ITEM_ACTION_BAR_ITEMS: {
    width: 25,
    height: 25,

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  STOCK_ITEM_FILTER: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  STOCK_ITEM_SEARCH_VIEW: {
    flex: 1,
    borderColor: '#125DA1',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    backgroundColor: '#1F64B5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  STOCK_ITEM_SEARCH_ICON_MAIN: {

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 5
  },

  STOCK_ITEM_SEARCH_TEXTINPUT: {
    fontFamily: 'TTNorms-Medium',
    fontSize: 17,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',

    flex: 1,
    // borderColor: '#045589',
    // borderWidth: 1,
    // borderRadius: 20,

  },


  BOTTOM_ACTIVITY_INDICATOR: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  STOCK_ITEM_COPY_ICON: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  STOCK_ITEM_BACK_BUTTON_TOUCH: {

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  STOCK_ITEM_BACK_BUTTON: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


  STOCK_ITEM_INFO_MODAL_BACKGROUND: {

    width: '98%',
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 8,

  },

  STOCK_ITEM_MODAL_BACKGROUD: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    backgroundColor: '#00000070'
  },

  STOCK_ITEM_MODAL_SEARCH_VIEW: {
    flex: 1,
    justifyContent: "center",
    padding: 6,
    backgroundColor: '#00000070'
  },

  STOCK_ITEM_LAST_FIVE_ORDER_MODAL: {

    height: '95%',
    width: '98%',
    backgroundColor: "white",
    borderRadius: 20,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  STOCK_ITEM_LAST_FIVE_ORDER_MODAL_TEXT: {

    textAlign: "center",
    fontSize: 20,
    color: '#fff',
    fontFamily: 'TTNorms-Bold',
    flex: 1
  },

  STOCK_ITEM_LAST_FIVE_ORDER_CART: {
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: '4%',
    marginBottom: 0
  },

  STOCK_ITEM_LAST_FIVE_ORDER_DIST_NAME: {
    color: '#4C82C0',
    fontSize: 16,
    fontFamily: 'TTNorms-Bold',
    marginTop: 0,
    flex: 1
  },

  STOCK_ITEM_LAST_FIVE_ORDER_NO: {
    fontFamily: 'TTNorms-Medium',
    marginTop: 3,
    fontSize: 13,
    color: '#1f1f1f'
  },

  STOCK_ITEM_LAST_FIVE_ORDER: {
    fontFamily: 'TTNorms-Regular',
    marginTop: 3,
    fontSize: 13,
    marginHorizontal: 10,
    color: '#949494'
  },

  STOCK_ITEM_LAST_FIVE_HORIZONTAL_LINE: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    marginVertical: 5
  },


  STOCK_ITEM_INFO_TITLE: {
    textAlign: 'center',
    fontFamily: 'TTNorms-Regular',
    color: '#045589',
    marginTop: 18,
    fontSize: 17, 
    marginBottom: 5
  },

  STOCK_ITEM_INFO_HEADING: {
    fontWeight: 'bold',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    paddingLeft: 5,
    paddingVertical: 5
  },


  STOCK_ITEM_INFO_TEXT: {
    marginLeft: 6,
    fontFamily: 'TTNorms-Regular'
  },

  STOCK_ITEM_INFO_CLOSE_TEXT: {
    color: '#000',
    textAlign: 'right',
    fontFamily: 'TTNorms-Regular',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginRight: 10,
    marginVertical: 10,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 9,
    paddingBottom: 9,
    alignContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end'

  },

  STOCK_ITEM_SCAN_ICON: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  STOCK_ITEM_CART_NEW: {
    flex: 1,
    marginBottom: -16,
    marginRight: 20,
  },
  STOCK_ITEM_CART_VIEW: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -14 },

  STOCK_ITEM_BLANK_CART: {
    marginBottom: 10,
    marginRight: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  STOCK_ITEM_COUNTER_BACKGROUND: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: '#ff0000',
    marginRight: 8,
    position: 'absolute',
    marginTop: 0
  },

  STOCK_ITEM_COUNTER: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10
  },

  STOCK_ITEM_CART: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    marginRight: 20
  },

  STOCK_ITEM_FIVE_ORDER: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  STOCK_ITEM_FIVE_ORDER_MODAL:
  {

    height: '95%',
    width: '98%',
    backgroundColor: "white",
    borderRadius: 20,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },


  STOCK_ITEM_FIVE_ORDER_HEADING: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },

  STOCK_ITEM_CLOSE_LIST: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 15
  },

  STOCK_ITEM_FILTER_ICON: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 19
  },

  STOCK_ITEM_FILTER_MODAL_CLOSE: {
    marginHorizontal: 20,
    marginRight: 10,
    marginVertical: 20,
    justifyContent: 'center',
    flex: 1
  },

  STOCK_ITEM_FILTER_MODAL_BACKGROUND: {
    height: 50,
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
  },


  STOCK_ITEM_SEARCH_ICON: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 10,

  },




  /////////////////-------------------------------- CHANGE PASSWORD SCREEN STYLE  -----------------------------/////////////////

  CHANGE_PASSWORD_VIEW_CONTAINER: { backgroundColor: '#fff' },

  CHANGE_PASSWORD_HEADING_VIEW: { alignItems: 'center', marginVertical: 20 },

  CHANGE_PASSWORD_COMP_FIELD: { fontFamily: 'TTNorms-Bold', fontSize: 21, color: '#ff0000', marginLeft: 5 },

  CHANGE_PASSWORD_FIELD_VIEW: { marginHorizontal: 20, marginTop: 10, marginBottom: 5, flexDirection: 'row' },

  CHANGE_PASSWORD_TEXT: { fontFamily: 'TTNorms-Medium', fontSize: 18, color: '#000' },

  CHANGE_PASSWORD_TEXTINPUT: { fontFamily: 'TTNorms-Regular', marginTop: 5, fontSize: 15, backgroundColor: '#F9F9F9', borderRadius: 5, marginHorizontal: 20 },

  CHANGE_PASSWORD_TOUCHABLE: { marginHorizontal: 20, width: '90%', alignSelf: 'center', height: 50 },



  /////////////////-------------------------------- CART SCREEN STYLE  -----------------------------/////////////////

  CART_SCREEN_VIEW: {
    backgroundColor: '#FAFAFA',
    height: '100%'
  },


  CART_ACTION_BAR_BUTTON: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  CART_ACTION_BAR_TITLE: {
    fontFamily: 'TTNorms-Regular',
    marginTop: 5,
    fontSize: 15,
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    flex: 1,

  },

  CART_CARD_STYLE: {
    borderRadius: 10,
    elevation: 2,
    marginTop: 5,
    marginHorizontal: '4%',
    marginBottom: 5,
  },

  CART_USERNAME: {
    color: '#4C82C0',
    fontSize: 14,
    fontFamily: 'TTNorms-Medium',
  },

  CART_QUALITY_TEXT: {
    fontFamily: 'TTNorms-Medium',
    marginRight: 12,
    fontSize: 13,
    color: '#1f1f1f',
    marginTop: 16
  },

  CART_TEXTINPUT: {
    fontFamily: 'TTNorms-Regular',
    marginTop: 8,
    fontSize: 14,
    backgroundColor: '#F9F9F9',
    width: 50,
    borderColor: '#BFE1FF',
    color: '#236FB4',
    borderWidth: 2,
    textAlign: 'center',
    height: 35,
    borderRadius: 10
  },

  CART_UNIT_TEXT: {
    fontFamily: 'TTNorms-Medium',
    marginRight: 12,
    fontSize: 11,
    marginHorizontal: 10,
    color: '#949494',
    marginTop: 17
  },

  CART_BOTTOM_VIEW: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 20

  },

  CART_RATE_TEXT: {
    fontFamily: 'TTNorms-Medium',
    marginRight: 8,
    fontSize: 13,
    color: '#1f1f1f',
    marginTop: 17
  },

  CART_RATE: {
    fontFamily: 'TTNorms-Medium',
    marginRight: 12,
    fontSize: 13,
    color: '#949494',
    marginTop: 17
  },

  CART_NET_TOTAL_TEXT: {
    fontFamily: 'TTNorms-Medium',
    fontSize: 15,
    color: '#4C82C0'
  },

  CART_NET_TOTAL: {
    fontFamily: 'TTNorms-Regular',
    fontSize: 13,
    textAlign: 'right',
    flex: 1,
    marginHorizontal: 10,
    color: '#4C82C0'
  },

  CART_USER: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'TTNorms-Bold',
    marginTop: -5
  },

  CART_DISTRIBUTOR_TEXT: {
    color: '#4C82C0',
    fontSize: 16,
    fontFamily: 'TTNorms-Bold',
    marginTop: 5
  },

  CART_HORIZONTAL_LINE: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    marginTop: 12,
    marginBottom: 12
  },

  CART_ORDER_NO: {
    fontFamily: 'TTNorms-Medium',
    fontSize: 12,
    color: '#1f1f1f'
  },

  CART_ORDER: {
    fontFamily: 'TTNorms-Regular',
    marginTop: 5,
    fontSize: 12,
    marginHorizontal: 10,
    color: '#949494'
  },


  CART_ORDER_VIEW: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1
  },

  CART_ORDER_DATE_TEXT: {
    fontFamily: 'TTNorms-Medium',
    marginTop: 5,
    fontSize: 12,
    color: '#1f1f1f'
  },

  CART_ORDER_DATE: {
    fontFamily: 'TTNorms-Regular',
    marginTop: 5,
    fontSize: 12,
    marginHorizontal: 10,
    color: '#949494'
  },


  CART_DELETE_ICON: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  CART_BACK_BUTTON: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  CART_PLUS_ICON: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  CART_SUBMIT_BUTTON_BACKGROUND: {
    backgroundColor: '#045589',
    marginHorizontal: 10,
    height: 50,
    width: 140,
    borderRadius: 10
  },

  CART_SUBMIT_ORDER_TEXT: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'TTNorms-Medium',
    fontSize: 15,
    marginTop: 15
  },

  CART_CANCEL_BUTTON_BACKGROUD: {
    backgroundColor: '#F85E5E',
    marginHorizontal: 10,
    height: 50,
    width: 140,
    borderRadius: 10
  },

  CART_CANCEL_ORDER_TEXT: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'TTNorms-Medium',
    fontSize: 15,
    marginTop: 15
  },

  CART_BUTTON_VIEW: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10
  },

  CART_REMARK_TEXT: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'TTNorms-Medium',
    color: '#4C82C0'
  },

  CART_TOTAL_AMOUNT_VIEW: {
    alignItems: 'flex-end',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10
  },

  CART_TOTAL_AMOUNT_TEXT_HEADING: {
    fontFamily: 'TTNorms-Bold',
    color: '#000'
  },

  CART_TOTAL_AMOUNT: {
    fontFamily: 'TTNorms-Medium',
    color: '#4C82C0'
  },

  CART_ORDER_DETAIL_BACKGROUND: {
    backgroundColor: '#E9EFF3',
    height: 40,
    marginTop: 10,
    justifyContent: 'center'
  },

  CART_ORDER_DETAIL_TEXT: {
    marginLeft: 10,
    color: '#236FB4',
    fontFamily: 'TTNorms-Medium',
    justifyContent: 'center',
    fontSize: 15
  },

  CART_ITEM_DETAIL_BACKGROUND: {
    backgroundColor: '#E9EFF3',
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center'
  },

  CART_ITEM_DETAIL_TEXT: {
    marginLeft: 10,
    color: '#236FB4',
    fontFamily: 'TTNorms-Medium',
    justifyContent: 'center',
    fontSize: 15
  },

  CREATE_ORDER_CARD: {
    borderRadius: 10,
    elevation: 4,
    marginHorizontal: '4%'
  },

  CREATE_ORDER_DIST_NAME: {
    fontFamily: 'TTNorms-Bold',
    fontSize: 15,
    color: '#236FB4',
  },

  CREATE_ORDER_DIST_ADDRESS: {
    fontFamily: 'TTNorms-Regular',
    marginTop: 5,
    color: '#808080'
  },


  CART_ORDER_NUMBER: {
    fontFamily: 'TTNorms-Regular',

    fontSize: 12,
    marginRight: 8,
    marginLeft: 4,
    color: '#949494'
  },

  CART_REMARK_DIALOG: {
    height: 200,
    width: '98%',
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  CART_ADD_REMARK_TEXT: {
    fontSize: 15,
    color: '#949494',
    fontFamily: 'TTNorms-Regular',
    flex: 1,
    marginHorizontal: 20
  },

  CART_REMARK_TEXTINPUT: {
    borderRadius: 5,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    textAlignVertical: 'top',
    height: 100,
    marginHorizontal: 20
  },

  CART_REMARK_BUTTON_VIEW: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  },

  CART_REMARK_CANCEL: {
    color: '#045589',
    fontFamily: 'TTNorms-Regular'
  },

  CART_REMARK_OK: {
    marginHorizontal: 20,
    color: '#045589',
    fontFamily: 'TTNorms-Regular'
  },

  CART_REMARK_IMAGE: {
    marginLeft: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  //----------------------------------------------- SETTINGS-------------------------//

  SETTING_VIEW_CONTAINER: {
    marginTop: 10,
    backgroundColor: '#fff',
    height: '100%'
  },

  SETTING_DEFAULT_ORDER_TEXT: {
    justifyContent: 'center',
    marginHorizontal: 20,
    flex: 1
  },

  SETTING_DROPDOWN_VIEW: {
    marginBottom: 16,
    width: '40%',
    marginHorizontal: 20
  },

  SETTING_DROPDOWN: {
    height: 60,
    marginTop: 10,
    borderRadius: 10,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#BFE1FF',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 10,
  },

  SETTING_ALLOW_ZERO_ITEM_TEXT: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    flex: 1
  }

});
