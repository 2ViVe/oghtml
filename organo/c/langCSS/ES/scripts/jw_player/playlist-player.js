jwplayer('container').setup({
    'flashplayer': '/c/langCSS/ES/scripts/jw_player/player-licensed.swf',
    'id': 'playerID',
    'height': '435',
	'width': '750',
    'skin': '/c/langCSS/ES/scripts/jw_player/glow.zip',
    'playlist.position': 'left',
    'playlist.size': '210',
    'playlist': [
        {
           'file': 'https://s3.amazonaws.com/OrganoGoldMedia/OrganoGold.com/OG+COMP+v2_SD.flv',
           'title': 'OG COMP',
		 'image': 'https://s3.amazonaws.com/OrganoGoldMedia/OrganoGold.com/OG+COMP+v2_SD.jpg'
        },
	   {
           'file': 'https://s3.amazonaws.com/OrganoGoldMedia/OrganoGold.com/OG+OPP+v3_SD.flv',
           'title': 'OG OPP',
		 'image': 'https://s3.amazonaws.com/OrganoGoldMedia/OrganoGold.com/OG+OPP+v3_SD.jpg'
        }
    ]
  });