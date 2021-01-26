class SlingShot{
    constructor(BodyA , PointB){
        var options = {
            bodyA:BodyA,
            pointB:PointB,
            stiffness:0.4,
            length:10
        }
        this.sling = Constraint.create(options) 
        World.add(world , this.sling)
    }

    fly(){
        this.sling.bodyA = null;
    }
    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.pointB
        push()
        strokeWeight(4)
        stroke("white")
        line(pointA.x , pointA.y , pointB.x , pointB.y)
        pop()
    }
}