/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardinal: "#5a0f1cff",
        charcoal: "#333333",
        lightgray: "#f5f5f5ac",
      },
    },
  },
  plugins: [],
}
