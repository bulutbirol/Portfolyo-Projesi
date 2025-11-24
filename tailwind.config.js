/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4731D3',
        secondary: '#CBF281',
        'dark-bg': '#252128',
        'dark-footer': '#141414',
        'dark-text': '#D9D9D9',
        'dark-heading': '#FFFFFF',
        'dark-card': '#2D2D2D', 
        light: '#F9F9F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}