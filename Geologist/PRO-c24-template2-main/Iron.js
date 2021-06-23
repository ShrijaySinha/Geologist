class Iron{
	constructor(x,y,width,height)
	{
     var options={
         restitution:0.8,
         friction:3,
         density:30
     }
		this.x=x;
		this.y=y;
		this.width=80;
        this.height=70;
		this.body=Bodies.rectangle(this.x, this.y,20,70,options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;	
            var angle=this.body.angle;	
			push();
			translate(pos.x,pos.y);
            rotate (angle);
			rectMode(CENTER)
			
			fill("green");
            rect(0,0,this.width,this.height);
			pop();
	}

}