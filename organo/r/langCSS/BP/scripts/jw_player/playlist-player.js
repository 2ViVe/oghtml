jwplayer('container').setup({
    'flashplayer': '/langCSS/EN/scripts/jw_player/player-licensed.swf',
    'id': 'playerID',
    'height': '415',
	'width': '750',
    'skin': '/langCSS/EN/scripts/jw_player/glow.zip',
    'playlist.position': 'left',
    'playlist.size': '210',
    'playlist': [
        {
           'file': 'https://s3.amazonaws.com/OrganoGoldMedia/og2011.flv',
           'title': 'Organo Gold Music Video',
		 'image': 'https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg'
        },
	   {
           'file': 'https://s3.amazonaws.com/OrganoGoldMedia/og_xmas2.mov',
           'title': 'Organo Gold Christmas',
		 'image': 'https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg'
        },
	   {
           'file': 'https://s3.amazonaws.com/OrganoGoldMedia/2011+-+Florida+Convention+Promo.m4v',
           'title': 'Organo Gold 2011 Convention Promo',
		 'image': 'https://s3.amazonaws.com/OrganoGoldMedia/og2011.jpg'
        }
    ]
  });