/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "768px",
      lg: "1163px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        shake: {
          "10%": { transform: "rotate(15deg)" },
          "20%": { transform: "rotate(-15deg)" },
          "30%": { transform: "rotate(15deg)" },
          "40%": { transform: "rotate(-15deg)" },
        },
      },
      animation: {
        shake: "shake 0.25s ease-in-out",
      },
    },
  },
  plugins: [],
};
