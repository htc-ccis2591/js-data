// Be sure to add an IIFE to scope your work!
$(function () {
    var content;
    $.getJSON("Assig.json")
        .done(function (data) {

            $("#featured-items").append("<p>new-items</p>");

            $("aside").removeClass("hide");

            for (var i = 0; i < data.menu.length; i++) {

                content += '<h3>' + menu[i].Name + '</h3>';
                content += '<img src = "' + menu[i].Image + '"/>';
                content += '<p>' + menu[i].Description + '</p>';
                //.show(content);
            }

        })


});