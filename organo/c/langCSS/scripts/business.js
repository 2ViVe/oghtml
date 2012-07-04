$(document).ready(function(){
	if("body.business"){
		$("#menu li.menu4 ul li a").hover(function(){
			
		}, function(){
			$("#menu li.menu4").addClass("business");
			$("#menu li.menu4 a#business").addClass("selected");
		});
		$("#menu li.menu3 ul li a").hover(function(){
		$("#menu li.menu3").addClass("products");
		$("#menu li.menu3 a#products").addClass("selected");
		},function(){
			$("#menu li.menu3").removeClass("products");
			$("#menu li.menu3 a#products").removeClass("selected");
			$("#menu li.menu3 a.selected").attr('id', 'products');
		});
		$("#menu li.menu2 ul li a").hover(function(){
			$("#menu li.menu2").addClass("company");
			$("#menu li.menu2 a#company").addClass("selected");
		},function(){
			$("#menu li.menu2").removeClass("company");
			$("#menu li.menu2 a#company").removeClass("selected");
		});
	}
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