"use strict";

/**
declaring global constants for # of animals image we have (NUM_ANIMAL_IMAGES)
and the number of animal image we want to display (NUM_ANIMALS)
*/
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100 ;

// creating variables to store array of animal images
let animalImages = [];
let animals = [];

let misterRabbitImage = undefined;
let misterRabbit = undefined;

// creating variables for bunny sounds
let bunnySFX;
let misterRabbitSFX;

function preload() {
// creating for loop counting animal images from 0 to 9
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }

  misterRabbitImage = loadImage(`assets/images/mister-rabbit.png`);

  soundFormats('mp3', 'ogg');
  bunnySFX = loadSound(`assets/sounds/squeakysound_2`);
  misterRabbitSFX = loadSound(`assets/sounds/hurraysound`);
}
  /*
// creating for loop counting bunny soundfx 
for (let i = 0; i < 3; i++) {
    let bunnyRabbitSFX = loadSound(`assets/sounds/squeakysound_${i}.mp3`);
    bunnySFX.push(bunnyRabbitSFX);
  }
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();

  //create the animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
// creating new instance of the class animal
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

    let x = random(0, width);
    let y = random(0, height);
    misterRabbit = new MisterRabbit(x, y, misterRabbitImage);
}

function draw() {
  background(255, 0, 255);
  // weve create an array for NUM_ANIMAL_IMAGES so we will be calling the array
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  misterRabbit.update();
}

function mousePressed() {
  misterRabbit.mousePressed();
}
