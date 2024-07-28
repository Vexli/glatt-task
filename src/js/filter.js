/* IMPORT */

/* DEFINITION */
/** Return a NODELIST of all Tasks **/
export function getAllTasks() {
	return document.querySelectorAll("li.task");
}

/** Show Tasks that fulfill certain logic**/
export function showSelectedTask(listTask, className) {
	console.log(listTask);
	for (let i = 0; i < listTask.length; i++) {
		if (listTask[i].className.includes(className)) {
			if (
				className !== "manualHide" &&
				listTask[i].classList.includes("manualHide")
			) {
				document.getElementById(listTask[i].id).style.display = "none";
			} else {
				document.getElementById(listTask[i].id).style.display = "flex";
			}
		} else {
			document.getElementById(listTask[i].id).style.display = "none";
		}
	}
}
