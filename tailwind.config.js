/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        greyBlack: "#4D4F61",
        white: "#fff",
        callToAction: "#ff3d00",
        background: "#ECEAE5",
        white50: "rgba(255, 255, 255, 0.50)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "opacity-gradient":
          "linear-gradient(to bottom, rgba(236, 234, 229, 0), rgba(236, 234, 229, var(--tw-bg-opacity)))",
      },
      borderRadius: {
        "custom-br555": "555px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
