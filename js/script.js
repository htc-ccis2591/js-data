// Be sure to add an IIFE to scope your work!

var featured = {

    items: [
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

(function () {

    var asideElement = document.getElementsByTagName("aside");
    asideElement[0].setAttribute("class", "visable");

    var targetArea = document.getElementById("featured-items");

    var addNewDiv = document.createElement('div');
    addNewDiv.setAttribute("id", "div-items");
    targetArea.appendChild(addNewDiv);
    var targetDivItem = document.getElementById("div-items");
    targetArea.style.display = "inline";

    var addNewUl = document.createElement('ul');
    targetDivItem.appendChild(addNewUl);
    var targetUl = targetDivItem.firstElementChild;
    targetUl.style.paddingLeft = "5px";
    //targetUl.style.display = "inline";
    targetUl.style = "display:inline";

    for (i = 0; i < featured.items.length; i++) {

        var addNewIl = document.createElement('il');
        targetUl.appendChild(addNewIl);
        var targetIl = targetUl.lastElementChild;
        targetIl.style.float = "left";
    
        addNewDiv = document.createElement('div');
        addNewDiv.setAttribute("id", "div-span");
        targetIl.appendChild(addNewDiv);
        var targetDivSpan = targetIl.lastElementChild;

        var addNewSpan = document.createElement('span');
        addNewSpan.setAttribute("id", "span-text");
        targetDivSpan.appendChild(addNewSpan);
        var targetSpanText = targetDivSpan.lastElementChild;
        targetSpanText.textContent = featured.items[i].name;
        targetSpanText.style.color = "blue";
        targetSpanText.style.fontSize = "120";
        targetSpanText.style.fontWeight = "bold";

        addNewDiv = document.createElement('div');
        addNewDiv.setAttribute("id", "div-image");
        targetIl.appendChild(addNewDiv);
        var targetDivImage = targetIl.lastElementChild;

        var addNewImage = document.createElement('img');
        addNewImage.setAttribute("id", "image-src");
        addNewImage.setAttribute("width", "90");
        addNewImage.setAttribute("height", "90");
        addNewImage.setAttribute("src", featured.items[i].image);
        targetDivImage.appendChild(addNewImage);
        targetDivImage.style.float = "left";
        targetDivImage.style.marginRight = "5px";
        targetDivImage.style.display = "inline";


        addNewDiv = document.createElement('div');
        addNewDiv.setAttribute("id", "div-para");
        targetIl.appendChild(addNewDiv);
        var targetDivPara = targetIl.lastElementChild;

        var addNewPara = document.createElement('p');
        addNewPara.setAttribute("id", "para-text");
        targetDivPara.appendChild(addNewPara);
        var targetParaText = targetDivPara.lastElementChild;
        targetParaText.textContent = featured.items[i].description;
        targetParaText.style.color = "darkblue";
        targetParaText.style.fontSize = "80";
        targetParaText.style.display = "inline";
    }
}())