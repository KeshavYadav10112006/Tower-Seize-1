const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    bgImage = loadImage("wood.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     block8 = new Box(580 , 235 , 30 , 40)
     block9 = new Box(610 , 235 , 30 , 40)
     block10 = new Box(640 , 235 , 30 , 40)
     block11 = new Box(670 , 235 , 30 , 40)
     block12 = new Box(700 , 235 , 30 , 40)
    //tier 3
     block13 = new Box(610 , 195 , 30 , 40)
     block14 = new Box(640 , 195 , 30 , 40)
     block15 = new Box(670 , 195 , 30 , 40)
    //tier 4
      block16 = new Box(640 , 155 , 30 , 40)

     ground = new Ground(650 , 255 , 400 , 20)
    polygon = new Ball(100 , 200 ,30)
    ground2 = new Ground(600 , 390 , 1200 , 20)
    Sling = new SlingShot(polygon.body , {x:100 , y:150} )
}


   



function draw(){
    background(bgImage)
    Engine.update(engine);

    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()

    ground.display()
    ground2.display()

    polygon.display()

    Sling.display()

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Sling.fly();
}

