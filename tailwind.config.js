/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
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

