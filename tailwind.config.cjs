/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#068978',
      'primary110': '#022924',
      'primary100': '#03453C',
      'primary90': '#05675A',
      'primary80': '#068978',
      'primary60': '#09CEB4',
      'secondary': '#022924',
      'tertiary': '#068978',
      'white': '#ffffff',
      'smoke': '#F7F9FA',
      'dark': '#0A1E25',
      'dark2D': '#2d2d2d',
      'light': '#f8f8f8',
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
    extend: {
      gridColumn: {
        'span-3': 'span 3 / span 3',
        'span-5': 'span 5 / span 5',
        'span-7': 'span 7 / span 7',
        'span-14': 'span 14 / span 14',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
      },
      gridTemplateColumns: {
        '6': 'repeat(6, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
