'use strict'
//let img
var mic;
let micLevel;
let angleWave;
let angle=0;
let r=0;
let Mowhawk;
let colorBlack = true;

let alien1;
let alien2;
let alien3;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  
  
    alien1= new Alien( 70,120, 100, 100);
    alien2= new Alien( 80,190, 70, 70);
    alien3= new Alien( 130,220, 5, 20 );
  
  //AUDIO INPUT
  mic = new p5.AudioIn()
  mic.start();

}
function draw() {
  
    background(220);
  
alien1.move();
alien1.show();    
alien2.move();
alien2.show();
alien3.move();
alien3.show();
  
  micLevel=mic.getLevel();
  
  angleWave = map (mic.getLevel (), 0, 0.03, 8, 12, true );
  console.log(angleWave);
  
  drawMowhawk();
  
  drawMyBody();
  
  drawLegs();
  
  drawHead();
  
  drawEyes();
  
  drawPupil(); 

  drawMouth();
  
  if (mouseIsPressed) {
    
    fill(0);
    ellipse(mouseX, mouseY, 40, 40);
    
    fill ("purple");
    textSize(33);
    text('is out there', 120, 50);
    
  } else {
    fill("white");
    ellipse(mouseX, mouseY, 40, 40);
    fill ("coral");
    ellipse(mouseX, mouseY, 20, 20);
    
    fill ("orange");
    textSize(44);
    text('The truth', 120, 50);
  }
}
  
  if (mouseIsPressed) {
    
    fill(0);
    ellipse(mouseX, mouseY, 40, 40);
  } else {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 60, 60);
  }

function mousePressed() {

  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 250) {
    console.log(" mouse peep in here");
    colorBlack = !colorBlack;
  }
  
}

function drawMowhawk(){
//blk mowhawk
  fill(0,0,0);
  ellipse(200,150, 20, 175); 
  
  if (colorBlack === true) {
    fill(255);

} else if (colorBlack === false) {

    fill(255, 0, 0);
    ellipse(200,150, 20, 175);
  }
}

function drawMyBody(){
//body
  beginShape();
  fill(255,99,71);
  stroke(255,127,80);
  circle(200,250,150); 
}

function drawLegs(){
//legs 
  push();
  translate(40,10);
  
  //rotate 8-12
  rotate(angleWave);
  beginShape()
  fill(0,0,0);
  ellipse(250,280, 25, 100);
  ellipse(150,280, 25, 100);
  
  ellipse(250,280, 25, 100);
  ellipse(150,280, 25, 100);
pop();
}

function drawHead (){
//head
  beginShape();
  fill(255,99,71);
  stroke(255,127,80);
  strokeWeight(3);
  circle(200,150,100);
}

function drawEyes(){
//eyes
  stroke(255,127,80);
  strokeWeight(3);
  fill(255,255,255);
  circle(175, 105, 30);
  circle(225,105,30);
}

function drawPupil(){
//pupil  
  fill(0,0,0);
  stroke(218,112,214);
  circle(175, 105, 10);
  circle(225,105,10);
}

function drawMouth(){
//mouth
  fill(255,182,193);
  stroke(205,92,92);
  strokeWeight(1);
  arc(190, 160, 30, 30, 0, 270, CHORD); 
}

