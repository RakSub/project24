class Ball {
  constructor(x, y, width, height, angle) {
    var options = {
      isStatic:false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
    };

    this.body = Bodies.circle(x, y, height, options);
    this.width = width;
    this.height = height;
   //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display() {
    //rectMode(CENTER);
    var angle = this.body.angle;
    var pos =this.body.position;

    // push();
    //  translate(pos.x, pos.y);
    // rotate(angle);
   // 
    ellipseMode(CENTER);
    fill("#eb34d5");
    ellipse(pos.x, pos.y, this.height);
   // image(this.image, 0, 0, this.width, this.height);
    // pop();
  }
}
