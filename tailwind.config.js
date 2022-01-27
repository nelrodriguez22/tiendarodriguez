module.exports = {
	content: [
		"./src/**/*.{html,js,jsx}",
		"./components/**/*.{html,js,jsx}",
		"./public/index.html"
	],
	theme: {
		extend: {
			height: theme => ({
				'screen/1': 'calc(100vh / 10)',
				'screen/2': 'calc(100vh / 2)',
				'screen/3': 'calc(100vh / 3)',
				'screen/4': 'calc(100vh / 4)',
				'screen/5': 'calc(100vh / 5)',
				'screen/6': 'calc(100vh / 6)',
				'screen/7': 'calc(100vh / 7)',
				'screen/8': 'calc(100vh / 8)',
				'screen/9': 'calc(100vh / 9)'

			})
		}
	},
	variants: {},
	plugins: [
	],
};
