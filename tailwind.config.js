/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        mod: ' #eaeff2',
        alpha: ' #839796',
        accent: ' #515d5b', 
      }
    },
  },
  plugins: [],
}

