"use strict";

let max = 60;
let min = 1;

let dataFromJSON;
let mushData;

var mushBinomial;
var mushCommon;
var mushEdible;

var randMush = (Math.random() * (max - min + 1) ) << 0;

$(document).ready(function () {
  $.getJSON('../fungi/assets/json/mushroomData.json', function (data) {
    dataFromJSON = data;
    mushData = dataFromJSON.MushroomImg;
    run();
  });
});

function run() {
  var mushImg = document.getElementById("figImg");
  $(mushImg).fadeIn(700);
  randMush = Math.floor(Math.random() * (max - min + 1) + min);
  mushImg.src = "assets/images/mushroom_" + randMush + ".png";
  mushImg.alt = "whatever mushroom it is";

  let mushGenus = mushData[randMush].Genus;
  let mushSpecies = mushData[randMush].Species;
  mushBinomial = mushGenus + " " + mushSpecies;
  mushCommon = mushData[randMush].CommonName;
  mushEdible = mushData[randMush].Edibility;
  console.log(randMush);

  defineMush();
};

function defineMush(){
  let binom = mushBinomial;
  let edible = mushEdible;
  let common = mushCommon;

  $(".btn").click(function () {
    if (($(this).is("#btnEdible")) && (edible == "Edible")) {
      $(this).css("background-color", "green");
    } else if (($(this).is("#btnToxic")) && (edible == "Toxic")) {
      $(this).css("background-color", "green");
    } else {
      $(this).css("background-color", "red");
    };

    $(".figcaption").fadeIn(2000);
    $("#figcapBino").text(binom).fadeIn(2000);
    $("#figcapCommon").text(" (" + common + ")").fadeIn(1000);
    $("#figcapType").text("this mushroom is " + edible).fadeIn(1000);
    responsiveVoice.speak("The" + binom + ", commonly known as the " + common + ", is" + edible, "UK English Female", {pitch: 1, rate: 0.8});
    $("#btnNext").show(4000);
  });

  $("#btnNext").on("click", function(){
    $(".btn").css("background-color", "white");
    $("#figImg").fadeOut(600);
    $(".figcaption").fadeOut(600);
    $("#btnNext").fadeOut(600);
    $("#btnNext").unbind("click");

    setTimeout(() => {
      run();
    }, 600);
  });
}
