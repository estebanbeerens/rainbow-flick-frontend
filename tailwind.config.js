const baseColors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    colors: {
      ...baseColors,
      primary: {
        light: '#55db93',
        DEFAULT: '#1d8b50',
        dark: '#125a34'
      },
      secondary: {
        light: '#27d7dd',
        DEFAULT: '#189599',
        dark: '#0d5154'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
