const baseColors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    colors: {
      ...baseColors,
      primary: '#1D8B50',
      secondary: '#bf9c03'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
