// Be sure to add an IIFE to scope your work!
(function () {
        var Items = {
                "featuredItems": [
                        {
                                name: "Hazelnut Cappucino"
                                , image: "images/cappuccino.jpg"
                                , description: "A warm, soothing cappucino with a touch of hazelnut to warm you as the weather turns."
            }



                        
                        , {
                                name: "Chocolate Cake"
                                , image: "images/choc-cake.jpg"
                                , description: "Our chocolate cake is rich, moist, and dark. More chocolate to love."
            }
            ]
        };

        var asideElement = document.getElementsByTagName("aside")[0];
        asideElement.removeAttribute("class");

        var weeklyItems = Items.featuredItems;
        for (i = 0; i < weeklyItems.length; i++) {
                itemCount = weeklyItems[i];
                //here
                var featuredItems = document.getElementById("featureditems");

                var featuredElement = document.createElement("h4");
                var featuredName = document.createTextNode(itemCount.name);
                featuredElement.appendChild(featuredName);
                featuredItems.appendChild(featuredElement);

                var imageElement = document.createElement("img");
                imageElement.setAttribute("src", itemCount.image);
                featuredItems.appendChild(imageElement);

                var pElement = document.createElement("p");
                var pDescription = document.createTextNode(itemCount.description);
                pElement.appendChild(pDescription);
                featuredItems.appendChild(pElement);
        }

        console.log(itemCount);
        console.log(featuredItems);




}())