function setup() {
	createCanvas(400,400);

	button0.onclick = function () {
		check(button0, answer[i - 1]);
		check(button1, answer[i - 1]);
		check(button2, answer[i - 1]);
		check(button3, answer[i - 1]);		
		checkScore(button0);
		console.log("score", _score);

	}
	button1.onclick = function () {

		check(button1, answer[i - 1]);
		check(button0, answer[i - 1]);
		check(button2, answer[i - 1]);
		check(button3, answer[i - 1]);
		checkScore(button1);
		console.log("score", _score);

	}
	button2.onclick = function () {

		check(button1, answer[i - 1]);
		check(button0, answer[i - 1]);
		check(button2, answer[i - 1]);
		check(button3, answer[i - 1]);
		checkScore(button2);
		console.log("score", _score);

	}

	button3.onclick = function () {
		check(button0, answer[i - 1]);
		check(button1, answer[i - 1]);
		check(button2, answer[i - 1]);
		check(button3, answer[i - 1]);
		checkScore(button3);
		console.log("score", _score);

	}


}
function draw() {


	score.innerHTML = _score;

	var quest = document.getElementById('question');

	var rest = document.getElementById("RC");

	rest.onclick = function () {
		wipe();
		if (i == question.length)
			i = 0;
		else
			i++;
		r = int(random(6));
		console.log("i", i);
		console.log("i length ", question.length);

	}



	switch (i) {
		case 0:
			fill(255,0,0);	
			textSize(50);		
			text("score",50,50);
			text(_score,200,50);
			text("/",230,50);
			text(question.length,250,50);
			rmElement("RC");
			rmElement("but2");
			rmElement("but1");
			rmElement("but3");
			rmElement("score");
			rmElement("but0");
			rmElement("question");
			rmElement("tafcha");
		case 1:
			quest.innerHTML = question[0];
			button0.innerHTML = answer[0];
			button1.innerHTML = answer[i];
			button2.innerHTML = answer[i+1];
			button3.innerHTML = answer[i+3];

			break;

		case 2:

			quest.innerHTML = question[1];
			button0.innerHTML = answer[i+1];
			button1.innerHTML = answer[1];
			button2.innerHTML = answer[i];
			button3.innerHTML = answer[i+2];

			break;

		case 3:
			quest.innerHTML = question[2];
			button0.innerHTML = answer[2];
			button1.innerHTML = answer[i-3];
			button2.innerHTML = answer[i];
			button3.innerHTML = answer[i+1];

			break;

		case 4:
			quest.innerHTML = question[3];
			button0.innerHTML = answer[i-2];
			button1.innerHTML = answer[3];
			button2.innerHTML = answer[i];
			button3.innerHTML = answer[i-3];

			break;

		case 5:
			quest.innerHTML = question[4];
			button0.innerHTML = answer[4];
			button1.innerHTML = answer[i-2];
			button2.innerHTML = answer[i];
			button3.innerHTML = answer[i-3];

			break;

		case 6:
			quest.innerHTML = question[5];
			button0.innerHTML = answer[i-4];
			button1.innerHTML = answer[5];
			button2.innerHTML = answer[i-2];
			button3.innerHTML = answer[i-3];

			break;
	}

}




