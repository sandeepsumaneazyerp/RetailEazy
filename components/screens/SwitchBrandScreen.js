import React, { Component } from 'react';
import { Text, View, StatusBar, Modal, Alert, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { database } from '../../db/Database.ts';
import { Card, } from 'react-native-elements'
import * as prefConstant from '../../constant/PrefConstant';


var style = require('../../assets/style/AppStyle');

var modalVisible;
export default class SwitchBrandScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            brandData: [],
        };

    }

    async componentDidMount() {
        var dataSource = await database.getBrand();
        let brandData = [];
        brandData = dataSource;
        this.setState({
            brandData,
        });
    }



    navigateToDashboard() {
        this.props.navigation.navigate('DashboardScreen')
    }

    functionCombined(brandid) {
        prefConstant.setAsyncStorageValue(prefConstant.KEY_SWITCH_BRAND_ID, brandid);
        this.navigateToDashboard();
    }

    setModalVisible(visible) {

        this.setState({ modalVisible: visible });
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={() => { this.functionCombined(item.BrandId), this.setModalVisible(!modalVisible) }}>

            <Card containerStyle={{ borderColor: '#BFE1FF', borderWidth: 2, borderRadius: 5, backgroundColor: '#F9F9F9' }}>
                <View>
                    <Text style={{ fontFamily: 'TTNorms-Regular' }}>{item.BrandName}</Text>
                </View>
            </Card>
        </TouchableWithoutFeedback>
    )

    render() {
        const { modalVisible } = this.state;

        return (
            <View >

                <StatusBar backgroundColor="#045589" />

                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    // visible={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('', "Please select brand.");
                    }} >

                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Select Your Brand For Your Order</Text>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.brandData}
                            renderItem={this.renderItem}
                        />
                    </View>

                </Modal> */}

            </View>

        );
    }
}


const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,

        marginHorizontal: 20,
        height: '95%',

        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'TTNorms-Bold'
    }

});