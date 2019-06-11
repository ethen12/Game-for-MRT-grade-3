new p5();
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
function preload() {
  img = 
    loadImage('assets/Main.jpg');
  img1 = 
    loadImage('assets/Ready.jpg');
  img2 = 
    loadImage('assets/City1.jpg');
  img3 = loadImage('assets/Beach2.jpg');
  img4 = 
    loadImage('assets/Right.jpg');
 img5 = loadImage('assets/Underwater3.jpg');
  img6 = loadImage('assets/Jungle4.jpg');
  img7 = loadImage('assets/Mountain5.jpg');
  img8 = loadImage('assets/Desert6.jpg');
  img9 = loadImage('assets/Pyramid7.jpg');
  img10 = loadImage('assets/Rome8.jpg');
  img11 = loadImage('assets/Eiffel9.jpg');
  img12 = loadImage('assets/GreatW10.jpg');
  img13 = loadImage('assets/Wrong.jpg');
  img14 =
    loadImage('assets/Win.jpg');
  img15 =
    loadImage('assets/PaintSplat.png');
  img16 = 
   loadImage('assets/PaintPallet.png');
  img17 = 
   loadImage('assets/Nathan.png');
  img18 = 
   loadImage('assets/Jennifer.png');
  img19 = 
   loadImage('assets/Dima.png');
}
 var imgObj = null;
            
            function init() {
               imgObj = document.getElementById('Nathan.png');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '10px'; 
            }
            function moveRight() {
               imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
            }
function setup() {
  createCanvas(400, 400);
  //loadImage('assets/img.jpg', img => {
   // image(img, 200, 200);
//  });
    
    
    
}

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

var btnA = new Button({//go to game scenes
      x: 80,
      y: 280,
      label: "START",
});//start
var btnB = new Button({//view how to play
      x: 280,
      y: 280,
      label: "RULES",
});//rules
var btnC = new Button({//to read about us
      x: 180,
      y: 350,
      label: "ABOUT",
});//about
var btnD = new Button({//go to title screen
      x: 15,
      y: 15,
      label: "BACK",
});//back
var btnE = new Button({//last check before play
      x: 172,
      y: 170,
      label: "READY",
  });//ready
var btnF = new Button({//Play again after wrong
      x: 175,
      y: 250,
      label: "RETRY",

});//retry
var btnG = new Button({//1-2
      x: 170,
      y: 300,
      label: "NEXT",
  
});

var btnH = new Button({//End after win
      x: 170,
      y: 300,
      label: "FINISH",

});
var btnI = new Button({//lvl answer
      x: 25,
      y: 350,
      label: "0",

});
var btnJ = new Button({//lvl answer
      x: 115,
      y: 350,
      label: "1",

});
var btnK = new Button({//lvl answer
      x: 205,
      y: 350,
      label: "2",
});
var btnL = new Button({//lvl answer
      x: 295,
      y: 350,
      label: "3",
});
var btnM = new Button({//lvl 10 answer
      x: 25,
      y: 350,
      label: "13",

});
var btnN = new Button({//lvl 10 answer
      x: 115,
      y: 350,
      label: "67",

});
var btnO= new Button({//lvl 10 answer
      x: 205,
      y: 350,
      label: "42",
});
var btnP = new Button({//lvl 10 answer
      x: 295,
      y: 350,
      label: "76",
});
var btnQ = new Button({
      x: 40,
      y: 280,
      label: "NoSoul",
});
var btnR = new Button({//go to game scenes
      x: 175,
      y: 280,
      label: "QueenT",
});
var btnS = new Button({//go to game scenes
      x: 310,
      y: 280,
      label: "UniGirl",
});
var Charac;
var sceneNum=0;
var CharacX;
if (CharacX > 10000) {
        CharacX = 0;
    }
    CharacX += 0.70;

var drawScene0 = function(){
  frameRate(10000);
  loadImage('assets/Main.jpg', img => {
  img.resize(550,400);
  image(img, -60, 0);
  }); 
      
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
  text("Developed By MAIN GAME",180,250)
  strokeWeight(1);
  frameRate(10000);
    
  
}//title screen
var drawScene1 = function(){
   sceneNum=1;
  frameRate(10000);
  loadImage('assets/Ready.jpg', img => {
    img.resize(400,400);
    
    image(img, 0, 0);
  });
  loadImage('assets/Nathan.png', img => {   
      img.resize(250,200);
    image(img, -40, 90);
  });
  loadImage('assets/Jennifer.png', img => {   
      img.resize(135,160);
    image(img, 147, 115);
  });
  loadImage('assets/Dima.png', img => {   
      img.resize(400,300);
    image(img, 150, 90);
  });
  
  btnD.draw()
  
    
}//Ready screen
var drawScene2 = function(){
  sceneNum=2
  frameRate(10000);
  loadImage('assets/Main.jpg', img => {
  img.resize(550,400);
  image(img, -60, 0);
  }); 
  fill(255, 0, 250);
  textSize(30);
  noStroke();
  textStyle (BOLD);
  text("RULES",150,50);
  stroke(255);
  strokeWeight(4);
  line(255,82,140,82);
  textSize(14);
  strokeWeight();
  fill(255, 0, 250);
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
  btnD.draw(); 
}//rules
var drawScene3 = function(){
  sceneNum=3
 frameRate(10000);
 loadImage('assets/Main.jpg', img => {
  img.resize(550,400);
  image(img, -60, 0);
  }); 
     fill(255, 0, 250);
  textSize(30)
  strokeWeight();
text("About Us ",140,50);
   //text 
  textSize(14);
  text("We are two talented coders based out of Ottawa.", 50, 90 );
text("We started our careers in Ay Jacksons school computer lab.  ",15,125);
  text("Our company is TEAM GAME.",100,160);
  text("We specialize in educational games for  elementary school kids",5,195);
  text("We are looking to expand to couch surfing apps and more!",19,230);
  textSize(10)
text("This page was last edited on 3 May 2019, at 01:39 (EST).",65,390);
  stroke(225);
  strokeWeight(4);
  line(272,75,130,75);
    
    
    btnD.draw();
 
}//About Us
var drawScene4 = function(){
  frameRate(10000);
  rect(0,300,400,150);
  rect(0,0,400,50);
   loadImage('assets/Right.jpg', img => {
  imageMode(BOTTOM)
  image(img4, 0,50);
     
  });
  // background(19,234,1);
   //  noStroke();
  //   fill(255,255,255);
 //   rotate(120);
   // rect(260,-82,50,175);
   // rotate(-240);
  //  rect(2,175,50,100);
  //  rotate(120); 
}//right ans
var drawScene5 = function(){
    sceneNum=5
 frameRate(10000);
 loadImage('assets/Wrong.jpg', img => {  
  img.resize(400,400);
  image(img, 0, 40);
  }); 
  noStroke()
  fill(255);
  rect(0,-20,400,60);
    rect(90,215,230,100);
     
      
}//wrong ansr
var drawScene6 = function(){
     sceneNum=6;
    frameRate(10000);
    loadImage('assets/City1.jpg', img => {
    img.resize(550,400);
  image(img, -130, -50);
      
  });
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  fill(255,20,20);
   
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("0",125,295);
    text("0",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
    
      
}//lvl1

var drawScene7 = function(){
    sceneNum=7
    frameRate(10000);
      loadImage('assets/Beach2.jpg', img => {
    img.resize(520,400);
  image(img, -30, -30);
  });
  
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  fill(255,20,20);
    
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("0",125,295);
    text("1",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
    
    
    
}//lvl2
var drawScene9 = function(){
 frameRate(10000);
 loadImage('assets/Underwater3.jpg', img => {
  img.resize(450,350);
  image(img, -10, -5);
  }); 
  
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  fill(255,20,20);
    
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("0",125,295);
    text("2",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
  
}//lvl3
var drawScene10 = function(){
  frameRate(10000);
  loadImage('assets/Jungle4.jpg', img => {
    img.resize(400,400);
    
    rotate(51.85);
    image(img, 0,-400);
  });
  
   loadImage('assets/PaintSplat.png', img => {
     rotate(-51.85);
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  fill(255,20,20);
   
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("1",125,295);
    text("0",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
}//lvl4
var drawScene11 = function(){
  frameRate(10000);
  loadImage('assets/Mountain5.jpg', img => {
    img.resize(400,400);
    image(img, 0,0);
  });
  
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  fill(255,20,20);
    
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("1",125,295);
    text("1",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
}//lvl5
var drawScene12 = function(){
  frameRate(10000);
loadImage('assets/Desert6.jpg', img => {
    img.resize(400,400);
    image(img, 0,-75);
  });
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  
  fill(255,20,20);
    
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("2",125,295);
    text("1",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
}//lvl6
var drawScene13 = function(){
  frameRate(10000);
  loadImage('assets/Pyramid7.jpg', img => {
    img.resize(400,400);
    image(img, 0,-45);
  });
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  
  fill(255,20,20);
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("1",125,295);
    text("2",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
}//lvl7
var drawScene14 = function(){
frameRate(10000);
loadImage('assets/Rome8.jpg', img => {
    img.resize(400,400);
    image(img, 0,-80);
  });
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  
  fill(255,20,20);
    
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("2",125,295);
    text("0",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
}//lvl8
var drawScene15 = function(){
  frameRate(10000);
loadImage('assets/Eiffel9.jpg', img => {
    img.resize(400,320);
    image(img, 0,0);
  });
  
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  
  fill(255,20,20);
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("2",125,295);
    text("2",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("+",190,295);
}//lvl9
var drawScene16 = function(){
  frameRate(10000);
  loadImage('assets/GreatW10.jpg', img => {
    img.resize(400,350);
    image(img, 0,0);
  });
  
   loadImage('assets/PaintSplat.png', img => {
    img.resize(460,300);
  image(img, -20,200);
     
  });
  loadImage('assets/PaintPallet.png', img => {
    img.resize(120,100);
  image(img, -10,210);
     
  });
  
  fill(255,20,20);
    fill(255,255,255);
    rect(90,285,80,40);
    rect(230,285,80,40);
    textSize(20);
    fill(0,0,0);
    text("6",125,295);
    text("7",265,295);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(30);
    text("x",190,295);
}//lvl10
var drawScene17= function(){
   frameRate(10000);
   loadImage('assets/Win.jpg', img => {
    img.resize(400,400);
    image(img, 0,0);
  });
    
    btnH.draw()
}//win
function mouseClicked () {
      if (btnA.isMouseInside()&&sceneNum===0) {
          sceneNum=1;
      } else if (btnB.isMouseInside()&&sceneNum===0){
        sceneNum=2;
      } else if (btnC.isMouseInside()&&sceneNum===0){
        sceneNum=3;
      } else if (btnD.isMouseInside()){
        sceneNum=0;
      }else if (btnE.isMouseInside()&&sceneNum===1){
        sceneNum=6;
      }else if(btnF.isMouseInside()&&sceneNum===5 ){
        sceneNum=1;
      }else if(btnG.isMouseInside()&&sceneNum===4){
        sceneNum=7;
      }else if(btnG.isMouseInside()&&sceneNum===18){
        sceneNum=9;
      }else if(btnG.isMouseInside()&&sceneNum===19){
        sceneNum=10;
      }else if(btnG.isMouseInside()&&sceneNum===20){
        sceneNum=11;
      }else if(btnG.isMouseInside()&&sceneNum===21){
        sceneNum=12;
      }else if(btnG.isMouseInside()&&sceneNum===22){
        sceneNum=13;
      }else if(btnG.isMouseInside()&&sceneNum===23){
        sceneNum=14;
      }else if(btnG.isMouseInside()&&sceneNum===24){
        sceneNum=15;
      }else if(btnG.isMouseInside()&&sceneNum===25){
        sceneNum=16;
      }else if(btnH.isMouseInside()&&sceneNum===17){
        sceneNum=0;
      }else if(btnI.isMouseInside()&&sceneNum===6){
        sceneNum=4;
      }else if(btnJ.isMouseInside()&&sceneNum===6){
       sceneNum=5;   
      }else if(btnK.isMouseInside()&&sceneNum===6){
       sceneNum=5;   
      }else if (btnL.isMouseInside()&&sceneNum===6){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===7){
        sceneNum=5;
      }else if(btnJ.isMouseInside()&&sceneNum===7){
       sceneNum=18;   
      }else if(btnK.isMouseInside()&&sceneNum===7){
       sceneNum=5;   
      }else if (btnL.isMouseInside()&&sceneNum===7){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===9){
        sceneNum=5;
      }else if(btnJ.isMouseInside()&&sceneNum===9){
       sceneNum=5;   
      }else if(btnK.isMouseInside()&&sceneNum===9){
       sceneNum=19;   
      }else if (btnL.isMouseInside()&&sceneNum===9){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===10){
        sceneNum=5;
      }else if(btnJ.isMouseInside()&&sceneNum===10){
       sceneNum=20;   
      }else if(btnK.isMouseInside()&&sceneNum===10){
       sceneNum=5;   
      }else if (btnL.isMouseInside()&&sceneNum===10){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===11){
        sceneNum=5;
      }else if(btnJ.isMouseInside()&&sceneNum===11){
       sceneNum=5;   
      }else if(btnK.isMouseInside()&&sceneNum===11){
       sceneNum=21;   
      }else if (btnL.isMouseInside()&&sceneNum===11){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===12){
        sceneNum=22;
      }else if(btnJ.isMouseInside()&&sceneNum===12){
       sceneNum=5;   
      }else if(btnK.isMouseInside()&&sceneNum===12){
       sceneNum=5;   
      }else if (btnL.isMouseInside()&&sceneNum===12){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===13){
        sceneNum=23;
      }else if(btnJ.isMouseInside()&&sceneNum===13){
       sceneNum=5;   
      }else if(btnK.isMouseInside()&&sceneNum===13){
       sceneNum=5;   
      }else if (btnL.isMouseInside()&&sceneNum===13){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===14){
        sceneNum=5;
      }else if(btnJ.isMouseInside()&&sceneNum===14){
       sceneNum=5;   
      }else if(btnK.isMouseInside()&&sceneNum===14){
       sceneNum=24;   
      }else if (btnL.isMouseInside()&&sceneNum===14){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===15){
        sceneNum=5;
      }else if(btnJ.isMouseInside()&&sceneNum===15){
       sceneNum=25;   
      }else if(btnK.isMouseInside()&&sceneNum===15){
       sceneNum=5;   
      }else if (btnL.isMouseInside()&&sceneNum===15){
       sceneNum=5;
      }else if(btnI.isMouseInside()&&sceneNum===16){
        sceneNum=5;
      }else if(btnJ.isMouseInside()&&sceneNum===16){
       sceneNum=5;   
      }else if(btnK.isMouseInside()&&sceneNum===16){
       sceneNum=17;   
      }else if (btnL.isMouseInside()&&sceneNum===16){
       sceneNum=5;
      }
       else if (btnQ.isMouseInside()&&sceneNum===1){
          Charac=1;
        sceneNum=6;
      } else if (btnR.isMouseInside()&&sceneNum===1){
        Charac=2;
        sceneNum=6;
      } else if (btnS.isMouseInside()&&sceneNum===1){
        Charac=3;
        sceneNum=6;
      }
      
}//button logic
var CharacX  = 0;
var Charac1X = -75;
var Charac2X = -35;
function draw() {
  frameRate(10000);
  if (Charac===2&&sceneNum>5) {
   
    loadImage('assets/Jennifer.png', img => {
   
      img.resize(100,110);
    image(img, CharacX, 100);
    
  });
    CharacX = CharacX + 0.70;
     
      if(CharacX > 390)
  {
    CharacX=0;
  }
  } else if (Charac===3&&sceneNum>5) {
    
    loadImage('assets/Dima.png', img => {
     
      img.resize(250,220);
    image(img,Charac1X,75);
        
      

  }); 
    Charac1X = Charac1X + 0.70;
     
      if(Charac1X > 400)
  {
    Charac1X=-75;
  }
  } else if (Charac===1&&sceneNum>5) {
   
    loadImage('assets/Nathan.png', img => {   
      
      img.resize(200,150);
    image(img, Charac2X, 65);
      
      

  });
    Charac2X = Charac2X + 0.70;
     
      if(Charac2X > 400)
  {
    Charac2X=-35;
  }
  }
  if (sceneNum===0) {
   frameRate(10000);
   drawScene0();
      
      btnA.draw()
      btnB.draw();
      btnC.draw();
      
  }//title screen
  else if(sceneNum===1){
    frameRate(10000);
    drawScene1()
      btnD.draw()
      btnQ.draw()
      btnR.draw()
      btnS.draw()
     }//Ready screen
  else if(sceneNum===2){
     frameRate(10000);
     drawScene2()
      btnD.draw()
  }//rules
  else if(sceneNum===3){
   frameRate(10000);
   drawScene3()
      btnD.draw()
  }//About Us
  else if (sceneNum===4){
     frameRate(10000);
     drawScene4()
    btnG.draw()
  }//right1-2
  else if(sceneNum===5){
    frameRate(10000);
    drawScene5()
    btnF.draw() 
  }//wrong ansr
  else if(sceneNum===6){
   frameRate(10000);
   drawScene6()
    btnI.draw()
    btnJ.draw()
    btnK.draw()
    btnL.draw()
  }//lvl1
  else if(sceneNum===7){
     frameRate(10000);
     drawScene7()
      btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl2
  else if (sceneNum===9){
    frameRate(10000);
    drawScene9()
     btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl3
  else if (sceneNum===10){
    frameRate(10000);
    drawScene10()
      btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl4
  else if (sceneNum===11){
   frameRate(10000);
   drawScene11()
      btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl5
  else if (sceneNum===12){
   frameRate(10000);
   drawScene12()
      btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl6
  else if (sceneNum===13){
   frameRate(10000);
   drawScene13()
      btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl7
  else if (sceneNum===14){
  frameRate(10000);
  drawScene14()
      btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl8
  else if (sceneNum===15){
   frameRate(10000);
   drawScene15()
      btnI.draw()
      btnJ.draw()
      btnK.draw()
      btnL.draw()
  }//lvl9
  else if (sceneNum===16){
   frameRate(10000);
   drawScene16()
      btnM.draw()
      btnN.draw()
      btnO.draw()
      btnP.draw()
  }//lvl10
  else if (sceneNum===17){
   frameRate(10000);
   drawScene17()
  }//win screen
  else if (sceneNum===18){
    frameRate(10000);
    drawScene4()
    btnG.draw()
  }//right2-3
  else if (sceneNum===19){
   frameRate(10000);
   drawScene4()
    btnG.draw()
  }//right3-4
  else if (sceneNum===20){
    frameRate(10000);
    drawScene4()
    btnG.draw()
  }//right4-5
  else if (sceneNum===21){
   frameRate(10000);
   drawScene4()
    btnG.draw()
  }//right5-6
  else if (sceneNum===22){
    frameRate(10000);
    drawScene4()
    btnG.draw()
  }//right6-7
  else if (sceneNum===23){
   frameRate(10000);
   drawScene4()
    btnG.draw()
  }//right7-8
  else if (sceneNum===24){
   frameRate(10000);
   drawScene4()
    btnG.draw()
  }//right8-9
  else if (sceneNum===25){
   frameRate(10000);
   drawScene4()
    btnG.draw()
  }//right9-10
  
 }
