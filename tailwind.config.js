/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#0E0D0D",
          peach: "#DCC6B6",
          white: "#FFFFFF",
        },
        secondary: {
          1: "#0E0D0D",
          2: "#F4EFEB",
        },
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(10rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in": "slideIn 0.8s ease-out",
      },
      fontFamily: {
        georgianBold: ["BPG Banner Caps", "sans-serif"],
      },
    },
  },
  plugins: [],
};

