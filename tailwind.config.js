/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3434EF',
        'secondary': '#120F11',
        'semiwhite': '#E7E7FF'
      }
    },
  },
  plugins: [],
}
