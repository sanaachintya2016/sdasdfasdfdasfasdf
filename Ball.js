class Ball {
constructor(){
 var options = { restitution : 0.2,
    friction : 0.9,
    density : 1
 }

 this.polygon = Bodies.rectangle(115,335 ,50,40,options)
this.image = loadImage("polygon.png")
World.add(world,this.polygon);
    string = new String(this.polygon,{x:100, y:290});

}
display(){
    
    var angle = this.polygon.angle;
    push();
    translate(this.polygon.position.x, this.polygon.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,50,50);
    pop();
}

}