/* IMPORT */
import { unixToDate, replaceValue } from "./convert.js";

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

/** Add Tasks to DOM **/
export function addTasks(parent, arrTask, dateToday) {
	for (let i = 0; i < arrTask.length; i++) {
		console.log(arrTask[i]);
		for (let ii = 0; ii < arrTask[i].tasks.length; ii++) {
			const e = arrTask[i].tasks[ii];
			const element = e.id;
			const content = e.name;
			const status = e.status.status;
			const dateDue = unixToDate(e.due_date);
			const priority = e.priority?.id ?? 0;
			const dDue = replaceValue(dateDue, ["1970-01-01"], "");
			const ele = addEle("li", element);
			const eStatus = addEle("div", `${element}-Status`);
			const eTitel = addEle("div", `${element}-Titel`);
			const eDate = addEle("div", `${element}-Date`);
			setContent(eStatus, status);
			setContent(eTitel, content);
			setContent(eDate, dDue);
			addAtt(eStatus, "class", "div-Status");
			addAtt(eTitel, "class", "div-Title");
			addAtt(eTitel, "title", e.list.name);
			addAtt(eDate, "class", "div-Date");

			if (dateToday === dDue) {
				addAtt(ele, "class", `task prio${priority} dueToday`);
			} else if (dateToday > dDue && dDue !== "") {
				addAtt(ele, "class", `task prio${priority} overdue`);
			} else {
				addAtt(ele, "class", `task prio${priority}`);
			}

			setParent(eStatus, ele);
			setParent(eTitel, ele);
			setParent(eDate, ele);
			setParent(ele, parent);
		}
	}
}
