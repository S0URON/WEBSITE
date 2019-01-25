function rectangle()
{
	this.x = 500;
	this.y = random(height);
	this.display =  function ()
	{
		fill(255,0,0);
		rect(this.x,this.y,30,30);
	}

}
