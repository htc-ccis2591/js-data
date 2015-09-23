// Be sure to add an IIFE to scope your work!

(function () {

    var weeklyItems = {

        featuredItems: [
            {
                name: "Hazelnut Cappuccino",
                image: "images/cappuccino.jpg",
                description: "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."
                },
            {
                name: "Chocolate Cake",
                image: "images/choc-cake.jpg",
                description: "Our chocolate cake is rich, moist, and dark. More chocolate to love."
                }
            ]
    };


    var featureLocation = document.getElementById("featured-items");
    var asideElement0 = document.getElementsByTagName("aside").item(0);

    var space = document.createTextNode(" ");
    var newWeeklyItems = weeklyItems.featuredItems;

    for (i = 0; i < newWeeklyItems.length; i = i + 1) {
        ItemCount = newWeeklyItems[i];

        var featureHeadElement = document.createElement("h4");
        var featureHeadName = document.createTextNode(ItemCount.name);
        featureHeadElement.appendChild(featureHeadName);
        featureLocation.appendChild(featureHeadElement);

        var featureImgElem = document.createElement("img");
        featureImgElem.setAttribute("src", ItemCount.image);
        featureLocation.appendChild(featureImgElem);

        var featureParaElement = document.createElement("p");
        var featureParaDesc = document.createTextNode(ItemCount.description);
        featureParaElement.appendChild(featureParaDesc);
        featureLocation.appendChild(featureParaElement);

        var spaceElement = document.createElement("p");
        spaceElement.appendChild(space);
        featureLocation.appendChild(spaceElement);

        asideElement0.removeAttribute("class");
    }

    console.log(ItemCount);
    console.log(featureLocation);

}())


