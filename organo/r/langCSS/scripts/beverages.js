$(function() {
	// initialize scrollable
	//$(".scrollable").scrollable();
	$(".scrollable").scrollable({ circular: false, initialIndex: 3 });
	$( "#tabs" ).tabs();
});
$(function() {
$('.media-bar p a').click(function(e) {
    e.preventDefault();
    animateSliderMedia(this.hash);
  });
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
  function openPopupMedia(hash) {
    $(hash + '_popup').slideToggle().addClass('openMedia');
    $('.media-bar p a').addClass('media');
  }
  function openAndCloseMedia(hash) {
    if ($(hash + '_popup').hasClass('openMedia')) {
      $($(hash + '_popup')).slideToggle().removeClass();
    } else {	
	$('#inner-wrapper div.open').slideToggle().removeClass();
     $(hash + '_popup').slideToggle();
	$('#outer-wrapper-footer-menu .media-bar p a').removeClass('media');
    }
  }
});