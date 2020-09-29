import React from 'react';

//Import all required component
import { View, Image, TouchableOpacity } from 'react-native';
import Menu from '../../../assets/images/menu.svg';

const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.openDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>

        <Menu
          style={{
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;