/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6D2B',
        hover: '#ff6a00',
        themeBg: '#303136'
      },
      dark: {
        bg: '#1A202C',
        text: '#fff'
        // Define your other dark mode colors
      },
      boxShadow: {
        light: 'rgba(50, 50, 93, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.3) 0px 10px 10px',
        dark: 'rgba(255, 109, 43, 0.25) 0px 10px 50px;',
        elements: 'inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #2E3746, 0 1px 0 #2E3746;',
        moon: 'inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb'
      },
      letterSpacing: {
        2: '2px'
      }
    }
  },
  plugins: []
};
