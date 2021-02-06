
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, ground, stone, boy;

function preload()
{
	boy = loadImage("boy.png");
    tree = loadImage("tree.png");
    stone = loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree (200,200,10,10);

    mango1 = new Mango (200,400,10);
	mango2 = new Mango (250,400,10);
	mango3 = new Mango (300,350,10);
	mango4 = new Mango (250,350,10);
	mango5 = new Mango (200,350,10);

	stone = new Stone (100,100);

	constrain= new Constrain(stone.body,{x: 200, y: 100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dectectCollision(stone, mango1);
  dectectCollision(stone, mango2);
  dectectCollision(stone, mango3);
  dectectCollision(stone, mango4);
  dectectCollision(stone, mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}

function mouseDragged (){
    Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});
}

function mouseReleased (){
    slingShot.fly();
}

function dectectCollision (stone, mango1){

	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=mango1.r+stone.r)
	{
		Matter.Body.setStatic(mango1.body,false);
	}

}

function keyPressed () {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 235, y: 420})
		launcherObject.attach(stone.body);
	}
}