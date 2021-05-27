
var gardenImg;
var mouseImg3;
var  mouseImg2;
var mouse,mouseImg1;
var cat,catImg1,catImg2,catImg3;


function preload() {
mouseImg1= loadAnimation("images/mouse1.png")
mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3= loadAnimation("images/mouse4.png")

catImg1= loadAnimation("images/cat1.png")
catImg2= loadAnimation("images/cat2.png","images/cat3.png")
catImg3= loadAnimation("images/cat4.png")

 gardenImg = loadImage("garden.png");
 
  
}

function setup(){
 createCanvas(1000,800);

 cat = createSprite(870,600);
 cat.addAnimation("sleeping",catImg1);
 cat.scale = 0.2
  
 

 mouse = createSprite(100,600);
mouse.addAnimation("mouseImg2", mouseImg1);
mouse.scale = 0.1;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
  mouse.addAnimation("mousecaught",mouseImg3)
  mouse.changeAnimation("mousecaught",mouseImg3);

  
  cat.addAnimation("catrest",catImg3)
  cat.changeAnimation("catrest",catImg3);
  cat.velocityX=0;
cat.x=300;
}
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if( keyCode===(LEFT_ARROW)){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing",mouseImg2);
    mouse.frameDelay = 25;
    
    cat.addAnimation("catrunning",catImg2)
    cat.changeAnimation("catrunning",catImg2);
    cat.velocityX=-4;
    }



}
