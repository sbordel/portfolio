
let recipeData = [];
let recipeTitle;
let recipeId;
let recipeType;
let recipeIng = [];
let recipeSteps = [];
let recipeURL;
let idNum;

let eggId;
let eggImg;
let eggTitle;
let eggArray = [];
let Arraysrc;

$(document).ready(function () {

  $.getJSON("../json/recipes.json", function (data) {
    dataFromJSON = data;
    for (let j = 0; j < dataFromJSON.length; j++) {
    }
    recipeData = dataFromJSON.Recipes;

    for (let i = 0; i < recipeData.length; i++) {
      recipeTitle = recipeData[i].Title;
      recipeId = recipeData[i].Id;
      recipeType = recipeData[i].Type;
      recipeIng = recipeData[i].Ingredients;
      recipeSteps = recipeData[i].Steps;
      recipeURL = recipeData[i].OriginalURL;
    }
  });

  $(".eggimg").on({
    'click': function () {
      console.log(recipeId[i]==6);
      // console.log(recipeData[1].Type);
      eggId = $(this).attr("id");
      eggImg = document.getElementsByClassName("eggimg");
      eggImg.src = "assets/egg" + eggId + ".gif";
      eggImg.title = $(this).attr("title");
      $("#code").text(eggImg.title);

      for (i = 0; i < 11; i++) {
        eggArray[i] = new Image();
        eggArray[i].src = "assets/egg" + eggId + ".gif";
      }

      this.src = eggArray[eggId].src;

      setTimeout(animEgg, 4500, "done");

      function animEgg(p1) {
        eggImg.src = "assets/egg" + eggId + ".png";
        console.log(p1);
      }
    }
  });

  // function change() {
  //   var elem = $("#btn-a");
  //   var list = $("#breakfast-a")
  //   if (elem.value == "▾") elem.value = "▸", list.style.display = "none";
  //   else elem.value = "▾", list.style.display = "inline";
  // }


});

