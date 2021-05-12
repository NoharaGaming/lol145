const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var flag = 0;

function preload(){
 bg = loadImage("images/bg.jpg")
 trainSound = loadSound("sound/train.mp3")
 trainCrash = loadSound("sound/train_crossing.mp3")
}
function setup() {
  createCanvas(1200,400);
myEngine=Engine.create() 
myWorld = myEngine.world;
  ground = new Ground(600,380,1200,10);

  Boggie1 = new Boggie(700,350,70,70);
  Boggie2 = new Boggie(600,350,70,70);
  Boggie3 = new Boggie(500,350,70,70);
  Boggie4 = new Boggie(400,350,70,70);
  Boggie5 = new Boggie(300,350,70,70);
  Boggie6 = new Boggie(200,350,70,70);
  Boggie7 = new Boggie(100,350,70,70);
  
  Chain1  = new Chain(Boggie1.body,Boggie2.body)
  Chain2  = new Chain(Boggie2.body,Boggie3.body)
  Chain3 = new Chain(Boggie3.body,Boggie4.body);
  Chain4 = new Chain(Boggie4.body,Boggie5.body);
  Chain5 = new Chain(Boggie5.body,Boggie6.body);
  Chain6 = new Chain(Boggie6.body,Boggie7.body);
  rock1 = new Rock(1100,350,90,90);
}
function draw() {
  background(bg);  
Engine.update(myEngine)
  
 Chain1.show();
Chain2.show();
Chain3.show();
Chain4.show();
Chain5.show();
Chain6.show();

  Boggie1.show();
  Boggie2.show();
  Boggie3.show();
  Boggie4.show();
  Boggie5.show();
  Boggie6.show();
  Boggie7.show();

  rock1.show();
  var collision = Matter.SAT.collides(Boggie1.body,rock1.body);
if (collision.collided){
  flag = 1
}
if (flag == 1){
   trainCrash.play();
}
  }

  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(Boggie1.body,{x:Boggie1.body.position.x,y:Boggie1.body.position.y},
        {x:0.5,y:0});
        trainSound.play();
    }


  }
