/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				titulos: ['"Bevan"', 'serif'],
				textos: ['"Outfit"', 'serif'],
			},
			borderWidth: {
				'1': '0.5px',
			},
			fontSize: {
				'1.2xl': '1.25rem',
				'1xl': '1rem',
			},
		},
	},
	plugins: [],
}
