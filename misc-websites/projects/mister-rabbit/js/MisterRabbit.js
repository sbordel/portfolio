class MisterRabbit extends Animal {
// added "extends Animal" to define MisterRabbit class as child of Animal
  constructor(x, y, image) {
//super calls Animal's constructor values
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.1;
  }

  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
        this.found = true;
        misterRabbitSFX.play();
    }
    else {
      this.found = false;
      bunnySFX.play();
    }
  }
}
