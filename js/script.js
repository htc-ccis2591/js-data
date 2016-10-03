// Be sure to add an IIFE or jQuery ready to scope your work!


$(document).ready(function () {

    //Remove "hide" class from aside
    $("aside").removeClass("hide");

    //Create Specials
    var createSpecials = function (name, image, description) {
        var $featuredItem = $("#featured-items");
        var $sideImg = $("#aside-image");

        $featuredItem.append("<h3>" + name + "</h3> ");
        $featuredItem.append("<br>");
        $featuredItem.append('<img src= "' + image + '">');
        $featuredItem.append("<p>" + description + "</p>");
        $featuredItem.append("<br>");
        $featuredItem.append("<br>");
    };

    //Incorporate jSON with a .each function
    $.getJSON("js/special.json", function (data) {

        $.each(data.specialItem, function (index, item) {
            createSpecials(item.name, item.image, item.description);
        });
    });

});