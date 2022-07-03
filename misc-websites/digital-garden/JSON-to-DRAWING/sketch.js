/* ***************** 

Code written by Sabine Rosenberg

Data-set of Flower Drawings (test_flower.json)
taken from The Quick, Draw! Dataset provided by Google
https://github.com/googlecreativelab/quickdraw-dataset

this data-set is licensed under CC BY 4.0 
https://creativecommons.org/licenses/by/4.0/

***************** */

function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(255);
  loadJSON('test_flower.json', gotFlowers);
}
function gotFlowers(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
  //draw 4 flowers
  gotFlower(data[0], 0, 0);
  gotFlower(data[1], 255, 0);
  gotFlower(data[2], 0, 255);
  gotFlower(data[3], 255, 255);

}

function gotFlower(data, offsetX, offsetY) {
  console.log(data.drawing);
  noFill();
  stroke(0);
  beginShape();
  for (let path of data.drawing) {
    for (let i = 0; i < path[0].length; i++) {
      //each path is 2 arrays (x and y)
      let x = (path[0][i]) + offsetX;
      let y = (path[1][i]) + offsetY;
      vertex(x, y);
    }
    endShape();
  }
}

function draw() {
}
