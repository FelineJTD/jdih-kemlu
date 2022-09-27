/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'neutral': {
          '50': '#FBFBFA',
          '100': '#F4F3F1',
          '200': '#E2E1DF',
          '300': '#C3C3BF',
          '400': '#B4B2AF',
          '500': '#777574',
          '600': '#4F4C4A',
          '700': '#353432',
          '800': '#232221',
          '900': '#161514',
        },
        'primary': { // blue
          '0': '#EBEBEA',
          '50': '#C8CEE2',
          '100': '#A9BBDA',
          '200': '#7DA2CF',
          '300': '#5A8EC0',
          '400': '#4178AD',
          '500': '#2D5D95',
          '600': '#1B3E79',
          '700': '#0D265A',
        },
        'secondary': { // yellow
          '50': '#FDF6DD',
          '100': '#FBEDBA',
          '200': '#FAE188',
          '300': '#FCD754',
          '400': '#FFCE1E',
          '500': '#C1822D',
          '600': '#A0711A',
          '700': '#734C15',
        },
        'berlaku': '#C4A13B',
        'tidak-berlaku': '#B33A2A',
        'mencabut-sebagian': '#3388FF',
        'dicabut-sebagian': '#F699CD',
        'mencabut': '#819F29',
        'dicabut': '#B33A2A',
        'mengubah': '#36A5B2',
        'diubah': '#FF6600',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 24s linear infinite',
      }
    },
  },
  plugins: [],
}
