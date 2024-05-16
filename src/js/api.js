/* IMPORT */
import { loopParameter } from './loop.js';
import {promptPage} from './dom.js'


/* DEFINITION */
/* API Call */
export async function fetchData(url, endpoint, queryParams, method, headers) {
  try {
    let param = ""
    if (Object.keys(queryParams).length > 0) {
      param = loopParameter(queryParams);
    }
    const urlApi = `${url}${endpoint}${param}`
    console.log(`${method} request at ${urlApi}`);
    const response = await fetch(urlApi, {
      method: method,
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

/** API KEY CHECK **/
export function keyCheck(keyReference) {
  if (!keyReference.value) {
    let keyAPI = promptPage(keyReference.prompt, keyReference.placeholder);
    keyReference.value = keyAPI;
    return keyAPI;
  } else {
    let keyAPI = keyReference.value;
    return keyAPI;
  }
}

