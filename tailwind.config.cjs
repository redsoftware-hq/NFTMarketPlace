/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"work-sans": ["Work Sans", "sans-serif"],
				"space-mono": ["Space Mono", "monospace", "sans-serif"],
			},
		},
	},
	plugins: [],
};
