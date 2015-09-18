// Be sure to add an IIFE to scope your work!

//  Function to add JSON ----------------

(function () {

    var new_features = {

        "items": [
            {
                "item": "Item 1",
                "name": "Hazelnut Cappuccino",
                "image": "images/cappuccino.jpg",
                "description": "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."
        },
            {
                "item": "Item 2",
                "name": "Chocolate Cake",
                "image": "images/choc-cake.jpg",
                "description": "Our chocolate cake is rich, moist, and dark. More chocolate to love."
        }
        ]

    };

    var asides = document.getElementsByTagName("aside");
    var aside = asides[0];
    aside.removeAttribute("class");


    var featured_new_items = new_features.items;
    for (i = 0; i < featured_new_items.length; i++) {
        featured_item = new_features.items[i];
        console.log(featured_item);

        names = document.getElementById("featured-items");
        var new_names = document.createElement("h2");
        var name = document.createTextNode(featured_item.name);
        names.appendChild(name);
        console.log(names);


        featured = document.getElementById("featured-items");
        var new_images = document.createElement("img");
        new_images.setAttribute("src", featured_item.image);
        featured.appendChild(new_images);
        console.log(featured);



        new_descriptions = document.getElementById("featured-items", "h2");
        var new_description = document.createElement("p");
        var description = document.createTextNode(featured_item.description);
        new_descriptions.appendChild(description);
        console.log(new_description);


       // var new_features = [names, new_descriptions];
    //    var join_features = new_features.join();


    }

}());