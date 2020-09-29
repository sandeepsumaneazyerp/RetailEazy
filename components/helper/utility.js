import moment from 'moment-timezone';
import {NativeModules} from 'react-native';
//const {EncryptionDec} = NativeModules;
const Rijndael = require('rijndael-js');
import AsyncStorage from '@react-native-community/async-storage';

const key = '0D4896D431044C92DE2840ED53B6FBBD';
const iv = '741952hheeyy66#cs!9hjv887mxx7@8y';
const cipher = new Rijndael(key, 'cbc');
var Buffer = require('buffer/').Buffer;
export function UTCDateTime() {
  var utcDateTime = '';
  var date = new Date();
  var offsetInHours = date.getTimezoneOffset() / 60;

  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds(); //To get the Current Seconds

  var data = new Date(
    month +
      '/' +
      date +
      '/' +
      year +
      '    ' +
      hours +
      ':' +
      min +
      ':' +
      sec +
      ampm,
  )
    .toISOString()
    .split('.')[0]
    .replace('Z', ' ')
    .replace('T', ' ');

  //  return date;

  var utcdate = dateFormat(data, 'MM/DD/YYYY hh:mm:ss a');

  var encval = encryption(utcdate);

  // console.log('utc date ==========', encval);
  return encval;
}

export function dateFormat(date, formatvalue) {
  var formateddate = moment(date).format(formatvalue);
  // console.log('Date/Time', formateddate);
  return formateddate;
}

// data encryption
export function encryption(texttoencrypt) {
  const ciphertext = Buffer.from(cipher.encrypt(texttoencrypt, 256, iv));
  var encryptedText = ciphertext.toString('base64');
  return encryptedText;
}

export function decryption(texttodecrypt) {
  const plaintext = Buffer.from(cipher.decrypt(texttodecrypt, 256, iv));
  var uuu = plaintext.toString('utf8');
  return uuu;
}
