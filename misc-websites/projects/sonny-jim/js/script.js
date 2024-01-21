/***************
                                ___       _ _                                       _                    
 ___ _   _ _ __  _ __  _   _   ( _ )     (_|_)_ __ ___  _ __ ___  _   _       _ __ (_) ___ _ __ _ __ ___ 
/ __| | | | '_ \| '_ \| | | |  / _ \/\   | | | '_ ` _ \| '_ ` _ \| | | |_____| '_ \| |/ _ \ '__| '__/ _ \
\__ \ |_| | | | | | | | |_| | | (_>  <   | | | | | | | | | | | | | |_| |_____| |_) | |  __/ |  | | |  __/
|___/\__,_|_| |_|_| |_|\__, |  \___/\/  _/ |_|_| |_| |_|_| |_| |_|\__, |     | .__/|_|\___|_|  |_|  \___|
                       |___/           |__/                       |___/      |_|                         
Sunny and Jimmy-Pierre
sam bordeleau

****************/

// variables
let balloonSunny;
let balloonSunnyX = -150;
let balloonSunnyY = -50;

let balloonJP;
let balloonJPX = 100;
let balloonJPY = -60;

let shirtWhite;
let shirtPlaid;

let boundaryOne;
let boundaryTwo;

let sY = 0;
let sZ = 0;
let jY = 0;
let jZ = 0;

let jpMove = false;
let sMove = false;

let mouthSonny;
let mouthJP;

// ****************** 
function preload() {

  // wiggling dress shirt gifs
  shirtWhite = createImg('assets/images/whiteshirt_normal.gif');
  shirtWhite.id('shirtOne');
  shirtWhite.style('opacity', '0');

  shirtPlaid = createImg('assets/images/plaidshirt_normal.gif');
  shirtPlaid.id('shirtTwo');
  shirtPlaid.style('opacity', '0');

  mouthSonny = select('#mouthOne');
  mouthSonny.style('opacity', '0');

  mouthJP = select('#mouthTwo');
  mouthJP.style('opacity', '0');

  // 3D balloon head models
  balloonSunny = loadModel('assets/3D/balloonone.obj', true);
  balloonJP = loadModel('assets/3D/balloontwo.obj', true);

  // background music and screaming sound FX
  soundFormats('mp3', 'ogg');
  bgSound = loadSound('assets/sound/ambience_sound');
  sunnyFX = loadSound('assets/sound/scream04');
  jpFX = loadSound('assets/sound/scream05');

  // load html elements
  boundaryOne = select('#rectOne');
  boundaryTwo = select('#rectTwo');

  // mouse events
  boundaryOne.mousePressed(sonnyMousePressed);
  boundaryTwo.mousePressed(jpMousePressed);
  boundaryOne.mouseReleased(sonnyMouseReleased);
  boundaryTwo.mouseReleased(jpMouseReleased);
}

// ****************** 
function setup() {
  createCanvas(1280, 800, WEBGL);
  bgSound.loop();
}

// ****************** 
function draw() {
  shirtWhite.style('opacity', '1');
  shirtPlaid.style('opacity', '1');
  mouthSonny.style('opacity', '1');
  mouthJP.style('opacity', '1');
  drawBalloon();
}

// ** drawing 3D models **
function drawBalloon() {
  background(255, 0);

  ambientLight(60, 60, 60);
  directionalLight(255, 250, 235, -0.3, 1, -0.8);
  specularMaterial(255, 245);
  shininess(30);
  noStroke();

// ** Sunny balloon **
// random values for rotation on Z or Y axis 
  if (sMove) {
    var ranZ = random(-0.5, 1);
    var ranY = random(-0.5, 0.25);
    var ranB = Math.random() < 0.5

    if (ranB) {
      sZ = ranZ;
    }
    else {
      sY = ranY;
    }
  }

// Sunny's position
  push();
  scale(1.8);
  translate(balloonSunnyX, balloonSunnyY, 0);
  rotateZ(PI + sZ);
  rotateY(9 + sY);
  rotateX(-0.35);
  sZ = 0;
  sY = 0;
  model(balloonSunny);
  pop();

  // ** J-P balloon **
  // random values for rotation on Z or Y axis 
  if (jpMove) {
    ranZ = random(-0.25, 0.75);
    ranY = random(-0.3, 0.25);
    ranB = Math.random() < 0.5

    if (ranB) {
      jZ = ranZ;
    }
    else {
      jY = ranY;
    }
  }

// JP's position
  push();
  scale(2.2);
  translate(balloonJPX, balloonJPY, 0);
  rotateZ(3.22 + jZ);
  rotateY(9.60 + jY);
  rotateX(-0.2);
  model(balloonJP);
  pop();

  jZ = 0;
  jY = 0;
}

// ****************** 
function sonnyMousePressed() {
  sunnyFX.play();
  sMove = true;
}
function sonnyMouseReleased() {
  sMove = false;
  sunnyFX.pause();
}

function jpMousePressed() {
  jpFX.play();
  jpMove = true;
}
function jpMouseReleased() {
  jpMove = false;
  jpFX.pause();
}
