
  /*var f,m;
function setup() {
  createCanvas(400,400);
  m=createSprite(50,200 , 50, 50);
  m.shapeColor="green";
  f=createSprite(300,200,30,100);
  f.shapeColor="green";
}

function draw() {
  background("black"); 
   m.x=mouseX;
   m.y=mouseY;
 
  if((m.x-f.x<= m.width/2 + f.width/2) &&
     (f.x-m.x <= f.width/2+m.width/2) &&
      (m.y-f.y<= m.height/2 + f.height/2) &&
     (f.y-m.y <= f.height/2+m.height/2) ){
     m.shapeColor="red";
     f.shapeColor="red";
   
  }
  else{
  m.shapeColor="green";
  f.shapeColor="green";
 }

  drawSprites();
}
*/
//BounceOff
var b1,b2;

function setup(){
createCanvas(800,600);
b1=createSprite(200,100,40,40);
b2=createSprite(200,550,30,50);

b1.shapeColor="red";
b2.shapeColor="red";

b1.velocityY=5;
b2.velocityY=-5;
}

function draw(){
  background("black");
 if((b1.x-b2.x <= b1.width/2 + b2.width/2) &&
    (b2.x - b1.x <= b1.width/2 + b2.width/2)){
     b1.velocityX=b1.velocityX * (-1);
     b2.velocityX=b2.velocityX * (-1);
}

if((b1.y-b2.y == b1.height/2 + b2.height/2) &&
(b2.y - b1.y == b1.height/2 + b2.height/2)){
 b1.velocityY=b1.velocityY * (-1);
 b2.velocityY=b2.velocityY * (-1);
 console.log(b1.velocityY);
}
drawSprites();
}

