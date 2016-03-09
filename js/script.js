$(function () {

    
    //hide featured sections
    $('aside').hide();

    //data file options for testing cases
    //case1: 2 items from hw
    var file = 'data/specials_data.json';
    //case2: 2 items plus 1
    //var file = 'data/specials_data_more.json';
    //case3: no items
    //var file = 'data/specials_data_none.json';

    // load data function    
    function loadSpecials() {

        $.getJSON(file).done(function (data) {

            // extract specials object
            var specials = data.specials;
            // initiate specials html
            var specialsHTML = '';

            //show featured aside
            $('aside').show();

            if (specials === undefined) {

                // no specials object
                specialsHTML += '<h3>There are currently no specials.</h3>';

            } else {

                // get count of specials
                var n = specials.length;

                // check if there actually are any specials
                if (n > 0) {

                    //add featured divs to specials html
                    $.each(specials, function (index, val) {
                        specialsHTML += '<div><h3>' + val.name + '</h3><img src="' + val.image + '"><p>' + val.description + '</p></div>';
                    });
                    //add specials html to dom
                } else {
                    // empty specials object
                    specialsHTML += '<h3>There are currently no specials.</h3>';
                };

            };

            $('#featured-items').html(specialsHTML);


        }).fail(function () {
            console.log('Loading Featured Specials failed.');
        });
        

    };


    // run the function
    loadSpecials();

})
