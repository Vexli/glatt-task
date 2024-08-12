/* IMPORT */
import { varUpdate } from "./storage";

/* DEFINITION */
/** HIDE ELEMENT **/
export function eleHide(arrName, arr, ele) {
	if (!ele.classList.contains("manualHide")) {
		ele.classList.add("manualHide");
		ele.style.display = "none";
		arr.unshift(ele.id);
	} else {
		ele.classList.remove("manualHide");
		ele.style.display = "none";
		const arrIndex = arr.indexOf(ele.id);
		arr.splice(arrIndex, 1);
	}
}
