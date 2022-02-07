class Snowfall {
constructor(x,y,r){
   var options = {
       isStatic:false
   }
   this.r=r
   this.body = Bodies.circle(x,y,this.r,options)
   this.image = loadImage("snow5.webp")
  World.add(world,this.body)
}
display(){
var pos = this.body.position
var angle = this.body.angle

push();
translate(pos.x,pos.y)
rotate(angle)
noStroke()
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop();

}
}
