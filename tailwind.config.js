/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08081B",
        secondary: "#808080",
        white: "#ffffff",
        black: "#000000",
        gray: "#808080",
        lightgray: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
