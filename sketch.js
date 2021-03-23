
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone1 = new Stone(200 , 400 , 50 , 35);

	mango1=new mango(1000,100,30);
	mango2=new mango(1000,170,30);
	mango3=new mango(1060,170,30);
	mango4=new mango(1060,100,30);
	mango5=new mango(1190,190,30);
	mango6=new mango(1130,100,30);
	mango7=new mango(1130,170,30);
	mango8=new mango(980,240,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	slingShot = new Sling(stone1.body,{x:200,y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectollision(stone1 ,  mango1);
  detectollision(stone1 ,  mango2);
  
  stone1.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

   groundObject.display();
}
function mouseDragged (){

	Matter.Body.setPosition(stone1.body,{x:mouseX , y:mouseY});
	
	}
	
	function mouseReleased () {
	
	slingShot.fly();
	
	}

	function keyPressed() {
Matter.Body.setPosition

	}



	function detectollision(stone1 , mango1 ){

mangoBodyPosition = mango1.body.position
stoneBodyPosition = stone1.body.position

var distance=dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
if (distance<=mango1.r+stone1.r)
{

	Matter.Body.setStatic(mango1.body,false);

}
 
	} 

	function detectollision(stone1 , mango2 ){

		mangoBodyPosition = mango2.body.position
		stoneBodyPosition = stone1.body.position
		
		var distance=dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
		if (distance<=mango2.r+stone1.r)
		{
		
			Matter.Body.setStatic(mango2.body,false);
		
		}
		 
			} 

										
