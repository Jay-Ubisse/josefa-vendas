/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    extend: {
      colors: {
        'app-green': {
          100: '#8cb369',
        },
        'app-yellow': {
          100: '#f4e285',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

