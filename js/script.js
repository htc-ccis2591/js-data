// Be sure to add an IIFE to scope your work!

var featureditems = {
    "featureditem1" : [
        {
            "name": "Hazelnut Cappuccino"
        }
    ],
    
    "featureditem2": [
        {
            "name": "Chocolate Cake"
        }
    ]
};

var div = document.getElementById('featured-items');
div.innerHTML = div.innerHTML + 'Chocolate Cake, Our chocolate cake is rich, moist and dark. More chocolate to love';
var img = document.createElement("img");
img.src = "images/choc-cake.jpg";
var src = document.getElementById("featured-items");
src.appendChild(img);


var div = document.getElementById('featured-items');
div.innerHTML = div.innerHTML + 'Hazelnut Cappuccino, A warm Soothing cappuccino with a touch of hazelnut to warm you as the weather turns';
var img = document.createElement("img");
img.src = "images/cappuccino.jpg";
var src = document.getElementById("featured-items");
src.appendChild(img);










