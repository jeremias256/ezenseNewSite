/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundBlendMode: {
        luminosity: "luminosity",
      },
      colors: {
        greyBlack: "#4D4F61",
        white: "#fff",
        callToAction: "#ff3d00",
        background: "#ECEAE5",
        white50: "rgba(255, 255, 255, 0.50)",
        bgGris: "rgba(236, 234, 229, 0.9)",
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
      sm: "440px",
      md: "768px",
      lg: "1024px",
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
