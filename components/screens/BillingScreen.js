import React, { Component } from 'react';
import { Text, View, StatusBar, Modal, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import Plus from '../../assets/images/plus.svg';

export default class BillingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };

    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    clickHandler = (visible) => {
        //function to handle click on floating Action Button
        //  Alert.alert('Floating Button Clicked');
        this.setModalVisible(true);
        //  this.setState({ modalVisible: visible });
    };

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={{ height: '100%' }}>
                <StatusBar backgroundColor="#045589" />

                <ScrollView>

                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>



                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>



                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>



                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>

                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>
                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>
                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>
                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>
                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>
                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>
                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>
                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Voucher No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-21/000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>

                </ScrollView>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }} >

                    <View style={styles.centeredView}>

                        <View style={styles.modalView}>

                            <LinearGradient colors={['#025487', '#2165B9']} style={{ borderRadius: 10, width: '100%', paddingVertical: 15 }} >
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }} >
                                    <Text style={styles.textStyle}>Against Order</Text>
                                </TouchableHighlight>
                            </LinearGradient>


                            <LinearGradient colors={['#025487', '#2165B9']} style={{ borderRadius: 10, width: '100%', paddingVertical: 15, marginTop: 15 }} >
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }} >
                                    <Text style={styles.textStyle}>Without Order</Text>
                                </TouchableHighlight>
                            </LinearGradient>

                        </View>

                    </View>

                </Modal>

                {/* <FloatingAction
                    onClose={() => { this.setModalVisible(false); }}
                    onPressMain={() => { this.setModalVisible(true); }}
                /> */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { this.setModalVisible(true); }}
                    style={styles.TouchableOpacityStyle}>
                    <Plus
                        style={{
                            marginHorizontal: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}


                    />
                </TouchableOpacity>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22,
        width: '100%',
        backgroundColor:'#00000070'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
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
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        fontFamily: 'TTNorms-Regular',
        fontSize: 18
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }, MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#045589',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        borderRadius: 50 / 2,
        bottom: 30,
    },

    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});
