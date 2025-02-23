/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",  // If you are using HTML
      "./src/**/*.{js,ts,jsx,tsx}", // For React/TypeScript components
    ],
    theme: {
      extend: {
        fontFamily: {
          notosans: ['NotoSans', 'sans-serif'],
          titanone: ['TitanOne', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }