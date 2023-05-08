
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
    run();
  });

  function run() {
    $(".eggimg").on({
      'click': function () {
        // console.log(recipeData[1].Type);
        eggId = $(this).attr("id");
        eggType = $(this).attr("alt");
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

        idNum = parseInt(eggId) - 1;
        var fullList = [];
        var recipeList = [];
        var selectList = [];

        console.log(idNum);
        for (let k = 0; k < recipeData.length; k++) {
          selectTitle = recipeData[k].Title;
          fullList.push(recipeData[k]);
        }

        selectList = fullList.filter((recipe) => {
           if (recipe.Id == idNum){
          return recipe.Title;
          }
        });

      for (let l = 0; l < selectList.length; l++) {
        recipeTitle = selectList[l].Title;
        recipeList.push(recipeTitle);

        recipeType = selectList[l].Type;
        recipeIng = selectList[l].Ingredients;
        recipeSteps = selectList[l].Steps;
        recipeURL = selectList[l].OriginalURL;
      }
      console.log(recipeList);
      }
    });


  }

  // function change() {
  //   var elem = $("#btn-a");
  //   var list = $("#breakfast-a")
  //   if (elem.value == "▾") elem.value = "▸", list.style.display = "none";
  //   else elem.value = "▾", list.style.display = "inline";
  // }


});

