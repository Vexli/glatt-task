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
import { getAllTasks, showSelectedTask } from "./filter.js";
import { parseApiJson, loopParseArr, loopArrApi } from "./loop.js";
import { getEle, addAtt, addTasks } from "./dom.js";
import { eleHide } from "./hide.js";
import { varUpdate } from "./storage.js";

import { clickClassIdUrl } from "./click.js";
/* VARIABLES */
let arrTask = [];
let arrHidden = [];

/* FUNCTIONS */

/* RUN */
/** META **/
const timeStart = performance.now();

/** GET API KEY **/
let keyAPI = keyCheck(key.clickup);
v.click.header.Authorization = keyAPI;

/** USER ENDPOINT **/
const testUser = await fetchData(
	v.click.url.api,
	v.click.end.user,
	v.arr.empty,
	v.api.get,
	v.click.header
);
const testParseUser = parseApiJson(testUser, v.click.arr.user);

/*** SET USER INFO ***/
const userId = testParseUser.id;
const userName = testParseUser.username;
const userColor = testParseUser.color;
const profilePicture = testParseUser.profilePicture;
const dateToday = unixToDate(new Date());
let eleProfile = getEle("profile");
addAtt(eleProfile, "src", profilePicture);

// Get the root element
const r = document.querySelector(":root");
r.style.setProperty("--accent", userColor);

// Select Canvas
const canvas = getEle("canvas");

/** TEAM ENDPOINT **/
const testApiTeam = await fetchData(
	v.click.url.api,
	v.click.end.team,
	v.arr.empty,
	v.api.get,
	v.click.header
);
const testParseTeam = parseApiJson(testApiTeam, v.click.arr.team);
const testParseTeam2 = loopParseArr(testParseTeam, v.click.key.id);

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
addTasks(canvas, arrTask, dateToday);

/* ADD EVENT LISTENERS */
clickClassIdUrl("div-Title", v.click.url.task, "");

/** Filters **/
const tasks = getAllTasks();
let filterTasks = document.querySelectorAll("select");
filterTasks.forEach(function (ele) {
	ele.addEventListener("click", (event) => {
		showSelectedTask(tasks, event.target.value);
	});
});

/** Manual Hide **/
let divDates = document.querySelectorAll(".div-Status");
divDates.forEach(function (ele) {
	ele.addEventListener("click", (event) => {
		parent = event.target.parentElement;
		eleHide("arrHidden", arrHidden, parent);
	});
});

/** SAVE VARIABLES **/
let btnSave = document.querySelectorAll("input.save");
btnSave.forEach(function (ele) {
	ele.addEventListener("click", (event) => {
		varUpdate("arrHidden", arrHidden);
		console.log(localStorage);
	});
});

/** META **/
const timeEnd = performance.now();
console.log(`This took ${timeStart - timeEnd} milleseconds`);
