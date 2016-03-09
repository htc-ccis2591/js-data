$(function()
{
    // Show the <aside> 
    $('aside').removeClass('hide');
    
    // Get JSON data from file
    $.getJSON('data.json').done( 
        function(data) // If true do this
        {
            //  Define vars
            var feature = data.specails;
            var newContent = '';
            // Loop through the array
            for (var i = 0; i < feature.length; i++ )
                    {
                        newContent += '<h3>' + feature[i].name + '</h3>';
                        newContent += '<img src="' + feature[i].image + '"/>';
                        newContent += '<p>' + feature[i].description + '</p>';
                    }
            // Add data to HTML
            $('#featured-items').append(newContent);        
        }).fail(function()// If false do this
            {
                // Print error text to console
                console.log('Cannot get data right now.');
            });
});