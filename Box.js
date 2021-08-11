class Box {
    constructor(x,y){
    var options = {restitution : 0.1,
    friction : 0.3,
    density : 0.01
    }
this.box = Bodies.rectangle(x,y,30,40)
World.add(world , this.box)
    }
    display(){
        if(this.box.speed < 8){
            var angle = this.box.angle;
            push();
            translate(this.box.position.x, this.box.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect( 0, 0,30,40);
            pop();           }
           else
           {
            World.remove(world , this.box);
           }

    }
}