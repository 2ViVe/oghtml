$(document).ready(function() {

     
var where_is_mytool=window.location.href;
var x_url = where_is_mytool;
var x_url1 = x_url.replace(".organogold.com","");
var x_url2 = x_url1.replace("https://","");
var x_url3 = x_url2.replace("http://","");
var x_url4 = x_url3.replace("www.","");
var x_url5 = x_url4.split("/");
var username = x_url5[0];
var get_data_url = 'https://organogold.com/distributor_contact?login=' + username + '&format=json&callback=?';
//document.write(get_data_url);
     
     $.getJSON(get_data_url, function(data) {
          var dist_info = "<p class='name'>"+data.name+"</p><p class='distributor'>"+data.role+"</p><p class='ID'>"+data.distributor_id+" "+data.country+"</p><p class='email'><a href='mailto:"+data.email+"'>"+data.email+"</a></p><p style='font-size: 10px;color: #c7b299;'>Phone: "+data.phone+"</p>";
          $('#dist-info').html(dist_info);
          
        var signup = "https://organogold.com/signup?set_lang=en&personal_sponsor_distributor_id="+data.distributor_id;
        var signupes = "https://organogold.com/signup?set_lang=es&personal_sponsor_distributor_id="+data.distributor_id;
		var signupde = "https://organogold.com/signup?set_lang=de&personal_sponsor_distributor_id="+data.distributor_id;
		var signupgr = "https://organogold.com/signup?set_lang=gr&personal_sponsor_distributor_id="+data.distributor_id;
		var signupfr = "https://organogold.com/signup?set_lang=fr&personal_sponsor_distributor_id="+data.distributor_id;
		var signupit = "https://organogold.com/signup?set_lang=it&personal_sponsor_distributor_id="+data.distributor_id;
		var signupnl = "https://organogold.com/signup?set_lang=nl&personal_sponsor_distributor_id="+data.distributor_id;
		var signuptw = "https://organogold.com/signup?set_lang=tw&personal_sponsor_distributor_id="+data.distributor_id;
		var loginen = "https://organogold.com/login?set_lang=en";
		var logines = "https://organogold.com/login?set_lang=es";
		var loginde = "https://organogold.com/login?set_lang=de";
		var loginfr = "https://organogold.com/login?set_lang=fr";
		var loginit = "https://organogold.com/login?set_lang=it";
		var logingr = "https://organogold.com/login?set_lang=gr";
		var loginnl = "https://organogold.com/login?set_lang=nl";
		var logintw = "https://organogold.com/login?set_lang=tw";
          
        $("#global-nav ul li a[id='login']").attr("href", loginen);
		$("#global-nav ul li a[id='buy']").attr("href", loginen);
		$("#global-nav ul li a[id='join']").attr("href", signup);
		
		/**** social media in footer ****/
		$(".click-to-action a[id='buy-products']").attr("href", loginen);
		$(".click-to-action a[id='join-now']").attr("href", loginen);
		
		/**** Business section of footer *****/
		$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
		$(".col-5 a:contains('Join Now')").attr("href", signup);
		$(".col-3 ul li a:contains('Buy Products')").attr("href", loginen);
		
		/**** Business section of footer - French *****/
		$(".col-5 a:contains('S'inscrire')").attr("href", signupfr);
		$(".col-5 a:contains('Acheter des produits')").attr("href", loginfr);
		$(".col-3 ul li a:contains('Acheter des produits')").attr("href", loginfr);
		$(".col-3 ul li a:contains('S'inscrire')").attr("href", signupfr);
		$("#global-nav ul li a:contains('S'inscrire')").attr("href", signupfr);
		$("#global-nav ul li a:contains('Acheter des produits')").attr("href", loginfr);
		
		/**** Business section of footer - Canada Chinese *****/
		$(".col-5 a:contains('cach')").attr("href", signup);
		$(".col-3 ul li a:contains('立即加入')").attr("href", signup);
		$(".col-3 ul li a:contains('購買產品')").attr("href", loginen);
		
		/**** Business section of footer - Taiwan Chinese *****/
		$(".col-5 a:contains('立即加入')").attr("href", signuptw);
		$(".col-5 a:contains('購買產品')").attr("href", loginen);
		$(".col-3 ul li a:contains('立即加入')").attr("href", signuptw);
		$(".col-3 ul li a:contains('購買產品')").attr("href", loginen);
		$("#global-nav ul li a:contains('登入 TWCH')").attr("href", logintw);
		$("#global-nav ul li a:contains('購買產品 TWCH')").attr("href", logintw);
		$("#global-nav ul li a:contains('立即加入')").attr("href", signuptw);
		
		/**** Business section of footer - Nederlands ********/
		$(".col-3 ul li a:contains('Nu inschrijven')").attr("href", signupnl);
		$(".col-3 ul li a:contains('Producten kopen')").attr("href", loginnl);
		$("#global-nav ul li a:contains('Nu inschrijven')").attr("href", signupnl);
		$("#global-nav ul li a:contains('Producten kopen')").attr("href", loginnl);
		$("#global-nav ul li a:contains('Inloggen')").attr("href", loginnl);
		
		/**** Business section of footer - German ********/
		$(".col-3 ul li a:contains('Jetzt Mitglied werden')").attr("href", signupde);
		$(".col-3 ul li a:contains('Produkte kaufen')").attr("href", loginde);
		$(".col-5 a:contains('Produkte kaufen')").attr("href", loginde);
		$(".col-5 a:contains('Jetzt Mitglied werden')").attr("href", signupde);
		$("#global-nav ul li a:contains('Jetzt Mitglied werden')").attr("href", signupde);
		$("#global-nav ul li a:contains('Produkte kaufen')").attr("href", loginde);
		
		/**** Business section of footer - Italian ********/
		$(".col-3 ul li a:contains('Unisciti ora')").attr("href", signupit);
		$(".col-3 ul li a:contains('Compra prodotti')").attr("href", loginit);
		$(".col-5 a:contains('Compra prodotti')").attr("href", loginit);
		$(".col-5 a:contains('Unisciti ora')").attr("href", signupit);
		$("#global-nav ul li a:contains('Unisciti ora')").attr("href", signupit);
		$("#global-nav ul li a:contains('Compra prodotti')").attr("href", loginit);
		$("#global-nav ul li a:contains('Accesso')").attr("href", loginit);
		
		/**** Business section of footer - Greek ********/
		$(".col-3 ul li a:contains('Γίνε μέλος')").attr("href", signupgr);
		$(".col-3 ul li a:contains('Αγορά προϊόντων')").attr("href", logingr);
		$(".col-5 a:contains('Αγορά προϊόντων')").attr("href", logingr);
		$(".col-5 a:contains('Γίνε μέλος')").attr("href", signupgr);
		$("#global-nav ul li a:contains('Γίνε μέλος')").attr("href", signupgr);
		$("#global-nav ul li a:contains('Αγορά προϊόντων')").attr("href", logingr);
		$("#global-nav ul li a:contains('Σύνδεση')").attr("href", logingr);
		
		/**** Business section of footer - Spanish ********/
		$(".col-3 ul li a:contains('Únase ahora')").attr("href", signupes);
		$(".col-3 ul li a:contains('Comprar productos')").attr("href", logines);
		$(".col-5 a:contains('Únase ahora')").attr("href", signupes);
		$("#global-nav ul li a:contains('Únase ahora')").attr("href", signupes);
		$("#global-nav ul li a:contains('Comprar productos')").attr("href", logines);
		
		/**** Business section of footer - Vietnamese ********/
		$(".col-3 ul li a:contains('Tham Gia Ngay')").attr("href", signup);
		$(".col-3 ul li a:contains('Mua Sản Phẩm')").attr("href", loginen);
		$(".col-5 a:contains('Mua Sản Phẩm')").attr("href", loginen);
		$(".col-5 a:contains('Tham Gia Ngay')").attr("href", signup);
		$("#global-nav ul li a:contains('Tham Gia Ngay')").attr("href", signup);
     });
  }); 
