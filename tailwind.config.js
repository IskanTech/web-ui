/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], // Roboto for sans-serif fonts
      serif: ['Montserrat', 'serif'], // Montserrat for serif fonts
      mono: ['"Fira Code"', 'monospace'], // Fira Code for monospaced fonts
    },
    extend: {
      fontFamily: {
        playwriteFont: ['"Playwrite DE Grund"', 'cursive'],
        // Add more custom font families as needed
      },
      colors: {
        'mainViolet': '#382F9C' 
      },
      boxShadow: {
        'top': '0 -12px 30px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

