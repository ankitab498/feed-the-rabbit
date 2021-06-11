var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png")
  rabbitImg = loadImage("rabbit.png")

}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
 
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,2));
  
  //call the function randomly according to select_sprites
  

}

function createApples() {

  
}

function createLeaves() {

}

