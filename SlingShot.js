class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

          }
          this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(myWorld,this.sling);
    }



display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

 fly(){
        this.sling.bodyA = null;
}

}

