jwplayer('container').setup({
    'flashplayer': '/langCSS/CH/scripts/jw_player/player-licensed.swf',
    'id': 'playerID',
    'height': '435',
	'width': '750',
    'skin': '/langCSS/CH/scripts/jw_player/glow.zip',
    'playlist.position': 'left',
    'playlist.size': '200',
    'playlist': [
        {
           'file': 'https://s3.amazonaws.com/OrganoGoldMedia/OrganoGold.com/OG+COMP+v2_SD.flv',
           'title': 'Organo Gold Music Video',
		 'image': 'https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg'
        },
	   {
           'file': 'https://s3.amazonaws.com/OrganoGoldMedia/OrganoGold.com/OG+OPP+v3_SD.flv',
           'title': 'Organo Gold Christmas',
		 'image': 'https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg'
        }
    ]
  });