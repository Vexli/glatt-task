/* IMPORT */
/** GENERAL **/
import "../css/style.css";

/** JAVASCRIPT **/
import {key} from './key.js'
import {v} from './variable.js'
import {fetchData} from './api.js'
import {parseApiJson, loopParseArr} from './loop.js'

/* VARIABLES */
let arrTask = [];

/* FUNCTIONS */

/* RUN */
/** META **/
const timeStart = performance.now();

/** TEAM ENDPOINT **/
let testApiTeam = await fetchData(v.click.url,v.click.end.team,v.arr.empty,v.api.get, v.click.header);
let testParseTeam = parseApiJson(testApiTeam, v.click.arr.team);
let testParseTeam2 = loopParseArr(testParseTeam,v.click.key.id);

/* TASK EDNPOINT */
for (let index = 0; index < testParseTeam2.length; index++) {
    const element = testParseTeam2[index];
    let apiTask = await fetchData(v.click.url,v.click.end.team + "/" + element + v.click.end.task, v.click.param.task, v.api.get, v.click.header);
    arrTask.push(apiTask);
}

console.log(arrTask)

/** META **/
const timeEnd = performance.now()
console.log(`This took ${timeStart - timeEnd} milleseconds`)