/* IMPORT */

/* DEFINITION */
/** GET VARIABLE NAME FROM VARIABLE **/
export function objName(obj) {
	return Object.keys(obj).pop();
}

/** CONVERT UNIX TO DATE **/
export function unixToDate(unixDate) {
	const d = new Date(unixDate * 1);
	const month = (d.getUTCMonth() + 1).toString().padStart(2, "0");
	const day = d.getUTCDate().toString().padStart(2, "0");
	return d.getUTCFullYear() + "-" + month + "-" + day;
}

/** REPLACE VALUE **/
export function replaceValue(checkValue, arrInvalid, valueSubstitute) {
	for (let index = 0; index < arrInvalid.length; index++) {
		const element = arrInvalid[index];
		if (element == checkValue) {
			return valueSubstitute;
		}
	}
	return checkValue;
}
