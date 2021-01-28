var playerkite,playerkiteimg,kite2,kite2img,kite4,kite4img,kite5,kite5img,kite6,kite6img,kites,kitesGroup;
var backgroundimg,bk;
var score=0;
var stone,stoneimg,stoneGroup;
var gameState = "play";
var gameover,gameoverimg;
var restart,restartimg;

function preload(){

playerkiteimg=loadImage("images/playerkite.png");
kite2img=loadImage("images/kite2.png");
kite4img=loadImage("images/kite4.png");
kite5img=loadImage("images/kite5.png");
kite6img=loadImage("images/kite6.png");
//backgroundimg=loadImage("images/background0.png");
stoneimg=loadImage("images/stone.png");
gameoverimg=loadImage("images/playerkite.png");
restartimg=loadImage("images/restart-button.png");
}



function setup() {
createCanvas(displayWidth,displayHeight);

//bk=createSprite(0,0,displayWidth,displayHeight);
//bk.addImage(backgroundimg);
//bk.scale=4;
//bk.velocityX=-2;
text("hello",displayWidth/2,displayHeight/2);
playerkite =createSprite(200,320,20,20);
playerkite.addImage(playerkiteimg);
playerkite.scale = 0.3;

restart=createSprite(680,500);
restart.addImage(restartimg);
restart.scale=0.2;
restart.visible=false;

kitesGroup=new Group();
stoneGroup=new Group();
}

function draw() {
  background("lightblue");
 

 if(gameState==="play"){

playerkite.x=mouseX
playerkite.y=mouseY


spawnKites();
spawnStones();

if(kitesGroup.isTouching(playerkite)){
kitesGroup.destroyEach()
score=score+1
}
textSize(35)
text("Score : "+score,displayWidth-400,displayHeight-700);

if(stoneGroup.isTouching(playerkite)){
 // playerkite.destroy();
   gameState="end"
  
 }

 }
 else if(gameState==="end"){
  playerkite.addImage(gameoverimg);
  playerkite.x=displayWidth/2;
  playerkite.y=displayHeight/2;
  restart.visible=true;
  if(mousePressedOver(restart)){
    reset();
  }
 }
 
drawSprites();

}

function reset(){
  gameState="play"
  restart.visible=false;
  gameoverimg.visible=false;
  score=0;
  playerkite.visible=true;
  kitesGroup.visible=true;
  stoneGroup.visible=true;
  //score.visible=true;

}

function spawnKites(){
  if(frameCount % 200 === 0) {
    var kiteRandom=Math.round(random(0,displayHeight,-100))
    var kites = createSprite(displayWidth-100,kiteRandom,10,60);
    
    kites.velocityX = -8;
    
 
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: kites.addImage(kite2img);
              break;
      case 2: kites.addImage(kite4img);
              break;
      case 3: kites.addImage(kite5img);
              break;
      case 4: kites.addImage(kite6img);
              break;
      default: break;
    }
    
         
    kites.scale = 0.3;
    kites.lifetime = 300;
    kitesGroup.add(kites);
  }
}

function spawnStones(){
  if(frameCount % 75 === 0){
    var stoneRandom=Math.round(random(0,displayHeight-100))
    stone = createSprite(displayWidth-100,stoneRandom,10,60);
    stone.addImage(stoneimg);
    stone.scale=0.02;
stone.lifetime=300;
    stone.velocityX = -11;
    stoneGroup.add(stone)
 

  }

}






