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


    var featured_new_items = new_features.items;
    for (i = 0; i < featured_new_items.length; i++) {
        featured_item = new_features.items[i];
        console.log(featured_item);
        
        featured = document.getElementById("featured-items");
        var new_images = document.createElement("img");
        new_images.setAttribute("src", featured_item.image);
        featured.appendChild(new_images);
    }

}());

