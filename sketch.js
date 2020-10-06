var fixedRect, movingRect;
var obj1,obj2,obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(200,200,50,50);
  
  obj1 = createSprite(100,100,50,50);
  obj2 = createSprite(100,200,50,50);
  obj3 = createSprite(100,300,50,50);

  obj1.velocityY= 5;
  obj3.velocityY= -5;

  obj1.shapeColor="blue";
  obj2.shapeColor="blue";
  obj3.shapeColor="blue";

  movingRect.shapeColor= "green";
  fixedRect.shapeColor= "green";

  //movingRect.velocityY= -5;
  //fixedRect.velocityY= 5;

}

function draw() {
  background(0,0,0); 

  movingRect.y=World.mouseY
  movingRect.x=World.mouseX 

if (isTouching(movingRect,obj2)) {

  movingRect.shapeColor= "red";
  obj2.shapeColor= "red";

}
else {

  movingRect.shapeColor= "green";
  obj2.shapeColor= "green";
  
}

bounceOff (obj3,obj1);

  drawSprites();
}

