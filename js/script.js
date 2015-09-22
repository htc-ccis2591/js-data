// Be sure to add an IIFE to scope your work!
(function () {

var FeaturedItems = {
    "items": [
        {
            "name": "Hazelnut Cappuccino",
            "image": "images/cappuccino.jpg",
            "description": "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."
        },
            {
                "name": "Chocolate Cake",
                "image": "images/choc-cake.jpg",
                "description": "Our chocolate cake is rich, moist, and dark.  More chocolate to love."
            }
    ]
}

function showaside() {

    // I wasn't sure how we were suppose to go around the CSS making the display = "none" for the "hide" class.

    var getaside = document.getElementsByTagName("aside")
    for (i = 0; i < getaside.length; i++) {
        getaside[i].className = "show";
       
    }
}

function AddFeaturedItem(itemnumber) {
  
    var targetarea = document.getElementById("featured-items");

    var img = document.createElement("img");
    img.src = FeaturedItems.items[itemnumber].image;

    var h3 = document.createElement("h3");
    h3.innerHTML = FeaturedItems.items[itemnumber].name;

    var p = document.createElement("p");
    p.innerHTML = FeaturedItems.items[itemnumber].description;
    
    
    targetarea.appendChild(h3);
    targetarea.appendChild(img);
    targetarea.appendChild(p);
    
}
showaside()
AddFeaturedItem(0);
AddFeaturedItem(1);



    
})();