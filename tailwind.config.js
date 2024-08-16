/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'llg' : '1440px',
        'dlg' : '1600px',
      }
    },
  },
  plugins: [],
}