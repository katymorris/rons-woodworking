/* -------------------- GLOBALS -------------------- */
/* ------------------------------------------------ */


/* ----------- BROWSER SUPPORT ---------- */
//IE9 transit fallback
if (!$.support.transition) {
   $.fn.transition = $.fn.animate;
}


/* -------------------- PLUGINS -------------------- */
/* ------------------------------------------------ */

/* -------------------- AJAX ------------------------ */
/* -------------------------------------------------- */


/* -------------------- FUNCTIONS -------------------- */
/* -------------------------------------------------- */
function closeLoadingScreen() {
	console.log('running')
	$('.loading-screen').transition({'opacity': '0'}, {duration: 300, complete: function() {
		$(this).css('display', 'none')
	}})
}
function setHeaderWrapperHeight() {
	var windowHeight = $(window).height(); 
	$('.header-wrapper').height(windowHeight)
}
function setProductTextPosition() {
	$('.product-info').each(function() {
		var thisWidth = $(this).width();
		var thisHeight = $(this).height();
		$(this).css({'margin-left': (thisWidth / 2) * -1, 'margin-top': (thisHeight / 2) * -1})
	})
}

/* --------------------- DOCUMENT READY ---------------------- */
/* ----------------------------------------------------------- */
$(document).ready(function() {
	setHeaderWrapperHeight();
    closeLoadingScreen();
    setProductTextPosition();
    $('.product-container').masonry({
	  // options
	  itemSelector: '.product-box',
	  columnWidth: 10,
	  fitWidth: true
	});

    $('body').on('mouseenter', ".product-box", function() {
    	$(this).children('.product-overlay').css('display', 'block');
    	$(this).children('.product-overlay').stop().transition({"opacity": ".6"}, {duration: 300});
    	$(this).children('.product-info').stop().transition({"opacity": "1"}, {duration: 300});
    });
    $('body').on('mouseleave', ".product-box", function() {
    	$(this).children('.product-overlay').stop().transition({"opacity": "0"}, {duration: 300, complete: function() {
    		$(this).css('display', 'none');
    	}});
    	  $(this).children('.product-info').stop().transition({"opacity": "0"}, {duration: 300});
    })

}); // end document ready
$( window ).load(function() {
	

}); // end window load
$(window).scroll(function() {


});// end window scroll
$(window).resize(function() {
setHeaderWrapperHeight()
}); // end window resize