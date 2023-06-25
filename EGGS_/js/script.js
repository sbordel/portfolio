
let recipeData = [];
let recipeTitle;
let idNum;
let selectList;
let eggId;
let eggImg;
let eggTitle;
let eggArray = [];
let eggColor;
let eggCode = ["breakfast", "main", "sides", "sweets", "bread", "condiments", "beverage", "misc"];

let eggZoom;

let mbIndex;
let mbMenu;
let mbCatg;
let mbRecipe;


$(document).ready(function () {
  $.getJSON("../json/recipes.json", function (data) {
    dataFromJSON = data;
    for (let j = 0; j < dataFromJSON.length; j++) {
    }
    recipeData = dataFromJSON.Recipes;
    run();
  });

  $(".dt-span").click(function () {
    if ((this.id) == "max") {
      console.log((this.id))
      $("#b1").hide()
      $(".carton").hide()
      $(".main").hide()
      $(".index").css({
        "position": "absolute",
        "width": "100vw",
        "z-index": "9999"
      })
      $("#b2").css({
        "width": "100vw",
        "height": "100vh",
        "overflow-y": "scroll",
        "scrollbar-width": "none"
      });
      $("#b2::-webkit-scrollbar").css({
        "display": "none",
        "width": "0 !important"
      })
      $(".text-box").css({
        "width": "95vw"
      })
      $("ul, ol li").css("padding-bottom", "20px")
      $("#max").text("☒")
      $("#max").attr("id", "min")
    } else {
      $("#b1").show()
      $(".carton").show()
      $(".main").show()
      $(".index").css({
        "position": "fixed",
        "width": "26vw",
        "z-index": ""
      })
      $("#b2").css({
        "width": "",
        "height": "60%",
      })
      $("ul, ol li").css("padding-bottom", "")
      $(".text-box").css({
        "width": "",
       "line-height": ""
      })
      $("#min").text("⤢")
      $("#min").attr("id", "max")
    }
  })

  function run() {
    /* desktop */
    $(".eggimg").click(function () {
      $("#menu-list").text("");
      eggId = $(this).attr("id");
      eggType = $(this).attr("alt");

      eggImg = document.getElementsByClassName("eggimg");
      eggImg.src = "assets/egg" + eggId + ".gif";
      eggImg.title = $(this).attr("title");
      // $("#code").text(eggImg.title);

      for (i = 0; i < 11; i++) {
        eggArray[i] = new Image();
        eggArray[i].src = "assets/egg" + eggId + ".gif";
      }

      this.src = eggArray[eggId].src;
      eggZoom = $("#marking").attr({ "src": "assets/marking/" + eggCode[eggId - 1] + ".jpg" });

      $(document).mousemove(function (e) {
        $(".egg-zoom").css({ left: e.pageX, top: e.pageY });
      });

      $("h2:first-of-type").text(eggType);

      setTimeout(animEgg, 4500, "done");

      function animEgg(p1) {
        eggImg.src = "assets/egg" + eggId + ".png";
      }
      getRecipe()
    });

    $(".eggimg-mobile").click(function () {

      mbIndex = document.getElementsByClassName("main-mobile");
      mbMenu = document.getElementsByClassName("index");
      mbCatg = document.getElementById("b1");
      mbRecipe = document.getElementById("b2");
      txtCatg = document.getElementsByClassName("text-box").mbCatg;
      txtRecipe = document.getElementsByClassName("text-box").mbRecipe;

      $(mbMenu).show();
      $(mbIndex).hide();

      $("#menu-list").text("");
      eggId = $(this).attr("id");
      eggType = $(this).attr("alt");

      $("h2:first-of-type").text(eggType);

      $("#close").on({
        'click': function () {
          console.log(this)
          $(mbMenu).hide();
          $(mbIndex).show();
        }
      });

      getRecipe()

      $("ul .menu-item").on({
        'click': function () {
          console.log(this)
          $(mbCatg).hide();
          $(mbRecipe).show();
        }
      });

      $("#return").on({
        'click': function () {
          console.log(this)
          $(mbCatg).show();
          $(mbRecipe).hide();
        }
      });
    });

    function getRecipe() {
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
  }
});

