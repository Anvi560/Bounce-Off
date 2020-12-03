var fixedRect, movingRect;

function setup(){
createCanvas(1200, 800);
fixedRect = createSprite(600,400,50,80);
fixedRect.shapeColor = "green";
fixedRect.velocityY = 5;

movingRect = createSprite(400,200,80,30);
movingRect.shapeColor = "green";
movingRect.velocityY = -5;

}

function draw(){
background(0);

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

bounceOff(movingRect, fixedRect);
drawSprites();
}

function bounceOff(object1 , object2){

  if(object1.x - object2.x < object1.width / 2 + object2.width / 2 && 
    object2.x - object1.x < object1.width / 2 + object2.width / 2 )
   {
     object1.velocityX = object1.velocityX * (-1);
     object2.velocityX = object2.velocityX * (-1);
  }
  if(object1.x - object2.x < object1.width / 2 + object2.width / 2 && 
    object2.x - object1.x < object1.width / 2 + object2.width / 2 )
   {
     object1.velocityX = object1.velocityX * (-1);
     object2.velocityX = object2.velocityX * (-1);
  }
  
  

}