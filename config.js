module.exports = {

//"Fake bot" is a testing mode, it doesn't connect to any irc server
//instead, it uses a command line interface to simulate a server.
//Commands in the interface (without any prefix like /) are:
//quit, pm [text], [just text]
useFakeBot: true,

channel: '#reddit',
nick: 'mitzy-bot',
userName: 'username-goes-here',
password: 'password-goes-here',
network: 'chat.freenode.net',

datadir: './data',
ignoreBots: [ 'rbarrybot' ],

commands: [
	'seen',
	'sayshit',
	'timezone',
	'subreddit',
	'source',
	'stats11'
],

rateLimit: {
	'global': [{'interval': 5, 'messages': 10}, {'interval': 60, 'messages': 30}],
	'perUser': [{'interval': 5, 'messages': 5}, {'interval': 60, 'messages': 10}]
},

commandConfig: {
	sayshit: {
		data: [
			{ 'regex': /html5/i, 'probability': (1/5), 'shit': [
				'HTML5 programming! And cloud technologies!',
				'The world would be so much nicer if there was more HTML5 programming.'
			]},
			{ 'regex': /fedora/i, 'probability': (1/10), 'shit': [
				'dae le fedora redditors?'
			]}
		]
	},

	source: {
		url: 'https://github.com/peterholak/mitzy-bot'
	}
}

};