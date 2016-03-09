// Be sure to add an IIFE to scope your work!
$(function () {
    var content;
    $.getJSON("Assig.json")
        .done(function (data) {


            $("#featured-items").append("<p>new-items</p>");

            $("aside").removeClass("hide");

            for (var i = 0; i < data.menu.length; i++) {
                content = data
                    .show(content);
            }

        })


});