/* NOTES */
// ADD: Loop for additional pages when result says more are available
// ADD: Filtering options

/* IMPORT */
/** GENERAL **/
import "../css/style.css";

/** JAVASCRIPT **/
import { key } from "./key.js";
import { v } from "./variable.js";
import { unixToDate, replaceValue } from "./convert.js";
import { fetchData, keyCheck } from "./api.js";
import {
	parseApiJson,
	loopParseArr,
	loopArrApi,
	loopForValues,
} from "./loop.js";
import { addEle, getEle, addAtt, setParent, setContent } from "./dom.js";

import { clickClassIdUrl } from "./click.js";
/* VARIABLES */
let arrTask = [];

/* FUNCTIONS */

/* RUN */
/** META **/
const timeStart = performance.now();

/** GET API KEY **/
let keyAPI = keyCheck(key.clickup);
v.click.header.Authorization = keyAPI;

/** USER ENDPOINT **/
let testUser = await fetchData(
	v.click.url.api,
	v.click.end.user,
	v.arr.empty,
	v.api.get,
	v.click.header
);
let testParseUser = parseApiJson(testUser, v.click.arr.user);

/*** SET USER INFO ***/
const userId = testParseUser["id"];
const userName = testParseUser["username"];
const userColor = testParseUser["color"];
const profilePicture = testParseUser["profilePicture"];
const dateToday = unixToDate(new Date());
let eleProfile = getEle("profile");
addAtt(eleProfile, "src", profilePicture);

// Get the root element
let r = document.querySelector(":root");
r.style.setProperty("--accent", userColor);

/** TEAM ENDPOINT **/
let testApiTeam = await fetchData(
	v.click.url.api,
	v.click.end.team,
	v.arr.empty,
	v.api.get,
	v.click.header
);
let testParseTeam = parseApiJson(testApiTeam, v.click.arr.team);
let testParseTeam2 = loopParseArr(testParseTeam, v.click.key.id);

/* TASK EDNPOINT */ //TO ADD: Loop for additional pages
await loopArrApi(
	testParseTeam2,
	arrTask,
	v.click.url.api,
	v.click.end.team + "/",
	v.click.end.task,
	{ "assignees[]": userId, subtasks: true },
	v.api.get,
	v.click.header
);

console.log(arrTask);

let testArrId = loopForValues(arrTask, [v.loop.class, "id"]);
let testArrContent = loopForValues(arrTask, [v.loop.class, "name"]);
let testArrDateDue = loopForValues(arrTask, [v.loop.class, "due_date"]);
let testArrStatus = loopForValues(arrTask, [v.loop.class, "status", "status"]);

console.log(testArrDateDue);

let parent = getEle("canvas");
for (let index = 0; index < testArrId.length; index++) {
	const element = testArrId[index];
	const content = testArrContent[index];
	const status = testArrStatus[index];
	const dateDue = unixToDate(testArrDateDue[index]);
	const priority = arrTask[0].tasks[index].priority?.id ?? 0;
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
	addAtt(eDate, "class", "div-Date");

	if (dateToday === dDue) {
		addAtt(ele, "class", `task prio${priority} due`);
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

/* ADD EVENT LISTENERS */
clickClassIdUrl("task", v.click.url.task, "");

/** META **/
const timeEnd = performance.now();
console.log(`This took ${timeStart - timeEnd} milleseconds`);
