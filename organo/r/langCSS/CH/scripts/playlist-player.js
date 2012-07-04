jwplayer("container").setup({
flashplayer: "scripts/mediaplayer-5.5-licensed/player.swf",
playlist: [
{ duration: 539, file: "https://s3.amazonaws.com/OrganoGoldMedia/og2011.flv", image: "https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg" },
{ duration: 250, file: "https://s3.amazonaws.com/OrganoGoldMedia/og_xmas2.mov", image: "https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg" },
{ duration: 57, file: "https://s3.amazonaws.com/OrganoGoldMedia/2011+-+Florida+Convention+Promo.m4v", image: "https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg" }
],
"playlist.position": "left",
"playlist.size": 200,
//file: "https://s3.amazonaws.com/OrganoGoldMedia/Danny+Glover+WPTV+Interview.flv",
//height: 325,
height: 415,
//width: 755,
width: 830,
skin: "scripts/mediaplayer-5.5-licensed/glow.zip"
});