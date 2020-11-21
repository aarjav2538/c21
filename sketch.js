var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(500,200,80,30);
  movingRect.shapeColor="green";
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";

  gameObject2=createSprite( 100,200,50,50);
  gameObject2.shapeColor="green";
  
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
  
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
gameObject1.velocityY=3;
gameObject2.velocityY=-3;
gameObject3.velocityX=3;
gameObject4.velocityX=-3;
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 
  if(checkTouching(movingRect,gameObject1)){
    movingRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
  }
  
 bouncOff(gameObject3,gameObject4);
  drawSprites();
}

