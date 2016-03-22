$(function (){
    $.getJSON('featured.json')
    .done(function(data){
        $('aside').removeClass('hide');
        for (var i = 0; i < data.featured.length; i++){
            $('#featured-items').append('<h3>' + data.featured[i].name + '</h3>');
            $('#featured-items').append('<img src =' + data.featured[i].image + '></img>');
            $('#featured-items').append('<p>' + data.featured[i].description + '</p>');
        };

    }).fail(function(){
         $('aside').addClass('hide'); 
    });



});