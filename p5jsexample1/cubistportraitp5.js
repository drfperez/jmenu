let mic;
function setup(){
	createCanvas(320,400);
//brown background
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}
function draw(){
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, 0,1000);
fill(92,52,40);
noStroke();
quad(92,0,194,400,320,400,320,0);
fill(0);
//hair
stroke(0);
strokeWeight(7);
fill(46,52,40);
triangle(215,364, 267,321,286,386);
quad(267,321, 303, 163, 155,5, 95, 0);
//orange face
fill(211,135,37);
stroke(0);
strokeWeight(7);
ellipse(93,205,286, 390);
//yellow background
noStroke();
fill(237, 224, 32);
quad(0,0,0,400,194,400,92,0);
//blue face triangle
fill(53,117,142);
triangle(186,368,174,46,118, 102);
//mouth line
stroke(0);
strokeWeight(5);
line(184,265,154+h,269+h);
//chin
fill(148,159,81);
quad(103,285,119,339,184,358,163,286);
//nose and left side of face
noStroke();
quad(93,0, 17,213, 59,240, 130,143);
//purple upper lip
fill(61,65,112);
noStroke();
quad(95,260,153,240,129,145,91,196);
//mouth blue triangle
stroke(0);
strokeWeight(5);
fill(53,117,142);
triangle(96,261, 179,262,152,240);
//purple mouth triangle
stroke(0);
fill(155,96,154);
triangle(160,270,103,284,170,304);
//white eye
fill(255);
stroke(0);
strokeWeight(5);
ellipse(177,148, 90,60, PI, PI);
//purple eye
fill(155,96,154);
stroke(0);
strokeWeight(3);
ellipse(177,148, 46,46, PI, PI);
//pupil
fill(0);
noStroke(0);
ellipse(177,148, 20,20, PI, PI);
//lines for nose
strokeWeight(7);
stroke(0);
line(94,0,15,210);
line(15,210,54,240);
line(54,240, 91,200);
strokeWeight(5);
line(91,200, 95,260);
line(151,242,132,149);
//yellow eye
fill(236,220,133);
ellipse(99,99,36,36);
fill(0);
ellipse(99,99,10,10);
//nostrils
strokeWeight(9);
line(55,102,50,100);
strokeWeight(2);
line(29,208,34,212);
line(46,220,53,226);
line(122,193,122,228);
//under chin
strokeWeight(7);
fill(53,117,142);
ellipse(135,388,120,120);
noStroke();
quad(118,290,162,303,160,316,115,300);
fill(46,52,40);
stroke(0);
rect(65,388,200,20);
}
