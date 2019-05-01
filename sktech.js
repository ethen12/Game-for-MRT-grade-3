new p5();
function setup() {
  createCanvas(400, 400);
}
var sceneNum=0;
var Button= function(config){
  this.x = config.x || 80;
  this.y = config.y || 280;
  this.width = config.width || 60;
  this.height = config.height || 30;
  this.label = config.label || "START";
  
};

Button.prototype.draw = function() {
  fill(255,255,255);
  rect(this.x, this.y, this.width, this.height, 5);
  fill(0,0,0);
  textSize(13);
  textAlign(LEFT, TOP);
  text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function(){
  return mouseX > this.x &&
         mouseX < (this.x + this.width) &&
         mouseY > this.y &&
         mouseY < (this.y + this.height);
};

var btn1 = new Button({
      x: 80,
      y: 280,
      label: "START",
});

var btn2 = new Button({
      x: 280,
      y: 280,
      label: "RULES",
});

var btn3 = new Button({
      x: 180,
      y: 350,
      label: "ABOUT",
});

var btn4 = new Button({
      x: 15,
      y: 15,
      label: "BACK",
});

var btn5 = new Button({
      x: 200,
      y: 200,
      label: "READY",
});

function mouseClicked () {
      if (btn1.isMouseInside()) {
          sceneNum++;
      } else if (btn2.isMouseInside()) {
        sceneNum=2;
      } else if (btn3.isMouseInside()){
        sceneNum=3;
      } else if (btn4.isMouseInside()){
        sceneNum=0;
      }else if (btn5.isMouseInside()){
        sceneNum=4;
      }
}   
function draw() {
  if(sceneNum===0){
  background(0);
  noStroke();
  fill(0,47,95);
  ellipse(200,150,200,200);//bulk of earth
  fill(0,100,0);
  ellipse(130,130,50,50);//top left ellipse
  ellipse(127,150,50,50);//ellipse under top l
  ellipse(270,110,50,50);//top right ellipse
  ellipse(275,130,50,50);//ellipse under top r
  ellipse(240,215,50,50);//bott right ellipse
  fill(255,255,255);
  stroke(255,255,255);
  textSize(25);
  text("EQUATION EXPEDITION",60,220);
  noFill();
  stroke(255,255,255);
  rect(53,165,300,100);//title outline
  stroke(0,0,0);
  fill(255,255,255);
  textSize(13);
  text("Developed By TEAM GAME",180,250);
  btn1.draw();
  btn2.draw();
  btn3.draw();
  } else if(sceneNum===1) {
    background(0);
    
    btn4.draw();
    btn5.draw();
  } else if(sceneNum===2) {
   background(0);
  fill(255,255,255);
  textSize(30);
  noStroke();
  textStyle (BOLD);
  text("RULES",150,50);
  stroke(255);
  strokeWeight(4);
  line(255,82,140,82);
  textSize(14);
  strokeWeight();
  fill(255,255,255);
  text("•Start in Ottawa where you are",95,100);
  text("given your first math equation.",100,112);
  text("•there are 5 landmarks from around",95,155);
   text("the world that you travel to.",100,170);
  text("•Every time you get an equation right",95,205);
  text("you will move further on your adventure.",100,220);
  text("•If you get a question wrong, it's",95,265);
  text("Game Over.",100,280);
  text("•Don't worry you can keeping trying",95,325);
  text("Until you reach your final destination",100,340);
  btn4.draw();
  } else if(sceneNum===3){
    background(0);
    
    
    
    btn4.draw();
  } else if(sceneNum===4){
    background(0);
    
 
  }
}
