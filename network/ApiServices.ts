import * as appConstant from "../constant/AppConstant";
import * as prefConstant from "../constant/PrefConstant"
import { ApiConstant } from '../network/ApiConstant'

export async function post(url: any, param: any) {
   
    var utc = appConstant.UTCDateTime();
    console.log('UTC===>',utc);
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("VURL", utc);
    if (url != ApiConstant.BASE_URL + ApiConstant.LOGIN_URL) {
        let user_token = await prefConstant.getAsyncStorageValue(prefConstant.KEY_Token);
        headers.append("Token", user_token);
    }

    console.log("URL :" + url + "\n Param :" + JSON.stringify(param) + "\n Headers :" + JSON.stringify(headers));

    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(param)
    })
        .then(response => {
            return Promise.all([response.json(), response.headers]);
        })
        .then(([responseJson, headers]
        ) => {
            if (headers.has('Token')) {
                var token = headers.get('Token')!!;
                prefConstant.setAsyncStorageValue(prefConstant.KEY_Token, token);
            }
            return JSON.stringify(responseJson);
        })
        .catch((error) => {
            // console.log("Network Error : "+error.message);
            return error.message;
        });
}

export function get(url: any) {
    console.log("URL :" + url);
    return fetch(url)
        .then(response => response.json())
        .then((responseJson) => {
            return JSON.stringify(responseJson);
        })
        .catch((error) => {
            //console.error(error);
            return error;
        });
}


