/************************** 

WELCOME TO THE ELECTRIC GARDEN
Samuelle Bordeleau

**************************/

"use strict";

// VARIABLES
//
// file that is dropped in the drop zone 
let droppedFile;
// file properties (droppedFile)
let fileSize; 
let fileSizeLgt;
let fileType; 
let fileDate; 
// file date properties (droppedFile)
let fileYear;
let fileMonth;
let fileDay;
/*
// user location and access date  
let userCountry;
let userRegion;
let userAccessDate;
*/
// flower properties (flowerJSON) 
let flowerJSON;
let flowerMonth;
let flowerDay;
let flowerSeason;
// drawing properties 
let drawingFlower;
let drawingName;
let drawingDate;
let drawingLocation;

let dropZone; // image where files can be dropped
let pageURL; // url of active page
let chosenFlowers = []; // array containing all chosen flowers
let chosenSeason = ''; // chosen flower's blooming season

// PRELOAD()
//
function preload() {
  //load greenhouse image as "dropZone"
  dropZone = createImg('assets/images/shed_small.png');
}

// SET UP()
//
function setup() {
  noCanvas();
  //give dropZone the #shed ID
  dropZone.id('shed');
  dropZone.attribute('title','drag and drop a file on the greenhouse to plant a flower in the garden!');
  // Adds an event for when a file is dropped onto the canvas
  dropZone.drop(gotFile);
  //load json file with flower data
  flowerJSON = loadJSON('assets/data/flowers.json');
  //check page URL and display content accordingly
  pageURL = window.location.href.split('/')[6]; // change number to [6] for github pages
  if (pageURL == "greenhouse.html") {
    dropZone.style('display', 'block');
  } // if the active page is greenhouse.html, display shed 
  else {
    dropZone.style('display', 'none');
  } // if not, keep it hidden
}

// DRAW()
function draw() {
  noLoop();
}

// GENERAL DOC FUNCTIONS
//
// canvas resizes when window is resized 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// makes tooltips appear on hover 
$(function () {
  $(document).tooltip({
    track: true
  });
});

// GET USER LOCATION
/*
// gets user location with ipify API 
$(function getUserLocation() {
  $.getJSON("https://geo.ipify.org/api/v1?apiKey=at_OZGboRjmnwnVC8rVin6gnzz0BOWWQ",
    function (text) {
      userCountry = text.location.country;
      userRegion = text.location.region;

      let userLocation = userCountry + ", " + userRegion;

      userAccessDate = new Date();
      let userDay = userAccessDate.getDate();
      let userMonth = userAccessDate.getMonth() + 1;
    }
  );
});
*/

// GET DROPPED FILE
//
/* receives dropped file, triggers an event to show that file has been received
and assigns the files properties to variables (fileSize, fileType & fileDate) */
function gotFile(file) {
  let successImg = document.getElementById('imgDropped');
  console.log(file);

  droppedFile = file;
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    const img = createImg(file.data).hide();
    // Draw the image onto the canvas
    image(img, 0, 0, width, height);
    successImg.style.display = 'block';
  } else {
    successImg.style.display = 'block';
  }

  // assign droppedFile properties to variables
  fileSize = file.size.toString();
  fileSizeLgt = fileSize.length;
  fileType = file.type;
  fileDate = file.file.lastModifiedDate;
  flowerSelect(fileDate.getMonth(), fileDate.getDate());
  console.log(chosenFlowers);
  console.log(chosenSeason);
  localStorage.setItem("chosenSeason", chosenSeason);

  // if the list of chosen flowers is bigger than 0, 
  if (chosenFlowers.length > 0) {
    //add random values to position flowers randomly
    var randomIndex = Math.floor(random(0, chosenFlowers.length));
    console.log(chosenFlowers);
    console.log(randomIndex);

    var flowerList;
    var randomX = random(windowWidth / 1.2);
    var randomY = random(windowHeight / 1.4);
    // create an object for every new flower
    // assign it to a random elemnt within the chosen flowers list
    // give it a random position
    var newFlower = {
      'data': chosenFlowers[randomIndex],
      'offsetX': randomX,
      'offsetY': randomY
    };
    //
    flowerList = JSON.parse(localStorage.getItem("flowerList"));
    if (flowerList == null) {
      flowerList = [];
    }
    // add every new flower to the flower list
    flowerList.push(newFlower);
    console.log(flowerList);

    // stringify and store the flower list
    localStorage.setItem("flowerList", JSON.stringify(flowerList));
  }
  //after 3 seconds load garden.html
  setTimeout(loadGarden, 3000);
};

//load garden page once file is uploaded
function loadGarden(){
  window.location.href = ('garden.html');
};

// FILE & FLOWER DATA
//
// splices the droppedFile's timestamp into corresponding time property variables 
function splicedDate() {
  fileYear = fileDate.getFullYear(); // YYYY
  fileMonth = fileDate.getMonth(); // 0-11
  fileDay = fileDate.getDate(); // 1-31
};
// creates an array containing flowers that correspond to the month and day values that cor
function flowerSelect(fileMonth, fileDay) {
  for (let i = 0; i < flowerJSON.flower.length; i++) {
    let flowerPetals = parseInt(flowerJSON.flower[i].petals[0]);
    if (flowerPetals === fileMonth) {
      flowerDay = parseInt(flowerJSON.flower[i].day[0]);
      //assigns day property to flowerDay
      flowerDay = flowerJSON.flower[i].day;
      // remaps the "hour" property of a flower to a value between the range of 0-11 (corresponding to the 12 months)
      // assigns numeral value monthDecimal
      let monthDecimal = map(flowerJSON.flower[i].hour, 0, 23, 0, 11);
      flowerMonth = parseInt(monthDecimal); //convert result to integer and assigns it to flowerMonth
      //
      chosenSeason = flowerSeasons(flowerMonth, flowerDay);
      chosenFlowers.push(flowerJSON.flower[i]);
    }
  }
}
/* TO SHRINK */
function flowerSeasons(flowerMonth, flowerDay) {
  // spring == march 20 to june 21
  if ((flowerMonth == 2 && flowerDay >= 20 && flowerDay <= 31)
    || (flowerMonth == 3 && flowerDay >= 1 && flowerDay <= 30)
    || (flowerMonth == 4 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 5 && flowerDay >= 1 && flowerDay <= 21)) {
    flowerSeason = "Spring";
  }
  // summer == june 21 to september 22
  else if ((flowerMonth == 5 && flowerDay >= 21 && flowerDay <= 31)
    || (flowerMonth == 6 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 7 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 8 && flowerDay >= 1 && flowerDay <= 22)) {
    flowerSeason = "Summer";
  }
  // fall == september 22 to december 21
  else if ((flowerMonth == 8 && flowerDay >= 22 && flowerDay <= 31)
    || (flowerMonth == 9 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 10 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 11 && flowerDay >= 1 && flowerDay <= 21)) {
    flowerSeason = "Fall";
  }
  // winter == december 21 to march 20
  else if ((flowerMonth == 11 && flowerDay >= 21 && flowerDay <= 31)
    || (flowerMonth == 0 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 1 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 2 && flowerDay >= 1 && flowerDay <= 31)) {
    flowerSeason = "Winter";
  }
  return (flowerSeason)
};

/*
function drawingTooltip(){
  let drawingFlower.title = "This flower was planted" + drawingDate + " in " + drawingLocation
}*/
