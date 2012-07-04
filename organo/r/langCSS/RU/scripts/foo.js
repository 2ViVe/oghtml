$(document).ready(function(){
	if($("body.home")||("body.company")||("body.events")||("body.testimonials")||("body.contact-general")||("body.executive-team")){
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
	
	/*** global navigation links to signup and login page for accounts *****/
		var signup = "https://organogold.com/signup";
		var signupcn = "https://organogold.com/signup?set_lang=cn";
		var signuptw = "https://organogold.com/signup?set_lang=tw";
		var signupfr = "https://organogold.com/signup?set_lang=fr";
		var login = "https://organogold.com/login";
		
		$("#global-nav ul li a[id='login']").attr("href", login);
		$("#global-nav ul li a[id='buy']").attr("href", login);
		$("#global-nav ul li a[id='join']").attr("href", signup);
		
		/****** chinese simplified ********/
		$("#global-nav ul li a:contains('立即加入')").attr("href", signup);
		
		/**** social media in footer ****/
		$(".click-to-action a[id='buy-products']").attr("href", login);
		$(".click-to-action a[id='join-now']").attr("href", login);
		
		/**** Business section of footer *****/
		$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
		$(".col-3 ul li a:contains('Buy Products')").attr("href", login);
		
		/**** Business section of footer - Chinese Simplified *****/
		$(".col-3 ul li a:contains('立即加入')").attr("href", signup);
		$(".col-3 ul li a:contains('購買產品')").attr("href", login);
		
		if(document.location.href.indexOf('/TW/CH/') > -1){
			$("#global-nav ul li a:contains('立即加入')").attr("href", signuptw);
			$(".col-3 ul li a:contains('立即加入')").attr("href", signuptw);
		}
		
		/**** Business section of footer - French *****/
		$(".col-3 ul li a:contains('S'inscrire')").attr("href", signupfr);
		$(".col-3 ul li a:contains('Acheter des produits')").attr("href", login);
		$("#global-nav ul li a:contains('S'inscrire')").attr("href", signupfr);
		
		/**** Business section of footer - Portuguese *********/
		$(".col-3 ul li a:contains('Registre-se Agora')").attr("href", signup);
		$(".col-3 ul li a:contains('Comprar Produtos')").attr("href", login);
});