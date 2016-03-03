$(function() {
    $.getJSON("feature.json")
        .done( function(data){
        $("aside").removeClass("hide");
            for(i = 0; i < data.featured.length; i++) {
                $("#featured-items").append("<H3>" + data.featured[i].name + "</h3>");
                $("#featured-items").append("<p>" + data.featured[i].description + "</p>");
                $("#featured-items").append("<img src=" + data.featured[i].image + "></img>");
            }
        });
});