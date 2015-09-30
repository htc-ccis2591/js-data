// Be sure to add an IIFE to scope your work!
(function() {
    document.getElementsByTagName("aside")[0].removeAttribute("class");

    var item1 = {
        name : "Hazelnut Cappuccino",
        image : "images/cappuccino.jpg",
        description : "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns.",
    };
    var item2 = {
        name : "Chocolate Cake",
        image : "images/choc-cake.jpg",
        description : "Our chocolate cake is rich, moist, and dark. More chocolate to love.",
    };


    var featureditem = [item1, item2];

    var targetarea = document.getElementById("featured-items");
    var ul = document.createElement("ul");
    var i; 



    for (i = 0; i < featureditem.length; i = i + 1) {
        ul.appendChild(document.createElement("li"));
        ul.lastChild.appendChild(document.createElement("span"));
        ul.lastChild.appendChild(document.createElement("img"));
        ul.lastChild.lastChild.setAttribute("src", featureditem[i].image);
            ul.lastChild.firstChild.appendChild(document.createTextNode(featureditem[i].name));
    };
    targetarea.appendChild(ul);
            })();

