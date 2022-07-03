/* ***************** 

WELCOME TO THE ELECTRIC GARDEN
Sam Bordeleau

script file for garden page
obtains a list containing flowers from local storage and display them in the garden.
(see README file for credits)

***************** */

let chosenSeason;

function setup() {
  //create canvas and make background transparent
  let canvas = createCanvas(windowWidth / 1, windowHeight / 1.2);
  clear(); // transparent canvas
  canvas.parent('p5Canvas');
  // get stored season of current flower
  chosenSeason = parseInt(localStorage.getItem("chosenSeason"));
  // get stored flower list
  var flowerList = JSON.parse(localStorage.getItem("flowerList"));
  console.log(flowerList);
  // if the array contains objects, draw the flowers
  if (flowerList != null) {
    gotFlower(flowerList);
  }
};

// DRAW()
function draw() {
};

// GENERAL DOC FUNCTIONS
//
// canvas resizes when window is resized 
function windowResized() {
  canvas = resizeCanvas(windowWidth / 1, windowHeight / 1.2);
};
// makes tooltips appear on hover 
$(function () {
  $(document).tooltip({
    track: true
  });
});
// when clear button is pressed, clear local storage and refresh page
function clearData() {
  localStorage.clear();
  window.location.reload(true); 
};
// 
function flowerSelect(fileMonth, fileDay) {
  for (let i = 0; i < flowerJSON.flower.length; i++) {
    let flowerPetals = parseInt(flowerJSON.flower[i].petals[0]);
  }
};

// DRAW FLOWERS
//
function gotFlower(flowerList) {
  noFill();
  stroke(0); 
  strokeWeight(1.3);
  console.log(flowerList);
  // draw every flower in the flower list according to its object properties
  for (let i = 0; i < flowerList.length; i++) {
    beginShape();
    for (let path of flowerList[i].data.drawing) {
      for (let j = 0; j < path[0].length; j++) {
        //each path is 2 arrays (x and y)
        let x = (path[0][j]) + flowerList[i].offsetX;
        let y = (path[1][j]) + flowerList[i].offsetY;
        vertex(x, y);
      }
    }
    endShape();
  }
};
