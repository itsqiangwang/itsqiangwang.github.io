var numKill = 1;

//function shootView(){
//    var size=width/14;
//    var linelength= (width/14) * 2;
//    var linelengthInner= width/14 - width/70;
//    noFill();
//    stroke(255,0,0);
//    strokeWeight(size/12);
//    ellipse(mouseX,mouseY,size,size); //inner
//    strokeWeight(size/8);
//    ellipse(mouseX,mouseY,size*2,size*2); //middle
//    strokeWeight(size/4);
//    ellipse(mouseX,mouseY,size + width/7,size + width/7); //outer
//    strokeWeight(size/12);
//    line(mouseX,mouseY - linelength,mouseX,mouseY - linelengthInner);
//    line(mouseX,mouseY + linelength,mouseX,mouseY + linelengthInner);
//    line(mouseX - linelengthInner,mouseY,mouseX - linelength,mouseY);
//    line(mouseX + linelengthInner,mouseY,mouseX + linelength,mouseY);
//    
//  if(mouseIsPressed){
//    fill('rgba(255,255,255,0.25)');
//    noStroke();
//    ellipse(mouseX,mouseY,random(width/2),random(width/1.2)); //inner
//    ellipse(mouseX,mouseY,random(width/2),random(width/1.2)); //middle
//    ellipse(mouseX,mouseY,random(width/2),random(width/1.2)); //outer
//    line(mouseX,mouseY - linelength,mouseX,mouseY - linelengthInner);
//    line(mouseX,mouseY + linelength,mouseX,mouseY + linelengthInner);
//    line(mouseX - linelengthInner,mouseY,mouseX - linelength,mouseY);
//    line(mouseX + linelengthInner,mouseY,mouseX + linelength,mouseY);
//  }
//}

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
  fill(0,0,255);
  noStroke();
  textSize(width/20);
    text('portfolio under construction',mouseX+width/14,mouseY);
}

//function title(){
//  fill(255,255,255);
//  noStroke();
//  strokeWeight(1);
//  textSize(height/4.9);
//  text('Portfolio Under Construction',0,height/3);
//}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
    background('rgba(0,0,0,0.1)');
    fill('rgba(0,0,255,1)');
    noStroke();
    ellipse(mouseX,mouseY,width/14,width/14);
  //shootView();
}

function mouseClicked (){
    tInT();
}