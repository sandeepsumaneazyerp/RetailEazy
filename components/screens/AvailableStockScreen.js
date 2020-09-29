import React, { Component } from 'react';
import { Text, View, StatusBar,FlatList,Image } from 'react-native';
import { Card, } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
import RadioForm from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { database } from '../../db/Database.ts';

import CartScreen from './CartScreen';

var style = require('../../assets/style/AppStyle');

var radio_props = [
    { label: 'PCS', value: 0 },
    { label: 'CAR', value: 1 }
];


export default class AvailableStockScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stockItemData: [],
            username: ''
        }
    }

    async componentDidMount() {
        var pageNo = "1"
        var offset = ""
        var brandId = "3"
        var table = "ItemsMaster"

        if (pageNo > 0) {
            offset = " LIMIT 30  OFFSET " + ((pageNo - 1) * 30).toString()
        }

        var dataSource = await database.getStockItemData();

        //console.log('jdhsgfvchjsdgbfkjhsdghfkjgsfjdk===========', dataSource);

        let stockItemData = [];
        stockItemData = dataSource;
        this.setState({
            stockItemData,
        });

    }

    _handlePress() {
        console.log(this.state.username);

    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <View >

            <Card containerStyle={style.STOCK_ITEM_RENDER_CARD_VIEW}>


                <View style={{ flexDirection: 'row', }}>

                    <View style={{ flexDirection: 'column', flex: 1 }}>

                        <Text style={style.STOCK_ITEM_RENDER_ITEM_NAME}> {item.ItemName} </Text>

                        <Text style={style.STOCK_ITEM_RENDER_ITEM_CODE}> {item.ItemCode} </Text>

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Image
                            source={require('../../assets/images/lock.png')}
                            style={style.STOCK_ITEM_RENDER_INFO_IMAGE} />

                        <TextInput
                            keyboardType="number-pad"
                            style={style.STOCK_ITEM_RENDER_QUANTITY_TEXTINPUT}
                            onChangeText={(text) => this.setState({ username: (text + ',' + item.ItemId) })}
                            onSubmitEditing={() => this._handlePress()} />


                        <Text style={style.STOCK_ITEM_RENDER_QUANTITY}> CAR </Text>

                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: 15, }}>

                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        buttonWrapStyle={{ marginLeft: 10 }}
                        buttonSize={10}
                        buttonOuterColor={'#000'}
                        labelStyle={{ fontSize: 13, marginRight: 10 }}
                        buttonInnerColor={'#045589'}
                        animation={true}
                        onPress={(value) => { this.setState({ value: value }) }}
                    />


                    <View style={style.STOCK_ITEM_RENDER_PRICE_VIEW}>

                        <Text style={style.STOCK_ITEM_RENDER_PRICE_TEXTVIEW}> rate/PCS </Text>

                        <Text style={style.STOCK_ITEM_RENDER_PRICE_TEXT}>{item.ItemRates}</Text>

                    </View>

                </View>

            </Card>

        </View>
    )


    render() {
        return (

            <View style={{ height: '100%', marginBottom: 20 }}>
                <View>
                 
                    <LinearGradient colors={['#025487', '#2165B9']} style={{ width: '100%', }} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>

                        <View style={{ height: 60, flexDirection: 'row' }}>

                           

                            <TextInput
                                keyboardType='default'
                                returnKeyType='search'
                                placeholder='Search'
                                style={{...style.STOCK_ITEM_SEARCH_TEXTINPUT, marginLeft:20}} />

                            <Image
                                source={require('../../assets/images/logo.png')}
                                style={style.STOCK_ITEM_FILTER} />

                        </View>

                    </LinearGradient>

                </View>

                <FlatList
                  
                    keyExtractor={this.keyExtractor}
                    data={this.state.stockItemData}
                    renderItem={this.renderItem} />

            </View>

        );
    }
}
