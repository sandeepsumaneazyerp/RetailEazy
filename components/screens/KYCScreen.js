import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
var style = require('../../assets/style/AppStyle');


export default class KYCScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#045589" />

                <ScrollView>
                    <View style={style.KYC_VIEW_CONTAINER}>

                        <View style={style.KYC_HEADING_VIEW}>
                            <Text style={style.KYC_HEADING_TEXT}>Update Your KYC Details</Text>
                        </View>


                        <View style={style.KYC_FIELD_VIEW}>
                            <Text style={style.KYC_FIELD_TEXT}>GSTIN No.</Text>
                            <TextInput
                                style={style.KYC_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._KYCINPUT && this._KYCINPUT.focus()
                                } />
                        </View>


                        <View style={style.KYC_FIELD_VIEW}>
                            <Text style={style.KYC_FIELD_TEXT}>PAN No.</Text>
                            <TextInput
                                style={style.KYC_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._DRIVING && this._DRIVING.focus()
                                }
                                ref={(ref) => {
                                    this._KYCINPUT = ref;
                                }} />
                        </View>


                        <View style={style.KYC_FIELD_VIEW}>
                            <Text style={style.KYC_FIELD_TEXT}>Driving Licence</Text>
                            <TextInput
                                style={style.KYC_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._AADHAAR && this._AADHAAR.focus()
                                }
                                ref={(ref) => {
                                    this._DRIVING = ref;
                                }} />
                        </View>


                        <View style={style.KYC_FIELD_VIEW}>
                            <Text style={style.KYC_FIELD_TEXT}>Aadhaar Number</Text>
                            <TextInput
                                style={style.KYC_FIELD_TEXTINPUT}
                                keyboardType='numeric'
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._VOTER && this._VOTER.focus()
                                }
                                ref={(ref) => {
                                    this._AADHAAR = ref;
                                }} />
                        </View>


                        <View style={style.KYC_FIELD_VIEW}>
                            <Text style={style.KYC_FIELD_TEXT}>Voter Id</Text>
                            <TextInput
                                style={style.KYC_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._PAYTMMOBILE && this._PAYTMMOBILE.focus()
                                }
                                ref={(ref) => {
                                    this._VOTER = ref;
                                }} />
                        </View>


                        <View style={style.KYC_FIELD_VIEW}>
                            <Text style={style.KYC_FIELD_TEXT}>Paytm Mobile No.</Text>
                            <TextInput
                                style={style.KYC_FIELD_TEXTINPUT}
                                keyboardType='numeric'
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._UPI && this._UPI.focus()
                                }
                                ref={(ref) => {
                                    this._PAYTMMOBILE = ref;
                                }} />
                        </View>

                        <View style={style.KYC_FIELD_VIEW}>
                            <Text style={style.KYC_FIELD_TEXT}>UPI Id</Text>
                            <TextInput
                                style={style.KYC_FIELD_TEXTINPUT}
                                ref={(ref) => {
                                    this._UPI = ref;
                                }}
                                returnKeyType='done' />
                        </View>


                        <TouchableOpacity style={style.KYC_BUTTON_TOUCHABLE}>
                            <LinearGradient colors={['#025487', '#2165B9']} style={{ borderRadius: 10 }} >
                                <View style={{ ...style.loginButtonTextStyle, height: 50 }}>
                                    <Text style={style.loginText} >Update</Text>
                                    <Image source={require('../../assets/images/next.png')} style={style.signInButtonImage} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>

        );
    }
}
