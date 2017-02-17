//rectangle variables
var rectangle1 = {
  x: 60,
  y: 60,
  w: 240,
  h: 100
};

var rectangle2 = {
  x: 60,
  y: 200,
  w: 240,
  h: 80
};

var rectangle3 = {
  x: 60,
  y: 310,
  w: 240,
  h: 60
};

var rectangle4 = {
  x: 60,
  y: 390,
  w: 240,
  h: 40
};

var rectangle5 = {
  x: 60,
  y: 440,
  w: 240,
  h: 20
};

var rectangle6 = {
  x: 60,
  y: 470,
  w: 240,
  h: 10
};

var rectangle7 = {
  x: 60,
  y: 485,
  w: 240,
  h: 5
};

var rectangle8= {
  x: 60,
  y: 495,
  w: 240,
  h: 3
};

// speed variables (0.25 increments)
var speedA = 2;
var speedB = 2.25;
var speedC = 2.5;
var speedD = 2.75;
var speedE = 3;
var speedF = 3.25;
var speedG = 3.5;
var speedH = 3.75;

function setup() {
  createCanvas(460, 560);
  background(0, 0, 0);
  noStroke ()
}  

function draw() {
  //rectangle 1
  fill(255,255,255);
  background (0,0,0);
  noStroke();
  strokeWeight(0);
   if (rectangle1.x > 190) {
    speedH = -3.75;
  } else if (rectangle1.x > 40) {
  rect(rectangle1.x, rectangle1.y, rectangle1.w, rectangle1.h);
  } 

  rectangle1.x = rectangle1.x + speedH;
  
  //rectangle 2
  fill(255,255,255);
  noStroke();
  strokeWeight(0);
  if (rectangle2.x > 190) {
    background (0,0,0);
    speedG= -3.5;
  } else if (rectangle2.x > 40) {
  rect(rectangle2.x, rectangle2.y, rectangle2.w, rectangle2.h);  
  }  
  
  rectangle2.x = rectangle2.x + speedG;
  
  
  //rectangle 3
  fill(255,255,255);
  noStroke();
  strokeWeight(0);
  if (rectangle3.x > 190) {
    background (0,0,0);
    speedF= -3.25;
  } else if (rectangle3.x > 40) {
  rect(rectangle3.x, rectangle3.y, rectangle3.w, rectangle3.h);
  }

  rectangle3.x = rectangle3.x + speedF;
  
  
  //rectangle4
  fill(255,255,255);
  noStroke();
  strokeWeight(0);
  if (rectangle4.x > 190) {
    background (0,0,0);
    speedE= -3;
  } else if (rectangle4.x > 40) {
  rect(rectangle4.x, rectangle4.y, rectangle4.w, rectangle4.h);
  }
  
  rectangle4.x= rectangle4.x + speedE;
  
  
  //rectangle5
  fill(255,255,255);
  noStroke();
  strokeWeight(0);
  if (rectangle5.x > 190) {
    background (0,0,0);
    speedD = -2.75;
  } else if (rectangle5.x > 40) {
  rect(rectangle5.x, rectangle5.y, rectangle5.w, rectangle5.h);  
  }
 
  rectangle5.x= rectangle5.x + speedD;
  
  
  //rectangle6
  fill(255,255,255);
  noStroke();
  strokeWeight(0);
  if (rectangle6.x > 190) {
    background (0,0,0);
    speedC = -2.5;
  } else if (rectangle6.x > 40) {
  rect(rectangle6.x, rectangle6.y, rectangle6.w, rectangle6.h); 
  }
  
  rectangle6.x= rectangle6.x + speedC;
  
  
  //rectangle7
  fill(255,255,255);
  noStroke();
  strokeWeight(0);
  if (rectangle7.x > 190) {
    background (0,0,0);
    speedB = -2.25;
  } else if (rectangle7.x > 40) {
    rect(rectangle7.x, rectangle7.y, rectangle7.w, rectangle7.h);
  }
  
  rectangle7.x= rectangle7.x + speedB;
  
  
  //rectangle8
  fill(255,255,255);
  noStroke();
  strokeWeight(0);
  if (rectangle8.x > 190) {
    background (0,0,0);
    speedA = -2;
  } else if (rectangle8.x > 40) {
  rect(rectangle8.x, rectangle8.y, rectangle8.w, rectangle8.h); 
  }
  
  rectangle8.x= rectangle8.x + speedA;

  
}

