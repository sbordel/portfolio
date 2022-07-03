"use strict";

// haikus 
  let haikuLines = {
    fiveSyllables: [
    `would be so fuzzy`,
    `strolling in the sand`,
    `earthworm based diet`,
    `a synthetic feel`,
    `xanthophores sheen`
    ],
    sevenSyllables: [
    `the cutest of axolotls`,
    `with lidless googly black eyes`,
    `silly walking pet fishy`,
    `its small vestigial teeth`,
    `head crowned with external gills`
    ]
   };

let line1 = document.getElementById(`line-1`);
let line2 = document.getElementById(`line-2`);
let line3 = document.getElementById(`line-3`);

setupLines();
addListeners();
voiceOver();

function setupLines() {
    line1.innerText = random(haikuLines.fiveSyllables);
    line2.innerText = random(haikuLines.sevenSyllables);
    line3.innerText = random(haikuLines.fiveSyllables);
  }

  //added voiceOver event that then triggers the fadeOut event
  function addListeners() {
    line1.addEventListener(`click`, voiceOver);
    line2.addEventListener(`click`, voiceOver);
    line3.addEventListener(`click`, voiceOver);
  }

  function voiceOver(event) {
    responsiveVoice.speak(event.target.textContent, "UK English Female", {rate: 0.5});
    fadeOut(event.target, 2);
}

  function fadeOut(element, opacity) {
    // change opacity of the line
    opacity -= 0.01;
    element.style[`opacity`] = opacity;
    // check if opacity is greater than 0
    if (opacity > 0) {
      requestAnimationFrame(function() {
        fadeOut(element, opacity);
      });
    }
    else {
      setNewLine(element);
      // trigger fade in
      fadeIn(element, 0);
    }
  }
  
  function fadeIn(element, opacity) {
    // increase the opacity
    opacity += 0.01;
    element.style[`opacity`] = opacity;
    // check if opacity is still less than 1
    if (opacity < 1) {
      // keep fading
      requestAnimationFrame(function() {
        fadeIn(element, opacity);
      });
    }
    else {
    //na
    }
  }

  function setNewLine(element) {
    if (element === line1 || element === line3) {
      // if element is line1 or line3, use 5 syllables
      element.innerText = random(haikuLines.fiveSyllables);
    }
    else {
      // if element is line2, use 7
      element.innerText = random(haikuLines.sevenSyllables);
    }
  }
  
  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // added Email attribute change on button click 
  function emailContent() {
    document.getElementsByTagName("A")[0].setAttribute("href", "mailto:uremail@here.com?Subject=Axolotl%20mail" + "&body=" + line1.innerText + "%20%3A%20" + line2.innerText + "%20%3A%20" + line3.innerText); 
  }