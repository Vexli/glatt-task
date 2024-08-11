/* IMPORT */

/* DEFINITION */
/** DELETE STORED VARIABLE **/
export function varDelete(vName) {
	window.localStorage.removeItem(vName);
}

/** LOAD STORED VARIABLE **/
export function varLoad(vName) {
	return window.localStorage.getItem(vName);
}

/** STORE VARIABLE **/
export function varStore(vName, variable) {
	window.localStorage.setItem(vName, variable);
}

/** UPDATE STORED VARIABLE **/
export function varUpdate(vName, variable) {
	varDelete(vName);
	varStore(vName, variable);
}
