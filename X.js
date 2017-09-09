var gridSize = 15;
var randomEquation = [
    '[X+x/xX.X/ = Xx*^X-Xx',
    'X+-X-xxX+x/x+[X] = X_',
    'x.X+X/.X<!X = X-X!',
    'xXx+[x-x]!/x_ = _X*x.x',
    'X[x].X/xXx+X.X!-XX',
    '{x.x-x*X =! X-x+X-x}',
    '{X+x/xX*xX} = Xx*+X-xx',
    'X*xX-xXX+x*x+xxX = _',
    'x.x+X/x>X = X-x+X!',
    'XXx+[x-x]!/x_ = _X*x.x',
    'X^x.X/xxx+X.X > _X',
    'xxxX+x.xX/x = _!X',
    '[X!x.X]+x.X-x = xxX',
    'x^Xx.Xxxxx-x<x/X-X.!xX',
    '[xX+x/<>X-Xx!Xx',
    '/Xx+[X-x!x/= _X-xx!*X',
    'x+x.X/x-X+X.xX< _X',
    'xXx+x/x!X = /-x+XxXX',
    'X^xxxxX*.Xx+XX>_X',
    'x.x+X/x-XX +=Xxx-x+X!',
    ];

function grid(){
  for(var i = 0; i<=height;i+=gridSize){
    stroke(50);
    line(0,i,width,i);
  }
  for(var i = 0; i<=width;i+=gridSize){
    stroke(50);
    line(i,0,i,height);
  }
  
  //midlines
  stroke(155);
  //line(0,height/2,width,height/2);//horizontal
  //line(width/2,0,width/2,height);//vertical
}

function xMark (){
  fill(255);
  stroke(0);
  strokeWeight(2);
  
  //X's
  textSize(gridSize*4);
  text('X',gridSize,gridSize*4); // large xMark
  
  textSize(gridSize*1.5); // small x, top right/ top
  text('x',width/2+gridSize,gridSize*2);
  
  textSize(gridSize*1.5); // small x, top right/ bottom
  text('x',width/2+gridSize,gridSize*4);
  
  textSize(gridSize*1.5); // small x, bottom left
  text('x',gridSize,height-gridSize);
  
  textSize(gridSize*1.5); // small x, bottom mid
  text('x',gridSize*10,height-gridSize);
  
  textSize(gridSize*1.5); // small x, bottom right
  text('x',gridSize*19,height-gridSize);
  
  for(var i = 0;i<10;i+=3){
    textSize(gridSize*2.5);// inside boxes
    strokeWeight(0.1);
    stroke(255);
    noFill();
    text('X',gridSize*15+i*gridSize+3,gridSize*7-1);
  }
  
  //Boxes
  for(var i = 0;i<10;i+=3){
    noFill();
    strokeWeight(1);
    rect(gridSize*16+i*gridSize,gridSize*6,gridSize,gridSize);
  }
  
  //Text
  textSize(gridSize*0.50);
  stroke(0);
  fill(255);
  strokeWeight(6);
  
  text('+ mark or make a sign with an X.\n+ overwrite or obliterate with an X\n   or series of X\'s.\n+ make void or annul; invalidate.'
  ,gridSize*4,gridSize*2); //upper left
  
  textLeading(gridSize*0.50);
  text('+ the first unknown quantity in an algebraic expre-\n   ssion, usually the independent variable.'
  ,width/2+gridSize*2,gridSize*1.35);// upper right /top
  text('+ a cross-shaped written symbol, in particular.\n+ used to indicate a mistake or incorrect answer.'
  ,width/2+gridSize*2,gridSize*3.35);// upper right /bottom
  
  textSize(gridSize*0.75);
  text('Blank',gridSize*7.15,height-gridSize*1.15);//lower left
  text('Poster:',width/2+gridSize*1.7,height-gridSize*1.15);//lower middle
  text('XXXXXXXX',width-gridSize*5,height-gridSize*1.15);//lower right
  
  //Lines
  stroke(255);
  strokeWeight(1);
  
  line(gridSize*4,gridSize*4,width/2-gridSize,gridSize*4);//top left
  line(width/2+gridSize*2,gridSize*2,width-gridSize,gridSize*2);//top right/ top
  line(width/2+gridSize*2,gridSize*4,width-gridSize,gridSize*4);//top right/ bottom
  line(gridSize*2,height-gridSize,gridSize*9,height-gridSize);//bottom left
  line(gridSize*11,height-gridSize,gridSize*18,height-gridSize);//bottom mid
  line(gridSize*20,height-gridSize,gridSize*27,height-gridSize);//bottom right
}

function xMath(){
  //Plus signs
  fill(255);
  stroke(0);
  strokeWeight(2);
  textSize(gridSize);
  text('+',gridSize,gridSize*5.5);//left upper
  text('+',gridSize,gridSize*20.5);//left lower
  text('+',width/2+gridSize,gridSize*8.5);//right upper
  text('+',width/2+gridSize,gridSize*15.5);//right middle
  text('+',width/2+gridSize,gridSize*20.5);//right lower
  
  //Equations
  textSize(gridSize);
  fill(155);
  //left upper
  text(randomEquation[0],gridSize*2,gridSize*6);
  text(randomEquation[5],gridSize*2,gridSize*7);
  text(randomEquation[2],gridSize*2,gridSize*8);
  text(randomEquation[19],gridSize*2,gridSize*9);
  text(randomEquation[6],gridSize*2,gridSize*10);
  text(randomEquation[17],gridSize*2,gridSize*11);
  text(randomEquation[3],gridSize*2,gridSize*12);
  text(randomEquation[18],gridSize*2,gridSize*13);
  text(randomEquation[8],gridSize*2,gridSize*14);
  text(randomEquation[14],gridSize*2,gridSize*15);
  text(randomEquation[10],gridSize*2,gridSize*16);
  text(randomEquation[15],gridSize*2,gridSize*17);
  text(randomEquation[1],gridSize*2,gridSize*18);
  text(randomEquation[0],gridSize*2,gridSize*19);
  
  //left under
  text(randomEquation[2],gridSize*2,gridSize*21);
  text(randomEquation[9],gridSize*2,gridSize*22);
  text(randomEquation[18],gridSize*2,gridSize*23);
  text(randomEquation[6],gridSize*2,gridSize*24);
  text(randomEquation[1],gridSize*2,gridSize*25);
  text(randomEquation[10],gridSize*2,gridSize*26);
  text(randomEquation[15],gridSize*2,gridSize*27);
  text(randomEquation[11],gridSize*2,gridSize*28);
  //everything under hasn't been changed
  text(randomEquation[15],gridSize*2,gridSize*29);
  text(randomEquation[5],gridSize*2,gridSize*30);
  text(randomEquation[8],gridSize*2,gridSize*31);
  text(randomEquation[3],gridSize*2,gridSize*32);
  text(randomEquation[2],gridSize*2,gridSize*33);
  text(randomEquation[9],gridSize*2,gridSize*34);
  text(randomEquation[11],gridSize*2,gridSize*35);
  text(randomEquation[18],gridSize*2,gridSize*36);
  
  //right upper
  text(randomEquation[1],width/2+gridSize*2,gridSize*9);
  text(randomEquation[10],width/2+gridSize*2,gridSize*10);
  text(randomEquation[14],width/2+gridSize*2,gridSize*11);
  text(randomEquation[3],width/2+gridSize*2,gridSize*12);
  text(randomEquation[5],width/2+gridSize*2,gridSize*13);
  text(randomEquation[19],width/2+gridSize*2,gridSize*14);
  
  //right middle
  text(randomEquation[8],width/2+gridSize*2,gridSize*16);
  text(randomEquation[4],width/2+gridSize*2,gridSize*17);
  text(randomEquation[0],width/2+gridSize*2,gridSize*18);
  text(randomEquation[14],width/2+gridSize*2,gridSize*19);
  
  //right bottom
  text(randomEquation[15],width/2+gridSize*2,gridSize*21);
  text(randomEquation[19],width/2+gridSize*2,gridSize*22);
  text(randomEquation[4],width/2+gridSize*2,gridSize*23);
  text(randomEquation[16],width/2+gridSize*2,gridSize*24);
  text(randomEquation[14],width/2+gridSize*2,gridSize*25);
  text(randomEquation[10],width/2+gridSize*2,gridSize*26);
  text(randomEquation[7],width/2+gridSize*2,gridSize*27);
  text(randomEquation[3],width/2+gridSize*2,gridSize*28);
  text(randomEquation[6],width/2+gridSize*2,gridSize*29);
  text(randomEquation[9],width/2+gridSize*2,gridSize*30);
  text(randomEquation[12],width/2+gridSize*2,gridSize*31);
  text(randomEquation[0],width/2+gridSize*2,gridSize*32);
  text(randomEquation[1],width/2+gridSize*2,gridSize*33);
  text(randomEquation[6],width/2+gridSize*2,gridSize*34);
  text(randomEquation[10],width/2+gridSize*2,gridSize*35);
  text(randomEquation[11],width/2+gridSize*2,gridSize*36);

  //restore strokeweight for grid
  strokeWeight(1);
}

function xError(){
  var box1X = map(mouseX,0,width,width/2+gridSize,width/2+gridSize*3);
  var box2X = map(mouseX,0,width,width/2+gridSize*3,width/2+gridSize*6);
  var box3X = map(mouseX,0,width,width/2+gridSize*6,width/2+gridSize*9);
  var box4X = map(mouseX,0,width,width/2+gridSize*9,width/2+gridSize*12);
  var boxAllY = map(mouseY,0,height,gridSize*5,gridSize*7);
  if(mouseIsPressed){
    fill(205);
    textSize(gridSize*2);
    text('x',box1X,boxAllY);
    text('x',box2X,boxAllY);
    text('x',box3X,boxAllY);
    text('x',box4X,boxAllY);
  }
}

function setup() {
  createCanvas(420,588);
  //frameRate(30);
  background(0);
  rectMode(RADIUS);
}

function draw() {
  grid();
  xMark();
  xMath();
  xError();
}