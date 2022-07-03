/**
Raving Redactionist CSS
*/
let $place = $('#place');
let $toe = $('#toe');
let $bunny = $('#bunny');
let $frog = $('#frog');

"use strict";

$('.top-secret').on('click', redact);
setInterval(revelation, 500);

function redact(event) {
    $(this).removeClass('revealed');
    $(this).addClass('redacted');
}

function revelation() {
    $('.redacted').each(attemptReveal);
}

function attemptReveal() {
    let r = Math.random();
    if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

/* calling function to display image */
$('.img-description').click(function() {
    $('#corresponding-img').css('display', 'block');
});

/* display corresponding image on click event */
$('#place').click(function() {
     $('#corresponding-img').attr('src', 'assets/images/sewer1.png');
});
$('#toe').click(function() {
       $('#corresponding-img').attr('src', 'assets/images/toe1.png');
});
$('#bunny').click(function() {
    $('#corresponding-img').attr('src', 'assets/images/bunny1.png');
});
$('#frog').click(function() {
       $('#corresponding-img').attr('src', 'assets/images/frog1.png');
});






