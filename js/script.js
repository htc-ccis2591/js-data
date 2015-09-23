// Be sure to add an IIFE to scope your work!

(function(){
var Featured = {
    
    items : [
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

var items = Featured.items;
console.log(items)

var targetarea = document.getElementById("featured-items");

var getaside = document.getElementsByTagName("aside") 
for (i = 0; i < getaside.length; i++) { 
    getaside[i].className = "show";}

var i=0;
for (i=0; i<items.length; i++){
    console.log(items[i]);
    
    var HazelCap = items[i];
    name = HazelCap.name,
    img = HazelCap.image,
    desc = HazelCap.description;
    console.log(HazelCap.name);

var space = document.createTextNode(" ");
var heading = document.createElement("h3");    
var textheading = document.createTextNode(name);
    
var image= document.createElement("img");
image.setAttribute("src", img);
    
var p = document.createElement("p");
var text = document.createTextNode(desc);

targetarea.appendChild(heading);
targetarea.appendChild(image);
targetarea.appendChild(p);
heading.appendChild(textheading);
p.appendChild(text);

}
}())
    
    


