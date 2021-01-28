var playerkite,playerkiteimg,kite2,kite2img,kite4,kite4img,kite5,kite5img,kite6,kite6img,kites,kitesGroup;
var backgroundimg,bk;

function preload(){

playerkiteimg=loadImage("images/playerkite.png");
kite2img=loadImage("images/kite2.png");
kite4img=loadImage("images/kite4.png");
kite5img=loadImage("images/kite5.png");
kite6img=loadImage("images/kite6.png");
backgroundimg=loadImage("images/background0.png");


}



function setup() {
createCanvas(600,600);

bk=createSprite(0,0,600,600);
bk.addImage(backgroundimg);
bk.scale=2.5;
bk.velocityX=-2;

playerkite =createSprite(200,320,20,20);
playerkite.addImage(playerkiteimg);
playerkite.scale = 0.3;

kitesGroup=new Group();
}

function draw() {
  background("white");
  if(bk.x<displayWidth/2){
    bk.x=bk.width/2;
}
 

playerkite.x=mouseX
playerkite.y=mouseY
  drawSprites();

spawnKites();

}

function spawnKites(){
  if(frameCount % 200 === 0) {
   // var kiteRandom=Math.round(random(0,displayHeight))
    var kites = createSprite(600,600,10,60);
    
    kites.velocityX = -3;
    
 
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
