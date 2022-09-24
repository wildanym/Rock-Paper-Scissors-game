/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			barlow: ["Barlow Semi Condensed", "sans-serif"],
		},
		extend: {
			colors: {
				hOutline: "hsl(217, 16%, 45%)",
				score: "hsl(229, 64%, 46%)",
				darkText: "hsl(229, 25%, 31%)",
			},
			backgroundImage: {
				"bg-triangle": "url('/src/assets/images/bg-triangle.svg')",
			},
		},
	},
	plugins: [],
};
