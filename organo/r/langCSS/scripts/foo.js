$(document).ready(function(){
	if($("body.home")||("body.company")||("body.events")||("body.testimonials")||("body.contact-general")||("body.executive-team")){
		/*$("#menu li.menu1").addClass("home");
		$("#menu li.menu1 a").addClass("selected");
		$("#menu li.menu1 a").attr("id","");*/
		$("#menu li.menu4 ul li a").hover(function(){
			$("#menu li.menu4").addClass("selected");
            $("#menu li.menu4 a#business").addClass("selected");
		}, function(){
            $("#menu li.menu4").removeClass("selected");
            $("#menu li.menu4 a#business").removeClass("selected");
		});
		$("#menu li.menu3 ul li a").hover(function(){
            $("#menu li.menu3").addClass("selected");
            $("#menu li.menu3 a#products").addClass("selected");
		},function(){
            $("#menu li.menu3").removeClass("selected");
            $("#menu li.menu3 a#products").removeClass("selected");
		});
		$("#menu li.menu2 ul li a").hover(function(){
			$("#menu li.menu2").addClass("company");
			$("#menu li.menu2 a#company").addClass("selected");
		}, function(){
			$("#menu li.menu2").removeClass("company");
			$("#menu li.menu2 a#company").removeClass("selected");
			$("#menu li.menu2 a.selected").attr('id', 'company');
		});
	}
	
	if($("body.napoleon")){
		$("#menu li.menu2 ul li a").hover(function(){
			$("#menu li.menu2").addClass("company");
			$("#menu li.menu2 a#company").addClass("selected");
		}, function(){
			$("#menu li.menu2").removeClass("company");
			$("#menu li.menu2 a#company").removeClass("selected");
		});
	}
});