document.onkeyup = function(event) {
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userguess);
}