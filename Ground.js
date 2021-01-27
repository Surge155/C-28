class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution:  0.8,
            //friction: 0.3,
            density:1.0
          }
          this.Body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(myWorld,this.Body);
    }

    display(){
        
            var pos = this.Body.position;
            fill("brown");
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            
        
    }
}