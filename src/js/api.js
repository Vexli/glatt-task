/* IMPORT */
import { loopParameter } from './loop.js';

/* DEFINITION */
/* API Call */
export async function fetchData(url, endpoint, queryParams, method, headers) {
  try {
    let param = ""
    if (Object.keys(queryParams).length > 0) {
      param = loopParameter(queryParams);
    }
    console.log("param:",param)
    const urlApi = `${url}${endpoint}${param}`
    const response = await fetch(urlApi, {
      method: method,
      headers: headers,
    });

    console.log(urlApi);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
