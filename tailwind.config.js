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
        "custom-gradient":
          "linear-gradient(180deg, #fff 10.97%, rgba(255, 255, 255, 0) 53.45%)",
      },
      borderRadius: {
        "custom-br555": "555px",
      },
    },
    screens: {
      sm: "440px",
      md: "768px",
      ml:"840px",
      "2ml":"945px",
      lg: "1024px",
      "2lg":"1090px",
      xl: "1280px",
      "1.5xl":"1440px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
