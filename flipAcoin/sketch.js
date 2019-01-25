var sound;

function preload(){
	//sound = loadSound("https://thisisnotpaint.000webhostapp.com/flipAcoin/coinflip.mp3");
}
function setup() {
	flip = document.getElementById("button");
	
	
}


function draw() {

		flip.onclick = function flipped(){
		//sound.setVolume(0.1);
		//sound.play();
		var array = ['heads','tails'];
		var i = document.getElementById("p");
		i.innerHTML = random(array);
		

	}
	
}
	