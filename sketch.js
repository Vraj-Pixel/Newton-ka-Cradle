
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,100,700,50);
	bobObject1=new Bob(600,100,30,30);
    rope1=new Rope(bobObject1.body,ground.body,-bobDiameter*2,0);2

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  drawSprites();
 
}



