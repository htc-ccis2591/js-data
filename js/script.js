// Be sure to add an IIFE or jQuery ready to scope your work!
$(document).ready(function() {
    
    var createSpecials = function (name, image, description) {


    $("#featured-items").append('<div class="row">');
    $("#featured-items").append('<h3>' + name + '</h3>');
    $("#featured-items").append('<img src="' + image + '">');
    $("#featured-items").append('<p>' + description + '</p>');
  }
    
    
    
    
    $.getJSON("jsdata.json", function (data) {
    var i;
    var item;

    console.log(data.specials);
        
    $.each(data.specials, function (index, item) {
      createSpecials(item.name, item.image, item.description);
    $('aside').removeClass();
    });
    
});
});



