// Be sure to add an IIFE or jQuery ready to scope your work!

$(function () {
    var featuredFood = '';

    function loadFood() {
        $.getJSON('fitems.json')
            .done(function (jsonData) {





                var i; 
                for (i = 0; i < jsonData['specials'].length; i++) {
                    featuredFood += '<h3>' + jsonData['specials'][i].name + '</h3>';
                    featuredFood += '<img src=' + jsonData['specials'][i].image + '/>';
                    featuredFood += '<p>' + jsonData['specials'][i].description + '</p>';
                }

                $('#featured-items').append(featuredFood);

            }).fail(function () {
                $('#featured-items').append('<p>CAKE OF NOTHINGNESS</p>')
                console.log('DATA ERRORS CAPTAIN')

            });




        $('aside').removeClass('hide');
    }

    loadFood();


});