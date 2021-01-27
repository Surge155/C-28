class Log extends Baseclass{
    constructor(x,y,height,angle){       
        super(x,y,20,height,angle);
        Matter.Body.setAngle(this.Body,angle);
        this.image = loadImage("sprites/wood2.png");
   
    }
       
}