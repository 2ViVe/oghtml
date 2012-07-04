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
$(document).ready(function(){
	$("#menu li ul li a").removeAttr("products").hover(function(){
	$("#menu li.menu3").addClass("products");
	$("#menu li.menu3 a#products").addClass("selected");
	$("a#products").removeAttr("id");
	},function(){
		$("#menu li.menu3").removeClass("products");
		$("#menu li.menu3 a#products").removeClass("selected");
		$("#menu li.menu3 a.selected").attr('id', 'products');
	});
});