var fixedRect, movingRect;
var gameObject1;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(100,400,50,80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;

  movingRect = createSprite(700,400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(400,400,80,30);
  gameObject1.shapeColor = "green";
 // movingRect.debug = true;
 fixedRect.velocityX = 5;
// fixedRect.velocityY = 7;
 movingRect.velocityX = -8;

 gameObject1.velocityX = 6;
// movingRect.velocityY = 6;
}

function draw() {
  background(0);  

  bounce(movingRect,gameObject1);
  
 

  drawSprites();
}
