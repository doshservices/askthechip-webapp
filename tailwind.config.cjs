/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#068978',
      'primary110': '#022924',
      'primary90': '#05675A',
      'primary80': '#068978',
      'secondary': '#022924',
      'tertiary': '#09CEB4',
      'white': '#ffffff',
      'smoke': '#F7F9FA',
      'dark': '#0A1E25',
      'transparent': '#ffffff00'
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'OpenSans': ['Open Sans', 'sans-serif'],
      'Raleway': ['Raleway', 'sans-serif'],
      'DMSans': ['DM Sans', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      'handBulb': "url(./assets/images/hand-bulb.svg)",
      'foundersConnect': "url(./assets/images/founders_connect.jpg)",
      'authImage': "url(./assets/images/auth-image.png)",
      'dottedRectangle': "url(./assets/icons/dotted-rectangles.svg)"
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
