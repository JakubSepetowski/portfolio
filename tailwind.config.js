/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors:{
				"my-purple":"#5b27e7"
			}
		},
	},
	plugins: [],
};
