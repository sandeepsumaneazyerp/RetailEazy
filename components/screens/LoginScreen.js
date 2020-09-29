import React from 'react';
import { Text, View, ScrollView, StatusBar, TouchableOpacity, Alert, Platform, Image, Dimensions } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { database } from '../../db/Database.ts';
import Spinner from 'react-native-loading-spinner-overlay';
import DeviceInfo from 'react-native-device-info';
import VersionInfo from 'react-native-version-info';
import * as utility from '../../constant/AppConstant';
import * as ApiServices from '../../network/ApiServices';
import { ApiConstant } from '../../network/ApiConstant';
var style = require('../../assets/style/AppStyle');
import * as prefConstant from '../../constant/PrefConstant';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USERNAME: '',
      PASSWORD: '',
      deviceId: '',
      hidePassword: true,
      secureTextEntry: true,
      encrypt: 'Encrypt value ',
      decrypt: 'Dcrypt value  ',
      loading: false,
    };
  }


  // password show and hide
  managePasswordVisibility = () => {
    this.setState({
      hidePassword: !this.state.hidePassword,
    });
  };
  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({
      secureTextEntry: !secureTextEntry,
    }));
  }
  componentDidMount() {
    database.open();
  }


  // login button click
  async login() {
    if (this.state.USERNAME != '') {
      //Check for the Name TextInput
      if (this.state.PASSWORD != '') {

        this.setState({ loading: !this.state.loading, });

        const { USERNAME } = this.state;
        const { PASSWORD } = this.state;
        // console.log('USERNAME===>',USERNAME)
        // console.log('PASSWORD===>',PASSWORD)
        var encryptedPassword = utility.encryption(PASSWORD);
        var OS = Platform.OS === 'ios' ? 'IOS' : 'Android';
        var deviceInfo = DeviceInfo.getManufacturer() + '\n' + DeviceInfo.getModel() + '\n' + DeviceInfo.getSystemVersion();

        var param = {
          Username: USERNAME,
          Password: encryptedPassword,
          FcmDeviceid: ' ',
          imei_no: DeviceInfo.getUniqueID(),
          Devicetype: '1',
          DeviceName: OS,
          DeviceInfo: deviceInfo,
          VersionCode: DeviceInfo.getVersion(),
          VersionName: VersionInfo.buildVersion,
          ClientID: ' ',
          TallyExpiry_date: ' ',
          EazyErpAppVersion: ' ',
        };
       
        var loginApi = ApiConstant.BASE_URL + ApiConstant.LOGIN_URL;
        console.log('loginApi===>',loginApi);
        var response = await ApiServices.post(loginApi, param);
       
        console.log('response===>',response);
        var output = JSON.parse(response);
        if (output.status === true) {
          var userData = output.result;
          await database.insertUserData(JSON.stringify(userData));
          prefConstant.setUserPreferences(JSON.stringify(userData));
          this.setState({ loading: this.state.loading, });
          console.log(this.state.USERNAME);
          console.log('Login Successfully');
          this.props.navigation.navigate('DatabaseScreen');
        } else {
          this.setState({ loading: false, });
          Alert.alert('', output.msg);
        }
      } else {
        Alert.alert('', 'Please enter your password.');
      }
    } else {
      Alert.alert('', 'Please enter Email id/Mobile no.');
    }
  };

  render() {
    const screenHeight = Math.round(Dimensions.get('window').height);
    return (
      <ScrollView style={{ backgroundColor: '#ffffff', height: screenHeight }}>
        <View style={{ height: screenHeight, backgroundColor: '#fff', }}>

          <View
            style={{ marginTop: 100, flex: 1, }}>
            {/* status bar */}
            <StatusBar backgroundColor="#045589" />

            {/* full screen container */}
            <View style={style.container}>
              {/* logo image */}
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={style.logoImage} />
                <Text style={style.boldText}>Sign In with</Text>




              </View>

              {/* *****************************    input text email       ***********************************/}




              <View style={style.textInputEmail}>
                <Image
                  source={require('../../assets/images/user.png')}
                  style={style.textInputImage}
                />

                <View style={style.verticalLine} />
                <View style={style.emailTextField}>
                  <TextField
                    style={style.textInput}
                    autoCapitalize="none"
                    enablesReturnKeyAutomatically={true}
                    labelFontSize={13}
                    tintColor="#045589"
                    onChangeText={(USERNAME) => this.setState({ USERNAME })}
                    label="Mobile No/Email id"
                    activeLineWidth={0}
                    lineWidth={0}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      this._passwordinput && this._passwordinput.focus()
                    }
                  />
                </View>
              </View>

              <View style={style.horizontalLineDemo} />


              {/* *****************************    input text email       ***********************************/}
              <Spinner
                visible={this.state.loading}

                color={'#045589'}
              />
              {/* *****************************    input text password    ***********************************/}


              <View style={style.textInputEmail}>
                <View>
                  <Image
                    source={require('../../assets/images/lock.png')}
                    style={style.textInputImage}
                  />
                </View>
                <View style={style.verticalLine} />
                <View style={style.emailTextField}>
                  <TextField
                    style={style.textInput}
                    secureTextEntry={this.state.hidePassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    labelFontSize={13}
                    tintColor="#045589"
                    onPress={this.managePasswordVisibility}
                    returnKeyType="done"
                    onChangeText={(PASSWORD) => this.setState({ PASSWORD })}
                    label="Password"
                    activeLineWidth={0}
                    lineWidth={0}
                    ref={(ref) => {
                      this._passwordinput = ref;
                    }}
                    underlineColorAndroid="transparent"
                  />

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={style.visibilityBtn}
                    onPress={this.managePasswordVisibility}>
                    <Image
                      source={
                        this.state.hidePassword
                          ? require('../../assets/images/hide.png')
                          : require('../../assets/images/show.png')
                      }
                      style={style.passwordEye}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.horizontalLineDemo} />


              {/* *****************************    input text password    ***********************************/}

              {/* *****************************    Forgot password    ***********************************/}

              <View style={style.marginVertical20}>
                <Text style={style.forgetPasswordText}>Forgot Password</Text>
              </View>
            </View>

          </View>
          {/* *****************************    Forgot password    ***********************************/}


          {/* *****************************    Login Button    ***********************************/}



          <TouchableOpacity
            style={[style.loginButtonContainer, style.loginButton]}
            onPress={() => this.login()}>
            <View style={style.loginButtonTextStyle}>
              <Text style={style.loginText}>Sign in</Text>
              <Image
                source={require('../../assets/images/next.png')}
                style={style.signInButtonImage}
              />
            </View>
          </TouchableOpacity>
          <Text style={style.versionText}>Version:{DeviceInfo.getVersion()}
          </Text>

        </View>

      </ScrollView>
    );
  }
}
