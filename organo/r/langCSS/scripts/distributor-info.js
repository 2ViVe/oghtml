$(document).ready(function() {
	
	var where_is_mytool=window.location.href;
	var x_url = where_is_mytool;
	var x_url0 = x_url.replace(".myorganogold.com","");
	var x_url1 = x_url0.replace(".organogold.com","");
	var x_url2 = x_url1.replace("https://","");
	var x_url3 = x_url2.replace("http://","");
	var x_url4 = x_url3.replace("wwww.","");
	var x_url5 = x_url4.replace("www.","");
	var x_url6 = x_url5.replace("ww.","");
	var x_url7 = x_url6.split("/");
	var username = x_url7[0];
	var get_data_url = 'https://organogold.com/distributor_contact?login=' + username + '&format=json&callback=?';
	/*var query = window.location.host;
     var parts = query.split('.');
     var username = parts[0];
     var get_data_url = 'https://organogold.com/distributor_contact?login=' + username + '&format=json&callback=?';*/
		
     $.getJSON(get_data_url, function(data) {
          var dist_info = "<p class='name'>"+data.name+"</p><p class='distributor'>"+data.role+"</p><p class='ID'>"+data.distributor_id+" "+data.country+"</p><p class='email'><a href='mailto:"+data.email+"'>"+data.email+"</a></p><p style='font-size: 10px;color: #c7b299;'>Phone: "+data.phone+"</p>";
          $('#dist-info').html(dist_info);
          
        var signup = "https://organogold.com/signup?set_lang=en&personal_sponsor_distributor_id="+data.distributor_id;
        var signupcaen = "https://organogold.com/signup?set_lang=en&personal_sponsor_distributor_id="+data.distributor_id;
        
        /***** signup country languages - spanish ******/
        var signupes = "https://organogold.com/signup?set_lang=es&personal_sponsor_distributor_id="+data.distributor_id;
        var signupdoes = "https://organogold.com/signup?set_lang=es&personal_sponsor_distributor_id="+data.distributor_id;
		var signupeces = "https://organogold.com/signup?set_lang=es&personal_sponsor_distributor_id="+data.distributor_id;
		var signupmxes = "https://organogold.com/signup?set_lang=es&personal_sponsor_distributor_id="+data.distributor_id;
		var signuppees = "https://organogold.com/signup?set_lang=es&personal_sponsor_distributor_id="+data.distributor_id;
		var signupeses = "https://organogold.com/signup?set_lang=es&personal_sponsor_distributor_id="+data.distributor_id;
		
		
        var signupusvn = "https://organogold.com/signup?set_lang=vn&personal_sponsor_distributor_id="+data.distributor_id;
        
		var signupde = "https://organogold.com/signup?set_lang=de&personal_sponsor_distributor_id="+data.distributor_id;
		
		var signupgr = "https://organogold.com/signup?set_lang=gr&personal_sponsor_distributor_id="+data.distributor_id;
		
		var signupfr = "https://organogold.com/signup?set_lang=fr&personal_sponsor_distributor_id="+data.distributor_id;
		
		var signupit = "https://organogold.com/signup?set_lang=it&personal_sponsor_distributor_id="+data.distributor_id;
		
		var signupplpl = "https://organogold.com/signup?set_lang=pl&personal_sponsor_distributor_id="+data.distributor_id;
		
		/***** signup country languages - nederlands ******/
		var signupnl = "https://organogold.com/signup?set_lang=nl&personal_sponsor_distributor_id="+data.distributor_id;
		var signupnldu = "https://organogold.com/signup?set_lang=nl&personal_sponsor_distributor_id="+data.distributor_id;
		
		/***** signup country languages - chinese ******/
		var signuptw = "https://organogold.com/signup?set_lang=tw&personal_sponsor_distributor_id="+data.distributor_id;
		var signuptwch = "https://organogold.com/signup?set_lang=tw&personal_sponsor_distributor_id="+data.distributor_id;
		
		/***** signup country languages - greek ******/
		var signupcygr = "https://organogold.com/signup?set_lang=gr&personal_sponsor_distributor_id="+data.distributor_id;
		var signupgrgr = "https://organogold.com/signup?set_lang=gr&personal_sponsor_distributor_id="+data.distributor_id;
		
		/***** signup country languages - german ******/
		var signupdede = "https://organogold.com/signup?set_lang=de&personal_sponsor_distributor_id="+data.distributor_id;
		var signupatde = "https://organogold.com/signup?set_lang=de&personal_sponsor_distributor_id="+data.distributor_id;
		
		
		/***** signup country languages - italian ******/
		var signupatit = "https://organogold.com/signup?set_lang=it&personal_sponsor_distributor_id="+data.distributor_id;
		var signupitit = "https://organogold.com/signup?set_lang=it&personal_sponsor_distributor_id="+data.distributor_id;
		//var loginen = "https://organogold.com/signup?personal_sponsor_distributor_id=";
		
		/***** signup country languages - russian ******/
		var signupruru = "https://organogold.com/signup?set_lang=en&personal_sponsor_distributor_id="+data.distributor_id;
		
		/***** signup country languages - malaysian ******/
		var signupmymy = "https://organogold.com/signup?set_lang=en&personal_sponsor_distributor_id="+data.distributor_id;
		
		
		/****** buy product country languages - english ******/
		var buycaen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buycach = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buyjmen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buymxen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buypeen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buyaten = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buycyen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buydeen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buygren = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buynlen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buyuken = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buyesen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buyphen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buymyen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buyieen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		
		
		var buyusen = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		var buyusvn = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=vn&retail=true";
		var buycafr = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=fr&retail=true";
		var buynldu = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=nl&retail=true";
		var buyplpl = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=pl&retail=true";
		
		/***** buy product country languages - chinese ******/
		var buycach = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=tw&retail=true";
		var buytwch = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=tw&retail=true";

		
		/***** buy product country languages - greek ******/
		var buycygr = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=gr&retail=true";
		var buygrgr = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=gr&retail=true";
		
		/***** buy product country languages - german ******/
		var buydede = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=de&retail=true";
		var buyatde = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=de&retail=true";
		
		/***** buy product country languages - italian ******/
		var buyatit = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=it&retail=true";
		var buyitit = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=it&retail=true";
		
		/***** buy product country languages - spanish ******/
		var buyuses = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=es&retail=true";
		var buydoes = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=es&retail=true";
		var buyeces = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=es&retail=true";
		var buymxes = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=es&retail=true";
		var buypees = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=es&retail=true";
		var buyeses = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&set_lang=es&retail=true";
		
		/***** buy product country languages - russian ******/
		var buyruru = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		
		/***** buy product country languages - malaysian ******/
		var buymymy = "https://organogold.com/signup?personal_sponsor_distributor_id="+data.distributor_id+"&retail=true";
		
		/**** login Country English *****/
		var login = "https://organogold.com/login?";
		var logincaen = "https://organogold.com/login?";
		var loginjmen = "https://organogold.com/login?";
		var loginmxen = "https://organogold.com/login?";
		var loginpeen = "https://organogold.com/login?";
		var loginaten = "https://organogold.com/login?";
		var logincyen = "https://organogold.com/login?";
		var logindeen = "https://organogold.com/login?";
		var logingren = "https://organogold.com/login?";
		var loginnlen = "https://organogold.com/login?";
		var loginuken = "https://organogold.com/login?";
		var loginesen = "https://organogold.com/login?";
		var loginphen = "https://organogold.com/login?";
		var loginruen = "https://organogold.com/login?";
		var loginmyen = "https://organogold.com/login?";
		var loginieen = "https://organogold.com/login?";
		
		var loginuses = "https://organogold.com/login?set_lang=es";
		var loginusvn = "https://organogold.com/login?set_lang=vn";
		var logincafr = "https://organogold.com/login?set_lang=fr";
		var logincach = "https://organogold.com/login?set_lang=tw";
		var logintwch = "https://organogold.com/login?set_lang=tw";
		var logindede = "https://organogold.com/login?set_lang=de";
		var loginplpl = "https://organogold.com/login?set_lang=pl";
		
		var loginatde = "https://organogold.com/login?set_lang=de";
		var loginatit = "https://organogold.com/login?set_lang=it";
		var loginitit = "https://organogold.com/login?set_lang=it";
		var loginruru = "https://organogold.com/login?";
		var loginmymy = "https://organogold.com/login?";
		
		var logindeit = "https://organogold.com/login?set_lang=it";
		var logingrgr = "https://organogold.com/login?set_lang=gr";
		var logincygr = "https://organogold.com/login?set_lang=gr";
		var loginnldu = "https://organogold.com/login?set_lang=nl";
		
		var logindoes = "https://organogold.com/login?set_lang=es";
		var logineces = "https://organogold.com/login?set_lang=es";
		var loginmxes = "https://organogold.com/login?set_lang=es";
		var loginpees = "https://organogold.com/login?set_lang=es";
		var logineses = "https://organogold.com/login?set_lang=es";
		
		/****** US English *******/
		if($("body").hasClass("usen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buyusen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buyusen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyusen);
			$("#global-nav ul li a[id='login']").attr("href", login);
		}
		
		/****** US English *******/
		if($("body").hasClass("caen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buycaen);
			$(".click-to-action a[id='join-now']").attr("href", signupcaen);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signupcaen);
			$(".col-5 a:contains('Join Now')").attr("href", signupcaen);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buycaen);

			$("#global-nav ul li a[id='join']").attr("href", signupcaen);
			$("#global-nav ul li a[id='buy']").attr("href", buycaen);
			$("#global-nav ul li a[id='login']").attr("href", logincaen);
		}
		
		/****** JM English *******/
		if($("body").hasClass("jmen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buyjmen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buyjmen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyjmen);
			$("#global-nav ul li a[id='login']").attr("href", loginjmen);
		}
		
		/****** MX English *******/
		if($("body").hasClass("mxen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buymxen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buymxen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buymxen);
			$("#global-nav ul li a[id='login']").attr("href", loginmxen);
		}
		
		/****** Peru English *******/
		if($("body").hasClass("peen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buypeen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buypeen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buypeen);
			$("#global-nav ul li a[id='login']").attr("href", loginpeen);
		}
		
		/****** AT English *******/
		if($("body").hasClass("aten")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buyaten);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buyaten);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyaten);
			$("#global-nav ul li a[id='login']").attr("href", loginaten);
		}
		
		/****** Cyprus English *******/
		if($("body").hasClass("cyen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buycyen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buycyen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buycyen);
			$("#global-nav ul li a[id='login']").attr("href", logincyen);
		}
		
		/****** Germany English *******/
		if($("body").hasClass("deen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buydeen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buydeen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buydeen);
			$("#global-nav ul li a[id='login']").attr("href", logindeen);
		}
		
		/****** Greece English *******/
		if($("body").hasClass("gren")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buygren);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buygren);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buygren);
			$("#global-nav ul li a[id='login']").attr("href", logingren);
		}
		
		/****** UK English *******/
		if($("body").hasClass("uken")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buyuken);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buyuken);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyuken);
			$("#global-nav ul li a[id='login']").attr("href", loginuken);
		}
		
		/****** NL English *******/
		if($("body").hasClass("nlen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buynlen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buynlen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buynlen);
			$("#global-nav ul li a[id='login']").attr("href", loginnlen);
		}
		
		/****** Spain English *******/
		if($("body").hasClass("esen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buyesen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buyesen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyesen);
			$("#global-nav ul li a[id='login']").attr("href", loginesen);
		}
		
		/****** PH English *******/
		if($("body").hasClass("phen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buyphen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buyphen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyphen);
			$("#global-nav ul li a[id='login']").attr("href", loginphen);
		}
		
		/****** Malaysian English *******/
		if($("body").hasClass("myen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buymyen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buymyen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buymyen);
			$("#global-nav ul li a[id='login']").attr("href", loginmyen);
		}
		
		/****** Ireland English *******/
		if($("body").hasClass("ieen")){
			/**** social media in footer ****/
			$(".click-to-action a[id='buy-products']").attr("href", buyieen);
			$(".click-to-action a[id='join-now']").attr("href", signup);
			
			/**** Business section of footer *****/
			$(".col-3 ul li a:contains('Join Now')").attr("href", signup);
			$(".col-5 a:contains('Join Now')").attr("href", signup);
			$(".col-3 ul li a:contains('Buy Products')").attr("href", buyieen);

			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyieen);
			$("#global-nav ul li a[id='login']").attr("href", loginieen);
		}
		
		/****** US Spanish *******/
		if($("body").hasClass("uses")){
			/**** Business section of footer - Spanish ********/
			$(".col-3 ul li a:contains('Únase ahora')").attr("href", signupes);
			$(".col-3 ul li a:contains('Comprar productos')").attr("href", buyuses);
			$(".col-5 a[id='buy-products']").attr("href", buyuses);
			$(".col-5 a[id='join-now']").attr("href", signupes);
		
			$("#global-nav ul li a[id='join']").attr("href", signupes);
			$("#global-nav ul li a[id='buy']").attr("href", buyuses);
			$("#global-nav ul li a[id='login']").attr("href", loginuses);
		}
		
		/****** CA French *******/
		if($("body").hasClass("cafr")){
			/**** Business section of footer - French *****/
			$(".col-5 a:contains('S'inscrire')").attr("href", signupfr);
			$(".col-5 a:contains('Acheter des produits')").attr("href", logincafr);
			$(".col-3 ul li a:contains('Acheter des produits')").attr("href", buycafr);
			$(".col-3 ul li a:contains('S'inscrire')").attr("href", signupfr);
		
			$("#global-nav ul li a[id='join']").attr("href", signupfr);
			$("#global-nav ul li a[id='buy']").attr("href", buycafr);
			$("#global-nav ul li a[id='login']").attr("href", logincafr);
		}
		
		/****** CA Chinese *******/
		if($("body").hasClass("cach")){
			/**** Business section of footer - French *****/
			$(".col-5 a:contains('Buy Products')").attr("href", signup);
			$(".col-5 a:contains('cach')").attr("href", buyusen);
			$(".col-3 ul li a:contains('購買產品')").attr("href", signup);
			$(".col-3 ul li a:contains('立即加入')").attr("href", buyusen);
			
			$("#global-nav ul li a[id='join']").attr("href", signup);
			$("#global-nav ul li a[id='buy']").attr("href", buyusen);
			$("#global-nav ul li a[id='login']").attr("href", login);
		}
		
		/****** DO Spanish *******/
		if($("body").hasClass("does")){
			/**** Business section of footer - Spanish ********/
			$(".col-3 ul li a:contains('Únase ahora')").attr("href", signupdoes);
			$(".col-3 ul li a:contains('Comprar productos')").attr("href", buydoes);
			$(".col-5 a[id='buy-products']").attr("href", buydoes);
			$(".col-5 a[id='join-now']").attr("href", signupdoes);
		
			$("#global-nav ul li a[id='join']").attr("href", signupdoes);
			$("#global-nav ul li a[id='buy']").attr("href", buydoes);
			$("#global-nav ul li a[id='login']").attr("href", logindoes);
		}
		
		/****** Ecuador Spanish *******/
		if($("body").hasClass("eces")){
			/**** Business section of footer - Spanish ********/
			$(".col-3 ul li a:contains('Únase ahora')").attr("href", signupeces);
			$(".col-3 ul li a:contains('Comprar productos')").attr("href", buyeces);
			$(".col-5 a[id='buy-products']").attr("href", buyeces);
			$(".col-5 a[id='join-now']").attr("href", signupeces);
		
			$("#global-nav ul li a[id='join']").attr("href", signupeces);
			$("#global-nav ul li a[id='buy']").attr("href", buyeces);
			$("#global-nav ul li a[id='login']").attr("href", logineces);
		}
		
		/****** MX Spanish *******/
		if($("body").hasClass("mxes")){
			/**** Business section of footer - Spanish ********/
			$(".col-3 ul li a:contains('Únase ahora')").attr("href", signupmxes);
			$(".col-3 ul li a:contains('Comprar productos')").attr("href", buymxes);
			$(".col-5 a[id='buy-products']").attr("href", buymxes);
			$(".col-5 a[id='join-now']").attr("href", signupmxes);
		
			$("#global-nav ul li a[id='join']").attr("href", signupmxes);
			$("#global-nav ul li a[id='buy']").attr("href", buymxes);
			$("#global-nav ul li a[id='login']").attr("href", loginmxes);
		}
		
		/****** Peru Spanish *******/
		if($("body").hasClass("pees")){
			/**** Business section of footer - Spanish ********/
			$(".col-3 ul li a:contains('Únase ahora')").attr("href", signuppees);
			$(".col-3 ul li a:contains('Comprar productos')").attr("href", buypees);
			$(".col-5 a[id='buy-products']").attr("href", buypees);
			$(".col-5 a[id='join-now']").attr("href", signuppees);
		
			$("#global-nav ul li a[id='join']").attr("href", signuppees);
			$("#global-nav ul li a[id='buy']").attr("href", buypees);
			$("#global-nav ul li a[id='login']").attr("href", loginpees);
		}
		
		/****** Spain Spanish *******/
		if($("body").hasClass("eses")){
			/**** Business section of footer - Spanish ********/
			$(".col-3 ul li a:contains('Únase ahora')").attr("href", signupeses);
			$(".col-3 ul li a:contains('Comprar productos')").attr("href", buyeses);
			$(".col-5 a[id='buy-products']").attr("href", buyeses);
			$(".col-5 a[id='join-now']").attr("href", signupeses);
		
			$("#global-nav ul li a[id='join']").attr("href", signupeses);
			$("#global-nav ul li a[id='buy']").attr("href", buyeses);
			$("#global-nav ul li a[id='login']").attr("href", logineses);
		}
		
		/****** AT German *******/
		if($("body").hasClass("atde")){
			/**** Business section of footer - German ********/
			$(".col-3 ul li a:contains('Jetzt Mitglied werden')").attr("href", signupatde);
			$(".col-3 ul li a:contains('Produkte kaufen')").attr("href", buyatde);
			$(".col-5 a:contains('Produkte kaufen')").attr("href", buyatde);
			$(".col-5 a:contains('Jetzt Mitglied werden')").attr("href", signupatde);
			$("#global-nav ul li a[id='join']").attr("href", signupatde);
			$("#global-nav ul li a[id='buy']").attr("href", buyatde);
			$("#global-nav ul li a[id='login']").attr("href", loginatde);
		}
		
		/****** Germany German *******/
		if($("body").hasClass("dede")){
			/**** Business section of footer - German ********/
			$(".col-3 ul li a:contains('Jetzt Mitglied werden')").attr("href", signupdede);
			$(".col-3 ul li a:contains('Produkte kaufen')").attr("href", buydede);
			$(".col-5 a:contains('Produkte kaufen')").attr("href", buydede);
			$(".col-5 a:contains('Jetzt Mitglied werden')").attr("href", signupdede);
			$("#global-nav ul li a[id='join']").attr("href", signupdede);
			$("#global-nav ul li a[id='buy']").attr("href", buydede);
			$("#global-nav ul li a[id='login']").attr("href", logindede);
		}
		
		/****** AT Italian *******/
		if($("body").hasClass("atit")){
			/**** Business section of footer - Italian ********/
			$(".col-3 ul li a:contains('Unisciti ora')").attr("href", signupatit);
			$(".col-3 ul li a:contains('Compra prodotti')").attr("href", buyatit);
			$(".col-5 a:contains('Compra prodotti')").attr("href", buyatit);
			$(".col-5 a:contains('Unisciti ora')").attr("href", signupatit);
			$("#global-nav ul li a[id='join']").attr("href", signupatit);
			$("#global-nav ul li a[id='buy']").attr("href", buyatit);
			$("#global-nav ul li a[id='login']").attr("href", loginatit);
		}
		
		/****** Cyprus Greek *******/
		if($("body").hasClass("cygr")){
			/**** Business section of footer - Greek ********/
			$(".col-3 ul li a:contains('Γίνε μέλος')").attr("href", signupcygr);
			$(".col-3 ul li a:contains('Αγορά προϊόντων')").attr("href", buycygr);
			$(".col-5 a:contains('Αγορά προϊόντων')").attr("href", buycygr);
			$(".col-5 a:contains('Γίνε μέλος')").attr("href", signupcygr);
			$("#global-nav ul li a[id='join']").attr("href", signupcygr);
			$("#global-nav ul li a[id='buy']").attr("href", buycygr);
			$("#global-nav ul li a[id='login']").attr("href", logincygr);
		}
		
		/****** Greece Greek *******/
		if($("body").hasClass("grgr")){
			/**** Business section of footer - Greek ********/
			$(".col-3 ul li a:contains('Γίνε μέλος')").attr("href", signupgrgr);
			$(".col-3 ul li a:contains('Αγορά προϊόντων')").attr("href", buygrgr);
			$(".col-5 a:contains('Αγορά προϊόντων')").attr("href", buygrgr);
			$(".col-5 a:contains('Γίνε μέλος')").attr("href", signupgrgr);
			$("#global-nav ul li a[id='join']").attr("href", signupgrgr);
			$("#global-nav ul li a[id='buy']").attr("href", buygrgr);
			$("#global-nav ul li a[id='login']").attr("href", logingrgr);
		}
		
		/****** Nederland Nederland *******/
		if($("body").hasClass("nldu")){
			/**** Business section of footer - Nederlands ********/
			$(".col-3 ul li a:contains('Nu inschrijven')").attr("href", buynldu);
			$(".col-3 ul li a:contains('Producten kopen')").attr("href", signupnldu);
			$(".col-5 a:contains('Producten kopen')").attr("href", signupnldu);
			$(".col-5 a:contains('Nu inschrijven')").attr("href", buynldu);
			$("#global-nav ul li a[id='join']").attr("href", signupnldu);
			$("#global-nav ul li a[id='buy']").attr("href", buynldu);
			$("#global-nav ul li a[id='login']").attr("href", loginnldu);
		}
		
		/****** Taiwan Traditional Chinese *******/
		if($("body").hasClass("twch")){
			/**** Business section of footer - Taiwan Chinese *****/
			$(".col-5 a:contains('立即加入')").attr("href", buytwch);
			$(".col-5 a:contains('購買產品')").attr("href", signuptwch);
			$(".col-3 ul li a:contains('立即加入')").attr("href", signuptwch);
			$(".col-3 ul li a:contains('購買產品')").attr("href", buytwch);
			$("#global-nav ul li a[id='join']").attr("href", signuptwch);
			$("#global-nav ul li a[id='buy']").attr("href", buytwch);
			$("#global-nav ul li a[id='login']").attr("href", logintwch);
		}
		
		/****** US Vietnamese *******/
		if($("body").hasClass("usvn")){
			/**** Business section of footer - Vietnamese ********/
			$(".col-3 ul li a:contains('Tham Gia Ngay')").attr("href", buyusvn);
			$(".col-3 ul li a:contains('Mua Sản Phẩm')").attr("href", signupusvn);
			$(".col-5 a:contains('Mua Sản Phẩm')").attr("href", signupusvn);
			$(".col-5 a:contains('Tham Gia Ngay')").attr("href", buyusvn);
			$("#global-nav ul li a[id='join']").attr("href", signupusvn);
			$("#global-nav ul li a[id='buy']").attr("href", buyusvn);
			$("#global-nav ul li a[id='login']").attr("href", loginusvn);
		}
		
		/****** Russia - Russian *******/
		if($("body").hasClass("ruru")){
			/**** Business section of footer - Vietnamese ********/
			$(".col-3 ul li a:contains('Купить продукт')").attr("href", buyruru);
			$(".col-3 ul li a:contains('Присоединиться сейчас')").attr("href", signupruru);
			$(".col-5 a:contains('Присоединиться сейчас')").attr("href", signupruru);
			$(".col-5 a:contains('Купить продукт')").attr("href", buyruru);
			$("#global-nav ul li a[id='join']").attr("href", signupruru);
			$("#global-nav ul li a[id='buy']").attr("href", buyruru);
			$("#global-nav ul li a[id='login']").attr("href", loginruru);
		}
		
		/****** Italy Italian *******/
		if($("body").hasClass("itit")){
			/**** Business section of footer - Italian ********/
			$(".col-3 ul li a:contains('Unisciti ora')").attr("href", signupitit);
			$(".col-3 ul li a:contains('Compra prodotti')").attr("href", buyitit);
			$(".col-5 a:contains('Compra prodotti')").attr("href", buyitit);
			$(".col-5 a:contains('Unisciti ora')").attr("href", signupitit);
			$("#global-nav ul li a[id='join']").attr("href", signupitit);
			$("#global-nav ul li a[id='buy']").attr("href", buyitit);
			$("#global-nav ul li a[id='login']").attr("href", loginitit);
		}
		
		/****** Malaysia Malay *******/
		if($("body").hasClass("mymy")){
			/**** Business section of footer - Italian ********/
			$(".col-3 ul li a:contains('Sertai Sekarang')").attr("href", signupmymy);
			$(".col-3 ul li a:contains('Beli Produk')").attr("href", buymymy);
			$(".col-5 a:contains('Beli Produk')").attr("href", buymymy);
			$(".col-5 a:contains('Sertai Sekarang')").attr("href", signupmymy);
			$("#global-nav ul li a[id='join']").attr("href", signupmymy);
			$("#global-nav ul li a[id='buy']").attr("href", buymymy);
			$("#global-nav ul li a[id='login']").attr("href", loginmymy);
		}
		
		/****** Poland Polish *******/
		if($("body").hasClass("plpl")){
			/**** Business section of footer - Italian ********/
			$(".col-3 ul li a:contains('Dołącz teraz')").attr("href", signupplpl);
			$(".col-3 ul li a:contains('Kupuj produkty')").attr("href", buyplpl);
			$(".col-5 a:contains('Kupuj produkty')").attr("href", buyplpl);
			$(".col-5 a:contains('Dołącz teraz')").attr("href", signupplpl);
			$("#global-nav ul li a[id='join']").attr("href", signupplpl);
			$("#global-nav ul li a[id='buy']").attr("href", buyplpl);
			$("#global-nav ul li a[id='login']").attr("href", loginplpl);
		}

     });	
  }); 
