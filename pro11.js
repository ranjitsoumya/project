var path,boy,leftBoundary,rightBoundary;
var pathImage,boyImage;
var i;


function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
  runnerImage=loadImage("Runner-1.png","Runner-2.png");
 
  
}

function setup(){
  createCanvas(400,400);
  
  //createSprite here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  
   
 
  runner=createSprite(180,340,30,30);
  runner.addImage("runnerrunning",runnerImage);
  runner.scale=0.08;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;

}
function draw() {
  background(0);
  path.velocityY=4;

  runner.x=World.mouseX;
  
  
  edges=createEdgeSprites();
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  runner.collide(edges[3]);

  if(path.y > 400){
    path.y = height/2;
  }
 
  drawSprites();
}

