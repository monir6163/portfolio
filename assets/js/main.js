(function($){
	"use strict";
	
	// owlCarousel
	$(".owl-carousels").owlCarousel({
		dots: false,
		loop: true,
	    margin: 0,
	    nav: true,
	    navText: [
	      '<i class="fa fa-angle-left"></i>',
	      '<i class="fa fa-angle-right"></i>'
	    ],
	    responsive: {
	      0: {
	        items: 1
	      },
	      767: {
	        items: 3
	      },
	      992: {
	        items: 5
	      }
	    }
	});
	
	// WOW active
	new WOW().init();
	
})(jQuery);