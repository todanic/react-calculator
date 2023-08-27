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
        light: 'rgba(50, 50, 93, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.3) 0px 10px 10px',
        dark: 'rgba(255, 109, 43, 0.25) 0px 10px 50px;'
      },
      letterSpacing: {
        2: '2px'
      }
    }
  },
  plugins: []
};
