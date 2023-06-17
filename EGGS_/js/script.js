
let recipeData = [];
let recipeTitle;
let idNum;
let selectList;
let eggId;
let eggImg;
let eggTitle;
let eggArray = [];
let eggColor;
let eggCode = ["breakfast","main","sides","sweets","bread","condiments","beverage","misc"];

let eggZoom;

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

        eggZoom = $("#marking").attr({
              "src": "assets/marking/" + eggCode[eggId - 1] + ".jpg"
            });

            $(document).mousemove(function(e){
              $(".egg-zoom").css({left:e.pageX, top:e.pageY});
          });
  
        $("h2:first-of-type").text(eggType);

        setTimeout(animEgg, 4500, "done");

        function animEgg(p1) {
          eggImg.src = "assets/egg" + eggId + ".png";
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
          if (recipe.Id == idNum) {
            return recipe.Title;
          }
        });

        for (let l = 0; l < selectList.length; l++) {
          recipeTitle = selectList[l].Title;
          recipeList.push(recipeTitle);
        }

        let menuList = document.getElementById("menu-list");
        let menuIng = document.getElementById("menu-ing");
        let menuStep = document.getElementById("menu-step");
        let itemInd;

        recipeList.forEach((item, index) => {
          itemInd = `${index}`;
          let li = document.createElement("li");
          li.setAttribute("class", "menu-item")
          li.setAttribute("value", itemInd);
          let a = document.createElement("a");
          $(a).attr("href", "#");
          li.appendChild(a);
          a.innerText = item;
          menuList.appendChild(li);
        })

        $(".menu-item").click(function () {
          $("h3:first-of-type").text($(this).text());
          $("#menu-ing").text("");
          $("#menu-step").text("");
          // $("#link").text("");

          let itemNum = $(this).attr("value");

          let itemURL = selectList[itemNum].OriginalURL;
          let url = document.getElementById("link");
          $(url).attr("href", itemURL);
          $(url).attr("target", "_blank")
          $(url).text("original recipe");

          let itemIng = selectList[itemNum].Ingredients;

          itemIng.forEach((ingredient) => {
            let ing = document.createElement("li");
            ing.setAttribute("id", "item-ing");
            ing.innerText = ingredient;
            menuIng.appendChild(ing);
          })

          let itemStep = selectList[itemNum].Steps;

          itemStep.forEach((instruction) => {
            let step = document.createElement("li");
            step.setAttribute("id", "item-step");
            step.innerText = instruction;
            menuStep.appendChild(step);
          })
        })
      }
    });


  }

});

