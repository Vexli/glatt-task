/* IMPORT */

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
export function loopParseArr(array,arrKeys) {
    let arr = []
    for (let index = 0; index < array.length; index++) {
        let result = parseApiJson(array[index],arrKeys);
        arr.push(result);
    }  
    return arr;
}   

/** ARRAY OF KEYS TO VALUE **/
export function parseApiJson(json,arrKeys) {
    let jsonData = json
    for (let index = 0; index < arrKeys.length; index++) {
        let i = arrKeys[index];
        jsonData = jsonData[i];
    }
    return jsonData;
}