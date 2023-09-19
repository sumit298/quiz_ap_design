/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7A58E6",
        darkPurple: "#603BD4"
      }
    },
  },
  plugins: [],
}