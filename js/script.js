// Be sure to add an IIFE or jQuery ready to scope your work!
$(document).ready(function () {

    $('aside').removeClass("hide");

    var createmyMenu = function (name, image, description) {
        var featureditems = "#featured-items";
        
        $(featureditems).append("<h3>" + name + "</h3>");
        $(featureditems).append('<img src=" ' + image + '">');
        $(featureditems).append("<p>" + description + "</p>");

    }; //ends function
    
    $.getJSON("myMenu.json", function (data) {

        $.each(data.myMenu, function (index, item) {
            createmyMenu(item.name, item.image, item.description);


        }); //Ends the each loop for jquery
    }); //Ends JSON

}); //Ends jQuery ready