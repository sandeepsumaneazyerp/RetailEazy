import AsyncStorage from '@react-native-community/async-storage';

export let KEY_Token: string = 'Token';
export let KEY_USERID: string = 'UserId';
export let KEY_USERNAME: string = 'UserName';
export let KEY_EMAILID: string = 'EmailId';
export let KEY_MOBILENO: string = 'MobileNo';
export let KEY_PASSWORD: string = 'Password';
export let KEY_ISACTIVE: string = 'IsActive';
export let KEY_LOGINID: string = 'LoginId';
export let KEY_ISACTIVEBILL: string = 'IsActiveBill';
export let KEY_VOUCHERNO: string = 'VoucherNo';
export let KEY_POORDERNO: string = 'PoOrderNo';
export let KEY_SOORDERNO: string = 'SoOrderNo';
export let KEY_UserAddress: string = 'UserAddress';
export let KEY_GSTINNo: string = 'GSTINNo';
export let KEY_PANNo: string = 'PANNo';
export let KEY_Pincode: string = 'Pincode';
export let KEY_StateId: string = 'StateId';
export let KEY_CityId: string = 'CityId';
export let KEY_PaytmNo: string = 'PaytmNo';
export let KEY_UPIID: string = 'Upiid';
export let KEY_ISLOGIN: string = 'IsLogin';

export let KEY_APP_ORDER_NUMBER: string = 'appOrderNumber';
export let KEY_ORDER_ID: string = 'orderId';

export let KEY_SWITCH_BRAND_ID: string = 'BrandId';
export let KEY_SWITCH_BRAND_NAME: string = 'BrandName';

export async function getAsyncStorageValue(key: string): Promise<string> {
  try {
    return await AsyncStorage.getItem(key)
      .then((value) => value)
      .then((prefValue) => {
        console.log(prefValue);
        if (prefValue) {
          return prefValue.replace(/["]+/g, '');
        } else {
          return '';
        }
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
        return '';
      });
  } catch (error) {
    console.log(error.message);
    return '';
  }
}

export async function setAsyncStorageValue(
  key: string,
  value: string,
): Promise<void> {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
}

export function setUserPreferences(userDetails: string) {
  var userData = JSON.parse(userDetails);
  setAsyncStorageValue(KEY_USERID, userData.UserId);
  setAsyncStorageValue(KEY_USERNAME, userData.Username);
  setAsyncStorageValue(KEY_EMAILID, userData.email);
  setAsyncStorageValue(KEY_MOBILENO, userData.mobileno);
  setAsyncStorageValue(KEY_PASSWORD, userData.password);
  setAsyncStorageValue(KEY_UserAddress, userData.address);
  setAsyncStorageValue(KEY_GSTINNo, userData.gstnno);
  setAsyncStorageValue(KEY_PANNo, userData.panno);
  setAsyncStorageValue(KEY_Pincode, userData.pincode);
  setAsyncStorageValue(KEY_StateId, userData.stateid);
  setAsyncStorageValue(KEY_CityId, userData.cityid);
  setAsyncStorageValue(KEY_PaytmNo, userData.paytmmobileno);
  setAsyncStorageValue(KEY_UPIID, userData.upi_id);
  setAsyncStorageValue(KEY_ISACTIVE, userData.is_active);
  setAsyncStorageValue(KEY_ISACTIVEBILL, userData.isactivebill);
  setAsyncStorageValue(KEY_VOUCHERNO, userData.VoucherNo);
  setAsyncStorageValue(KEY_POORDERNO, userData.PoOrderNo);
  setAsyncStorageValue(KEY_SOORDERNO, userData.SoOrderNo);
}
