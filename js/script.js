// Be sure to add an IIFE to scope your work!
(function () {
    var Items = {
        "featuredItems" : [
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
 
    var asideElement = document.getElementsByTagName("aside")[0];
    asideElement.removeAttribute("class");
    
    var weeklyItems = Items.featuredItems;
    for(i=0; i < weeklyItems.length; i++)
    {
    itemCount = weeklyItems[i];
    
    var featuredItems = document.getElementById("featured-items");
    
    var featuredHElement = document.createElement("h4");
    var featuredHName = document.createTextNode(itemCount.name);
    featuredHElement.appendChild(featuredHName);
    featuredItems.appendChild(featuredHElement);
    
    var fImageElemet = document.createElement("img");
    fImageElemet.setAttribute("src", itemCount.image);
    featuredItems.appendChild(fImageElemet);
    
    var fParaElement= document.createElement("p");
    var fParaDescription= document.createTextNode(itemCount.description);
    fParaElement.appendChild(fParaDescription);
    featuredItems.appendChild(fParaElement);
    }
    
console.log(itemCount);
console.log(featuredItems);
    

    
    
}())




    
  