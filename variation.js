var printT = {
  variationV : ['v','V'],
  variationA : ['a','A'],
  variationR : ['r','R'],
  variationI : ['i','I'],
  variationA2 : ['A','a'],
  variationT : ['t','T'],
  variationI2 : ['I','i'],
  variationO : ['o','O'],
  variationN : ['n','N'],
  
  variableV : 'V',
  variableA : 'A',
  variableR : 'R',
  variableI : 'I',
  variableA2 : 'A',
  variableT : 'T',
  variableI2 : 'I',
  variableO : 'O',
  variableN : 'N',
  
  sizeText1 : 5,
  sizeText2 : 5,
  sizeText3 : 5,
  sizeText4 : 5,
  sizeText5 : 5,
  sizeText6 : 5,
  sizeText7 : 5,
  sizeText8 : 5,
  sizeText9 : 5,
  
  r : ['vvvvvvvvvvvvvvvvvvvv','aaaaaaaaaaaaaaaaaaaa','rrrrrrrrrrrrrrrrrrrr',
       'iiiiiiiiiiiiiiiiiiii','aaaaaaaaaaaaaaaaaaaa','tttttttttttttttttttt',
       'iiiiiiiiiiiiiiiiiiii','oooooooooooooooooooo','nnnnnnnnnnnnnnnnnnnn',
  ],
  
  i : 0,
  
  strokeColorR : 150,
  strokeColorG : 0,
  strokeColorB : 0,
  
  sWeight1 : 1,
  sWeight2 : 1,
  sWeight3 : 1,
  sWeight4 : 1,
  sWeight5 : 1,
  sWeight6 : 1,
  sWeight7 : 1,
  sWeight8 : 1,
  sWeight9 : 1,
  
  printText : function (){
    fill(0);
    stroke(0);
    
    strokeWeight(this.sWeight1);
    textSize(width/this.sizeText1);
    text(this.variableV,width/14,height/6); //V
    
    strokeWeight(this.sWeight2);
    textSize(width/this.sizeText2);
    text(this.variableA,width/2.5,height/6); //A
    
    strokeWeight(this.sWeight3);
    textSize(width/this.sizeText3);
    text(this.variableR,width/1.3,height/6); //R
    
    strokeWeight(this.sWeight4);
    textSize(width/this.sizeText4);
    text(this.variableI,width/14,height/2); //I
    
    strokeWeight(this.sWeight5);
    textSize(width/this.sizeText5);
    text(this.variableA2,width/2.5,height/2); //A2
    
    strokeWeight(this.sWeight6);
    textSize(width/this.sizeText6);
    text(this.variableT,width/1.3,height/2); //T
    
    strokeWeight(this.sWeight7);
    textSize(width/this.sizeText);
    text(this.variableI2,width/14,height/1.2); //I2
    
    strokeWeight(this.sWeight8);
    textSize(width/this.sizeText);
    text(this.variableO,width/2.5,height/1.2); //O
    
    strokeWeight(this.sWeight9);
    textSize(width/this.sizeText);
    text(this.variableN,width/1.3,height/1.2); //N
    
    //title
    fill(0);
    noStroke();
    textSize(width/40);
    text('Blank Poster: Variation',width/14,height/1.05);
    textSize(width/60);
    text(this.r[this.i],width/1.35,height/1.05);
    this.i++;
    if (this.i==this.r.length){
      this.i=0;
    }
  },
  
  printBGD : function () {
    //--------LINES-------
    for (var i = 0; i <= width; i++){
      stroke(this.strokeColorR); //,this.strokeColorG,this.strokeColorB
      strokeWeight(1);
      line(i,random(height),i,height);
    };
    
    //for (var i = 0; i <= width; i++){
    //  noFill();
    //  stroke(this.strokeColorR); //,this.strokeColorG,this.strokeColorB
    //  strokeWeight(1);
    //  ellipse(width/2,height/2,width,width);
    //};
  },
}

function mouseMoved (){
  //r = (random(0,255));
  //g = (random(0,255));
  //b = (random(0,255));
  printT.variableV = random(printT.variationV);
  printT.variableA = random(printT.variationA);
  printT.variableR = random(printT.variationR);
  printT.variableI = random(printT.variationI);
  printT.variableA2 = random(printT.variationA2);
  printT.variableT = random(printT.variationT);
  printT.variableI2 = random(printT.variationI2);
  printT.variableO = random(printT.variationO);
  printT.variableN = random(printT.variationN);
  
  printT.sizeText1 = random(5,10);
  printT.sizeText2 = random(5,10);
  printT.sizeText3 = random(5,10);
  printT.sizeText4 = random(5,10);
  printT.sizeText5 = random(5,10);
  printT.sizeText6 = random(5,10);
  printT.sizeText7 = random(5,10);
  printT.sizeText8 = random(5,10);
  printT.sizeText9 = random(5,10);
  
  //printT.strokeColorR = random(50,80); 
  printT.strokeColorG = random(0,255);
  printT.strokeColorB = random(0,255);
  
  printT.sWeight1 = random(0,25);
  printT.sWeight2 = random(0,25);
  printT.sWeight3 = random(0,25);
  printT.sWeight4 = random(0,25);
  printT.sWeight5 = random(0,25);
  printT.sWeight6 = random(0,25);
  printT.sWeight7 = random(0,25);
  printT.sWeight8 = random(0,25);
  printT.sWeight9 = random(0,25);
}

function setup() {
  createCanvas(420,588);
  //map(mouseY,0,588,0,255);
  frameRate(10);
}

function draw() {
  background(255);
  printT.printBGD();
  printT.printText();
}