// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'table-orange': '#7F2609',
        'button-gray':'#191D24'
      },
      screens: {
        'xs': '475px',
        // ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
