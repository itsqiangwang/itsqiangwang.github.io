var Leading1 = 0.75;
var tSize2 = 1.6;
var Leading3 = 5;
var Leading4 = 3;
var Leading5 = 18;
var Leading6 = 3;
var Leading7 = 11;
var Leading8 = 4;
var Leading9 = 4;
var Leading10 = 5;
var tSize11 = 60;
var tSize12 = 140;
var Leading13 = 9;
var sWeight = 10;

var cursorSize = 400;

function drawCursor() {
  fill('rgba(255,255,255,0.25)');
  noStroke();
  ellipse(mouseX,mouseY,cursorSize,cursorSize);
}

function drawLines() {
  var Rh1 = map(mouseX,0,width,width/2,width);
  var Rv1 = map(mouseY,0,height,0,height/8);
  var Rv2 = map(mouseY,0,height,height/2,height);
  var Rh2 = map(mouseX,0,width,width-width/4,width);
  var Rh3 = map(mouseX,0,width,width-width/4,width);
  
  var Lh1 = map(mouseX,0,width,width/2,0);
  var Lh2 = map(mouseX,0,width,0,width/2);
  var Lv1 = map(mouseY,0,height,0,height/4);
  var Lv2 = map(mouseY,0,height,height-height/4,height);
  
  stroke('rgba(255,255,255,0.1)');
  strokeWeight(1.5);
  //fill(255);
  line(width/2,0,width/2,mouseY); //line dividing pg in half
  //RIGHT SIDE of midline
  line(width/2,height/2,Rh1,height/2);//Right horizontal 1
  line(width/2,height/8,Rh1,height/8);
  line(width-width/4,0,width-width/4,Rv1);//R vertical 1
  line(width-width/4,height/2,width-width/4,Rv2);//Rv2
  line(width-width/4,height-height/4,Rh2,height-height/4);//Rh2
  line(Rh3,height-height/8,width,height-height/8);//Rh3
  
  //LEFT SIDE OF midline
  line(Lh1,height/4,width/2,height/4);//Lh1
  line(Lh1,height-height/4,width/2,height-height/4);
  line(0,height*3/8,Lh2,height*3/8);//Lh2
  line(width/4,Lv1,width/4,height/4);//Lv1
  line(width/4,height-height/4,width/4,Lv2);//Lv2
}

function writeText(){
  fill(255);
  strokeWeight(3);
  stroke(50);
  
  textStyle(NORMAL);
  textSize(width/8);
  textLeading(Leading1);//0.75
  text('Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half Half',
  width/100,0,width/4,height/4);
  
  textSize(width/tSize2);//1.6
  textLeading(3);//3
  textStyle(BOLD);
  text('H',width/1.9,height/2.1);
  
  textSize(width/2.4);
  textLeading(Leading3);//5
  textStyle(NORMAL);
  text('L\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL\nL',
  width/2,height/1.36);
  
  textSize(width/40);
  textLeading(Leading4);//3
  text('half half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\nhalf half half half half\n'
  ,width-width/4.2,height/40);
  
  textSize(width/2.9);
  textLeading(Leading5);//18
  textStyle(ITALIC);
  text('FF\nFF\nFF\nFF\nFF\nFF'
  ,0,height/1.72);
  
  textStyle(NORMAL);
  textSize(58);
  textLeading(Leading6);//3
  text('aaaaaa\naaaaaa\naaaaaa\naaaaaa\naaaaaa\naaaaaa\naaaaaa\n'
  ,width/60,height/3.1);
  
  textSize(130);
  textLeading(Leading7);//11
  textStyle(BOLD);
  text('A\nA\nA\nA\n',width/4+5,height-42.5);
  
  textSize(50);
  textLeading(Leading8);//4
  textStyle(ITALIC);
  text('hhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\nhhh\n'
  ,width-width/4+8,height/1.72);
  
  textSize(42);
  textLeading(Leading9);//4
  textStyle(NORMAL);
  text('LLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\nLLLL\n',width/4+5,40);
  
  textSize(60);
  textLeading(Leading10);//5
  textStyle(NORMAL);
  text('Aa\nAa\nAa\n',width/2+17,55);
  
  textSize(tSize11);//60
  textLeading(5);//5
  textStyle(ITALIC);
  stroke(0);
  text('fffff',width-width/4+8,height-88);
  
  textSize(tSize12);//140
  textLeading(18);//18
  textStyle(ITALIC);
  text('h',8,height-15);
  
  textStyle(NORMAL);
  textSize(7);
  stroke(0);
  strokeWeight(2);
  textLeading(Leading13);//9
  text('half half half half half half\nhalf half half half half half\nhalf half half half half half\nhalf half half half half half\nhalf half half half half half\nB l a n k  P o s t e r  :  H a l f'
  ,width-width/4+8,height-56);
}

function mousePressed(){
  //Leading1 = 0.75;
  //Leading2 = 3;
  //Leading3 = 5;
  //Leading4 = 3;
  //Leading5 = 18;
  //Leading6 = 3;
  //Leading7 = 11;
  //Leading8 = 4;
  //Leading9 = 4;
  //Leading10 = 5;
  //Leading11 = 5;
  //Leading12 = 18;
  //Leading13 = 9;
  Leading1/=2;
  tSize2*=2;
  Leading3/=2;
  Leading4/=2;
  Leading5/=2;
  Leading6/=2;
  Leading7/=2;
  Leading8/=2;
  Leading9/=2;
  Leading10/=2;
  tSize11/=2;
  tSize12/=2;
  sWeight/=2;
  cursorSize/=2;
  
  if(tSize12 <= 0.005 || Leading1<=0.005){
    Leading1 = 0.75;
    tSize2 = 1.6;
    Leading3 = 5;
    Leading4 = 3;
    Leading5 = 18;
    Leading6 = 3;
    Leading7 = 11;
    Leading8 = 4;
    Leading9 = 4;
    Leading10 = 5;
    tSize11 = 60;
    tSize12 = 140;
    Leading13 = 9;
    sWeight = 10;
    cursorSize = 400;
  }
}

function setup() {
  createCanvas(420,588);
}

function draw() {
  background('rgba(0,0,0,0.1)');
  drawLines();
  writeText();
  drawCursor();
}