const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var bg;
var snow = []

function preload(){
bg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
}

function draw() {
  background(bg);  

  Engine.update(engine)
  if(frameCount%2==0){
    snow.push(new Snowfall(random(1,800),10,30))

  }
  for(var j = 0;j<snow.length;j++){
    snow[j].display()
  }
  drawSprites();
}