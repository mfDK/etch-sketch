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

/*hello test*/