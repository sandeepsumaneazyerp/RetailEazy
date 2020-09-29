import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
var style = require('../../assets/style/AppStyle');

export default class SettingScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = [{
            value: 'Alt Unit',
        }, {
            value: 'Base Unit',
        }];

        let data2 = [{
            value: 'Yes',
        }, {
            value: 'No',
        }];


        return (
            <View style={style.SETTING_VIEW_CONTAINER}>
                <StatusBar backgroundColor="#045589" />


                <View style={{ flexDirection: 'row', }}>
                    <View style={style.SETTING_DEFAULT_ORDER_TEXT}>
                        <Text> Default Order Unit</Text>
                    </View>


                    <View style={style.SETTING_DROPDOWN_VIEW}>
                        <Dropdown
                            containerStyle={style.SETTING_DROPDOWN}
                            value={'Base Unit'}
                            baseColor='#fff'
                            dropdownOffset={{ top: 15, left: 0 }}
                            data={data} />
                    </View>

                </View>

                <View style={style.DASHBOARD_SEPARATOR} />

                <View style={{ flexDirection: 'row' }}>
                    <View style={style.SETTING_ALLOW_ZERO_ITEM_TEXT}>
                        <Text> Allow zero rate items in order</Text>
                    </View>


                    <View style={style.SETTING_DROPDOWN_VIEW}>
                        <Dropdown
                            containerStyle={style.SETTING_DROPDOWN}
                            value={'Yes'}
                            baseColor='#fff'
                            dropdownOffset={{ top: 15, left: 0 }}
                            data={data2} />
                    </View>

                </View>

            </View >
        );
    }
}
