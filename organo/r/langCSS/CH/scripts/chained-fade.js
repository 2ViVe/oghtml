$(document).ready(function() {

// initialize scrollable together with the navigator plugin
$("#browsable").scrollable().navigator();	
api=jQuery("div.scrollable").scrollable({api:true});

api.onBeforeSeek(function(){ jQuery("div.scrollable img").hide()}).onSeek(function(){ jQuery("div.scrollable img").fadeIn(400); });
});