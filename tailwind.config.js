/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        "prussian-blue": {
          50: "#e8eaef",
          100: "#c1c7d4",
          200: "#9aa3b9",
          300: "#73809e",
          400: "#4c5c83",
          500: "#253868",
          600: "#14213d", //  original color
          700: "#0f1930",
          800: "#0a1223",
          900: "#050916",
        },
        "cayenne-red": {
          50: "#fde8db",
          100: "#fbc5a7",
          200: "#f9a273",
          300: "#f77f3f",
          400: "#f55c0b",
          500: "#e85d04", // Your original color
          600: "#c44e03",
          700: "#a03f03",
          800: "#7c3002",
          900: "#582101",
        },
        "pumpkin-spice": {
          50: "#fff2e8",
          100: "#fedcc1",
          200: "#fec69a",
          300: "#fdaf73",
          400: "#fd994c",
          500: "#fc8236", // Your original color
          600: "#e06e2a",
          700: "#c45a1e",
          800: "#a84612",
          900: "#8c3206",
        },
        orange: {
          50: "#fff5e6",
          100: "#fee4bd",
          200: "#fdd394",
          300: "#fcc26b",
          400: "#fbb142",
          500: "#fca311", // Your original color
          600: "#e08c0a",
          700: "#c47507",
          800: "#a85e04",
          900: "#8c4701",
        },
        "sunflower-gold": {
          50: "#fffcf5",
          100: "#fef5e0",
          200: "#fdeecb",
          300: "#fce7b6",
          400: "#fbe0a1",
          500: "#fec872", // Your original color
          600: "#e2af60",
          700: "#c6964e",
          800: "#aa7d3c",
          900: "#8e642a",
        },
        "alabaster-grey": {
          50: "#fdfdfd",
          100: "#f8f8f8",
          200: "#f3f3f3",
          300: "#eeeeee",
          400: "#e9e9e9",
          500: "#e5e5e5", // Your original color
          600: "#cccccc",
          700: "#b3b3b3",
          800: "#999999",
          900: "#808080",
        },
      },
    },
  },
  plugins: [],
};
