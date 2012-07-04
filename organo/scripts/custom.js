$(document).ready(function(){
$("#lang ul li").hide();
$("#country ul li a").bind('click', function(){
		var country = $(this).attr("id");
		var us = "#lang_us";
		var ca = "#lang_ca";
		var jm = "#lang_jm";
		var mx = "#lang_mx";
		var at = "#lang_at";
		var de = "#lang_de";
		var gr = "#lang_gr";
		var nl = "#lang_nl";
		var uk = "#lang_uk";
		var ph = "#lang_ph";
		var pe = "#lang_pe";
		var tw = "#lang_tw";
		var cy = "#lang_cy";
		var ec = "#lang_ec";
		var my = "#lang_my";
		var ie = "#lang_ie";
		var dominican = "#lang_do";
		var sp = "#lang_sp";
		var pl = "#lang_pl";
		
		switch(country){
			case "us":
			$("#lang ul li" + us).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "ca":
			$("#lang ul li" + ca).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "jm":
			$("#lang ul li" + jm).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "mx":
			$("#lang ul li" + mx).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "at":
			$("#lang ul li" + at).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "de":
			$("#lang ul li" + de).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "gr":
			$("#lang ul li" + gr).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "nl":
			$("#lang ul li" + nl).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "uk":
			$("#lang ul li" + uk).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "ph":
			$("#lang ul li" + ph).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "pe":
			$("#lang ul li" + pe).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "tw":
			$("#lang ul li" + tw).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "do":
			$("#lang ul li" + dominican).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "sp":
			$("#lang ul li" + sp).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "cy":
			$("#lang ul li" + cy).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "ec":
			$("#lang ul li" + ec).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "my":
			$("#lang ul li" + my).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "ie":
			$("#lang ul li" + ie).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
			
			case "pl":
			$("#lang ul li" + pl).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			countryFadeOut()
			break;
		}
		
		function countryFadeOut(){
			$("#country").fadeOut(500, function(){ // fadeout country
				$(this).fadeOut(500); // fadeout country in 0.5 seconds
			});
		}
	});
	
	$("#lang ul li a.back").bind('click', function(){
		$("#country").fadeIn(500, function(){
			$(this).fadeIn(500);
		});
		$("#lang ul li").fadeOut(500, function(){
				$(this).fadeOut(500);
				$("#background").css({"display":"none","opacity":"0.7"});
		});
	});
	
	$("#lang ul li .flag_link a").bind('click', function(){
		$(this).parent().parent().hide();
		$("#background").hide();
		$("#country").show();
	});
	
	$("#slider").hide();
	$("#footer_top").hide();
	$("#footer").hide();
	$("#slider").fadeIn(1500, function(){ // fade in the logo at 1.5 seconds
		$("#footer_top").fadeIn(1500); // fade in the link items for the countries at 1.5 seconds after the logo fades in 
		$("#footer").fadeIn(1500); // fade in the footer at 1.5 seconds after the logo fades in
	});
});