var prjData = [];

var prjId;
var prjTitle;
var prjLink;
var pageTitle;
var pageLink;
var pageImg;
var pageDscA;
var pageDscB;
var pageType;

var prjContent;
var infoContent;

var imgArray = [];

var i;

// var fileExt = [".jpg",".png",".gif"];

$(document).ready(function () {
  "use strict";

  $.getJSON("../json/web-info.json", function (data) {
    var dataFromJSON = data;
    for (let j = 0; j < dataFromJSON.length; j++) {
    }
    prjData = dataFromJSON.Projects;
    run();
  });

  function run() {
    console.log("json file loaded");
  };

  let navBody = document.getElementById('nav-body');
  let navLink = document.getElementsByClassName('nav-link')
  let navBtn = document.getElementsByClassName('nav-btn');

  pageImg = document.getElementById("content-img");
  pageTitle = document.getElementById("title");
  pageDscA = document.getElementById("dsc-brief");
  pageDscB = document.getElementById("dsc-prompt");


  prjContent = `<div class="nav-content" id="prj">
      <table>
        <tr>
          <td class="p-type"><span title="personal project">&middot;</span></td>
          <td class="p-title" id="n-1"><span class="p-popup">egg</span></td>
          <td class="p-link"><a href="https://sbordel.github.io/EGG/" target="_blank">⭷</a></td>
          <td class="p-year">2023</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, JSON)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal project">&middot;</span></td>
          <td class="p-title" id="n-2"><span class="p-popup">sunday sites [index]</span></td>
          <td class="p-link"><a href="../sunday-sites/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2022-2023</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal project">&middot;</span></td>
          <td class="p-title" id="n-3"><span class="p-popup">make a site inspired by a memory (#30)</span></td>
          <td class="p-link"><a href="../sunday-sites/site02.html" target="_blank">⭷</a></td>
          <td class="p-year">2023</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal project">&middot;</span></td>
          <td class="p-title" id="n-4"><span class="p-popup">ephemerality (#26)</span></td>
          <td class="p-link"><a href="../sunday-sites/site01.html" target="_blank">⭷</a></td>
          <td class="p-year">2022</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="commission project">&vellip;</span></td>
          <td class="p-title" id="n-5"><span class="p-popup">banshee</span></td>
          <td class="p-link"><a href="https://bansheenight.club/" target="_blank">⭷</a></td>
          <td class="p-year">2022</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-6"><span class="p-popup">mini websites [index]</span></td>
          <td class="p-link"><a href="../misc-websites/entry.html" target="_blank">⭷</a></td>
          <td class="p-year">2020-2022</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-7"><span class="p-popup">friends only</span></td>
          <td class="p-link"><a href="../misc-websites/projects/friends-only/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-8"><span class="p-popup">fruit salad</span></td>
          <td class="p-link"><a href="../misc-websites/projects/fruit-salad/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery UI)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-9"><span class="p-popup">haiku best gill</span></td>
          <td class="p-link"><a href="../misc-websites/projects/haiku-best-gill/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-11"><span class="p-popup">mood</span></td>
          <td class="p-link"><a href="../misc-websites/projects/mood/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2022</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-12"><span class="p-popup">pizza palooza </span></td>
          <td class="p-link"><a href="https://hybrid.concordia.ca/s_bordel/exercises/exercise_03/exercise_e3.php"
              target="_blank">⭷</a></td>
          <td class="p-year">2022</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery, AJAX, PHP)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-13"><span class="p-popup">sonny-jim</span></td>
          <td class="p-link"><a href="../misc-websites/projects/sonny-jim/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, p5.js, Three.js)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="school project">&colon;</span></td>
          <td class="p-title" id="n-14"><span class="p-popup">where's mister rabbit?</span></td>
          <td class="p-link"><a href="../misc-websites/projects/mister-rabbit/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">web</td>
          <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, p5.js)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="collaboration project">&there4;</span></td>
          <td class="p-title" id="n-15"><span class="p-popup">imca raydeeoh</span></td>
          <td class="p-link"><a href="../imca-raydeeoh/index.html" target="_blank">⭷</a></td>
          <td class="p-year">2019-2023</td>
          <td class="p-medium">web</td>
          <td class="p-role">project management + graphic design + front end dev (HTML/CSS)</td>
        </tr>
        <tr>
          <td class="p-type"><span title="coordination/personal project">&utdot;</span></td>
          <td class="p-title" id="n-16"><span class="p-popup">2024 calendar</span></td>
          <td class="p-link"><a href="doc/CALENDAR2024_en-fr.pdf">⭷</a></td>
          <td class="p-year">2023</td>
          <td class="p-medium">print</td>
          <td class="p-role">project management + content curation + graphic design</td>
        </tr>
        <tr class="prj-print">
          <td class="p-type"><span title="coordination/personal project">&utdot;</span></td>
          <td class="p-title" id="n-17"><span class="p-popup">2023 calendar</span></td>
          <td class="p-link"><a href="#">⭷</a></td>
          <td class="p-year">2022</td>
          <td class="p-medium">print</td>
          <td class="p-role">project management + content curation + graphic design</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal/collaboration project">&middot;</span></td>
          <td class="p-title" id="n-18"><span class="p-popup">weepy daisy</span></td>
          <td class="p-link"><a
              href="https://drive.google.com/file/d/1YEQCAgzelUNUEY6Hwrysi57_enk6kSy-/view?usp=sharing"
              target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">3D</td>
          <td class="p-role">design + 3D modelling + armature animation</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal/contribution project">‧</span></td>
          <td class="p-title">mix 49: slug bait — <abbr title="radio show">ffiles</abbr></td>
          <td class="p-link"><a
              href="https://soundcloud.com/ffilesradio/mix-049-for-n10as-slug-bait-by-h2wo?in=h2wo0/sets/splish-splash"
              target="_blank">⭷</a></td>
          <td class="p-year">2023</td>
          <td class="p-medium">mix</td>
          <td class="p-role">curation + mixing</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal/contribution project">‧</span></td>
          <td class="p-title">mix 14 — <abbr title="radio show">missed connections</abbr></td>
          <td class="p-link"><a
              href="https://soundcloud.com/missed-connections-radio/014-h2wo?in=h2wo0/sets/splish-splash"
              target="_blank">⭷</a></td>
          <td class="p-year">2022</td>
          <td class="p-medium">mix</td>
          <td class="p-role">curation + mixing</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal/contribution project">‧</span></td>
          <td class="p-title">mix 47 — <abbr title="music label">voragine</abbr></td>
          <td class="p-link"><a href="https://soundcloud.com/vor4gine/mixtape47_h2wo?in=h2wo0/sets/splish-splash"
              target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">mix</td>
          <td class="p-role">curation + mixing</td>
        </tr>
        <tr>
          <td class="p-type"><span title="personal/contribution project">‧</span></td>
          <td class="p-title">kvmix022 — <abbr title="collective">coolground</abbr></td>
          <td class="p-link"><a href="https://soundcloud.com/coolgroundmtl/kvmix022-h2w0?in=h2wo0/sets/splish-splash"
              target="_blank">⭷</a></td>
          <td class="p-year">2021</td>
          <td class="p-medium">mix</td>
          <td class="p-role">curation + mixing</td>
        </tr>
      </table>
    </div>`;

  infoContent = `<div class="nav-content" id="info">
  <table>
  <tr>
    <td class="p-type" title="email">✏</td>
    <td class="p-info">sam_am_bordeleau[at]proton[dot]me</td>
  </tr>
  <tr>
    <td class="p-type" title="url">⎘</td>
    <td class="p-info"><a href="https://github.com/sbordel" target="_blank">github</a></td>
  </tr>
  <tr>
    <td class="p-type" title="url">⏿</td>
    <td class="p-info"><a href="https://www.linkedin.com/in/samuelle-bordeleau-716241278" target="_blank">linkedIn</a></td>
  </tr>
</table></div>`

  $("body").on("mousemove", function (event) {
    var winHeight = window.innerHeight;

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    let posX = mouseX + 20;
    let posY;

    if (mouseY >= (winHeight / 2)) {
      posY = mouseY - (winHeight / 2);
    } else {
      posY = mouseY - 50;
    }

    $(".content-body").css({
      "left": posX + "px",
      "top": posY + "px"
    })
  });

  $(".p-title").on("click", function () {
    let strId = $(this).attr("id");
    let idArray = strId.split("-");

    let pageId = idArray[1];
    let objId = pageId - 1;

    let prjW;

    for (i = 0; i < 18; i++) {
      if (pageId == 16 || pageId == 17) {
        prjW = "450";
      } else {
        prjW = "300";
      } 
      
      imgArray[i] = new Image();
      imgArray[i].src = "assets/web-shots/screenshot-" + pageId + ".webp";
    }
    
    $(pageImg).css("width", prjW + "px");
    $(pageImg).attr("src", imgArray[objId].src);
    // $(pageImg).attr("src", "assets/web-shots/screenshot-" + pageId + ".webp");
    $(pageTitle).text(prjData[objId].Title + " (" + prjData[objId].Date + ")");
    $(pageDscA).html(prjData[objId].Description.Brief);
    $(pageDscB).html(prjData[objId].Description.Prompt);
    if ($(".content-body").css("display") == "none") {
    $(".content-body").show();
    }
  })

  $(navLink).on("click", function () {
    $(".content-body").hide();
    $(pageImg).attr("src", "");
    $(pageTitle).empty();
    $(pageDscA).empty();
    $(pageDscB).empty();
    $(pageType).empty();

    $(navBtn).css({ 'color': '#000', 'background-color': 'transparent' });
    $(navLink).css({ 'color': '#000', 'background-color': 'transparent' });
    if ($(this).attr('id') == 'cv-btn') {
      $('a[href="#cv"]').css({ 'color': '#C3C4C9', 'background-color': '#000' })
      window.open('../doc/CV-en-fr_2024.pdf');
    } else if ($(this).attr('id') == 'prj-btn') {
      navBody.innerHTML = prjContent;
    } else if ($(this).attr('id') == 'info-btn') {
      $('a[href="#contact"]').css({ 'color': '#C3C4C9', 'background-color': '#000' })
      navBody.innerHTML = infoContent;
    } else { navBody.innerHTML = prjContent; };
  });

});
