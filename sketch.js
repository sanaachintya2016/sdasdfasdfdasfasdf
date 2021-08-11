const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3
var polygon,string
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(600,580,6000,20);
    ground2 = new Ground(950,190,250,20);
    ground3 = new Ground(560,330,255,20);
    box1 = new Box(470,300);
    box2 = new Box(500,300);
    box3 = new Box(530,300);
    box4 = new Box(560,300);
    box5 = new Box(590,300);
    box6 = new Box(620,300);
    box7 = new Box(650,300);
    box8 = new Box(500,200);
    box9 = new Box(530,200);
    box10 = new Box(560,200);
    box11 = new Box(590,200);
    box12 = new Box(620,200);
    box13 = new Box(530,100);
    box14 = new Box(560,100);
    box15 = new Box(590,100);
    box16 = new Box(560,50);
    box17 = new Box(890,170);
    box18= new Box(920,170);
    box19 = new Box(950,170);
    box20 = new Box(980,170);
    box21 = new Box(1010,170);   
    box22 = new Box(920,150); 
    box23 = new Box(950,150);
    box24 = new Box(980,150);   
    box25 = new Box(950,80);
  ball = Bodies.circle(50,200,20);
  polygon_img = loadImage("polygon.png")
  World.add(world,ball);

  string = new Slingshot(ball,{x:100,y:200});

}

function draw(){

    background("red");   
     text(mouseX + ',' + mouseY, 30, 45);
     Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
    string.display();

       
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}

function mouseReleased (){
  string.fly();
}


function keyPressed (){
  if(keyCode === 32){
string.attach(ball)
  }
}