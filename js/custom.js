/* function showHide(obj) {

	const x = document.getElementById(obj);
	
	if(x.classList.contains("hide")) {
		x.classList.remove("hide");
	} else {
		x.classList.add("hide");
	}

} */

// checkbox
function checkbox(obj) {

	const x = document.getElementById(obj)

	if(x.checked) {
		x.classList.remove("hide");
	} else {
		x.classList.add("hide");
	}

}