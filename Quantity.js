function displayValue (){
  var displayValue;
  displayValue = mouseX * mouseY;
  fill('rgba(255,255,255,0.1)');
  stroke(0);
  textSize(displayValue / 200);
  text(displayValue,mouseX,mouseY);
}

function displayText (){
  var displayValue;
  displayValue = mouseX * mouseY;
  //write text below
  
  fill('rgba(255,255,255,1)');
  textSize(width/50);
  textStyle(NORMAL);
  //text('Blank Poster: Quantity \n X:'mouseX'',width/30,height/30);
  text('Blank Poster: Quantity',width/30,height/30);
  text('X',width/2,height/30);
  text(displayValue,width/2.15,height-height/30);
  text(mouseX,width/1.06,height/30);
  text('Y',width/36,height/2);
  text(mouseY,width/30,height-height/30);
  
  //draw lines below
  stroke(255);
  //top two lines
  line(width/4,height/35,width-width/1.9,height/35);
  line(width/1.85,height/35,width-width/12.5,height/35);
  //bottom two lines
  line(width/10,height-height/35,width-width/1.8,height-height/35);
  line(width/1.75,height-height/35,width-width/30,height-height/35);
  //left two lines
  line(width/30,height/20,width/30,height/2.13);
  line(width/30,height/1.93,width/30,height/1.07);
  //right line
  line(width-width/30,height/20,width-width/30,height-height/35);
}

function setup() {
  //createCanvas(525,735);
  createCanvas(420,588);
  background(0);
}

function draw() {
  //map(mouseX,0,windowWidth,0,width);
  //map(mouseY,0,windowheight,0,height);
  //background('rgba(0,0,0,0.1)');
  displayValue();
  displayText();
}