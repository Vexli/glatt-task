/* IMPORT */
import { fetchData } from "./api.js";
import { addEle } from "./dom.js";

/* DEFINITION */
/** JSON TO URL QUERY PARAMETER **/
export function loopParameter(obj) {
	let strQuery = "";
	for (const [key, value] of Object.entries(obj)) {
		if (Array.isArray(value)) {
			for (const item of value) {
				strQuery += `${strQuery ? "&" : "?"}${key}=${encodeURIComponent(item)}`;
			}
		} else {
			strQuery += `${strQuery ? "&" : "?"}${key}=${encodeURIComponent(value)}`;
		}
	}
	return strQuery;
}

/** LOOP FOR VALUES **/
export function loopParseArr(array, arrKeys) {
	let arr = [];
	for (let index = 0; index < array.length; index++) {
		let result = parseApiJson(array[index], arrKeys);
		arr.push(result);
	}
	return arr;
}

/** ARRAY OF KEYS TO VALUE **/
export function parseApiJson(json, arrKeys) {
	let jsonData = json;
	for (let index = 0; index < arrKeys.length; index++) {
		let i = arrKeys[index];
		jsonData = jsonData[i];
	}
	return jsonData;
}

/** ARRAY TO API Calls **/
export async function loopArrApi(
	arrayEnter,
	arrayReturn,
	url,
	endpointStart,
	endpointEnd,
	paramaters,
	method,
	header
) {
	for (let index = 0; index < arrayEnter.length; index++) {
		const element = arrayEnter[index];
		let apiTask = await fetchData(
			url,
			endpointStart + element + endpointEnd,
			paramaters,
			method,
			header
		);
		arrayReturn.push(apiTask);
	}
}

/** GET EXTRA PAGES **/

/** GET VALUES BASED OFF OF JSON KEYS **/
export function loopForValues(data, keys) {
	const arrValue = [];

	function traverse(obj, currentKeys) {
		if (Array.isArray(obj)) {
			for (const item of obj) {
				traverse(item, currentKeys);
			}
		} else if (typeof obj === "object" && obj !== null) {
			for (const key of currentKeys) {
				if (obj[key] !== undefined) {
					traverse(obj[key], currentKeys.slice(1));
				}
			}
		} else {
			arrValue.push(obj);
		}
	}

	traverse(data, keys);
	return arrValue;
}
