const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bullet;
var zombies = [];
var superzombies = [];
var score = 0;
var survivor;
var survivorImg;
var bg1, bg2, bg3;
var level = 1;
var x = 0.1;
var y = 0.1;

var zombieGroup;

var powerup = 0;
var powerup = [];

function preload(){
  bg1 = loadImage("level1.jpg");
  //bg2 = loadImage("level2.jpg");
  bg3 = loadImage("level3.jpg");

  survivorImg = loadImage("survivor.png");
 zombieImg = loadImage("zombie.png");
 superzombieImg = loadImage("superzombie.jpg");

 zombieGroup = new Group();
}


function setup() {
    canvas = createCanvas(1500, 700);
    engine = Engine.create();
    world = engine.world;
   
  survivor = createSprite(600,400,20,20);
  survivor.addImage(survivorImg);
  survivor.scale = 0.15; 
 

}
 
function draw() {
Engine.update(engine);


if(level === 1){
  background(bg1);
  score = 0;
  if(score === 200){
    level = 2;
  }
}

if(level === 2){
  background(bg2);
  score = 0;
  if(score === 500){
    level = 3;
  }
}

if(level === 3){
  background(bg3);
  score = 0;
  if(score === 1000){
    zombies.destroyEach();
    textSize(25);
    text("You Escaped The Horde!");
  }
}


if(keyDown (LEFT_ARROW)){
 survivor.velocityX = survivor.velocityX - x
}

if(keyDown (RIGHT_ARROW)){
    survivor.velocityX = survivor.velocityX + x
}

if(keyDown (UP_ARROW)){
    survivor.velocityY = survivor.velocityY - y
}

if(keyDown (DOWN_ARROW)){
    survivor.velocityY = survivor.velocityY + y
}

 textSize(30);
 fill ("white");
 text("Scoreboard : -" +score,1000,100);

if(frameCount%60===0){
  zombies.push(new Zombies(random(100, width/2+600), 60,60));
//  zombieGroup.add(zombies);

}

if(frameCount%200===0){
  powerup.push(new Powerup(random(100, width/2+600), 60,60));
}

for (var j = 0; j < powerup.length; j++) {
  powerup[j].display();
}

for (var j = 0; j < zombies.length; j++) {
  /*if(zombies[j].isTouching(bullet)){
    zombies(j).destroy();
    score = score+5;
  }*/

  zombies[j].display();
}

if(frameCount%150===0){
  superzombies.push(new SuperZombies(random(100, width/2+900), 60,60));
}

for (var j = 0; j < superzombies.length; j++) {
  superzombies[j].display();
}
      spawnBullet();
 
    drawSprites();  
}

function spawnBullet(){
  if(keyWentDown("SPACE")){
    bullet = createSprite(survivor.x, survivor.y, 10,2);
    bullet.velocityX = 3;
    bullet.x = survivor.x;
    bullet.shapeColor = "yellow"
  }
      }