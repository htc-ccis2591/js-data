// Be sure to add an IIFE to scope your work!


document.querySelector("aside").removeAttribute("class");

var featureditems = {
    "items" : [
        
        {   "name" : "Hazelnut Cappuccino", 
            "picture" : "images/cappuccino.jpg", 
            "desc" : "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."
        },
        
        {   "name" : "Chocolate Cake", 
            "picture" : "images/choc-cake.jpg", 
            "desc" : "Our chocolate cake is rich, moist, and dark. More chocolate to love."  
        }
        
    ]
}

//TRY ONLY:
//alert(featureditems.items[0].name);
//alert(featureditems.items[0].picture);
//alert(featureditems.items[0].desc);
//
//alert(featureditems.items[1].name);
//alert(featureditems.items[1].picture);
//alert(featureditems.items[1].desc);

var a = document.getElementById("featured-items");

//Hazel Cappuccino
var hazelcap = function()    {
    var p_name = document.createElement("p");
    var p_name_text = document.createTextNode(featureditems.items[0].name);
    p_name.appendChild(p_name_text);
    a.appendChild(p_name);

//Hazel Cappuccino Picture
    var p_pic = document.createElement("img");
    imagepath = featureditems.items[0].picture;  
    p_pic.setAttribute("src",imagepath);
    a.appendChild(p_pic);

//Hazel Cappuccino Description
    var p_desc = document.createElement("p");
    var p_desc_text = document.createTextNode(featureditems.items[0].desc);
    p_desc.appendChild(p_desc_text);
    a.appendChild(p_desc);
}
hazelcap();

//Chocolate Cake
var chococake = function()    {
    var p2_name = document.createElement("p");
    var p2_name_text = document.createTextNode(featureditems.items[1].name);
    p2_name.appendChild(p2_name_text);
    a.appendChild(p2_name);

//Chocolate CakePicture
    var p2_pic = document.createElement("img");
    imagepath2 = featureditems.items[1].picture;  
    p2_pic.setAttribute("src",imagepath2);
    a.appendChild(p2_pic);

//Chocolate Cake Description
    var p2_desc = document.createElement("p");
    var p2_desc_text = document.createTextNode(featureditems.items[1].desc);
    p2_desc.appendChild(p2_desc_text);
    a.appendChild(p2_desc);
}
chococake();

    




