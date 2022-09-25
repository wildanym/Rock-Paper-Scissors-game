/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			barlow: ["Barlow Semi Condensed", "sans-serif"],
		},
		extend: {
			keyframes: {
				sonar: {
					0: {
						transform: "scale(0)",
						// opacity: "0",
					},
					"75%": {
						transform: "scale(1.2)",
						// opacity: "0",
					},
					"100%": {
						transform: "scale(1.2)",
						opacity: "0",
					},
				},
			},
			animation: {
				"sonar-effect": "sonar 1.5s linear infinite",
			},
			colors: {
				hOutline: "hsl(217, 16%, 45%)",
				score: "hsl(229, 64%, 46%)",
				darkText: "hsl(229, 25%, 31%)",
				blue: "radial-gradient(rgba(31, 55, 86, 1), rgba(20, 21, 57, 1))",
			},
			backgroundImage: {
				"bg-triangle": "url('/src/assets/images/bg-triangle.svg')",
			},
		},
	},
	plugins: [],
};
