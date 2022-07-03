
"use strict";

// positionning all food items randomly in the food area
$('.food').each(function () {
    let posx = Math.floor((Math.random() * 80));
    let posy = Math.floor((Math.random() * 90));
    $(this).css({
        "position": 'relative',
        "left": posx + 'px',
        "top": posy + 'px',
    });
})

// dialog box for when fruit salad will be complete
$('#solved-dialog').dialog({
    autoOpen: false,
    buttons: {
        "pay the bill": function () {
            $(this).dialog('close');
        }
    }
});

// event to transform draggable fruits
$('.fruit').one('mouseover', function (event) {
});

$('.fruit').draggable({
    revert: 'invalid',
    helper: 'original',
    opacity: 0.5
});

// droppable zone to make fruit salad
$('#bowl').droppable({
    drop: function (event, ui) {
        ui.draggable.draggable('disable'); // prevents letter to be dragged more than once
        ui.draggable.removeClass('found'); // removes found class 
    }
});

// clicking on bell to check if answer is right
$('#bell').click(function () {
    if ($('.found').length == 0) {
        $('#solved-dialog').dialog('open');
    }
});

