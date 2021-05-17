var rocket, asteroid, star, rocket_img, asteroid_img, star_img;


function preload(){
  rocket_img=loadImage("rocket.png");
  asteroid_img=loadImage("asteroid.png");
  star_img=loadImage("star.png");
  
}

function setup() {
  createCanvas(800,1600);
  rocket=createSprite(400,800,50,50);
  rocket.addImage("rocket", rocket_img);
  rocket.scale=0.2;
  
}

function draw() {
 background("lightblue");

  if (keyDown("e")){
    rocket.velocityY=-5;
  }
  
  
  drawSprites();
}

function spawnStars(){

}

function spawnAsteroids(){
  
}





