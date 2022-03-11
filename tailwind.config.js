const plugin = require("tailwindcss/plugin");

const shapeRendering = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".shape-auto": {
      "shape-rendering": "auto",
    },
    ".shape-optimize-speed": {
      "shape-rendering": "optimizeSpeed",
    },
    ".shape-crisp-edges": {
      "shape-rendering": "crispEdges",
    },
    ".shape-geometric-precision": {
      "shape-rendering": "geometricPrecision",
    },
  };

  addUtilities(newUtilities);
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-gold": "#EACD67",
        "hover-black": "#000000",
      },
      fontFamily: {
        "body-header": ["DM Sans"],
      },
      width: {
        "lg-container": "1440px",
      },
    },
  },
  plugins: [shapeRendering],
};
