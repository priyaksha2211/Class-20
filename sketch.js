var sprite1,sprite2;

function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400, 200, 50, 50);
  sprite2 = createSprite(200,100,30,30);
  sprite1.shapeColor = "pink";
  sprite2.shapeColor = "pink";
}

function draw() {
  background(255,255,255);  
  sprite1.x = World.mouseX;
  sprite1.y = World.mouseY;
  console.log(sprite1.y - sprite2.y );

  if(sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2 && sprite2.y - sprite1.y < sprite1.height/2 + sprite2.height/2){
    sprite1.shapeColor = "blue";
    sprite2.shapeColor = "blue";
  }
 else{
  sprite1.shapeColor = "pink";
  sprite2.shapeColor = "pink";
 }
  drawSprites();
}