var ground;
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
      createCanvas(600,530);

    monkey = createSprite(50,440);
    monkey.addAnimation("running", monkey_running);
    monkey.scale = 0.1;
  
    ground = createSprite(300,530,1200,125);
    ground.shapeColor = "yellow";
    ground.velocityX = -10;
    ground.x = ground.width/2;
  
    createEdgeSprites();
}


function draw() {
      background("green");
  
    //jump when the space key is pressed
    if(keyDown("space") && monkey.y >= 425) {
        monkey.velocityY = -12;
    }
  
    //Add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    //Monkey collisions
    monkey.collide(ground);
  
    //Infinite ground
     if (ground.x < 0){
      ground.x = ground.width/2;
     }
  
//Banana and Rocks for challenge
   spawnFood();
   spawnRocks();
    
//Scores
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime = Math.ceil(frameCount/frameRate()) 
   text("Survival Time :" + survivalTime,100,50);
  
    drawSprites();
  
}

function spawnFood(){
  if(World.frameCount%80===0) {
     
     banana = createSprite(600,100,20,20);
     banana.addImage(bananaImage);
     banana.velocityX = -10
     banana.scale = 0.1;
    
     banana.y = Math.round(random(320,400));
    
     banana.lifetime = 75;
  }
}

function spawnRocks(){
  if (frameCount % 300 === 0) {
   obstacle = createSprite(600,460);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -10;
   obstacle.scale = 0.1;
    
   obstacle.lifetime = 75;
  }
}