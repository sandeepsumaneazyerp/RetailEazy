import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var style = require('../../assets/style/AppStyle');

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#045589" />

                <ScrollView>
                    <View style={style.PROFILE_VIEW_CONTAINER}>




                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>Name</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._PROFILEINPUT && this._PROFILEINPUT.focus()
                                } />
                        </View>


                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>Email Id</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                keyboardType='email-address'
                                onSubmitEditing={() =>
                                    this._EMAIL && this._EMAIL.focus()
                                }
                                ref={(ref) => {
                                    this._PROFILEINPUT = ref;
                                }} />
                        </View>


                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>Contact No.</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                keyboardType='number-pad'
                                onSubmitEditing={() =>
                                    this._CONTACT && this._CONTACT.focus()
                                }
                                ref={(ref) => {
                                    this._EMAIL = ref;
                                }} />
                        </View>


                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>Address</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._ADDRESS && this._ADDRESS.focus()
                                }
                                ref={(ref) => {
                                    this._CONTACT = ref;
                                }} />
                        </View>


                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>City</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._CITY && this._CITY.focus()
                                }
                                ref={(ref) => {
                                    this._ADDRESS = ref;
                                }} />
                        </View>


                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>State</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}

                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    this._STATE && this._STATE.focus()
                                }
                                ref={(ref) => {
                                    this._CITY = ref;
                                }} />
                        </View>

                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>Country</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}
                                onSubmitEditing={() =>
                                    this._COUNTRY && this._COUNTRY.focus()
                                }
                                ref={(ref) => {
                                    this._STATE = ref;
                                }}
                                returnKeyType='done' />
                        </View>

                        <View style={style.PROFILE_FIELD_VIEW}>
                            <Text style={style.PROFILE_FIELD_TEXT}>Pin Code</Text>
                            <TextInput
                                style={style.PROFILE_FIELD_TEXTINPUT}
                                keyboardType='number-pad'
                                ref={(ref) => {
                                    this._COUNTRY = ref;
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
