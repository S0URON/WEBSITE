function flappy_circle()
{
	this.y  = height/2;
	this.x = 50;
	this.r = 100;
	this.show = function ()
	{
		fill(255);
		ellipse(this.x,this.y,this.r,this.r);

	}


}