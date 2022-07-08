/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jsans: ['JosefinSans', 'sans-serif'],
        jslab: ['JosefinSlab']
      }
    },
  },
  plugins: [],
}
