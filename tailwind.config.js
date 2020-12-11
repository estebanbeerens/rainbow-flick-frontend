const baseColors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    colors: {
      red: baseColors.red,
      green: baseColors.green,
      blue: baseColors.blue,
      gray: baseColors.gray,
      pink: baseColors.pink,
      cyan: baseColors.cyan,
      yellow: baseColors.yellow,
      white: baseColors.white,
      black: baseColors.black,
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
