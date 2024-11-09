/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#0f0f0f',
        dark: '#0a0a0a',
        primary: '#00ffa8',
        secondary: '#0582fc',
        info: '#af00ca',
        accent1: '#b071fe',
        accent2: '#da1759',
        accent3: '#f89432',
        success: '#00bd30',
        warning: '#fcca00',
        danger: '#fe0047',
      },
      fontFamily: {
        sans: ['Albert Sans', 'sans-serif'],
        display: ['Mouzambik', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(90deg, #00ffa8, #0582fc, #af00ca)',
      },
    },
  },
  plugins: [],
};
