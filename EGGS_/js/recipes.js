$(document).ready(function () {

  let recipeData;
  let recipeTitle;
  let idNum;

$.getJSON('./json/recipes.json', function (data) {
  dataFromJSON = data;
  for (let j = 0; j < dataFromJSON.length; j++) {
  }
  recipeData = dataFromJSON.recipes;
  run();
});


function run() {
  recipeData;
  recipeTitle = recipeData.title;
  idNum = recipeData.id;
  
  console.log(recipeTitle[idNum]);
  };
});