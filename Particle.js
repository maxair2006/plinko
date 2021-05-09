
class Particle{
    constructor(x,y){
      var options={
          restitution : 1,
          friction:0,
          density:0.8,
      }
      this.body=Bodies.circle(x,y,10,options);
      this.color=color(random(0,250),random(0,250),random(0,250))
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10)
        pop()
    }
   
   
   }