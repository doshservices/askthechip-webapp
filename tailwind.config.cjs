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
    extend: {},
  },
  plugins: [],
}
