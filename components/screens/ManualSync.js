import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Sync from '../../assets/images/manual_sync';

export default class ManualSyncScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#045589" />

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20,  fontFamily: 'TTNorms-Bold',}}>Sync Master</Text>
                        <Text style={{ fontSize: 12, color: '#707070', marginTop: 3 , fontFamily: 'TTNorms-Regular',}}>last Sync: 15-Sep-2020 18:00:00</Text>
                    </View>
                    <Sync style={{ alignSelf: 'center', justifyContent: 'flex-end', position: 'absolute', right: 0, marginRight:10 }} />

                </View>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'TTNorms-Bold', }}>Sync Order</Text>
                        <Text style={{ fontSize: 12, color: '#707070', marginTop: 3,fontFamily: 'TTNorms-Regular' }}>last Sync: 15-Sep-2020 18:00:00</Text>
                    </View>
                    <Sync style={{ alignSelf: 'center', justifyContent: 'flex-end', position: 'absolute', right: 0, marginRight:10 }} />

                </View>


                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20,  fontFamily: 'TTNorms-Bold',}}>Sync Available Stock</Text>
                        <Text style={{ fontSize: 12, color: '#707070', marginTop: 3,fontFamily: 'TTNorms-Regular' }}>last Sync: 15-Sep-2020 18:00:00</Text>
                    </View>
                    <Sync style={{ alignSelf: 'center', justifyContent: 'flex-end', position: 'absolute', right: 0, marginRight:10 }} />

                </View>


                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'TTNorms-Bold', }}>Sync Customer</Text>
                        <Text style={{ fontSize: 12, color: '#707070', marginTop: 3,fontFamily: 'TTNorms-Regular' }}>last Sync: 15-Sep-2020 18:00:00</Text>
                    </View>
                    <Sync style={{ alignSelf: 'center', justifyContent: 'flex-end', position: 'absolute', right: 0, marginRight:10 }} />

                </View>


                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'TTNorms-Bold',}}>Sync Billing(Invoice)</Text>
                        <Text style={{ fontSize: 12, color: '#707070', marginTop: 3, fontFamily: 'TTNorms-Regular', }}>last Sync: 15-Sep-2020 18:00:00</Text>
                    </View>
                    <Sync style={{ alignSelf: 'center', justifyContent: 'flex-end', position: 'absolute', right: 0, marginRight:10 }} />

                </View>


            </View>

        );
    }
}
