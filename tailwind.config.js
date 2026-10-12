/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        cream: '#fbf7f2',
      },
      colors: {
        gold: {
          50: '#fbf8f0',
          100: '#f7f0db',
          200: '#efe0b5',
          300: '#e4ca83',
          400: '#d4af5a',
          500: '#c49a3d',
          600: '#a87d30',
          700: '#85612a',
          800: '#6b4d27',
          900: '#5a4022',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#57534e',
          600: '#44403c',
          700: '#292524',
          800: '#1c1917',
          900: '#0c0a09',
        },
        blush: {
          50: '#fdf6f3',
          100: '#fbeae3',
          200: '#f6d2c5',
          300: '#edb09b',
          400: '#e08a6f',
          500: '#d06a4f',
          600: '#bb5238',
          700: '#9c4029',
          800: '#7e3422',
          900: '#682c1c',
        },
        sage: {
          50: '#f5f7f4',
          100: '#e8ede5',
          200: '#cdd8c8',
          300: '#a5b99e',
          400: '#7d9774',
          500: '#5e7b53',
          600: '#4a6341',
          700: '#3b4f34',
          800: '#31412c',
          900: '#293525',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
