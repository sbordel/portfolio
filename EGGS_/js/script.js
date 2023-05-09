
let recipeData = [];
let recipeTitle;
let recipeId;
let recipeType;
let recipeIng = [];
let recipeSteps = [];
let recipeURL;
let idNum;

let selectList;

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
          $("#menu-list").text("");
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

        $("h2:first-of-type").text(eggType);

        setTimeout(animEgg, 4500, "done");

        function animEgg(p1) {
          eggImg.src = "assets/egg" + eggId + ".png";
          console.log(p1);
        }

        idNum = parseInt(eggId) - 1;
        var fullList = [];
        var recipeList = [];
        var selectList = [];

        for (let k = 0; k < recipeData.length; k++) {
          selectTitle = recipeData[k].Title;
          fullList.push(recipeData[k]);
        }

        selectList = fullList.filter((recipe) => {
           if (recipe.Id == idNum){
          return recipe.Title;
          }
        });
        console.log(selectList);

      for (let l = 0; l < selectList.length; l++) {
        recipeTitle = selectList[l].Title;
        recipeList.push(recipeTitle);
        recipeType = selectList[l].Type;
        recipeIng = selectList[l].Ingredients;
        recipeSteps = selectList[l].Steps;
        recipeURL = selectList[l].OriginalURL;
      }

      let menuList = document.getElementById("menu-list");
      // let menuRec = document.getElementById("menu-recipe");
      let itemInd; 

      recipeList.forEach((item, index)=>{
        itemInd = `${index}`;
        console.log(itemInd)
        let li = document.createElement("li");
        li.setAttribute("class", "menu-item")
        li.setAttribute("value", itemInd);
        let a = document.createElement("a");
        // let itemLink =  
        $(a).attr("href", "#");
        li.appendChild(a);
        a.innerText = item;
        menuList.appendChild(li);
  
      })

      $(".menu-item").click(function(){
        $("h3:first-of-type").text($(this).text());
        console.log($(this).attr("value"))
      })

    //   let menuRec = document.getElementById("menu-recipe");
    //   $("h3:first-of-type").text(eggType);

    // selectList.forEach((recipe)=>{
    //   let ing = document.createElement("li");
    //   // ing.setAttribute("id", "item-ing");
    //   ing.innerText = recipe;
    //   menuRec.appendChild(ing);
    // })
    }
    });


  }

});

