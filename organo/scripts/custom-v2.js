$(document).ready(function(){
	$("#lang ul li").hide();
	$("#footer").hide();
	
	$(".toggle a").click(function(){    
		if($(".toggle").attr("class") == "toggle"){
			$(".toggle").addClass("add_active");
			$(".toggle").animate({"top": "+=80"}, "slow");
			$("#footer").fadeIn(500);
			$("#logo").animate({"opacity":"1"});
		} else {
			$(".toggle").removeClass("add_active");
			$(".toggle").addClass("toggle");
			$(".toggle").animate({"top": "-=80"}, "slow");
			$("#footer").fadeOut(500);
			$("#logo").animate({"opacity":"0"});
		}
		
		$("#container").slideToggle("slow");
		return false;
	
		$("#lang ul li .flag_link a").bind('click', function(){
			$("#country").show();
		});
	});
	
	$("#country ul li a").bind('click', function(){
		$("#backgroundPopup").fadeIn(500);
		
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
			var dominican = "#lang_do";
			var sp = "#lang_sp";
			var ie = "#lang_ie";
			var pl = "#lang_pl";
		
		switch(country){
			case "us":
			$("#lang ul li" + us).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
		
			case "ca":
			$("#lang ul li" + ca).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "jm":
			$("#lang ul li" + jm).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "mx":
			$("#lang ul li" + mx).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "at":
			$("#lang ul li" + at).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "de":
			$("#lang ul li" + de).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "gr":
			$("#lang ul li" + gr).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "nl":
			$("#lang ul li" + nl).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "uk":
			$("#lang ul li" + uk).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "ph":
			$("#lang ul li" + ph).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "pe":
			$("#lang ul li" + pe).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "tw":
			$("#lang ul li" + tw).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "do":
			$("#lang ul li" + dominican).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "sp":
			$("#lang ul li" + sp).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "cy":
			$("#lang ul li" + cy).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "ec":
			$("#lang ul li" + ec).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "my":
			$("#lang ul li" + my).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "pl":
			$("#lang ul li" + pl).fadeIn(500, function(){
			$(this).fadeIn(500);
			});
			break;
			
			case "ie":
			$("#lang ul li" + ie).fadeIn(500, function(){
				$(this).fadeIn(500);
			});
			break;
			}
			
		function countryFadeOut(){
			$("#country").fadeOut(500, function(){ // fadeout country
				$(this).fadeOut(500); // fadeout country in 0.5 seconds
			});
		}
	});
	
	$("#lang ul li a.back").bind('click', function(){
		$("#lang ul li").fadeOut(500, function(){
			$(this).fadeOut(500);
			$("#backgroundPopup").css({"display":"none"});
		});
	});
	
	/*** centers popup ****/
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = jQuery("#lang").height();
	var popupWidth = jQuery("#lang").width();
	
	//centering
	jQuery("#lang").css({"position": "absolute","top": windowHeight/8-popupHeight/8});
	//only need force for IE6
	jQuery("#backgroundPopup").css({"height": windowHeight});

});