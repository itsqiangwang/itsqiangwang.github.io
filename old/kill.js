var numKill = 255;
var redness = 255;

function shootView(){
    var size=width/14;
    var linelength= (width/14) * 2;
    var linelengthInner= width/14 - width/70;
    noFill();
    stroke(255,0,0);
    strokeWeight(size/12);
    ellipse(mouseX,mouseY,size,size); //inner
    strokeWeight(size/8);
    ellipse(mouseX,mouseY,size*2,size*2); //middle
    strokeWeight(size/4);
    ellipse(mouseX,mouseY,size + width/7,size + width/7); //outer
    strokeWeight(size/12);
    line(mouseX,mouseY - linelength,mouseX,mouseY - linelengthInner);
    line(mouseX,mouseY + linelength,mouseX,mouseY + linelengthInner);
    line(mouseX - linelengthInner,mouseY,mouseX - linelength,mouseY);
    line(mouseX + linelengthInner,mouseY,mouseX + linelength,mouseY);
    
  if(mouseIsPressed){
    fill('rgba(255,0,0,0.25)');
    noStroke();
    ellipse(mouseX,mouseY,random(width/2),random(width/1.2)); //inner
    ellipse(mouseX,mouseY,random(width/2),random(width/1.2)); //middle
    ellipse(mouseX,mouseY,random(width/2),random(width/1.2)); //outer
    line(mouseX,mouseY - linelength,mouseX,mouseY - linelengthInner);
    line(mouseX,mouseY + linelength,mouseX,mouseY + linelengthInner);
    line(mouseX - linelengthInner,mouseY,mouseX - linelength,mouseY);
    line(mouseX + linelengthInner,mouseY,mouseX + linelength,mouseY);
    numKill--;
    redness--;
  }
}

//function textWshapes() {
//  var margin = 50;
//  fill(0);
//  stroke(0);
//  rect(margin,margin,margin*2,height - margin*2);//vertical stroke of k
//  //rotate(radians(30));
//  strokeWeight(height/20);
//  line(margin*8,0,margin*2,height/2);//top diagonal stroke of k
//  line(margin*8,height,margin*2,height/2);// bottom '' ''
//  strokeWeight(0);
//  rect(margin*10,margin,margin*2,height - margin*2);//I
//  rect(margin*15,margin,margin*2,height - margin*2);//first L
//  rect(margin*15,height-(margin*3),margin*5,margin*2);
//  rect(margin*22,margin,margin*2,height - margin*2);//second L
//  rect(margin*22,height-(margin*3),margin*5,margin*2);
//  //boxes to cover up extensions of K
//  fill(0);
//  strokeWeight(0);
//  stroke(0);
//  rect(0,0,width,margin);
//  strokeWeight(0);
//  stroke(0);
//  rect(0,height-margin,width,margin);
//}

function tInT(){
  if(numKill <= 0){
      numKill = 255;
  }
  noFill();
  stroke(255,0,0);
  strokeWeight(1);
  textSize(random(width/700,width/23.3));
  for(var i = 0;i<numKill; i++){
    text('kill',random(-width,width),random(-height,height));
  }
}

function title(){
  if(redness <= 0 && numKill<=0){
    redness = 255;
  }
  //fill(redness,0,0);
  noFill();
  stroke(redness,0,0);
  strokeWeight(0.1);
  textSize(height/1.88);
  textAlign(LEFT);
  textLeading(10);
  //text('Blank\nPoster:\nKill',0,height/3);
  text('Kill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\nKill\n'
  ,0,height/2.4);
  
  noStroke();
  fill(redness,0,0);
  textSize(height/50);
  textAlign(RIGHT);
  text('_ Cause the death of (a person,\nanimal, or other living thing.',width-22,height-30,);
  textAlign(LEFT);
  text('Blank Poster:\nKill',22,height-30,);
}

function setup() {
  createCanvas(420,588);
  noCursor();
}

function draw() {
  background('rgba(0,0,0,0.1)');
  tInT();
  shootView();
  title();
}