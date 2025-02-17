/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",  // If you are using HTML
      "./src/**/*.{js,ts,jsx,tsx}", // For React/TypeScript components
    ],
    theme: {
      extend: {
        fontFamily: {
          'nunito': ['Nunito Sans', 'sans-serif'],
          'notosans': ['Noto Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }