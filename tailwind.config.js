const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors,
    },
    colors:{
        navy:{
          DEFAULT: "#313848",
          lightest:"#BCBFC1",
          lighter:"#A5A9AD",
          light:"#8F9499",
          base:"#797F84",
          dark:"#626970",
          darker:"#4C545B",
          darkest:"#363F47"
        },
        custGrey:{
          DEFAULT: "#EDEDEE"
        },
        maths: {
          DEFAULT: "#EA7052"
        },
        physics: {
          DEFAULT: "#898DDC"
        },
        chemistry: {
          DEFAULT: "#FCA964"
        },
        biology: {
          DEFAULT: "#68BC98"
        },
        english: {
          DEFAULT: "#506AAC"
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-overlay': {
          'background': 'linear-gradient(var(--overlay-angle, 0deg), var(--overlay-colors)), var(--overlay-image)',
          'background-position': 'center',
          'background-size': 'cover',
        },
      });
    }),
  ],
}
