var = [AC/DC, AEROSMITH, BON-JOVI, HELLOWEEN, KISS, METALLICA, NIRVANA, PEARL-JAM, QUEEN, REDHOTCHILLIPERPERS];



document.onkeyup = function(event) {
	var userguess = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userguess);
}