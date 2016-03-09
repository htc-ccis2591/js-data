// Be sure to add an IIFE to scope your work!
$(function() {
    var items;
    $.ajax({
       beforeSend: function(xhr) {
           if (xhr.overrideMimeType) {
               xhr.overrideMimeType("application/json");
           }
       } 
    });
        $.getJSON("featItems.json")
        .done ( function(data){
            $("aside").removeClass("hide");
           //items = data;
            //var featItems = '';
            for (i = 0; i < data.features.length; i++){
              $("#featured-items").append("<h3>" + data.features[i].name + "</h3>");
                $("#featured-items").append("<img src =" + data.features[i].image + "></img>");
                 $("#featured-items").append("<p>" + data.features[i].description + "</p>");
                
            };
        }).fail( function() {
            $('section.featured').html('Error, could not load featured items at the moment');
            $("aside").addClass("hide");
    });  
                
});



