import moment from "moment";
import { Buffer } from "buffer"
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const AllStockSearch = "AllStockSearch";
export const StockSearchByName = "StockSearchByName";
export const StockSearchByGroup = "StockSearchByGroup";
export const StockSearchByItemCode = "StockSearchByItemCode";


const key = "0D4896D431044C92DE2840ED53B6FBBD";
const iv = "741952hheeyy66#cs!9hjv887mxx7@8y";


export function UTCDateTime() {
    //return dateFormat(new Date(), 'MM/DD/YYYY hh:mm:ss a');
   // var utcDateTime = '';
   // var date = new Date();
   // var offsetInHours = date.getTimezoneOffset() / 60;

    var day = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds

    var dateString =  month + '/' + day + '/' + year;
    console.log('dateString===>',dateString);
    var timeString = hours + ':' + min + ':' + sec + ' ' +ampm;
    console.log('timeString===>',timeString);
    var datec = dateString +' ' +timeString;
    console.log('datec===>',datec);
    var combinedate = new Date(datec);
    // var data = new Date(month + '/' + day + '/' + year + ' ' + hours + ':' + min + ':' + sec + ampm,)
    //     .toISOString()
    //     .split('.')[0]
    //     .replace('Z', ' ')
    //     .replace('T', ' '); 

    // //  return date;
console.log('combinedate====>',combinedate);
    var utcdate = dateFormat(combinedate, 'MM/DD/YYYY hh:mm:ss a');

console.log('utcdate===>',utcdate);

    var encval = encryption(utcdate);
    // console.log('utc date ==========', encval);
    return encval;
}

export function dateFormat(date: any, formatvalue: any) {
    var formateddate = moment(date).format(formatvalue);
    // console.log('Date/Time', formateddate);
    return formateddate;
}

export function normalDate() {
    var utcDateTime = '';
    var date = new Date();
    var offsetInHours = date.getTimezoneOffset() / 60;

    var day = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds

    var data = new Date(month + '/' + day + '/' + year + ' ' + hours + ':' + min + ':' + sec + ' ' +ampm,)
        .toISOString()
        .split('.')[0]
        .replace('Z', ' ')
        .replace('T', ' ');

    //  return date;

    //var utcdate = dateFormat(data, 'MM/DD/YYYY hh:mm:ss a');
    var zebra = dateFormat(data, 'DD-MMM-YYYY')
    return zebra;




}

export function encryption(texttoencrypt: any) {
    const Rijndael = require('rijndael-js');
    const cipher = new Rijndael(key, 'cbc');
    const ciphertext = Buffer.from(cipher.encrypt(texttoencrypt, 256, iv));
    return ciphertext.toString("base64");
}

export function decryption(texttodecrypt: any) {
    const Rijndael = require('rijndael-js');
    const cipher = new Rijndael(key, 'cbc');
    //const ciphertext = Buffer.from(texttodecrypt);
    //console.log(ciphertext);
    const plaintext = Buffer.from(cipher.decrypt(texttodecrypt, 256, iv));
    return plaintext.toString();
}



export async function latlong() {
    var latitude = 'sadasd';

    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location Permission Enable');


                //Location();

             Geolocation.getCurrentPosition(position => {




                
                    latitude = JSON.stringify(position.coords.latitude);
                    const long = JSON.stringify(position.coords.longitude);
                    console.log('_____________________', latitude, long);
                    return latitude;
                })

            } else {
                console.log('Location Permission Disable');
                Alert.alert('', "Location permission denied")
            }
        }
        catch (err) {
            console.warn(err)
        }
    }
}


export function Location() {

    Geolocation.getCurrentPosition(position => {
        const lat = JSON.stringify(position.coords.latitude);
        const long = JSON.stringify(position.coords.longitude);
        console.log('_____________________', lat, long);
        //  return [lat, long];
    })

}
