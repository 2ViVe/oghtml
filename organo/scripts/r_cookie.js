$(document).ready(function(){
	var cookie = $.cookie('language');
	if(cookie != null){
		switch(cookie){
			case 'UsEn': url = '/r/US/';
			break;
			case 'UsEs': url = '/r/US/ES/';
			break;
			case 'UsVn': url = '/r/US/VN/';
			break;
			case 'CaEn': url = '/r/CA/';
			break;
			case 'CaFr': url = '/r/CA/FR/';
			break;
			case 'CaCh': url = '/r/CA/CH/';
			break;
			case 'JmEn': url = '/r/JM/';
			break;
			case 'MxEn': url = '/r/MX/ENG/';
			break;
			case 'MxEs': url = '/r/MX/';
			break;
			case 'AtDe': url = '/r/AT/DE/';
			break;
			case 'AtEn': url = '/r/AT/';
			break;
			case 'AtIt': url = '/r/AT/IT/';
			break;
			case 'DeDe': url = '/r/DE/DE/';
			break;
			case 'DeEn': url = '/r/DE/';
			break;
			case 'GrGr': url = '/r/GR/GR/';
			break;
			case 'GrEn': url = '/r/GR/';
			break;
			case 'NlDu': url = '/r/NL/DU/';
			break;
			case 'NlEn': url = '/r/NL/';
			break;
			case 'UkEn': url = '/r/UK/';
			break;
			case 'PhEn': url = '/r/PH/';
			break;
			case 'PeEs': url = '/r/PE/ES/';
			break;
			case 'PeEn': url = '/r/PE/';
			break;
			case 'TwCh': url = '/r/TW/CH/';
			break;
			case 'DoEs': url = '/r/DO/ES/';
			break;
			case 'EsEs': url = '/r/ES/ES/';
			break;
			case 'CyGr': url = '/r/CY/GR/';
			break;
			case 'CyEn': url = '/r/CY/';
			break;
			case 'IeEn': url = '/r/IE/';
			break;
			case 'PlEn': url = '/r/PL/';
			break;
			case 'PlPl': url = '/r/PL/PL/';
			break;
			case 'MyEn': url = 'http://multicosmique.com.my/';
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