// Be sure to add an IIFE to scope your work!
$(function () {
	$.getJSON('items.json')
		.done(function (data) {
			$.each(data.featuredItem, function (key,value) {
				$('#featured-items').append('<h3>' + value.Name + '</h3>')
					.append('<img src="' +value.Image + '"/>')
					.append('<p>' + value.Description + '</p>')
			});
			$('aside').removeClass('hide');
				
		});
});