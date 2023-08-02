/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'enter-image': 'enter 2s ease-in-out 1',
        'enter-hero-text': 'enterHeroText 3s ease-in-out 1',
        'enter-text': 'enter 3s ease-in-out 1 , enterHeroText 3s ease-in 1',
        'enter-text-second':
          'enter 4s ease-in-out 1 , enterHeroText 4s ease-in 1',
      },
      keyframes: {
        enter: {
          '0%': {
            transform: 'translateX(150%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        enterHeroText: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      boxShadow: {
        neo: '3px 3px 0px 0px #000000',
        neoProduct: '4px 4px 0px 0px #000',
        neoHover: '4px 4px #000000',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        kufam: ['Kufam', 'sans-serif'],
      },
    },
  },
};
