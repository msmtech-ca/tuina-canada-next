import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#00C894',
                    50: '#C5FFF0',
                    100: '#AFFFEA',
                    200: '#81FFDE',
                    300: '#53FFD2',
                    400: '#25FFC6',
                    500: '#00F6B6',
                    600: '#00C894',
                    700: '#009A72',
                    800: '#006C50',
                    900: '#003E2E',
                    950: '#00271D'
                },
                'secondary': {
                    DEFAULT: '#FFE3F1',
                    50: '#FFFAFC',
                    100: '#FFE3F1',
                    200: '#FFB5DA',
                    300: '#FF87C3',
                    400: '#FF59AC',
                    500: '#FF2B95',
                    600: '#FC007E',
                    700: '#CF0067',
                    800: '#A10050',
                    900: '#730039',
                    950: '#5C002E'
                },
                'tertiary': {
                    DEFAULT: '#CECBFF',
                    50: '#E4E2FF',
                    100: '#CECBFF',
                    200: '#A39DFF',
                    300: '#776FFF',
                    400: '#4C41FF',
                    500: '#2113FF',
                    600: '#0D00E4',
                    700: '#0B00B7',
                    800: '#080089',
                    900: '#05005B',
                    950: '#040044'
                },
                'neutral': {
                    DEFAULT: '#252122',
                    50: '#FCFCFC',
                    100: '#F0EEEF',
                    200: '#D8D3D4',
                    300: '#C0B8BA',
                    400: '#A89DA0',
                    500: '#908286',
                    600: '#76696C',
                    700: '#5B5154',
                    800: '#40393B',
                    900: '#252122',
                    950: '#181516'
                },
            },
            fontFamily: {
                'sans': ['var(--font-mukta)', ...defaultTheme.fontFamily.sans],
                'serif': ['var(--font-gentium)', ...defaultTheme.fontFamily.serif],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config
