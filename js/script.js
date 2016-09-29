// Be sure to add an IIFE or jQuery ready to scope your work!
$(document).ready(function () {
    $('aside').removeClass("hide");

    var createMenuItems = function (name, image, description) {



        $("#featured-items").append('<div id="items">');
        $('#items').append('<h2>' + name + '</h2>');
        $('#items').append('<img src="' + image + '">');
        $('#items').append('<p>' + description + '</p>');









    }




    $.getJSON("MenuItems.json", function (data) {

        var i;
        var item;

        for (i = 0; i < data.menuitems.length; i++) {
            item = data.menuitems[i];
            createMenuItems(item.name, item.image, item.description);
            console.log(item);

        }








    });









});