// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",      // your AR Fitness red
        "primary-dark": "#A62834", // slightly darker for hover states
        secondary: "#000000",    // true black
        background: "#111111",   // very dark gray for pages
        accent: "#FCFCFC"        // near-white for text on black
      }
    }
  },
  plugins: []
};
