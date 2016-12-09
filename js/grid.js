$(document).ready(function() {
    var box = $('.box');
    
    for (var i = 1; i < 16; i++) {
        $('.wrapper').append(box.clone());
    };
    
    var column = $('.wrapper');
    for (var n = 1; n < 16; n++) {
        column.after(column.clone());
    }
    
    $('.box').hover(function() {
        $(this).css("background-color", "#2ECCFA")
    }, function() {
        $(this).css("background-color", "#DA81F5")
    });
    
    
    $('button').on('click', function() {
        $('.box').css("background-color", "#FFF");
    });
    

});

function changeColor() {
    var digits = [1,2,3,4,5,6,7,8,9,0,"A", "B", "C", "E", "F"];
        hexLetter = [];
}

// FISHER-Yates (AKA Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // and swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}