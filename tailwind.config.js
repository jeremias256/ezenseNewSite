/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        greyBlack: "#4A4C58",
        white: "#fff",
        callToAction: "#ff3d00",
        background: "#ECEAE5",
        white50: "rgba(255, 255, 255, 0.50)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      // => @media (min-width: XXXpx) { ... }
    },
  },
  plugins: [],
};
