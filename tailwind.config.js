/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'menu': 'rgb(254 96 25)',
        'body': '#fafafa',
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}