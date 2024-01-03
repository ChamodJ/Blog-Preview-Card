/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bac-yellow' : 'hsl(47, 88%, 63%)',
      },

      fontFamily : {
        'Figtree': ['Figtree']
      },

      screens: {
        xs: {'max': "480px"},
      },
    },
  },
  plugins: [],
}

