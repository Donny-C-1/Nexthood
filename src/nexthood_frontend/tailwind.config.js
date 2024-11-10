/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF"
      }, 
      fontFamily: {
        "logo": '"Sixtyfour", sans-serif;'
      }
    },
  },
  plugins: [],
};
