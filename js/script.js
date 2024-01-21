let prjContent;
let infoContent;

$(document).ready(function () {
  prjContent = `<div class="nav-content" id="prj">
  <table>
  <tr>
    <td class="p-type"><span title="personal project">‧</span></td>
    <td class="p-title">egg <a class="p-link" href="https://sbordel.github.io/EGG/" target="_blank">⭷</a></td>
    <td class="p-year">2023</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, JSON)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal project">‧</span></td>
    <td class="p-title">sunday sites [index] <a class="p-link" href="../sunday-sites/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2022-2023</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal project">‧</span></td>
    <td class="p-title">ephemerality (#26) <a class="p-link" href="../sunday-sites/site02.html" target="_blank">⭷</a></td>
    <td class="p-year">2022</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal project">‧</span></td>
    <td class="p-title">make a site inspired by a memory (#30) <a class="p-link" href="../sunday-sites/site01.html" target="_blank">⭷</a></td>
    <td class="p-year">2023</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="commission project">⁝</span></td>
    <td class="p-title">banshee <a class="p-link" href="https://bansheenight.club/" target="_blank">⭷</a></td>
    <td class="p-year">2022</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">mini websites [index] <a class="p-link" href="../misc-websites/entry.html" target="_blank">⭷</a></td>
    <td class="p-year">2020-2022</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">friends only <a class="p-link" href="../misc-websites/projects/friends-only/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2021</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">fruit salad <a class="p-link" href="../misc-websites/projects/fruit-salad/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2021</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery UI)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">haiku best gill <a class="p-link" href="../misc-websites/projects/haiku-best-gill/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2021</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">mood <a class="p-link" href="../misc-websites/projects/mood/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2022</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">pizza palooza <a class="p-link" href="https://hybrid.concordia.ca/s_bordel/exercises/exercise_03/exercise_e3.php" target="_blank">⭷</a></td>
    <td class="p-year">2022</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, jQuery, AJAX, PHP)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">sonny-jim <a class="p-link" href="../misc-websites/projects/sonny-jim/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2021</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, p5.js, Three.js)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="school project">∶</span></td>
    <td class="p-title">where's mister rabbit? <a class="p-link" href="../misc-websites/projects/mister-rabbit/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2021</td>
    <td class="p-medium">web</td>
    <td class="p-role">graphic design + front end dev (HTML/CSS, Javascript, p5.js)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="collaboration project">⁖</span></td>
    <td class="p-title">imca raydeeoh <a class="p-link" href="../imca-raydeeoh/index.html" target="_blank">⭷</a></td>
    <td class="p-year">2019-2023</td>
    <td class="p-medium">web</td>
    <td class="p-role">project management + graphic design + front end dev (HTML/CSS)</td>
  </tr>
  <tr>
    <td class="p-type"><span title="coordination/personal project">⋰</span></td>
    <td class="p-title">2024 calendar <a class="p-link" href="" target="_blank">⭷</a></td>
    <td class="p-year">2023</td>
    <td class="p-medium">print</td>
    <td class="p-role">project management + content curation + graphic design</td>
  </tr>
  <tr>
    <td class="p-type"><span title="coordination/personal project">⋰</span></td>
    <td class="p-title">2023 calendar <a class="p-link" href="" target="_blank">⭷</a></td>
    <td class="p-year">2022</td>
    <td class="p-medium">print</td>
    <td class="p-role">project management + content curation + graphic design</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal/collaboration project">‧</span></td>
    <td class="p-title">weepy daisy <a class="p-link" href="https://drive.google.com/file/d/1YEQCAgzelUNUEY6Hwrysi57_enk6kSy-/view?usp=sharing" target="_blank">⭷</a></td>
    <td class="p-year">2021</td>
    <td class="p-medium">3D</td>
    <td class="p-role">design + 3D modelling + armature animation</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal/contribution project">‧</span></td>
    <td class="p-title">mix 49: slug bait — <abbr title="radio show">ffiles</abbr> <a class="p-link" href="https://soundcloud.com/ffilesradio/mix-049-for-n10as-slug-bait-by-h2wo?in=h2wo0/sets/splish-splash" target="_blank">⭷</a></td>
    <td class="p-year">2023</td>
    <td class="p-medium">mix</td>
    <td class="p-role">curation + mixing</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal/contribution project">‧</span></td>
    <td class="p-title">mix 14 — <abbr title="radio show">missed connections</abbr> <a class="p-link" href="https://soundcloud.com/missed-connections-radio/014-h2wo?in=h2wo0/sets/splish-splash" target="_blank">⭷</a></td>
    <td class="p-year">2022</td>
    <td class="p-medium">mix</td>
    <td class="p-role">curation + mixing</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal/contribution project">‧</span></td>
    <td class="p-title">mix 47 — <abbr title="music label">voragine</abbr> <a class="p-link" href="https://soundcloud.com/vor4gine/mixtape47_h2wo?in=h2wo0/sets/splish-splash" target="_blank">⭷</a></td>
    <td class="p-year">2021</td>
    <td class="p-medium">mix</td>
    <td class="p-role">curation + mixing</td>
  </tr>
  <tr>
    <td class="p-type"><span title="personal/contribution project">‧</span></td>
    <td class="p-title">kvmix022 — <abbr title="collective">coolground</abbr> <a class="p-link" href="https://soundcloud.com/coolgroundmtl/kvmix022-h2w0?in=h2wo0/sets/splish-splash" target="_blank">⭷</a></td>
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

  let navBody = document.getElementById('nav-body');
  let navLink = document.getElementsByClassName('nav-link')
  let navBtn = document.getElementsByClassName('nav-btn');

  $(navBtn).click(function () {
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
