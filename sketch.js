var spacecraft,spacecraftImg;
var background,backgroundImg;

function preload() {
  spacecraftImg = loadImage("spacecraft1.png");
  backgroundImg = loadImage("spacebg.png");
  

}

function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(250,100,20,20);
  spacecraft.addImage(spacecraftImg,"spacecraft");
  spacecraft.scale = 0.3;
  
}

function draw() {
  background(backgroundImg,"Background"); 

  fill("black");
  text("Use Arrow Keys to move the spacecraft!",10,30);

  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x - 10;
    }
else if(keyDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x + 10;
}
else if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y - 10;
    spacecraft.scale = 0.35;
}
else if(keyDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y + 10;
    spacecraft.scale = 0.25;
  }

  drawSprites();
}

function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

function readValue(data) {
  position = data.val();

  ball.x = position.x;
  ball.y = position.y;

}
