
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	roofObject = new Roof(400,100,500,50);
	bobObject1 = new Bob(200,700,90);
	bobObject2 = new Bob(300,700,90);
	bobObject3 = new Bob(800,700,90);
	bobObject4 = new Bob(600,700,90);
	bobObject5 = new Bob(800,700,90);
	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter*2, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, -bobDiameter*2, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, -bobDiameter*2, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, -bobDiameter*2, 0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  
  drawSprites();
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
 
}



