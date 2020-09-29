import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var style = require('../../assets/style/AppStyle');


export default class ChangePasswordScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
                style={{ backgroundColor: 'white', paddingBottom: 20 }} >


                <View style={{ paddingTop: 30, backgroundColor: '#fff', height: '100%', }}>
                    <StatusBar backgroundColor="#045589" />
                    <View style={style.CHANGE_PASSWORD_FIELD_VIEW}>
                        <Text style={style.CHANGE_PASSWORD_TEXT}>Old Password</Text>
                        <Text style={style.CHANGE_PASSWORD_COMP_FIELD}>*</Text>

                    </View>

                    <TextInput
                        style={style.CHANGE_PASSWORD_TEXTINPUT}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            this._OLDPASSWORD && this._OLDPASSWORD.focus()
                        }
                    />

                    <View style={style.CHANGE_PASSWORD_FIELD_VIEW}>
                        <Text style={style.CHANGE_PASSWORD_TEXT}>New Password</Text>
                        <Text style={style.CHANGE_PASSWORD_COMP_FIELD}>*</Text>

                    </View>

                    <TextInput
                        style={style.CHANGE_PASSWORD_TEXTINPUT}
                        secureTextEntry={true}
                        onSubmitEditing={() =>
                            this._NEWPASSWORD && this._NEWPASSWORD.focus()
                        }
                        ref={(ref) => {
                            this._OLDPASSWORD = ref;
                        }}
                        returnKeyType='next' />

                    <View style={{ ...style.CHANGE_PASSWORD_FIELD_VIEW, }}>
                        <Text style={style.CHANGE_PASSWORD_TEXT}>Confirm Password</Text>
                        <Text style={style.CHANGE_PASSWORD_COMP_FIELD}>*</Text>

                    </View>

                    <TextInput
                        style={style.CHANGE_PASSWORD_TEXTINPUT}
                        secureTextEntry={true}
                        ref={(ref) => {
                            this._NEWPASSWORD = ref;
                        }}
                        returnKeyType='done' />


                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginBottom: 36,
                        marginTop:30
                    }}>
                        <TouchableOpacity style={{
                            ...style.CHANGE_PASSWORD_TOUCHABLE,
                        }}>
                            <LinearGradient colors={['#025487', '#2165B9']} style={{ borderRadius: 10 }} >
                                <View style={{ ...style.loginButtonTextStyle, height: 50 }}>
                                    <Text style={style.loginText} >Update</Text>
                                    <Image source={require('../../assets/images/next.png')} style={style.signInButtonImage} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>

        );
    }
}
