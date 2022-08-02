/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		screens: {
			xs: "320px",
			sm: "540px",
			md: "768px",
			lg: "1163px",
			xl: "1440px",
		},
		extend: {},
	},
	plugins: [],
};
