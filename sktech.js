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
  textSize(10);
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
      label: "ABOUT US",
});
mouseClicked = function() {
  if (btn1.isMouseInside()) {
    sceneNum++
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
  }else if(sceneNum===1){
    
  }
}
