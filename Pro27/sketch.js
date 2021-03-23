const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobOnject4,bobObject5;
var roof;
var bobDiameter = 40;
var rope1,rope2,rope3,rope4,rope5;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    roofObject = new Ground(600,100,300,10);
    bobObject1 = new Paper(800,300,15);
    rope1 = new Chain(bobObject1.body,roofObject.body,-bobDiameter*2,0);
    console.log(bobObject1);
}
function draw(){
 bobObject1.display();
 //bobObject2.display();
 //bobObject3.display();
 //bobOnject4.display();
 //bobObject5.display();

roofObject.display();

 //rope1.display();
 //rope2.display();
 //rope3.display();
 //rope4.display();
 //rope5.display();
}