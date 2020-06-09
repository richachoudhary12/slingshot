class Box {

constructor(x,y,width,height) {
var options = {
'restitution':0.9,
'friction':0.1,
'density':0.01
}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);

this.Visiblity = 255;

}
display(){
var pos =this.body.position;
rectMode(CENTER);

fill("red");
rect(pos.x, pos.y, this.width, this.height);

console.log(this.body.speed);

//if(this.body.speed < 1){
//World.remove(world, this.body);
// push();
// this.Visiblity = this.Visiblity - 5;
//tint(255,this.Visiblity);
// rect( this.body.position.x, this.body.position.y, this.height, this.height );
//pop();

// }

}
};

