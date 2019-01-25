var score = 0;
var cirlce;
var zok = [];
var x = 500;
var speed = -3;
var y = 200;

function setup() 
{
	var c = createCanvas(1300,550).position(50,50);

	cirlce = new flappy_circle();

	for(var i =0 ; i < 1 ;i++)
	{
		zok[i] = new rectangle();
	}
}

function draw() {
	
	background(0);
	cirlce.show();
	
	if (keyIsDown(UP_ARROW) )
	{
		cirlce.y -= 10;
	}else if (keyIsDown(DOWN_ARROW))
	{
		cirlce.y += 10;
	}
	
	
	for(var i = 0 ;i < zok.length;i++)
	{
		var d = dist(cirlce.x,cirlce.y,zok[i].x,zok[i].y);
		zok[i].display();
		zok[i].x = zok[i].x + speed;
		if(zok[i].x < 0)
		{
			
			background(0);
			fill(255,0,0);
			textSize(60);
			text("gameover",500,200);
			noLoop();
				
				
			//zok[i].x = zok[i].x - speed;
		}
		if(d < cirlce.r/2 )
		{
			score++;
			zok.push(new rectangle());
			zok.splice(0,1);
			print("collision");
		
		}

	}

	fill(255);
	textSize(36);
	text(score,1258,50);
	
}
