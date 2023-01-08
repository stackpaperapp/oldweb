/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter Tight", "sans-serif"],
      serif: ["Geo", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
