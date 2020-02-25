class Alien {

  constructor(_alien1, _alien2, _alien3) {

    this.alien1 = _alien1;
    this.alien2 = _alien2;
    this.alien3 = _alien3;
  }

  display() {
//     function drawAlien1() {
//       fill("orange");
//       ellipse(30, 120, 80, 80);
//     }

//     function drawAlien2() {
//       fill("grey");
//       ellipse(60, 160, 70, 70);
//     }

//     function drawAlien3() {
//       fill("lightBlue");
//       ellipse(110, 220, 10, 10);
//     }
  }
  move() {

    this.alien1 = this.alien1 + random(-1, 1);
    this.alien2 = this.alien2 + random(-1, 1);
    this.alien3 = this.alien3 + random(-1, 1);
  }
  show() {

    stroke("black");
    strokeWeight(0.25);

    fill("purple");
    ellipse(this.alien1, this.alien2, -33, 33);
   
    fill("lightBlue");
    ellipse(this.alien1, this.alien2, -11, 11);
  }

}