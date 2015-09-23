// Be sure to add an IIFE to scope your work!

(function(){
var Featured = {
    
    items : [
        {
            name: "Hazelnut Cappuccino",
            image: "images/cappuccino",
            description: "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."
        },
        {
            name: "Chocolate Cake",
            image: "images/choc-cake.jpg",
            description: "Our chocolate cake is rich, moist, and dark. More chocolate to love."
        }
    ]
};

var items = Featured.items;
console.log(items)

var i=0;
for (i=0; i<items.length; i++){
console.log(items[i]);
    
var HazelCap = items[i]
    name =items.name,
    img = items.image,
    desc = items.description;
console.log(HazelCap.name);
    
var getaside = document.getElementsByTagName("aside") 
for (i = 0; i < getaside.length; i++) { 
getaside[i].className = "show";} 


var targetarea = document.getElementById("featured-items");

var p = document.createElement("p");
    
var heading = document.createElement("h3");
    
var textheading = document.createTextNode(HazelCap.name);
    
var text = document.createTextNode(HazelCap.description);
    
var image= document.createElement("img");
//image.setAttribute("src", image);
//image = Featured.items[i].image;
    

targetarea.appendChild(textheading);
targetarea.appendChild(p);
targetarea.appendChild(image);
heading.appendChild(text);
p.appendChild(heading);


var ChocCake = items[i]
    name =items.name,
    img = items.image,
    desc = items.description;
console.log(ChocCake.name);
    
var getaside = document.getElementsByTagName("aside") 
for (i = 0; i < getaside.length; i++) { 
getaside[i].className = "show";} 


var targetarea = document.getElementById("featured-items");

var p2 = document.createElement("p");
    
var heading2 = document.createElement("h3");
    
var textheading = document.createTextNode(ChocCake.name);
    
var text = document.createTextNode(ChocCake.description);
    
var image2= document.createElement("img");
//image.setAttribute("src", image);
//image = Featured.items[i].image;
    

targetarea.appendChild(textheading);
targetarea.appendChild(p2);
targetarea.appendChild(image);
heading2.appendChild(text);
p2.appendChild(heading2);

    
}
    
}())
    
    


