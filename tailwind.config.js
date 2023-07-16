/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,svelte,ts}", "./lib/src/**/*.{svelte,ts}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "white",
				black: "black",
				primary: "#FF3C00"
			}
		}
	},
	plugins: []
}
