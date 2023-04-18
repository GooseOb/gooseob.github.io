/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				primary: {
					dark: colors.purple['800'],
					light: colors.purple['800']
				},
				secondary: {
					dark: colors.gray['800'],
					light: colors.orange['200']
				},
				hoversecondary: {
					dark: colors.gray['700'],
					light: colors.orange['300']
				},
				neutral: {
					dark: colors.black,
					light: colors.yellow['50']
				},
				link: {
					dark: colors.blue['300'],
					light: colors.green['700']
				},
				hoverlink: {
					dark: colors.purple['300'],
					light: colors.red['600']
				}
			}
		}
	},
	plugins: []
};
