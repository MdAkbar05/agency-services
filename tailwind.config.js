/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "620px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#08081B",
        borderColor: "#6D95FC",
        secondary: "#808080",
        hoverColor: "#33a86d",
        black: "#000000",
        gray: "#808080",
        lightgray: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
