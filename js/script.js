(function () {
    var Items = {

            "featuredItems": [
                {
                    "name": "Hazelnut Cappuccino",
                    "image": "images/cappuccino.jpg",
                    "description": "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."
                },

                {
                    "name": "Chocolate Cake",
                    "image": "images/choc-cake.jpg",
                    "description": "Our chocolate cake is rich, moist, and dark. More chocolate to love."
                }
            ]

        };
    var aside = document.getElementsByTagName("aside")[0];
    document.querySelector(".hide").style.display = "block";
    //asideElement.removeAttribute("class");

    var rotatingItems = Items.featuredItems;
    for (i = 0; i < rotatingItems.length; i++) {
        
        itemCount = rotatingItems[i];

        var featuredItems = document.getElementById("featured-items");
        
        var pictureElement = document.createElement("img");
        pictureElement.setAttribute("src", itemCount.image);
        //console.log(pictureElement);
        featuredItems.appendChild(pictureElement);
        

        var featuredElement = document.createElement("h2");
        var featuredName = document.createTextNode(itemCount.name);
        //console.log(featuredName);
        featuredElement.appendChild(featuredName);
        featuredItems.appendChild(featuredElement);
        
        
        
        var para = document.createElement("p");
        var node = document.createTextNode(itemCount.description);
        //console.log(node);
        para.appendChild(node);
        featuredItems.appendChild(para);
    }

    
    
}())