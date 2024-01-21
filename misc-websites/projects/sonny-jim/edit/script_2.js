let shirtPlaid, shirtWhite;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function preload() {
   backgroundImg = loadImage('assets/images/background.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    shirtWhite = createSprite(windowHalfX * 1.5, windowHalfY * 1.60);
    shirtWhite.addAnimation('normal' , 'assets/sprites/shirt1.png' , 'assets/sprites/shirt4.png');
    shirtWhite.addAnimation('angry' , 'assets/sprites/shirt1.png' , 'assets/sprites/shirt2.png');

    shirtPlaid = createSprite(windowHalfX / 1.8, windowHalfY * 1.60);
    shirtPlaid.addAnimation('normal' , 'assets/sprites/wshirt1.png' , 'assets/sprites/wshirt4.png');
    shirtPlaid.addAnimation('angry' , 'assets/sprites/wshirt1.png' , 'assets/sprites/wshirt2.png');

    shirtPlaid.mouseActive, shirtPlaid.mouseActive = true;
} 

function draw() {
    background(backgroundImg);

   // animation(shirtWhite, windowHalfX , windowHalfY);

// -- plaid shirt on mouse over --
    if(shirtPlaid.mouseIsOver){
       shirtPlaid.changeAnimation('angry')
  }
    else {
       shirtPlaid.changeAnimation('normal')
  }

// -- white shirt on mouse over --
    if(shirtWhite.mouseIsOver){
       shirtWhite.changeAnimation('angry')
  }
    else {
       shirtWhite.changeAnimation('normal')
  };

    drawSprites();
}

 // Sketch A:
 new p5(function(p) {
  p.setup = function() {
    p.createCanvas(100, 100, p.WEBGL);  // <--- WEBGL
  };
  p.draw = function(b) {
    p.background(0);
    p.fill(255);
    p.rect(20,20,50,50);
  };
});

// Sketch B:
new p5(function(p) {
  p.setup = function() {
    p.createCanvas(100, 100, p.P2D);  // <--- P2D
  };
  p.draw = function(b) {
    p.background(0);
    p.fill(255);
    p.rect(20,20,50,50);
  };
});