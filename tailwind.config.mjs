/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#243c5a',
				'primary-light': '#3064D4',
			},
			screens: {
				'lgn': '1150px',
			}
		},
	},
	plugins: [],
}
