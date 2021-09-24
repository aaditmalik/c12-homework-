var garden, gardenImg;
var rabbit, rabbitImg;
var appleImg, apples;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

  
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();

  rabbit.collide(edges);
  rabbit.x = mouseX;

  if (frameCount % 80 === 0){
    createApples();
  }
  drawSprites();
}

function createApples(){
 
   apples = createSprite(random(50, 350), 40, 10,10);
   apples.addImage (appleImg);     
   apples.scale = 0.07;
   apples.lifetime = 300; 
   apples.velocityY = 3;
 
}