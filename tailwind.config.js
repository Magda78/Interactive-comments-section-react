/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		colors: {
			background: '#F5F6FA',
			'component-background': '#ffffff',
			'dark-blue': '#334253',
			'grayish-blue': '#67727E',
			'light-grayish-blue': '#C5C6EF',
			'moderate-blue': '#5357B6',
			'very-light-gray': '#F5F6FA'
		},
		fontFamily: {
			Rubik: [ 'Rubik' ]
		},
		extend: {}
	},
	plugins: []
};
