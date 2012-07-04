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
	
	/*** global navigation links to login and login page for accounts *****/
		var logines = "https://organogold.com/login?set_lang=es";
		var loginde = "https://organogold.com/login?set_lang=de";
		var logingr = "https://organogold.com/login?set_lang=gr";
		var loginfr = "https://organogold.com/login?set_lang=fr";
		var loginit = "https://organogold.com/login?set_lang=it";
		var loginnl = "https://organogold.com/login?set_lang=nl";
		var logintw = "https://organogold.com/login?set_lang=tw";
		var login = "https://organogold.com/login";
		
		$("#global-nav ul li a[id='login']").attr("href", login);
		$("#global-nav ul li a[id='buy']").attr("href", login);
		$("#global-nav ul li a[id='join']").attr("href", login);
		
		$("#global-nav ul li a:contains('登入')").attr("href", logintw);
		$("#global-nav ul li a:contains('cach')").attr("href", login);
		$("#global-nav ul li a:contains('Únase ahora')").attr("href", logines);
		$("#global-nav ul li a:contains('eslogin')").attr("href", logines);
		$("#global-nav ul li a:contains('Inloggen')").attr("href", loginnl);
		$("#global-nav ul li a:contains('Σύνδεση')").attr("href", logingr);
		$("#global-nav ul li a:contains('Produkte kaufen')").attr("href", loginde);
		
		/**** social media in footer ****/
		$(".click-to-action a[id='buy-products']").attr("href", login);
		$(".click-to-action a[id='join-now']").attr("href", login);
		
		/**** Business section of footer *****/
		$(".col-3 ul li a:contains('Join Now')").attr("href", login);
		$(".col-3 ul li a:contains('Buy Products')").attr("href", login);
		
		/**** Business section of footer - Nederlands ********/
		$(".col-3 ul li a:contains('Nu inschrijven')").attr("href", loginnl);
		$(".col-3 ul li a:contains('Producten kopen')").attr("href", login);
		$("#global-nav ul li a:contains('Nu inschrijven')").attr("href", loginnl);
		
		/**** Business section of footer - German ********/
		$("#global-nav ul li a:contains('Produkte kaufen')").attr("href", loginde);
		
		/**** Business section of footer - French ********/
		$("#global-nav ul li a:contains('Se Connecter')").attr("href", loginfr);
		
		/**** Business section of footer - Italian ********/
		$("#global-nav ul li a:contains('Accesso')").attr("href", loginit);
		
		/**** Business section of footer - Greek ********/
		$(".col-3 ul li a:contains('Γίνε μέλος')").attr("href", logingr);
		$(".col-3 ul li a:contains('Αγορά προϊόντων')").attr("href", login);
		$("#global-nav ul li a:contains('Γίνε μέλος')").attr("href", logingr);
		
		/**** Business section of footer - Spanish ********/
		$(".col-3 ul li a:contains('Únase ahora')").attr("href", logines);
		$(".col-3 ul li a:contains('Comprar productos')").attr("href", login);
		$("#global-nav ul li a:contains('Únase ahora')").attr("href", logines);
		$("#global-nav ul li a:contains('&Uacute;nase ahora')").attr("href", logines);
		
		/**** Business section of footer - Vietnamese ********/
		$(".col-3 ul li a:contains('Tham Gia Ngay')").attr("href", login);
		$(".col-3 ul li a:contains('Mua Sản Phẩm')").attr("href", login);
		$("#global-nav ul li a:contains('Tham Gia Ngay')").attr("href", login);
		
});