// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",      // AR Fitness red
        "primary-dark": "#A62834", // darker red for hover
        secondary: "#000000",    // black background
        accent: "#FCFCFC"        // near-white text
      }
    }
  },
  plugins: []
};
