// Be sure to add an IIFE or jQuery ready to scope your work!

$(document).ready(function(){
    
 // The name of the function parameter 
  // is what you use to refer to your data
  $.getJSON("featureData.json", function (data) {
    var i;
    var item;

    // The data is an object, so access properties with . notation
    // tedtalks is the property that holds the array
    console.log(data.featured);

          // make the featured-itms div visible
      $("aside").removeClass("hide");

    // Do the same thing as the for loop above but use jQuery each
      
     $.each(data.featured, function (index, item) { 
        $("#featured-items").append("<p style='text-align:center'><b>" + item.name + "</b></p>");
        $("#featured-items").append("<img src="+item.image + " alt='Featured Item'>");
        $("#featured-items").append("<p><b>" + item.description + "</b></p>");
    });
  });       	
});