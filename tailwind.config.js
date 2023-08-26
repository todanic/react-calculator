/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff8c00' // Define your neon green color
      },
      dark: {
        bg: '#1A202C',
        text: '#fff'
        // Define your other dark mode colors
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
