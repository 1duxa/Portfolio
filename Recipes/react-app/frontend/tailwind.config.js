/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
  
  theme: {
   
    
    extend: {
       colors: {
      "blueNav": {
        50: "#EAE3FD",
        100: "#D3C9F7",
        200: "#A095EA",
        300: "#6F6AD8",
        400: "#3E42C1",
        500: "#394286",
        600: "#252874",
        700: "#1C185D",
        800: "#140D40",
        900: "#0C0524",
        950: "#070113"
      }
    },
  }
},
  plugins: [],
}

