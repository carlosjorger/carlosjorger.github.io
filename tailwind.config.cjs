/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			fontSize: {
				'4.5xl': [
					'2.5rem',
					{
						lineHeight: '2.8rem',
						letterSpacing: '-0.01em',
						fontWeight: '500',
					},
				],
				'4.75xl': [
					'2.8rem',
					{
						lineHeight: '2.8rem',
						letterSpacing: '-0.01em',
						fontWeight: '500',
					},
				],
			},
			backgroundImage: {
				portfolio: "url('/images/Portfolio.webp')",
				rustycopier: "url('/images/Rustycopier.webp')",
				cuvimakerExample: "url('/images/Cuvimaker-example.webp')",
				placeholder: "url('/images/640x360.webp')",
				vuefluiddnd: "url('/images/VueFluidDnD.webp')",
			},
			typography: ({ theme }) => ({
				custom: {
					css: {
						'--tw-prose-headings': 'var(--default-font-color)',
						'--tw-prose-bold': theme('colors.teal[200]'),
						'--tw-prose-code': theme('colors.teal[100]'),
						'--tw-prose-links':
							'var(--default-secundary-font-color)',
						'--tw-prose-body': 'var(--default-font-color)',
					},
				},
			}),
		},
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
		},
		keyframes: {
			'show-presentation': {
				'0%': {
					opacity: 0,
					transform: 'translate(0px, -10px)',
				},
			},
		},
		animation: {
			'presentation-title': '500ms show-presentation ease',
			'presentation-main-skill':
				'500ms ease 200ms forwards show-presentation',
			'presentation-description':
				'500ms ease 400ms forwards show-presentation',
		},
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
};
