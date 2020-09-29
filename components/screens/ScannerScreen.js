import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import BackArrow from '../../assets/images/back_arrow.svg';
var style = require('../../assets/style/AppStyle');
import { CameraKitCameraScreen, } from 'react-native-camera-kit';

export default class ScannerScreen extends Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Scanner',
            headerTitleStyle: {
                fontFamily: 'TTNorms-Regular',
                fontWeight: '200',
            },
            headerLeft: (
                <BackArrow
                    style={style.STOCK_ITEM_BACK_ARROW}
                    onStartShouldSetResponder={() => navigation.goBack()} />
            ),
            headerStyle: {
                backgroundColor: '#2467BE',
            },
            headerTintColor: '#fff',
        }
    }




    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         barcodes: [],
    //     }
    // }

    // barcodeRecognized = ({ barcodes }) => {
    //     barcodes.forEach(barcode => console.warn(barcode.data))
    // };

    // renderBarcodes = () => (
    //     <View>
    //         {this.state.barcodes.map(this.renderBarcode)}
    //     </View>
    // );


    // renderBarcode = ({ bounds, data }) => (
    //     <React.Fragment key={data + bounds.origin.x}>
    //         <View
    //             style={{
    //                 borderWidth: 2,
    //                 borderRadius: 10,
    //                 borderColor: '#ff0000',
    //                 justifyContent: 'center',
    //                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
    //                 padding: 10,
    //                 ...bounds.size,

    //             }}
    //         >
    //             <Text style={{
    //                 color: '#FF0000',
    //                 flex: 1,
    //                 textAlign: 'center',
    //                 backgroundColor: 'transparent',
    //             }}>{data}</Text>
    //         </View>
    //     </React.Fragment>
    // );


    // render() {
    //     return (

    //         <RNCamera
    //             ref={ref => { this.camera = ref; }}
    //             style={{ flex: 1, width: '100%', }}
    //             onGoogleVisionBarcodesDetected={this.barcodeRecognized}>

    //             {this.renderBarcodes()}
    //         </RNCamera>

    //     );
    // }






    constructor() {
        super();
        this.state = {
            //variable to hold the qr value
            qrvalue: '',
            opneScanner: false,
        };
        this.onOpneScanner()
    }
    onOpenlink() {
        //Function to open URL, If scanned 
        Linking.openURL(this.state.qrvalue);
        //Linking used to open the URL in any browser that you have installed
    }
    onBarcodeScan(qrvalue) {
        //called after te successful scanning of QRCode/Barcode
        console.log(qrvalue);
        this.setState({ qrvalue: qrvalue });
        this.setState({ opneScanner: false });
    }
    onOpneScanner() {
        var that = this;
        //To Start Scanning
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA, {
                        'title': 'Camera Permission Required',
                        'message': 'Retail Eazy needs access to your camera '
                    }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If CAMERA Permission is granted
                        that.setState({ qrvalue: '' });
                        that.setState({ opneScanner: true });
                    } else {
                        alert("Camera permission denied");
                        
                    }
                } catch (err) {
                    alert("Camera permission err", err);
                    console.warn(err);
                }
            }
            //Calling the camera permission function
            requestCameraPermission();
        } else {
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
        }
    }
    render() {
        let displayModal;
        //If qrvalue is set then return this view
        // if (!this.state.opneScanner) {
        //     return (
        //         <View style={styles.container}>
        //             {/* <Text style={styles.heading}>React Native QR Code Example</Text>
        //             <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: ' + this.state.qrvalue : ''}</Text>
        //             {this.state.qrvalue.includes("http") ?
        //                 <TouchableHighlight
        //                     onPress={() => this.onOpenlink()}
        //                     style={styles.button}>
        //                     <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
        //                 </TouchableHighlight>
        //                 : null
        //             } */}
        //             <TouchableHighlight
        //                 onPress={() => this.onOpneScanner()}
        //                 style={styles.button}>
        //                 <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
        //                     Open QR Scanner
        //             </Text>
        //             </TouchableHighlight>
        //         </View>
        //     );
        // }
        return (
            <View style={{ flex: 1 }}>
                <CameraKitCameraScreen
                    showFrame={false}
                    //Show/hide scan frame
                    scanBarcode={true}
                    //Can restrict for the QR Code only
                    laserColor={'blue'}
                    //Color can be of your choice
                    frameColor={'yellow'}
                    //If frame is visible then frame color
                    colorForScannerFrame={'black'}
                    //Scanner Frame color
                    onReadCode={event =>
                        this.onBarcodeScan(event.nativeEvent.codeStringValue)
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2c3539',
        padding: 10,
        width: 300,
        marginTop: 16
    },
    heading: {
        color: 'black',
        fontSize: 24,
        alignSelf: 'center',
        padding: 10,
        marginTop: 30
    },
    simpleText: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        padding: 10,
        marginTop: 16
    }
});
