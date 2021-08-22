const colors = require('tailwindcss/colors');

const contentDir = __dirname + '/../../../../content/';
const themesDir = __dirname + '/../../../';

module.exports = {
  purge: [
    themesDir + 'layouts/**/*.html',
    contentDir + 'content/**/*.md',
    contentDir + 'content/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '475px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              fontWeight: '300',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
