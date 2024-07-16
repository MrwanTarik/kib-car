/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      fontFamily: {
        primary: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: "#1D1A1A",
        secondary: "#8D94AD",
        link: "#4C88F9",
        red: "#CA1016",
        green: "#7ED321",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        car: "url('src/assets/images/car-temp.jpg')",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
      },
    },
    fontSize: {
      sm: ["14px", "24px"],
      base: ["16px", "21px"],
      lg: ["18px", "28px"],
      xl: ["26px", "32px"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
