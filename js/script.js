$(function () {
	"use strict";
	//console.log("ready");

	//define append function
	var createMyFeatures = function (name, image, description) {
		var featuredItems = "#featured-items";

		$(featuredItems).append("<h3>" + name + "</h3>");
		$(featuredItems).append('<img src=" ' + image + '">');
		$(featuredItems).append("<p>" + description + "</p>");

		//console.log(featuredItem);
		//console.log(createMyFeatures);
	};

	$("aside").removeClass("hide");

	//access JSON then call append function
	$.getJSON("js/featuredItems.json", function (data) {
		$.each(data.features, function (index, item) {
			createMyFeatures(item.name, item.image, item.description);

			//console.log(data);
			//console.log(index);
			//console.log(item);
			//console.log(item.name, item.description);
		});

	});

});