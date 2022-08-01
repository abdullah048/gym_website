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
			lg: "1024px",
			xl: "1310px",
		},
		extend: {},
	},
	plugins: [],
};
