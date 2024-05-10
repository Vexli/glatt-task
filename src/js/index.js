/* NOTES */
//`keyCheck` PROMPT DOES NOt WORK

/* IMPORT */
/** GENERAL **/
import "../css/style.css";

/** JAVASCRIPT **/
import {key} from './key.js'
import {v} from './variable.js'
import {fetchData, keyCheck} from './api.js'
import {parseApiJson, loopParseArr, loopArrApi, loopArrJsonHtml} from './loop.js'
import {addEle, getEle, addAtt, promptPage} from './dom.js'

/* VARIABLES */
let arrTask = [];

/* FUNCTIONS */

/* RUN */
/** META **/
const timeStart = performance.now();

/** GET API KEY **/
keyCheck(key.clickup,v.prompt.keyClickup,"");

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

loopArrJsonHtml(arrTask,["tasks","id"],["tasks","id"],"div","div");

console.log(arrTask)

/** META **/
const timeEnd = performance.now()
console.log(`This took ${timeStart - timeEnd} milleseconds`)