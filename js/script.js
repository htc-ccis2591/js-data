// Be sure to add an IIFE to scope your work!
$(function () {
    var content = "";
    $.getJSON("Assig.json")
        .done(function (data) {

            $("#featured-items").append("<p>new-items</p>");

            $("aside").removeClass("hide");

            for (var i = 0; i < data.menu.length; i++) {

                content += '<h3>' + data.menu[i].Name + '</h3>';
                content += '<img src = "' + data.menu[i].Image + '"/>';
                content += '<p>' + data.menu[i].Description + '</p>';
                document.getElementById("featured-items").innerHTML = content;
                //.show(content);
            }

        });


});