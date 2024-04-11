/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'lightBlue': "#0066FF",
        'offWhite': "#F4F4F4"
      },
      width: {
        '700': '700px'
      },
      padding: {
        '450': '300px'
      },
      height: {
        '1210': '1210px',
        '930': '930px',
        '760': '760px'
      }
    },
  },
  plugins: [],
}

