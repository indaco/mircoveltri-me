const config = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xxs: '320px',
				xs: '475px'
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				display: ['Roboto', 'sans-serif'],
				body: ['Roboto', 'sans-serif']
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#333',
						h1: {
							fontWeight: '300'
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
