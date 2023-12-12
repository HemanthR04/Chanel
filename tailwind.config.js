/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        BlackBG:"#121212",
        Offwhite:"#FFFFF3"
      },
      textColor:{
        Offwhite:"#FFFFF3"
      },
      fontFamily:{
        GeneralSans:"General Sans",
        Pencerio:"Pencerio"
      }
    },
  },
  plugins: [],
}

