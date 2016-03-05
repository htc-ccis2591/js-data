// Be sure to add an IIFE to scope your work!
$(function(){
    $.getJSON('./featured.json')
    .done(function(data){
        // this is the HTML we'll be adding
        var newHTML;
        
        // for each features object in the returned JSON data
        $.each(data.features, function(key, val){
            
            // build the HTML to add for this item
            newHTML = '<h3>' + val.name + '</h3>';
            newHTML += '<img src = \"' + val.image + '\">';
            newHTML += '<em>' + val.description + '</em>';
            newHTML += '<hr>'
            
            // add the item in the div
            $('#featured-items').append(newHTML);
            
            // console.log(newHTML);
            
        });
        
    // in the .done section so we just won't show unless data was downloaded successfully.
    $('aside').removeClass('hide');
        
    });
})




