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
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
      // Create a new border style called debug which has orange dashed borders
      // This is useful for debugging layouts
      borderStyle: {
        debug: "dashed",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
