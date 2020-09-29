import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as prefConstant from '../../constant/PrefConstant';
import { View,  Image, StatusBar, } from 'react-native';
var style = require('../../assets/style/AppStyle');

const SplashScreen = (props) => {
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);

      var islogin = await prefConstant.getAsyncStorageValue(prefConstant.KEY_ISLOGIN);
      if (islogin == "true") {
        props.navigation.navigate('NavigationRoutes');
      }
      else {
        props.navigation.navigate('Auth');
      }
    }, 3000);
  }, []);



  return (
    <View>
      <LinearGradient colors={['#025487', '#2165B9']} style={{ width: '100%', height: '100%' }}>
        <StatusBar backgroundColor="#045589" />
        <View style={style.SPLASH_SCREEN_CONTAINER}>
          <Image
            source={require('../../assets/images/splash_logo.png')}
            style={style.SPLASH_SCREEN_LOGO}
          />
        </View>
      </LinearGradient>
    </View>
  );
};
export default SplashScreen;