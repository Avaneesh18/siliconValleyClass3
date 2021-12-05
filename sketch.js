var bg
var play
var gameState="wait"
var trex 
var trex_img
var logo
var zombieRunning
var zombie

function preload(){

//zombieRunning = loadAnimation("new-image/e1.png","new-image/e2.png","new-image/e3.png","new-image/e4.png","new-image/e5.png","new-image/e6.png","new-image/e7.png","new-image/e8.png");
logo = loadImage("images/video.gif");
}
function setup(){
    
createCanvas(windowWidth-20,windowHeight-20)
    

  play=createImg("images/homegrey.png")  
  play.position(100,100)
  play.size(100,100)
  //zombie.addAnimation("zombieRunning",zombieRunning)
  
about=createImg("images/infon.png")
about.position(windowWidth-200,100)
about.size(100,100)
}
                            
function draw(){
background(logo)

if(play.mousePressed()){
  gameState = "play"
}

drawSprites();
} 


