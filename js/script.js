// Be sure to add an IIFE to scope your work!
$(function() {
    var jsonItems;
    var featuredItems = '';
    
    
    function loadItems() {
        $.getJSON('js/items.json')
        .done(function(data){
            
            //store JSON data in variable
            jsonItems = data;
            
            // loop through JSON data and use it to build a variable of content 
            for (var i = 0; i < jsonItems['items'].length; i++){
                featuredItems += '<h3>' + jsonItems['items'][i].name + '</h3>';
                featuredItems += '<img src=' + jsonItems['items'][i].image + ' />';
                featuredItems += '<p>' + jsonItems['items'][i].description + '</p>';
            }
            
            $('#featured-items').append(featuredItems);  
        }).fail(function() {
            //If error occurs loading JSON data append error message
            $('#featured-items').append('<p>Error Loading Featured Items</p>')
        });
    }
    
    //remove hide class from aside
    $('aside').removeClass('hide');
    
    //call function to load items
    loadItems();
 });




