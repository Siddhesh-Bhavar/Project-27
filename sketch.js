const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roofObject;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	roofObject=new Roof(width/2,height/2,width/4,20);

	bobDiameter=40;

	startBobPositionX=width/2;
    startBobPositionY=height/4+500;
 	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
 	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
 	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
 	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	 
	
var render = Render.create({ 
	element:document.body,
	engine:engine, 
	options: { width:1200,
			   height:700, 
			   wireframes:false } 
		});

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0); 
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0);
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0);
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
 
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;

	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}
}
  
 
}





