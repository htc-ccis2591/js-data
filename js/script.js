/*Matt Johnson*/

(function () {

    var features = {

        "items": [
            {
                "item": "one",
                "name": "Hazelnut Cappuccino",
                "image": "images/cappuccino.jpg",
                "description": "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns.",
       },

            {
                "item": "two",
                "name": "Chocolate Cake",
                "image": "images/choc-cake.jpg",
                "description": "Our chocolate cake is rich, moist, and dark. More chocolate to love.",

                    }

                ]

    };

    document.getElementsByTagName("aside")[0].removeAttribute("class");

    var container = features.items;
    var featuresCount = container.length;
    var target = document.getElementById("featured-items"),

        i;

    if (featuresCount > 0) {

        for (i = 0; i < featuresCount; i = i + 1) {

            var item = container[i],
                name = item.name,
                image = item.image,
                description = item.description


            target.innerHTML += '<h3> ' + name + '</h3>' +

            '<img src=" ' + image + '"></img> <p>' + description + ' </p>';

        }
    }


})();



/*var object = JSON.parse(features);
    
        document.getElementById("item").innerHTML =
        object.items.name + " " + object.image.description;
    
        console.log(features.items);*/