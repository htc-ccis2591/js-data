// Be sure to add an IIFE to scope your work!
(function () {
    var featured = {
        items: [
            {
                name: "Hazelnut Cappuccino",
                image: "images/cappuccino.jpg",
description: "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns.",
           },
            {
                name: "Chocolate Cake",
                image: "images/choc-cake.jpg",
                description: "Our chocolate cake is rich, moist, and dark.  More chocolate to love.",
           }
           ]
    }

    var object = featured.items;
    var showFeature = document.getElementsByTagName("aside")[0];
    showFeature.removeAttribute("class", "hide");
    featuredCount = object.length;
    target = document.getElementById("featured-items");
    if (featuredCount > 0) {
        for (var i = 0; i < featuredCount; i++) {
            var item = object[i];
            var name = item.name;
            var description = item.description;
            var image = item.image;
            var h3 = document.createElement("h3");
            
            var headingText = document.createTextNode(name);
            h3.appendChild(headingText);
            target.appendChild(h3);
            
            var img = document.createElement("img");
            img.setAttribute("src", image);
            target.appendChild(img);

            var p = document.createElement("p");
            var desc = document.createTextNode(description);
            p.appendChild(desc);
            target.appendChild(p);
        }
    }




}())