(function () {

    var FeaturedItems = {
        "FeaturedMenuItems" : [
            {
                name: "Hazelnut Cappucino",
                image: "images/cappuccino.jpg",
                description: "A warm, soothing cappucino with a touch of hazelnut to warm you as the weather turns."
            },
            {
                name: "Chocolate Cake",
                image: "images/choc-cake.jpg",
                description: "Our chocolate cake is rich, moist, and dark. More chocolate to love."
            }
        ]
    };
 
    var Aside = document.getElementsByTagName("aside");
    Aside[0].className = "";
    
    var Weekly = FeaturedItems.FeaturedMenuItems;
    console.log(Weekly);
    for (i = 0; i < Weekly.length; i++) {
        TotalItems = Weekly[i];

        var ItemElement = document.getElementById("featured-items");
        var ItemH4 = document.createElement("h4");
        var ItemName = document.createTextNode(TotalItems.name);
        var ItemImage = document.createElement("img");
        var ItemParagraph = document.createElement("p");
        var ItemDescription = document.createTextNode(TotalItems.description);
        
        ItemH4.appendChild(ItemName);
        ItemElement.appendChild(ItemH4);
        ItemImage.setAttribute("src", TotalItems.image);
        ItemElement.appendChild(ItemImage);
        ItemParagraph.appendChild(ItemDescription);
        ItemElement.appendChild(ItemParagraph);
    }
}());