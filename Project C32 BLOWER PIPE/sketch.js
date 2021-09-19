const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;
var button;

var blower;
var blowerMouth;
var ball;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(500,500);

 

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20); 
   blowerMouth = new Blowermouth(width / 2 + 70, height / 2 + 20, 100, 90);

 


  //create the blowButton 
  button = createImg('Click to blow');
  button.position(width/2,height - 100);
  button.class("blowerButton");
  button.mouseClicked(blow);




}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  

  ball.show();
  blowerMouth.show();
  blower.show();
}
//creating air blow .
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0 },{x:0,y:0.05});

}