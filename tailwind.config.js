/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'menu': 'rgb(254 96 25)',
        'body': '#fafafa',
      },
      keyframes: {
        'shadow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(254, 96, 25, 0.5)' },
          '50%': { boxShadow: '0 0 0 20px rgba(254, 96, 25, 0)' },
        },
        'shadow-pulse-2': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(254, 96, 25, 0.5)' },
          '50%': { boxShadow: '0 0 0 10px rgba(254, 96, 25, 0)' },
        },
      },
      animation: {
        'shadow-pulse': 'shadow-pulse 1.5s infinite',
        'shadow-pulse-2': 'shadow-pulse-2 1.4s infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
