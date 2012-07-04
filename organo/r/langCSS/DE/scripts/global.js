$(function() {
	// initialize scrollable
	$(".scrollable").scrollable();
	$( "#tabs" ).tabs();
});
$(document).ready(function(){
 $(".media-bar").hover(function (e) {
	e.preventDefault();
    $(this).children('.slide').slideToggle("fast");
    $(".media-bar a").addClass("media");
},function(e){
	e.preventDefault();
	$(this).children('.slide').slideToggle("fast");
	$(".media-bar a").removeClass("media");
	});
});