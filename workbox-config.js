module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,js,json,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};