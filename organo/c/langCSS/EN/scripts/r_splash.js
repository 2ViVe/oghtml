$(document).ready(function() {
	// setup div.tabs to work as tabs for each link directly under div.panes for the languages of each country */
	$("div.tabs").tabs("div.panes > div"); // activates the panes
	$("div.panes > div").hide(); // hides the country's languages by default
	$("div.tabs a:first-child").removeClass("current"); // removes the class name "current" from the first link
	$("div.tabs a:first-child").click(function(){ // when the first link is clicked, call its associated pane/links
		$("div.tabs").tabs("div.panes > div");
	});
});