// Be sure to add an IIFE to scope your work!
(function () {
    var aside = document.getElementsByTagName("aside");
    for (a = 0; a < aside.length; a++) {
        aside[0].removeAttribute("class");
    };



    var week = document.getElementById("featured-items");
    //my json 
    var newitems = {
        "items": [
            {
                "name": "Hazelnut Cappuccino",
                "image": "images/cappuccino.jpg",
                "description": "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns"
            },
            {
                "name": "Chocolate Cake",
                "image": "images/choc-cake.jpg",
                "description": "Our chocolate cake is rich, moist, and dark. More chocolate to love."
            }
            ]
    };
    var object = newitems.items;
    for (i = 0; i < object.length; i++) {
        var item = object[i],
            name = item.name,
            pic = item.image,
            descrip = item.description;

        var h3 = document.createElement("h3");
        var title = document.createTextNode(name);
        console.log(title);
        h3.appendChild(title);
        week.appendChild(h3);

        var p = document.createElement("P");
        week.appendChild(p);
        p.innerHTML = (descrip);

        var newpic = document.createElement("img");
        week.appendChild(newpic);
        newpic.setAttribute("src", pic);
    }
}())