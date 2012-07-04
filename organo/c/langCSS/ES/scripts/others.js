$(function() {
	// initialize scrollable
	$(".scrollable").scrollable();
	$( "#tabs" ).tabs();
});
$(function() {
$('#bottom_menu li a').click(function(e) {
    e.preventDefault();
    animateSlider(this.hash);
});

//// When the DOM is ready, initialize the scripts.
//		jQuery(function( $ ){
// 
//			// Get a reference to the container.
//			var container = $( "#contact_popup" );
// 
// 
//			// Bind the link to toggle the slide.
//			$( ".media-bar p a" ).mouseenter(
//				function( event ){
//					// Prevent the default event.
//					event.preventDefault();
// 
//					// Toggle the slide based on its current
//					// visibility.
//					if (container.is( ":visible" )){
// 
//						// Hide - slide up.
//						container.slideUp( 1000 );
// 
//					} else {
// 
//
//						// Show - slide down.
//						container.slideDown( 1000 );
// 
//					}
//				}
//			
//	);
//			$("#contact_popup").mouseleave(function(){
//					$(this).slidedown(1000);
//											});
// 
//		});

$('.media-bar p a').mouseover(function(e) {
    e.preventDefault();
    animateSliderMedia(this.hash);
  });
function animateSlider(hash) {
    if (!$('#outer-wrapper #inner-wrapper #outer-content div.open').length) {
      if (hash == '#about') {
        openPopup(hash);
      }
    } else {
      if (hash == '#about') {
        openAndClose(hash)
	   $('#bottom_menu li a').removeClass('down');
      }
    }
}
function animateSliderMedia(hash) {
    if (!$('#inner-wrapper div.openMedia').length) {
      if (hash == '#contact') {
        openPopupMedia(hash);
      }
    } else {
      if (hash == '#contact') {
        openAndCloseMedia(hash)
	   $('.media-bar p a').removeClass('media');
      }
    }
}
  function openPopup(hash) {
    $(hash + '_popup').slideToggle().addClass('open');
    $('#bottom_menu li a').addClass('down');
  }
  function openPopupMedia(hash) {
    $(hash + '_popup').slideToggle().addClass('openMedia');
    $('.media-bar p a').addClass('media');
  }
  function openAndClose(hash) {
    if ($(hash + '_popup').hasClass('open')) {
      $($(hash + '_popup')).slideToggle().removeClass();
    } else {	
     $('#outer-wrapper #inner-wrapper #outer-content div.open').slideToggle().removeClass();
     $(hash + '_popup').slideToggle();
	$('#bottom_menu li a').removeClass('down');
    }
  }
  function openAndCloseMedia(hash) {
    if ($(hash + '_popup').hasClass('openMedia')) {
      $($(hash + '_popup')).slideToggle().removeClass();
    } else {
	$('#inner-wrapper div.open').slideToggle().removeClass();
     $(hash + '_popup').slideToggle();
	$('#outer-wrapper-footer-menu').removeClass('media');
    }
  }
});