/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#4FD6C4',
      'secondary': '#021B38',
      'tertiary': '#09CEB4',
      'white': '#ffffff',
      'smoke': '#F7F9FA',
      'transparent': '#ffffff00'
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'OpenSans': ['Open Sans', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      'handBulb': "url(./assets/images/hand-bulb.svg)"
    },
    screens: {
      'xs': '576px',
      // => @media (min-width: 640px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'xm': '990px',
      // => @media (min-width: 1024px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
