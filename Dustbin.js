class Dustbin{
      constructor(x, y, width, height) {
    var options = {
      isStatic:true
  };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display() {
    //rectMode(CENTER);
    
    var pos =this.body.position;
    // push();
    //  translate(pos.x, pos.y);
    // rotate(angle);
   // 
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width,this.height);
   // image(this.image, 0, 0, this.width, this.height);
    // pop();
  }
}


