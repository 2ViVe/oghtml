$(document).ready(function(){
	if("body.products"){
		$("#menu li.menu3 ul li a").hover(function(){
			
		}, function(){
			$("#menu li.menu3").addClass("products");
			$("#menu li.menu3 a#products").addClass("selected");
		});
		$("#menu li.menu4 ul li a").hover(function(){
		$("#menu li.menu4").addClass("business");
		$("#menu li.menu4 a#business").addClass("selected");
		},function(){
			$("#menu li.menu4").removeClass("business");
			$("#menu li.menu4 a#business").removeClass("selected");
			$("#menu li.menu4 a.selected").attr('id', 'business');
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