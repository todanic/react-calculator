/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6D2B',
        hover: '#ff6a00'
      },
      dark: {
        bg: '#1A202C',
        text: '#fff'
        // Define your other dark mode colors
      },
      boxShadow: {
        glow: '0 0 10px #ff8c00, inset 0 0 10px #ff8c00'
      },
      letterSpacing: {
        2: '2px'
      }
    }
  },
  plugins: []
};
