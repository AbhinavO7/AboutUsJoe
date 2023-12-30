/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'cocktail': "url('./Assets/cocktail1.png')",
        'wp': "url('./Assets/wp.jpg')",
      }
    },
  },
  plugins: [],
}

