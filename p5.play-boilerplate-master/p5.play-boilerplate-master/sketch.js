var hasDocked=false
var iss
var spacecraft 

function preload(){
bg = loadImage("spacebg.jpg")
scimg1=loadImage("spacecraft1.png")
scimg2=loadImage("spacecraft2.png")
scimg3=loadImage("spacecraft3.png")
scimg4=loadImage("spacecraft4.png")
issimg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(330,130)
  iss.addImage(issimg)
  iss.scale = 0.25

  spacecraft=createSprite(285,240)
  spacecraft.addImage(scimg1)
  spacecraft.scale = 0.15
}

function draw() {
  background(bg);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    if(keyDown (LEFT_ARROW)){
      spacecraft.x = spacecraft.x -1 
      spacecraft.addImage (scimg3)
    }
    if(keyDown (RIGHT_ARROW)){
      spacecraft.x = spacecraft.x +1 
      spacecraft.addImage (scimg4)
    }
    if(keyDown (UP_ARROW)){
      spacecraft.y = spacecraft.y -1 
      spacecraft.addImage (scimg2)
    }
    if(keyDown (DOWN_ARROW)){
      spacecraft.y = spacecraft.y +1 
      spacecraft.addImage (scimg2)
    }
  }

  if(spacecraft.x>=300 && spacecraft.x<=315 && spacecraft.y ===186){
    hasDocked=true
    textSize(21)
    fill ("white")
    text("!D O C K I N G   S U C C E S S F U L!", 150, 300)

  }

  drawSprites();
}