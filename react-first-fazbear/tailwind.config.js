/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        "secondary": colors.lightBlue,
      }
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
}

