/* IMPORT */

/* DEFINITION */
/** CREATE ELEMENT **/
export function addEle(type, id) {
	let element = document.createElement(type);
	addAtt(element, "id", id);
	return element;
}

/** SET PARENT ELEMENT **/
export function setParent(element, parent) {
	parent.appendChild(element);
	return element;
}

/** GET ELEMENT BY ID **/
export function getEle(id) {
	let element = document.getElementById(id);
	return element;
}

/** ADD ATTRIBUTE TO ELEMENT **/
export function addAtt(element, attribute, value) {
	element.setAttribute(attribute, value);
	return element;
}

/** SET CONTENT **/
export function setContent(element, content) {
	element.innerHTML = content;
	return element;
}

/** PROMPT **/
export function promptPage(title, placeholder) {
	let input = prompt(title, placeholder);
	if (input != "") {
		return input;
	} else {
		promptPage(title, placeholder);
	}
}
