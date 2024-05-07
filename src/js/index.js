/* IMPORT */
/** GENERAL **/
import "../css/style.css";

/** JAVASCRIPT **/
import {key} from './key.js'
import {v} from './variable.js'
import {fetchData} from './api.js'
import {parseApiJson, loopParseArr, loopArrApi} from './loop.js'
import {addEle, getEle, addAtt} from './dom.js'

/* VARIABLES */
let arrTask = [];

/* FUNCTIONS */

/* RUN */
/** META **/
const timeStart = performance.now();

/** USER ENDPOINT **/
let testUser = await fetchData(v.click.url,v.click.end.user,v.arr.empty,v.api.get, v.click.header);
let testParseUser = parseApiJson(testUser, v.click.arr.user);

/*** SET USER INFO ***/ //TO FUNCTIONATE
const userId = testParseUser["id"];
const userName = testParseUser["username"];
const userColor = testParseUser["color"];
const profilePicture = testParseUser["profilePicture"];

let eleProfile = getEle("profile");
addAtt(eleProfile, "src", profilePicture);

// Get the root element
let r = document.querySelector(':root');
r.style.setProperty('--accent', userColor);


/** TEAM ENDPOINT **/
let testApiTeam = await fetchData(v.click.url,v.click.end.team,v.arr.empty,v.api.get, v.click.header);
let testParseTeam = parseApiJson(testApiTeam, v.click.arr.team);
let testParseTeam2 = loopParseArr(testParseTeam,v.click.key.id);

/* TASK EDNPOINT */ //TO ADD: Loop for additional pages
await loopArrApi(testParseTeam2,arrTask,v.click.url,v.click.end.team + "/",v.click.end.task,{"assignees[]": userId, "subtasks": true},v.api.get,v.click.header);

console.log(arrTask)

/** META **/
const timeEnd = performance.now()
console.log(`This took ${timeStart - timeEnd} milleseconds`)