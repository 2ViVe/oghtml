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
  function openPopup(hash) {
    $(hash + '_popup').slideToggle().addClass('open');
    $('#bottom_menu li a').addClass('down');
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