/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
	darkMode: 'class',
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
					dark: colors.purple['950'],
					light: colors.purple['900']
				},
				secondary: {
					dark: colors.zinc['900'],
					light: colors.white
				},
				hoversecondary: {
					dark: colors.zinc['800'],
					light: colors.violet['100']
				},
				neutral: {
					dark: colors.zinc['950'],
					light: colors.slate['50']
				},
				link: {
					dark: colors.purple['300'],
					light: colors.purple['700']
				},
				hoverlink: {
					dark: colors.purple['200'],
					light: colors.purple['900']
				}
			}
		}
	},
	plugins: []
};
