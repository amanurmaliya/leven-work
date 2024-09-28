/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#fff",
        "secondary" : "#00012b",
        "backcolor" : "#141212",
        "specialColor": "#ff0ff2"
      },
      fontFamily: {
        
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

