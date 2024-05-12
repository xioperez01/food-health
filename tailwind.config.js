/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F85900",
        softOrange: "#F8C100",
        lightOrange: "#FFB74B",
        secondary: "#B9B9B9",
        softGrey: "#CACACA",
        lightGrey: "#EEEEEE",
      },
      backgroundImage: {
        gradient_sideBar: "linear-gradient(#F85900 5%, #FECB47)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
