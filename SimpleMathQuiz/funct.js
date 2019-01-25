
function check(_input, _answer) {

	if (_input.innerHTML == _answer) {
		_input.style.backgroundColor = "green";
	} else
		_input.style.backgroundColor = "red";
}


function wipe() {

	button0.style.backgroundColor = "#ffffff";
	button1.style.backgroundColor = "#ffffff";
	button2.style.backgroundColor = "#ffffff";
	button3.style.backgroundColor = "#ffffff";

}


function checkScore(_input) {

	if (_input.style.backgroundColor == "green")
		_score += 1
}

function rmElement(_elementId){

	var elmnt = document.getElementById(_elementId);
	elmnt.parentNode.removeChild(elmnt);

}