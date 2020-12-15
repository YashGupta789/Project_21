var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1400,500);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX = speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(160,160,160);

}

function draw() {
  background(25,25,25);  

  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}
