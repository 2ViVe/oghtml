$(document).ready(function(){
	var cookie = $.cookie('language');
	if(cookie != null){
		switch(cookie){
			case 'UsEn': url = '/c/US/';
			break;
			case 'UsEs': url = '/c/US/ES/';
			break;
			case 'UsVn': url = '/c/US/VN/';
			break;
			case 'CaEn': url = '/c/CA/';
			break;
			case 'CaFr': url = '/c/CA/FR/';
			break;
			case 'CaCh': url = '/c/CA/CH/';
			break;
			case 'JmEn': url = '/c/JM/';
			break;
			case 'MxEn': url = '/c/MX/ENG/';
			break;
			case 'MxEs': url = '/c/MX/';
			break;
			case 'AtDe': url = '/c/AT/DE/';
			break;
			case 'AtEn': url = '/c/AT/';
			break;
			case 'AtIt': url = '/c/AT/IT/';
			break;
			case 'DeDe': url = '/c/DE/DE/';
			break;
			case 'DeEn': url = '/c/DE/';
			break;
			case 'GrGr': url = '/c/GR/GR/';
			break;
			case 'GrEn': url = '/c/GR/';
			break;
			case 'NlDu': url = '/c/NL/DU/';
			break;
			case 'NlEn': url = '/c/NL/';
			break;
			case 'UkEn': url = '/c/UK/';
			break;
			case 'PhEn': url = '/c/PH/';
			break;
			case 'PeEs': url = '/c/PE/ES/';
			break;
			case 'PeEn': url = '/c/PE/';
			break;
			case 'TwCh': url = '/c/TW/CH/';
			break;
			case 'DoEs': url = '/c/DO/ES/';
			break;
			case 'EsEs': url = '/c/ES/ES/';
			break;
			case 'CyGr': url = '/c/CY/GR/';
			break;
			case 'CyEn': url = '/c/CY/';
			break;
			case 'IeEn': url = '/c/IE/';
			break;
			case 'MyEn': url = 'http://multicosmique.com.my/';
			break;
			case 'PlEn': url = '/c/PL/';
			break;
			case 'PlPl': url = '/c/PL/PL/';
			break;
			default: url = '/';
		}
		window.location = url;
	}
	
	$("a[name='UsEn']").bind('click', function(){
		$.cookie('language', 'UsEn', { path: '/', expires: 365 });
	});
	$("a[name='UsEs']").bind('click', function(){
		$.cookie('language', 'UsEs', { path: '/', expires: 365 });
	});
	$("a[name='UsVn']").bind('click', function(){
		$.cookie('language', 'UsVn', { path: '/', expires: 365 });
	});
	$("a[name='CaEn']").bind('click', function(){
		$.cookie('language', 'CaEn', { path: '/', expires: 365 });
	});
	$("a[name='CaFr']").bind('click', function(){
		$.cookie('language', 'CaFr', { path: '/', expires: 365 });
	});
	$("a[name='CaEn']").bind('click', function(){
		$.cookie('language', 'CaEn', { path: '/', expires: 365 });
	});
	$("a[name='CaCh']").bind('click', function(){
		$.cookie('language', 'CaCh', { path: '/', expires: 365 });
	});
	$("a[name='JmEn']").bind('click', function(){
		$.cookie('language', 'JmEn', { path: '/', expires: 365 });
	});
	$("a[name='MxEn']").bind('click', function(){
		$.cookie('language', 'MxEn', { path: '/', expires: 365 });
	});
	$("a[name='MxEs']").bind('click', function(){
		$.cookie('language', 'MxEs', { path: '/', expires: 365 });
	});
	$("a[name='AtDe']").bind('click', function(){
		$.cookie('language', 'AtDe', { path: '/', expires: 365 });
	});
	$("a[name='AtEn']").bind('click', function(){
		$.cookie('language', 'AtEn', { path: '/', expires: 365 });
	});
	$("a[name='AtIt']").bind('click', function(){
		$.cookie('language', 'AtIt', { path: '/', expires: 365 });
	});
	$("a[name='DeDe']").bind('click', function(){
		$.cookie('language', 'DeDe', { path: '/', expires: 365 });
	});
	$("a[name='DeEn']").bind('click', function(){
		$.cookie('language', 'DeEn', { path: '/', expires: 365 });
	});
	$("a[name='GrGr']").bind('click', function(){
		$.cookie('language', 'GrGr', { path: '/', expires: 365 });
	});
	$("a[name='GrEn']").bind('click', function(){
		$.cookie('language', 'GrEn', { path: '/', expires: 365 });
	});
	$("a[name='NlDu']").bind('click', function(){
		$.cookie('language', 'NlDu', { path: '/', expires: 365 });
	});
	$("a[name='NlEn']").bind('click', function(){
		$.cookie('language', 'NlEn', { path: '/', expires: 365 });
	});
	$("a[name='UkEn']").bind('click', function(){
		$.cookie('language', 'UkEn', { path: '/', expires: 365 });
	});
	$("a[name='PhEn']").bind('click', function(){
		$.cookie('language', 'PhEn', { path: '/', expires: 365 });
	});
	$("a[name='PeEs']").bind('click', function(){
		$.cookie('language', 'PeEs', { path: '/', expires: 365 });
	});
	$("a[name='PeEn']").bind('click', function(){
		$.cookie('language', 'PeEn', { path: '/', expires: 365 });
	});
	$("a[name='TwCh']").bind('click', function(){
		$.cookie('language', 'TwCh', { path: '/', expires: 365 });
	});
	$("a[name='DoEs']").bind('click', function(){
		$.cookie('language', 'DoEs', { path: '/', expires: 365 });
	});
	$("a[name='EsEs']").bind('click', function(){
		$.cookie('language', 'EsEs', { path: '/', expires: 365 });
	});
	$("a[name='CyGr']").bind('click', function(){
		$.cookie('language', 'CyGr', { path: '/', expires: 365 });
	});
	$("a[name='CyEn']").bind('click', function(){
		$.cookie('language', 'CyEn', { path: '/', expires: 365 });
	});
	$("a[name='IeEn']").bind('click', function(){
		$.cookie('language', 'IeEn', { path: '/', expires: 365 });
	});
	$("a[name='PlEn']").bind('click', function(){
		$.cookie('language', 'PlEn', { path: '/', expires: 365 });
	});
	$("a[name='PlPl']").bind('click', function(){
		$.cookie('language', 'PlPl', { path: '/', expires: 365 });
	});
	$("a[name='MyEn']").bind('click', function(){
		$.cookie('language', 'MyEn', { path: 'http://multicosmique.com.my/', expires: 365 });
	});
});