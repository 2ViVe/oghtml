$(document).ready(function(){
	$.getJSON("http://media.organogold.com/feed/?feed=json&jsonp=?", function(data){
		$(".slide").empty();
		$.each(data, function( entryIndex, entry){
			var html = "<div class='footer-section-1' style='margin:0 0 1.5em 5px; padding:10px; height:215px; overflow:hidden; float:left; display:inline-block; width: 210px; text-align: center;'>";
			html += "<div class='content' style='font-size: 10px; margin: 5px 0; height: 139px; overflow: hidden;'>" + entry['content'] + "</div>";
			html += "<div class='header' style='position: relative; z-index: 1;'><h1 style='display:block; height: 30px; line-height: 16px; color: #9B1112; font-size: 12px;'>" + entry['title'] + "</h1></div>";
			html += "<div class='link' style='position: absolute; z-index: 1;'><a style='font-size: 10px; text-decoration: none; margin-left: 80px; color: #9B1112;' href='" + entry['permalink'] + "' target='_blank'>read more...</a></div></div>";
			html += "<script type='text/javascript'>$(document).ready(function(){$('.link a:gt(3)').hide(); $('.slide').css('overflow', 'hidden');});</script>";
			html += "<!--[if IE 7]><script type='text/javascript'>$(document).ready(function(){$('.link a').css('margin-left','0px').css('position','relative').css('left','-20px');});</script><![endif]-->";
		$(".slide").append(html);
		});
	});
});