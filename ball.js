class Ball{
    constructor(x , y ,radius){
        var options = {
            frictionAir:0.002,
            density:1.2,
            restitution:0.3
        }
        this.body = Bodies.circle(x , y  , radius)
        this.radius = radius
        this.image = loadImage("polygon.png");
        World.add(world , this.body)
    }

    display(){
        rectMode(CENTER);
        var angle = this.body.angle
        fill("yellow")
        ellipseMode(CENTER)
        push()
        translate(this.body.position.x , this.body.position.y)
        rotate(angle)
        ellipse(0,0,this.radius)
        pop()
    }       
}