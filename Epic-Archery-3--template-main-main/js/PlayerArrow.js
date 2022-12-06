class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: -0.1,
        frictionAir: 0,
        density: 0.01,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x+30, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);

      velocity.mult(20);
      print(velocity.x);
      print(velocity.y);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
    }
}