const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(200,390,400,50)
box1= new Box(220,100,50,100);
box2= new Box(240,200,70,170);
}

function draw(){
    background(50,10,200);
    Engine.update(engine);
    ground.display();
     box1.display();
     box2.display();
     
}